import mongoose from 'mongoose';

const EventSchema = new mongoose.Schema({
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
  place_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'addresses_events',
  },
});

export const Event = mongoose.model('events', EventSchema);
