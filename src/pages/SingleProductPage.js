import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SingleProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3001/products');
        const productsWithImages = await Promise.all(
          response.data.map(async (product) => {
            const imageResponse = await axios.get(`http://localhost:3001/products/${product.product_code}/images`);
            
            if (imageResponse.data && imageResponse.data.length > 0) {
              // Assuming the API returns an array of image URLs
              return { ...product, image_urls: imageResponse.data.map(image => image.image_name) };
            } else {
              return { ...product, image_urls: [] };
            }
          })
        );

        setProducts(productsWithImages);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.image_urls && product.image_urls.length > 0 && (
              <div>
                {product.image_urls.map((imageUrl, index) => (
                  <img
                    key={index}
                    src={`http://localhost:3000/uploads/${imageUrl}`}
                    alt={`${product.name} - ${index}`}
                    style={{ width: '50px', height: '50px' }}
                  />
                ))}
              </div>
            )}
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SingleProduct;
