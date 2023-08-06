import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '../src/style/index.scss';

//Pages
import Home from './pages/home.jsx'
import LaPaletteDuGout from './pages/lapalettedugout.jsx';
import LaNoteEnchantee from './pages/lanoteenchantee';
import ALaFrancaise from './pages/alafrancaise';
import LeDeliceDesSens from './pages/ledelicedessens';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lapalettedugout" element={<LaPaletteDuGout />} />
        <Route path="/lanoteenchantee" element={<LaNoteEnchantee />} />
        <Route path="/alafrancaise" element={<ALaFrancaise />} />
        <Route path="/ledelicedessens" element={<LeDeliceDesSens />} />
      
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

