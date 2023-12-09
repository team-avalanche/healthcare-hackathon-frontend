import React from 'react';
import QRCodeGenerator from './qrGenerator';
import './qrDisplay.css';

const QrDisplay = () => {
  return (
    <div className='qr-display'>
      <QRCodeGenerator userid='12345' />
    </div>
  );
}

export default QrDisplay;