require("dotenv").config();
import "regenerator-runtime";
import "./db";
import "./models/Video";
import "./models/User";
import app from "./server";


const PORT = process.env.PORT || 4000;

const handleListening = () => 
console.log(`Server listning on port http://localhost:${PORT}`);

app.listen(PORT, handleListening)