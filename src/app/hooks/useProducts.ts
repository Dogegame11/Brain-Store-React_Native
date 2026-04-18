import { useEffect, useState } from 'react';
import { getProducts } from '../api/productsAPI';
import { Product } from '../../types/Product';

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then((data) => {
        console.log("Отримані товари:", data.length); // Перевірка кількості
        setProducts(data);
      })
      .finally(() => setLoading(false));
  }, []);

  return { products, loading };
};