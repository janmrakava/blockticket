interface EventBannerProps {
  eventImg: string;
  eventName: string;
  date: string;
  place: string;
  city: string;
}

interface ITickets {
  tickets: TicketData[];
  eventId: string;
}

interface CartState {
  tickets: Record<string, Record<string, number>>;
}
