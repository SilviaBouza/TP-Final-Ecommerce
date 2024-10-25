import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error('Error fetching product detail:', error));
  }, [id]);

  if (!product) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <img src={product.images} alt={product.title} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h1>{product.title}</h1>
          <p className="lead">Precio: ${product.price}</p>
          <p>Stock: {product.stock}</p>
          <p>Código: {product.id}</p>
          <p>Descripción: {product.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
