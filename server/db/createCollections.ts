import mongoose, { ConnectOptions } from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectionString: string = process.env.ATLAS_URI || '';

const connectOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as ConnectOptions;

const arrayCollections = [
  'user',
  'user_address',
  'ticket',
  'transaction',
  'event',
  'event_address',
  'type_of_payment',
  'credit_card',
  'bank_transfer',
  'paypal_info',
  'google_pay',
  'apple_pay',
];

mongoose
  .connect(connectionString, connectOptions)
  .then(() => {
    const createCollectionsPromises = arrayCollections.map((collectionName) => {
      return mongoose.connection
        .createCollection(collectionName)
        .then(() => {
          console.log(`Collection "${collectionName}" was created.`);
        })
        .catch((error) => {
          console.error(`Error when creating a collection "${collectionName}": ${error}`);
        });
    });

    return Promise.all(createCollectionsPromises);
  })
  .then(() => {
    console.log('All collections were successfully created.');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
