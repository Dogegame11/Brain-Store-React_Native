import productsData from '../../data/brain_full.json';
import { Product } from '../../types/Product';


export const getProducts = async (): Promise<Product[]> => {
  await new Promise(res => setTimeout(() => res(undefined), 300));

  return productsData.products.map((item: any) => ({
    title: item.title,
    id: item.pid.toString(), 
    image: item.image,
    price: parseFloat(item.price) || 0, 
    brand: item.brand,
    brainUP: parseFloat(item.brainUP) || 0, 
  }));
};