"use client"; // Marca el archivo como un componente de cliente
import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation'; // Importa useParams y useRouter desde next/navigation
import Header from '@/app/componentes/header';
import Footer2 from '@/app/componentes/footer';
import '../[id]/page.css'; // Asegúrate de tener un archivo CSS para los estilos

const ProductPage = () => {
  const { id } = useParams(); // Obtén el id del producto desde los parámetros de la URL
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState(''); // Inicializa como una cadena vacía
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Estado para verificar si el usuario está autenticado
  const router = useRouter();

  useEffect(() => {
    if (id) {
      // Cargar datos del producto desde el JSON usando el ID
      fetch('/categories.json')
        .then(response => response.json())
        .then(data => {
          const allProducts = data.flatMap(category => category.products);
          const foundProduct = allProducts.find(p => p.id === parseInt(id));
          if (foundProduct) {
            setProduct(foundProduct);
            setMainImage(foundProduct.image); // Actualiza mainImage cuando se encuentra el producto
          }
        })
        .catch(error => console.error('Error fetching product:', error));
    }
  }, [id]);

  const handleButtonClick = (action) => {
    if (!isAuthenticated) {
      // Redirigir a la página de inicio de sesión si el usuario no está autenticado
      router.push('/login');
      return;
    }
    // Aquí puedes manejar la acción si el usuario está autenticado
    console.log(`${action} clicked`);
  };

  const handleImageClick = (image) => {
    setMainImage(image);
  };

  if (!product) {
    return <div className="loading">Cargando...</div>;
  }

  return (
    <div className="product-page">
      <Header />
      <div className="product-container">
        <div className="product-image">
          <img src={mainImage} alt={product.name} />
        </div>
        <div className="product-details">
          <h1 className="product-name">{product.name}</h1>
          <p className="product-description">{product.description}</p>
          <p className="product-price">Precio: {product.price}</p>
          <div className="product-actions">
            <button className="btn-add-to-cart" onClick={() => handleButtonClick('Agregar al carrito')}>Agregar al carrito</button>
            <button className="btn-view-more" onClick={() => handleButtonClick('Ver más detalles')}>Ver más detalles</button>
          </div>
          <div className="product-gallery">
            {product.additionalImages?.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Imagen adicional ${index + 1}`}
                className="thumbnail"
                onClick={() => handleImageClick(image)}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer2 />
    </div>
  );
};

export default ProductPage;
