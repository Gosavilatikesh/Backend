import app from "./src/app.js";
import connectDb from "./src/config/db.config.js";

connectDb()

app.listen(3000, ()=>{
    console.log("server is running");
    
})