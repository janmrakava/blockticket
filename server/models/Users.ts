import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

export const UsersSchema = new mongoose.Schema({
  first_name: { type: String, required: true, trim: true },
  last_name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  tel_number: String,
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
    ref: 'users_addresses',
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

UsersSchema.pre('save', function (next) {
  const user = this;

  if (!user.isModified('password')) return next();
  bcrypt.genSalt(10, (err, hash) => {
    if (err) return next(err);

    user.password = hash;
    next();
  });
});
export const User = mongoose.model('users', UsersSchema);
