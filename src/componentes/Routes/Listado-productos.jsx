import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function ListadoProductos() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Listado de Productos</h1>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <img 
                src={product.images[0]} 
                className="card-img-top img-thumbnail mx-auto d-block" 
                alt={product.title} 
                style={{ height: '120px', width: '120px', objectFit: 'cover', marginTop: '10px' }} 
              />
              <div className="card-body text-center">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">Precio: ${product.price}</p>
                <Link to={`/product/${product.id}`} className="btn btn-primary">Ver Detalles</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListadoProductos;
