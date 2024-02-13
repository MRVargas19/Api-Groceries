import mongoose from "mongoose";
mongoose.connect(process.env.CONNECTION_STRING_DB)
.then(db=> console.log("Data base connect"))
.catch(err=>console.error(err));
export default mongoose;