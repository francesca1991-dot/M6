import mongoose from "mongoose";
import "dotenv/config";


const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDb Connected: ${conn.connection.host}`)
    } catch (error) {
        console.log(error)
    }
}
export default connectDB;