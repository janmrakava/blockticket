import mongoose from 'mongoose';
export const EventSchema = new mongoose.Schema({
  id: Number,
  artist: String,
  category_of_event: String,
  description: String,
  date_of_the_event: Date,
  date_of_start_sell_tickets: Date,
  capacity: Number,
  ticket_availabiity: Boolean,
  address: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'addresses_events',
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
    type: String,
    enum: ['Male', 'Female', 'Other'],
  },
  role: {
    type: String,
    enum: ['User', 'Admin', 'Organizator'],
  },
  last_login: Date,
  avatar: String,
  prefered_language: String,
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
  zone: String,
  sector: String,
  row: Number,
  seat: Number,
  transaction: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'transaction',
  },
});

export const TypeOfPaymentSchema = new mongoose.Schema({
  credit_card: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'credit_card',
  },
  paypal_info: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'paypal_info',
  },
  bank_transfer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'bank_transfer',
  },
});
