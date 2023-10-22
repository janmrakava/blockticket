import mongoose from 'mongoose';
export const EventSchema = new mongoose.Schema({
  name: {
    type: {
      en: String,
      cs: String,
    },
    required: true,
    trim: true,
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
    required: true,
  },
  description: {
    cs: String,
    en: String,
  },
  date_of_the_event: {
    type: Date,
    required: true,
  },
  date_of_start_sell_tickets: {
    type: Date,
    required: true,
  },
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
  name_of_place: { type: String, required: true, trim: true },
  country: { type: String, required: true, trim: true },
  city: { type: String, required: true, trim: true },
  street: { type: String, required: true, trim: true },
  street_number: { type: String, required: true, trim: true },
  zip_code: { type: String, required: true, trim: true },
  capacity: { type: Number, required: true },
});

export const UsersSchema = new mongoose.Schema({
  first_name: { type: String, required: true, trim: true },
  last_name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  tel_number: String,
  username: { type: String, required: true },
  password: { type: String, required: true },
  salt: String,
  date_registration: Date,
  date_of_birth: Date,
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Not specified'],
  },
  role: {
    type: String,
    enum: ['User', 'Admin', 'Superuser'],
    required: true,
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
  country: { type: String, required: true, trim: true },
  city: { type: String, required: true, trim: true },
  street: { type: String, required: true, trim: true },
  street_number: { type: String, required: true, trim: true },
  zip_code: { type: String, required: true, trim: true },
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
  },
  sector: {
    cs: String,
    en: String,
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
