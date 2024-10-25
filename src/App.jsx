import { Routes, Route } from 'react-router-dom';
import NavigationBar from './componentes/Navbar/NavBar';
import Home from './componentes/Routes/Home';
import Footer from './componentes/Footer/Footer';
import ProductDetail from './componentes/Routes/ProductDetail';
import Register from './componentes/Routes/Register';
import Login from './componentes/Routes/Login';
import ListadoProductos from  './componentes/Routes/Listado-productos';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

function App() {
  return (
    <>
      <NavigationBar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listado-de-productos" element={<ListadoProductos />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
