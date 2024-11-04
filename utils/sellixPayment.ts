import axios from 'axios';

const SELLIX_API_URL = 'https://api.sellix.io/v1';

interface OrderData {
  title: string;
  value: number;
  currency: string;
  email: string;
}

export const createOrder = async (orderData: OrderData) => {
  try {
    const response = await axios.post(`${SELLIX_API_URL}/orders`, orderData, {
      headers: {
        Authorization: `Bearer YOUR_SELLIX_API_KEY`,
        'Content-Type': 'application/json',
      },
    });
    return response.data.data;
  } catch (error) {
    console.error('Error creating order:', error);
    throw error;
  }
};
