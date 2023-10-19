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
const db = mongoose.connection;
export { db };
const arrayCollections = [
  'user_addresses',
  'tickets',
  'transactions',
  'events',
  'event_addresses',
  'type_of_payments',
  'credit_cards',
  'bank_transfers',
];
const createCollections = async () => {
  for (const collectionName of arrayCollections) {
    try {
      await db.createCollection(collectionName);
      console.log(`Collection "${collectionName}" was created.`);
    } catch (error) {
      console.error(`Error when creating a collection "${collectionName}": ${error}`);
    }
  }

  console.log('All collections were successfully created.');
};

createCollections()
  .then(() => {
    console.log('Collections were created.');
    mongoose.connection.close();
  })
  .catch((error) => {
    console.error('Problem when creating collections', error);
    mongoose.connection.close();
  });
