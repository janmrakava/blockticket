import mongoose from 'mongoose';

const TicketSchema = new mongoose.Schema({
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

export const Ticket = mongoose.model('tickets', TicketSchema);
