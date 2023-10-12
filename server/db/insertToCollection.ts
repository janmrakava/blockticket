import mongoose, { ConnectOptions } from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectionString: string = process.env.ATLAS_URI || '';

const connectOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as ConnectOptions;

mongoose
  .connect(connectionString, connectOptions)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error: Error) => {
    console.error('Error connecting to MongoDB', error);
  });

const eventsSchema = new mongoose.Schema({
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
    ref: 'address',
  },
});

const addressSchema = new mongoose.Schema({
  name_of_place: String,
  country: String,
  city: String,
  street: String,
  street_number: Number,
  zip_code: String,
});

const Event = mongoose.model('Events', eventsSchema);
const EventAddress = mongoose.model('addresses_events', addressSchema);

const newEvent = new Event({
  id: 1234567890,
  artist: 'Eminem',
  category_of_event: 'music',
  description: 'The ultimate Eminem concert!',
  date_of_the_event: 1704322800,
  date_of_start_sell_tickets: 1673391600,
  capacity: 22500,
  ticket_availabiity: true,
});

newEvent
  .save()
  .then((event) => {
    console.log('Uživatel byl úspěšně vložen:', event);
  })
  .catch((error) => {
    console.error('Chyba při vkládání uživatele:', error);
  });
