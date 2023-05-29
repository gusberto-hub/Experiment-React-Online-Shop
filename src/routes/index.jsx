import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Catalog from '../pages/Catalog/index.jsx'
import LoginPage from '../pages/Authentication/LoginPage.jsx'
import Cart from '../pages/Cart/index.jsx'
import Layout from './Layout.jsx'
import ProtectedRoutes from './ProtectedRoutes.jsx'
import RegisterPage from '../pages/Authentication/RegisterPage.jsx'
import ValidationPage from '../pages/Authentication/ValidationPage.jsx'
import NotFound from '../pages/NotFound.jsx'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Catalog />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register">
            <Route index element={<RegisterPage />} />
            <Route path="validation" element={<ValidationPage />} />
          </Route>

          <Route path="" element={<ProtectedRoutes />}>
            <Route path="cart" element={<Cart />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default Router
