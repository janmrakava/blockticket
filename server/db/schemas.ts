import mongoose from 'mongoose';
export const EventSchema = new mongoose.Schema({
  artist: {
    type: {
      en: String,
      cs: String,
      es: String,
    },
  },
  category_of_event: {
    type: {
      en: {
        type: String,
        enum: ['Music', 'Sport', 'Art', 'Other', 'Family', 'VIP'],
      },
      cs: {
        type: String,
        enum: ['Hudba', 'Sport', 'Umění', 'Ostatní', 'Rodina', 'VIP'],
      },
    },
  },
  description: {
    cs: String,
    en: String,
  },
  date_of_the_event: Date,
  date_of_start_sell_tickets: Date,
  capacity: Number,
  ticket_availabiity: Boolean,
  ticket_types: [
    {
      category: ['Standard', 'VIP', 'Gold', 'Platinum', 'Child'],
      ticket_name: {
        cs: String,
        en: String,
      },
      description: {
        cs: String,
        en: String,
      },
      prices: {
        USD: Number,
        CZK: Number,
        EUR: Number,
      },
      quantity: Number,
      sold: Number,
    },
  ],
  image: String,
  popular: Boolean,
  address: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'addresses_events',
  },
  event_admin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },
});

export const EventAddressSchema = new mongoose.Schema({
  name_of_place: String,
  country: String,
  city: String,
  street: String,
  street_number: Number,
  zip_code: String,
});

export const UsersSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  tel_number: String,
  username: String,
  password: String,
  date_registration: Date,
  date_of_birth: Date,
  gender: {
    type: {
      en: String,
      cs: String,
      es: String,
    },
  },
  role: {
    type: String,
    enum: ['User', 'Admin', 'Superuser'],
  },
  last_login: Date,
  avatar: String,
  prefered_language: {
    type: String,
    enum: ['cs', 'en'],
  },
  favorite_events: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'event',
    },
  ],
  address: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'addressess_users',
  },
  transaction: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'transaction',
    },
  ],
  ticket: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ticket',
    },
  ],
});

export const UserAddressSchema = new mongoose.Schema({
  country: String,
  city: String,
  street: String,
  street_number: String,
  zip_code: String,
});

export const TransactionSchema = new mongoose.Schema({
  price: Number,
  date: Date,
  state: {
    type: String,
    enum: ['Paid', 'Not paid', 'Cancelled', 'Returned'],
  },
  notes: String,
  type_of_payment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'type_of_payment',
  },
});

export const TicketSchema = new mongoose.Schema({
  name: String,
  price: Number,
  date: Date,
  ticket_category: {
    type: String,
    enum: ['Standard', 'VIP', 'Gold', 'Silver'],
  },
  zone: {
    cs: String,
    en: String,
    es: String,
  },
  sector: {
    cs: String,
    en: String,
    es: String,
  },
  row: Number,
  seat: Number,
  transaction: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'transaction',
  },
});

export const TypeOfPaymentSchema = new mongoose.Schema({
  type_name: String,
  cardCredit: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'credit_card',
    required: false,
  },
  bankTransfer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'bank_transfer',
    required: false,
  },
});

export const CreditCardSchema = new mongoose.Schema({
  owner_name: String,
  card_number: String,
  security_code: Number,
  expiration_date: Date,
});

export const BankTransferSchema = new mongoose.Schema({
  account_holder: String,
  IBAN: String,
  variable_symbol: String,
});
