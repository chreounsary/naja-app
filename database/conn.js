const MONGO_URL = 'mongodb+srv://naja:123@cluster0.i0f2n52.mongodb.net/test';
import mongoose from "mongoose";
const connectMongo = async() => {
  try{
    const { connection } = await mongoose.connect(MONGO_URL);
    if(connection.readyState == 1){
      console.log('Database has been connected');
    }
  }catch(errors){
    return Promise.reject(errors)
  }
}
export default connectMongo;