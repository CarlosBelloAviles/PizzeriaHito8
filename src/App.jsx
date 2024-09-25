import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import Pizza from "./pages/Pizza";
import Profile from "./components/Profile";
import NotFound from "./components/NotFound";
import { CartProvider } from "./context/CartContext";
import { useUser } from "./context/UserContext";

function App() {
  const { token } = useUser();
  return (
    <>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={token ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/register"
            element={token ? <Navigate to="/" /> : <Register />}
          />
          <Route
            path="/profile"
            element={!token ? <Navigate to="/login" /> : <Profile />}
          />
          <Route path="/pizza/:id" element={<Pizza />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </CartProvider>
      <Footer />
    </>
  );
}

export default App;
