import axios from 'axios';
import { type TicketsFromBE, type Ticket } from '../../utils/interfaces';

export const createNewTicket = async (
  userId: string,
  tickets: Ticket[]
): Promise<TicketsFromBE[]> => {
  try {
    const response = await axios.post(
      '/api/tickets/new-ticket',
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
