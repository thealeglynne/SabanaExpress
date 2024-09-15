"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Importar el hook useRouter para navegación
import "../style/CardProduct.css";

const CardsR = () => {
  const [categories, setCategories] = useState([]);
  const [sortOrder, setSortOrder] = useState('name');
  const [visibleProducts, setVisibleProducts] = useState({});

  const router = useRouter(); // Inicializar el router

  useEffect(() => {
    fetch('/categories.json')
      .then(response => response.json())
      .then(data => {
        setCategories(data);
        const initialVisibleProducts = {};
        data.forEach(category => {
          initialVisibleProducts[category.name] = 4;
        });
        setVisibleProducts(initialVisibleProducts);
      })
      .catch(error => console.error('Error fetching categories:', error));
  }, []);

  const sortProducts = (products, order) => {
    return [...products].sort((a, b) => {
      if (order === 'name') {
        return a.name.localeCompare(b.name);
      } else if (order === 'price') {
        return parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', ''));
      }
      return 0;
    });
  };

  const handleShowMore = (categoryName) => {
    setVisibleProducts(prevVisible => ({
      ...prevVisible,
      [categoryName]: prevVisible[categoryName] + 4,
    }));
  };

  const handleViewMore = (productId) => {
    router.push(`/product/${productId}`); // Navegar a la página del producto con el ID
  };

  return (
    <div>
      <div className="sort-controls">
        <button onClick={() => setSortOrder('name')}>Ordenar por Nombre</button>
        <button onClick={() => setSortOrder('price')}>Ordenar por Precio</button>
      </div>

      {categories.map((category) => (
        <div key={category.name} className="categoryR">
          <h2>{category.name}</h2>
          <div className="cardsR">
            {sortProducts(category.products, sortOrder).slice(0, visibleProducts[category.name]).map((product) => (
              <div key={product.id} className="cardR">
                <img src={product.image} alt={product.name} className="product-image" />
                <div className='infoCard'>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <p>{product.price}</p>
                  <button className="add-to-cart-btn">Carrito</button>
                  <button className="view-more-btn" onClick={() => handleViewMore(product.id)}>Ver más</button>
                </div>
              </div>
            ))}
          </div>
          {visibleProducts[category.name] < category.products.length && (
            <button className="view-more-btn" onClick={() => handleShowMore(category.name)}>Ver más</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default CardsR;
