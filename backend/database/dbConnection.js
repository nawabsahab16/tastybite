import mongoose from "mongoose";

 export const dbConnection = () => {
    mongoose
    .connect(process.env.MONGO_URL, {
        dbName: "Tasty bite"
    })
    .then(()=> {
        console.log("Connected to database Successfully!!");
    })
    .catch(err=>{
        console.log(`Some error occured while connection to the Database ${err}`);
    });
};