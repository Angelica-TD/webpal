import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllProducts from './pages/AllProductsPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage'
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
