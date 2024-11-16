const mongoose = require('mongoose');

const connectDB = async () => {
  const mongoURI = process.env.MONGODB_URI;
  const dbName = process.env.DB_Name;

  if (!mongoURI || !dbName) {
    console.error('MongoDB URI or Database Name is not defined in environment variables.');
    process.exit(1);
  }

  console.log(`Connecting to MongoDB at ${mongoURI}/${dbName}`);
  
  try {
    const connection = await mongoose.connect(`${mongoURI}/${dbName}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected:', connection.connection.host);
  } catch (err) {
    console.error('Error connecting to MongoDB:', err.message);
    process.exit(1); 
  }
};

module.exports = connectDB;