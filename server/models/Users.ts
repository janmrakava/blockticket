import mongoose from 'mongoose';

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

export const User = mongoose.model('users', UsersSchema);