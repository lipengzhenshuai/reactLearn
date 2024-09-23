import React, { useState } from 'react';
import './index.less';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// 初始数据
const initialItems = [
  { id: '1', content: 'Item 1' },
  { id: '2', content: 'Item 2' },
  { id: '3', content: 'Item 3' },
  { id: '4', content: 'Item 4' },
];

const DragAndDrop = () => {
  const [items, setItems] = useState(initialItems);

  // 当拖拽完成时触发的回调
  const onDragEnd = (result) => {
    const { source, destination } = result;

    // 如果没有目标位置，直接返回
    if (!destination) return;

    // 重新排列数组
    const newItems = Array.from(items);
    const [movedItem] = newItems.splice(source.index, 1);
    newItems.splice(destination.index, 0, movedItem);

    setItems(newItems);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided) => (
          <ul
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={{ padding: 0, listStyleType: 'none' }}
          >
            {items.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided) => (
                  <li
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={{
                      padding: '8px',
                      margin: '4px 0',
                      background: '#eee',
                      border: '1px solid #ccc',
                      borderRadius: '4px',
                      ...provided.draggableProps.style,
                    }}
                  >
                    {item.content}
                  </li>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default DragAndDrop;
