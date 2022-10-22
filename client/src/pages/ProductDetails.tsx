import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { ProductContainer } from '../components';
import { IProduct } from '../interfaces';
import { ImageContextProvider } from '../components/Context/ImageContext';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<IProduct | null>(null);
  const [error, setError] = useState<boolean | string>(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/v1/products/${id}`);
        setProduct(response.data);
      } catch (err) {
        setError(`You're all good, it's our bad.
                  We're having some errors in getting the information.
                   We're working on it.`);
      }
    };
    fetchData();
  }, []);

  if (error) {
    return (
      <h4 style={{ margin: '260px' }}>
        {error}
      </h4>
    );
  }

  if (product === null) {
    return (
      <h5 style={{ margin: '200px' }}>
        Loading ..
      </h5>
    );
  }

  return (
    <div>
      <ImageContextProvider gallery={product.gallery}>
        <ProductContainer attributes={product} />
      </ImageContextProvider>
    </div>
  );
};

export default ProductDetails;
