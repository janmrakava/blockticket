interface TicketType {
  category: string[];
  ticket_name: {
    cs: string;
    en: string;
  };
  description: {
    cs: string;
    en: string;
  };
  prices: {
    USD: number;
    CZK: number;
    EUR: number;
  };
  quantity: number;
  sold: number;
}

interface Address {
  capacity: number;
  city: string;
  country: string;
  name_of_place: string;
  street: string;
  street_number: string;
  zip_code: string;
  _id: string;
}

export interface Event {
  name: any;
  category_of_event: string;
  description: {
    cs: string;
    en: string;
  };
  date_of_the_event: Date;
  date_of_start_sell_tickets: Date;
  capacity: number;
  ticket_availabiity: boolean;
  ticket_types: TicketType[];
  image: string;
  popular: boolean;
  address_id: Address;
}
