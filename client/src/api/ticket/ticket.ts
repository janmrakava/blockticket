import axios from 'axios';
import { type Ticket } from '../../utils/interfaces';

export const newTicket = async (newTicketData: Ticket) => {
  try {
    const { eventName, price, date, category, zone, sector, row, seat } = newTicketData;
    const response = await axios.post(
      '/api/users/new-transaction',
      {
        eventName,
        price,
        date,
        category,
        zone,
        sector,
        row,
        seat
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};
