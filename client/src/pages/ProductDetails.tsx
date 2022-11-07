import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { ProductContainer } from '../components';
import { IProduct } from '../interfaces';
import { ImageContextProvider } from '../components/Context/ImageContext';
import Loading from '../components/Loading/Loading';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<IProduct | null>(null);
  const [error, setError] = useState<boolean | string>(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/v1/products/${id}`);
        setProduct(response.data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError(`You're all good, it's our bad.
                  We're having some errors in getting the information.
                   We're working on it.`);
      }
    };
    fetchData();
  }, [id]);

  if (error) {
    return (
      <h4 style={{ margin: '260px' }}>
        {error}
      </h4>
    );
  }

  if (!product) {
    return (
      <Loading className="loading" />
    );
  }

  return (
    <div>
      { loading ? <Loading className="loading" />
        : (
          <ImageContextProvider gallery={product.gallery}>
            <ProductContainer attributes={product} />
          </ImageContextProvider>
        )}
    </div>
  );
};

export default ProductDetails;
