import './scss/app.scss';
import Header from './components/Header';
import PageNotFound from './pages/PageNotFound';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Cart from './pages/Cart';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;