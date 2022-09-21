import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

import MarketPage from './pages/MarketPage';
import BagPage from './pages/BagPage';

import { Routes, Route } from "react-router-dom";
import ItemPage from './pages/ItemPage';

function App() {
  return (
    <>
      <Header />
      <main className="app-main">
        <div className="container">
          <Routes>
            <Route path="/" element={<MarketPage />} />
            <Route path="bag" element={<BagPage />} />
            <Route path="item/:itemId" element={<ItemPage />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
