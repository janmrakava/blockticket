import axios from 'axios';
import { type TicketWithId, type Ticket } from '../../utils/interfaces';

export const createNewTicket = async (
  userId: string,
  tickets: Ticket[]
): Promise<TicketWithId[]> => {
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
    const ticketIDs = response.data.savedTickets.map((ticket: TicketWithId) => ticket._id);
    console.log('ticketIDs: ', ticketIDs);
    return response.data;
  } catch (error) {
    console.error('Error when creating ticket :', error);
    throw error;
  }
};
