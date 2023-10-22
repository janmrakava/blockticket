import mongoose from 'mongoose';

const TransactionSchema = new mongoose.Schema({
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

export const Transaction = mongoose.model('transactions', TransactionSchema);
