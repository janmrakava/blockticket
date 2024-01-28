import axios from 'axios';
import { type Event } from '../../utils/interfaces';

export const getEvent = async (id: string | undefined): Promise<Event> => {
  try {
    const response = await axios.get(`/api/events/getOne/${id}`);
    return response.data;
  } catch (error) {
    console.error('Chyba při získávání události', error);
    throw error;
  }
};
