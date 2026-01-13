
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.tsx';
import Home from './pages/Home.tsx';
import DivisionDetail from './pages/DivisionDetail.tsx';
import DistrictDetail from './pages/DistrictDetail.tsx';
import UpazilaDetail from './pages/UpazilaDetail.tsx';
import About from './pages/About.tsx';
import Contact from './pages/Contact.tsx';

const App: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/divisions" element={<Home />} />
        <Route path="/division/:divId" element={<DivisionDetail />} />
        <Route path="/division/:divId/district/:distId" element={<DistrictDetail />} />
        <Route path="/division/:divId/district/:distId/upazila/:upaId" element={<UpazilaDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
};

export default App;
