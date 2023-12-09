// App.js
import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PatientApp from './pages/patient_app';
import QrDisplay from './pages/qrDisplay';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PatientApp />} />
        <Route path='/verify-appointment' element={<QrDisplay />} />
        <Route path="*" element={<NotFound/>}/>
       
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
