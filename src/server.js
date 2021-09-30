import express from "express";

const PORT = 4000;

const app = express();
//이곳부터 express와 관련된 코드를 작성//
app.get("/",() => console.log("sombody is trying to go home."));
// 이렇게 해도 됨 const handlehome = () => console.log("sombody is trying to go home.")//


const handleListening = () => console.log(`Server listning on port http://localhost:${PORT}`);

app.listen(PORT, handleListening)

