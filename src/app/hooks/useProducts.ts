import { useEffect, useState } from 'react';
import { getProducts } from '../api/productsAPI';
import { Product } from '../../types/Product';

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then((data: Product[]) => { 
        console.log("Отримані товари:", data.length); 
        setProducts(data);
      })
      .catch((err) => {
        console.error("Помилка завантаження:", err);
      })
      .finally(() => setLoading(false));
  }, []);

  return { products, loading };
};