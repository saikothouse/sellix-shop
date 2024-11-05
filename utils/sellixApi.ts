import axios from 'axios';

const SELLIX_API_URL = 'https://api.sellix.io/v1';

// Define the Product interface here as well
interface Product {
  uniqid: string;
  title: string;
  price: number;
  image_url: string;
  description: string;
  // Add any other properties that your product might have
}

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await axios.get(`${SELLIX_API_URL}/products`, {
      headers: {
        Authorization: `Bearer jQnwfJCUgMoSPfntJaIS1OQWKsaM0AiuEfHqQa8zblm5Z8X5iQ5ReYLPAdwLOfjZ`,
        'Content-Type': 'application/json',
      },
    });
    return response.data.data.products;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const fetchProductById = async (id: string): Promise<Product> => {
  try {
    const response = await axios.get(`${SELLIX_API_URL}/products/${id}`, {
      headers: {
        Authorization: `Bearer jQnwfJCUgMoSPfntJaIS1OQWKsaM0AiuEfHqQa8zblm5Z8X5iQ5ReYLPAdwLOfjZ`,
        'Content-Type': 'application/json',
      },
    });
    return response.data.data.product;
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error;
  }
};
