import React from "react";
import { DeleteOutlined, EyeOutlined, FileImageOutlined } from "@ant-design/icons";
import { Image, Progress } from "antd";
import type { UploadFile } from "antd";
import type { UploadFileStatus } from "antd/es/upload/interface";
import "./FileList.less";

const mockFileList: IFileList[] = [
  {
    uid: 1,
    name: "document1.pdf",
    url: "https://example.com/files/document1.pdf",
    status: "done",
  },
  {
    uid: 2,
    name: "image1.jpg",
    url: "https://example.com/files/image1.jpg",
    status: "uploading",
  },
  {
    uid: 3,
    name: "video1.mp4",
    url: "https://example.com/files/video1.mp4",
    status: "error",
  },
  {
    uid: 4,
    name: "archive.zip",
    url: "https://example.com/files/archive.zip",
    status: "removed",
  },
];

// 文件上传三种状态：处理中，成功，失败

interface IFileList {
  uid: number;
  name: string;
  url: string;
  preview?: string;
  status: UploadFileStatus;
}

const DoneItem = ({ file, onPreview, onDelete }: any) => {
  return (
    <div
      className="upload-list-item-done"
      key={file.uid}
      style={{ position: "relative" }}
    >
      <Image
        src={file.url || (file.preview as string)}
        width={100}
        height={100}
        style={{ objectFit: "cover", borderRadius: 8 }}
        preview={false} // 禁用默认的预览功能，改为自定义
      />
      {/* hover 状态下显示的操作按钮 */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          transition: "opacity 0.3s",
          zIndex: 1001,
        }}
        className="hover-overlay"
      >
        <span
          onClick={() => onPreview(file as UploadFile)}
          style={{ marginRight: 8 }}
        >
          <EyeOutlined style={{ color: "#fff" }} />
        </span>
        <span onClick={() => onDelete(file as UploadFile)}>
          <DeleteOutlined style={{ color: "#fff" }} />
        </span>
      </div>
    </div>
  );
};

const ProgressItem = ({ file }) => {
  return (
    <div className="upload-list-item-progress">
      <div>
        <span>Uploading...</span>
        <Progress type="line" size={[-1, 2]} showInfo={false} percent={50} />
      </div>
    </div>
  );
};

const ErrorItem = ({ file, onDelete }) => {
  return (
    <div className="upload-list-item-error">
      <FileImageOutlined style={{ fontSize: 35, color: '#ff4d4f' }} />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          transition: "opacity 0.3s",
          zIndex: 1001,
        }}
        className="hover-overlay"
      >
        <span onClick={() => onDelete(file as UploadFile)}>
          <DeleteOutlined style={{ color: "#fff" }} />
        </span>
      </div>
    </div>
  );
};

// 自定义图片列表展示组件
const ImageList: React.FC<{
  fileList: UploadFile[];
  onDelete: (file: UploadFile) => void;
  onPreview: (file: UploadFile) => void;
  children?: any;
}> = ({ fileList = mockFileList, onDelete, onPreview, children }) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
      {fileList.map((file) => (
        <div className="upload-list-item-container">
          {file.status === 'done' && <DoneItem file={file} onPreview={onPreview} onDelete={onDelete} />}
          {file.status === 'uploading' && <ProgressItem file={file} />}
          {file.status === 'error' && <ErrorItem file={file} onDelete={onDelete} />}
        </div>
      ))}
      {children}
    </div>
  );
};

export default ImageList;
