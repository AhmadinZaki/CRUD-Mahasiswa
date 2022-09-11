import React from 'react';
import ReactDOM from 'react-dom/client';
import { Mahasiswa } from './features/Mahasiswa.feature';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Mahasiswa />
  </React.StrictMode>
);

