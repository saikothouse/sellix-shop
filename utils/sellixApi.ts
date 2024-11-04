import axios from 'axios';

const SELLIX_API_URL = 'https://api.sellix.io/v1';

export const fetchProducts = async () => {
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

export const fetchProductById = async (id: string) => {
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
