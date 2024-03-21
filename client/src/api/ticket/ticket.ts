import axios from 'axios';
import { type Ticket } from '../../utils/interfaces';

export const createNewTicket = async (userId: string, tickets: Ticket[]): Promise<Ticket> => {
  try {
    const response = await axios.post(
      '/api/users/new-transaction',
      {
        userId,
        tickets
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error when creating ticket :', error);
    throw error;
  }
};
