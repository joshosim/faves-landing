import React from 'react';
import Home from './Home.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UploadPhoto from './UploadPage.tsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload-favvy-photos" element={<UploadPhoto />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
