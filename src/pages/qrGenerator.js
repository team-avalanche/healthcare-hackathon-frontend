import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode.react';
import { json } from 'react-router-dom';

const QRCodeGenerator = (props) => {
  const [jsonData, setJsonData] = useState({}); // Initialize as an object

  useEffect(() => {
    const endpoint = 'https://health.sudip.me/api/get-qr-data/' + props.userid;
    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => setJsonData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, [props.userid]); // Include props.userid in the dependency array

  return (
    <div>
      <div>
        {<QRCode value={JSON.stringify(jsonData)} renderAs="svg" size={200} />}
      </div>
    </div>
  );
};

export default QRCodeGenerator;
