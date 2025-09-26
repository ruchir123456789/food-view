import mongoose from "mongoose"

function connectDB() {
    mongoose.connect("mongodb://localhost:27017/food-view").then(
        () => { console.log("MongoDB connected"); }
    ).catch(
        (err) => { console.log("MongoDB not connected ", err); }
    )
}

export default connectDB