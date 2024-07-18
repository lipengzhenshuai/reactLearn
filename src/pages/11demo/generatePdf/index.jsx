import React, { useRef } from 'react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

// TODO: 基本的demo例子

const App = () => {
  const printRef = useRef();

  const generatePDF = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL('image/png');

    const pdf = new jsPDF();
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

    pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('download.pdf');
    console.log(1111);
  };

  return (
    <div>
      <div ref={printRef} style={{ padding: 20, backgroundColor: '#f5f5f5', width: '100%', maxWidth: '600px', margin: 'auto' }}>
        <h1>Hello, World!</h1>
        <p>This is a sample content to be converted to PDF.</p>
      </div>
      <button onClick={generatePDF}>Generate PDF</button>
    </div>
  );
};

export default App;
