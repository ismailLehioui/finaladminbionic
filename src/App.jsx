import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./pages/forms/Login";
import Register from "./pages/forms/Register";
// import DashboardLayout from "./pages/content/DashboardLayout";
import ProductsPage from "./pages/content/ProductsPage";
import ContactPage from "./pages/content/ContactPage";
import PartnerPage from "./pages/content/PartnerPage";
import UserPage from "./pages/content/UserPage";
import AwardPage from "./pages/content/AwardsPage";
import Account from "./pages/content/Account";
// import Sidebar from "./layout/Sidebar/Sidebar";
import Content from "./layout/Content/Content";
import './App.css';

function App() {
  const user = useSelector((state) => state.auth.user);

  return (
    <BrowserRouter
    basename={process.env.PUBLIC_URL}
    >
      {/* <Sidebar /> Sidebar Component */}
      <Routes>
        <Route path="/register" element={user ? <Navigate to="/dashboard" /> : <Register />} />
        <Route path="/login" element={user ? <Navigate to="/dashboard" /> : <Login />} />
        <Route path="/dashboard" element={user ? <Content /> : <Navigate to="/login" />}>
          <Route path="partner" element={<PartnerPage />} />
          <Route path="product" element={<ProductsPage />} />
          <Route path="award" element={<AwardPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="account" element={<Account />} />
          <Route path="settings" element={<Account/>} />
          <Route path="user" element={user?.isSuperAdmin ? <UserPage /> : <Navigate to="/dashboard" />} />
        </Route>
        <Route path="/" element={user ? <Navigate to="/dashboard" /> : <Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
