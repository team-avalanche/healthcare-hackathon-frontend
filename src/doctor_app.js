import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import axios from 'axios';

const DoctorApp = () => {
  const [qrData, setQrData] = useState(null);

  const handleScan = (data) => {
    if (data) {
      setQrData(data);
    }
  };

  const handleError = (error) => {
    console.error(error);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('/api/scan', { data: qrData });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: '100%' }}
      />
      {qrData && (
        <div>
          <h2>Scanned QR Data:</h2>
          <pre>{qrData}</pre>
          <button onClick={handleSubmit}>Send POST Request</button>
        </div>
      )}
    </div>
  );
};

export default DoctorApp;
