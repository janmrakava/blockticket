export const countTickets = (tickets: number): string | number => {
  const ticketSoldUpdated = tickets > 1000 ? `${(tickets / 1000).toFixed(1)}K` : tickets;
  return ticketSoldUpdated;
};

export const countDate = (date: Date): string => {
  const newDate = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
  return newDate;
};
