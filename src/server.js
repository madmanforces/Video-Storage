import express from "express";

const PORT = 4000;

const app = express();
//이곳부터 express와 관련된 코드를 작성//
const handlehome = (req,res) => {
    return res.send("응답해라 노예야!");
}

app.get("/",handlehome);

const handleListening = () => console.log(`Server listning on port http://localhost:${PORT}`);

app.listen(PORT, handleListening)

