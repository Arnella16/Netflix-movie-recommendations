// utils/database.js
import mongoose from 'mongoose';

const databaseConnection = async () => {
  try {
    const uri = 'mongodb+srv://tejasrigarapati23:nqYjFxMqoQpmuKTT@cluster-netflix.3pa1nrp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-netflix';
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Exit the process with failure
  }
};

export default databaseConnection;
