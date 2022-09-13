import './scss/app.scss';
import Header from './components/Header';
import PageNotFound from './pages/PageNotFound';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Cart from './pages/Cart';

import { createContext, useState } from 'react';
export const SearchContext = createContext('');

function App() {
  const [search, setSearch] = useState('');
  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ search, setSearch }}>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/pizza-react/" element={<Home search={search} />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
