import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

import Market from './pages/Market';
import Bag from './pages/Bag';

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <main className="app-main">
        <div className="container">
          <Routes>
            <Route path="/" element={<Market />} />
            <Route path="bag" element={<Bag />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
