import axios from 'axios';
import { type Ticket } from '../../utils/interfaces';

export const createNewTicket = async (tickets: Ticket[]) => {
  try {
    const response = await axios.post(
      '/api/users/new-transaction',
      {
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
