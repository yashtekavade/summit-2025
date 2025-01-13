import app from './server.js';
import summitDAO from './dao/summitDAO.js';
import mongodb from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const MongoClient = mongodb.MongoClient;
const uri = process.env.MONGO_URL;

(async () => {
  try {
    const client = await MongoClient.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');

    await summitDAO.InjectDB(client);

    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log('Server is listening on port ' + port);
    });
  } catch (err) {
    console.error('Failed to connect to MongoDB', err);
    process.exit(1);
  }
})();
