import axios from 'axios';

export const getEventsByCategory = async (eventType: string) => {
  try {
    const response = await axios.get(`/api/events/getByCategory/${eventType}`);
    return response.data;
  } catch (error) {
    console.error('Chyba při získávání událostí podle kategorie:', error);
    throw error; // Možná chcete chybu předat dál
  }
};
