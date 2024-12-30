import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import { HolderOutlined } from "@ant-design/icons";
import { DndContext } from "@dnd-kit/core";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Button, Form, Input, Popconfirm, Table } from "antd";
import type { InputRef, TableProps } from "antd";
import type { DragEndEvent, SyntheticListenerMap } from "@dnd-kit/core";
import { defaultData } from "./data";

const { TextArea } = Input;

// Row context for drag handle
interface RowContextProps {
  setActivatorNodeRef?: (element: HTMLElement | null) => void;
  listeners?: SyntheticListenerMap;
}
const RowContext = React.createContext<RowContextProps>({});

// Editable context for cell editing
const EditableContext = React.createContext<FormInstance<any> | null>(null);

interface DataType {
  key: string;
  name: string;
  age: string;
  address: string;
}

interface RowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  "data-row-key": string;
}

// Drag handle component
const DragHandle: React.FC = () => {
  const { setActivatorNodeRef, listeners } = useContext(RowContext);
  return (
    <Button
      type="text"
      size="small"
      icon={<HolderOutlined />}
      style={{ cursor: "move" }}
      ref={setActivatorNodeRef}
      {...listeners}
    />
  );
};

// Editable cell component
const EditableCell: React.FC<React.PropsWithChildren<any>> = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef<InputRef>(null);
  const form = useContext(EditableContext)!;

  useEffect(() => {
    if (editing) {
      inputRef.current?.focus();
    }
  }, [editing]);

  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({ [dataIndex]: record[dataIndex] });
  };

  const evaluateArray = (array: string[]) => {
    const result = array.reduce((acc, item) => {
      return item || acc; // 如果 item 是假值，返回上一个 accumulator
    }, "");

    return result;
  };

  const save = async () => {
    try {
      const values = await form.validateFields();
      toggleEdit();
      handleSave({ ...record, ...values });
    } catch (errInfo) {
      console.log("Save failed:", errInfo);
    }
  };

  let childNode = children;

  const res = evaluateArray(children);

  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{ margin: 0 }}
        name={dataIndex}
        // rules={[{ required: true, message: `请输入内容` }]}
      >
        <TextArea
          autoSize
          ref={inputRef}
          onPressEnter={save}
          onBlur={save}
          placeholder="请输入"
        />
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        onClick={toggleEdit}
      >
        {res ? children : <span style={{ color: "#BCC0CC" }}>请填写</span>}
      </div>
    );
  }

  return <td {...restProps}>{childNode}</td>;
};

// Sortable row component with drag functionality
const SortableRow: React.FC<RowProps> = (props) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    setActivatorNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: props["data-row-key"] });
  const [form] = Form.useForm();

  const style: React.CSSProperties = {
    ...props.style,
    transform: CSS.Translate.toString(transform),
    transition,
    ...(isDragging ? { position: "relative", zIndex: 9999 } : {}),
  };

  const contextValue = useMemo<RowContextProps>(
    () => ({ setActivatorNodeRef, listeners }),
    [setActivatorNodeRef, listeners]
  );

  return (
    <Form form={form} component={false}>
      <RowContext.Provider value={contextValue}>
        <EditableContext.Provider value={form}>
          <tr {...props} ref={setNodeRef} style={style} {...attributes} />
        </EditableContext.Provider>
      </RowContext.Provider>
    </Form>
  );
};

const formatData = (tableData: any) => {
  const header = tableData[0]; // 第一行作为表头
  const data = tableData.slice(1).map((row, index) => ({
    key: index.toString(),
    ...header.reduce((acc, col, i) => ({ ...acc, [col]: row[i] }), {}),
  }));
  return [header, data];
};

// Main component
const App: React.FC = () => {
  const [tableData, setTableData] = useState(defaultData); // 后端数据
  const [header, defaultDataSource] = formatData(tableData); // 处理之后的表格数据

  const [dataSource, setDataSource] = useState<DataType[]>(defaultDataSource);

  const handleDelete = (key: React.Key) => {
    const newData = dataSource.filter((item) => item.key !== key);
    setDataSource(newData);
  };

  const handleAdd = () => {
    const newKey = (Math.random() + "").slice(10); // 新行的key-可能有重复，概率极低
    const newData: DataType = {
      key: newKey,
      ...header.reduce((acc: any, item: string) => {
        acc[item] = "";
        return acc;
      }, {}),
    };
    setDataSource([...dataSource, newData]);
  };
  const handleResultData = () => {
    let result = [];
    const aa = dataSource.map((row) => {
      const { key, ...rest } = row;
      return Object.values(rest);
    });
    result = [header, ...aa];
    console.log("🚀 ~ handleResultData ~ result:", result);
  };
  const handleSave = (row: any) => {
    const newData = [...dataSource];
    const index = newData.findIndex((item) => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row,
    });
    setDataSource(newData);
  };

  const onDragEnd = ({ active, over }: DragEndEvent) => {
    if (active.id !== over?.id) {
      setDataSource((prevState) => {
        const activeIndex = prevState.findIndex(
          (record) => record.key === active?.id
        );
        const overIndex = prevState.findIndex(
          (record) => record.key === over?.id
        );
        return arrayMove(prevState, activeIndex, overIndex);
      });
    }
  };
  const columns = header.map((col) => ({
    title: col,
    dataIndex: col,
    editable: true,
    onCell: (record: any) => ({
      record,
      editable: true,
      dataIndex: col,
      title: col,
      handleSave,
    }),
  }));

  const defaultColumns = [
    {
      title: "",
      dataIndex: "operation",
      width: "50px",
      render: (_, record: any) => (
        <Popconfirm
          title="Sure to delete?"
          onConfirm={() => handleDelete(record.key)}
        >
          <a>Delete</a>
        </Popconfirm>
      ),
    },
    {
      title: "",
      dataIndex: "sort",
      width: "50px",
      render: () => <DragHandle />,
    },
    ...columns, // 动态生成的列
  ];

  const columnsWithEditableCells = defaultColumns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: any) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave,
      }),
    };
  });

  const components = {
    body: {
      row: SortableRow,
      cell: EditableCell,
    },
  };

  return (
    <DndContext modifiers={[restrictToVerticalAxis]} onDragEnd={onDragEnd}>
      <SortableContext
        items={dataSource.map((i) => i.key)}
        strategy={verticalListSortingStrategy}
      >
        <Button
          onClick={handleResultData}
          type="primary"
          style={{ marginBottom: 16 }}
        >
          导出数据
        </Button>
        <Button onClick={handleAdd} type="primary" style={{ marginBottom: 16 }}>
          Add a row
        </Button>
        <Table
          components={components}
          rowClassName={() => "editable-row"}
          bordered
          dataSource={dataSource}
          columns={columnsWithEditableCells as TableProps<DataType>["columns"]}
          rowKey="key"
          pagination={false}
        />
      </SortableContext>
    </DndContext>
  );
};

export default App;
