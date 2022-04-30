import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Catalog from './components/Catalog';
import Cart from './components/Cart';
import LoginPage from './components/Login';
import { RequireAuth } from './components/Auth/RequireAuth';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Catalog />} />
          <Route path='login' element={<LoginPage />} />
          <Route
            path='cart'
            element={
              <RequireAuth>
                <Cart />
              </RequireAuth>
            }
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
