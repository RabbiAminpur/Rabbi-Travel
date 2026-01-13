
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import DivisionDetail from './pages/DivisionDetail';
import DistrictDetail from './pages/DistrictDetail';
import UpazilaDetail from './pages/UpazilaDetail';
import About from './pages/About';
import Contact from './pages/Contact';

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
