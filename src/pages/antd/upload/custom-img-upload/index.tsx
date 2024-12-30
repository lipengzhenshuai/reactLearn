import React, { useEffect, useRef } from 'react';
import { Upload, message } from 'antd';
import type { RcFile, UploadProps } from 'antd/es/upload/interface';

const { Dragger } = Upload;

interface PasteUploadProps {
  /** 
   * 用于接收文件上传或 URL 上传的接口地址，
   * 如果仅作演示，可不需要具体地址。 
   */
  action?: string;
  /** 其他 Upload 组件的配置 */
  uploadProps?: UploadProps;
  /** 自定义粘贴上传逻辑，比如将文件/URL 传给后端 */
  onPasteUpload?: (fileOrUrl: File | string) => void;
}

const PasteUpload: React.FC<PasteUploadProps> = ({
  action = 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  uploadProps,
  onPasteUpload,
}) => {
  const uploadRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handlePaste = async (e: ClipboardEvent) => {
      const clipboardData = e.clipboardData;
      if (!clipboardData) return;

      // 1. 如果剪贴板中有文件（图片）
      const items = clipboardData.items;
      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        // 检测是否为文件，并且类型是图片
        if (item.kind === 'file' && item.type.startsWith('image/')) {
          const file = item.getAsFile();
          if (file) {
            // 直接走onPasteUpload或者走Upload组件的自定义逻辑
            onPasteUpload?.(file);
            message.success(`成功粘贴图片：${file.name}`);
            // 阻止继续处理，避免重复
            return;
          }
        }
      }

      // 2. 如果剪贴板不是文件，而是字符串（可能是URL）
      const text = clipboardData.getData('text');
      if (text) {
        // 简单校验下是否是URL，这里也可以做更严格的校验
        if (/(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp))/i.test(text)) {
          onPasteUpload?.(text);
          message.success(`成功粘贴图片URL：${text}`);
        } else {
          // 如果并不是图片链接，则忽略或给出提示
          // message.info('剪贴板内容不是图片链接');
        }
      }
    };

    const dom = uploadRef.current;
    if (dom) {
      dom.addEventListener('paste', handlePaste as EventListener);
    }

    return () => {
      if (dom) {
        dom.removeEventListener('paste', handlePaste as EventListener);
      }
    };
  }, [onPasteUpload]);

  // antd Upload 的配置
  const defaultProps: UploadProps = {
    name: 'file',
    multiple: true,
    action,
    // 指定只允许图片
    accept: 'image/*',
    onChange(info) {
      const { status } = info.file;
      if (status === 'done') {
        message.success(`${info.file.name} 文件上传成功`);
      } else if (status === 'error') {
        message.error(`${info.file.name} 文件上传失败`);
      }
    },
    ...uploadProps,
  };

  return (
    <div ref={uploadRef}>
      <Dragger {...defaultProps}>
        <p className="ant-upload-drag-icon">
          <img
            src="https://cdn-icons-png.flaticon.com/512/159/159759.png"
            alt="upload"
            style={{ width: 48, height: 48 }}
          />
        </p>
        <p className="ant-upload-text">拖拽图片到此处，或点击上传</p>
        <p className="ant-upload-hint">
          也可在此区域直接 <strong>粘贴</strong> 图片或图片链接
        </p>
      </Dragger>
    </div>
  );
};

export default PasteUpload;
