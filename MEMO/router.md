# ROUTER 

1. 요청을 처리하기 위해 app.get([URL], [Handler])을 사용하는 대신, 라우터를 만들고 라우터가 GET 요청을 처리하도록 할 수 있습니다.
2. app.use("/", homeRouter) 만들기 - 사용자가 GET 요청을 보내면 요청이 homeRouter로 라우팅됩니다.
3. 그런 다음 아래와 같이 homeRouter라는 상수 변수를 만듭니다.
const homeRouter = Express.router()
4. 다음과 같이 핸들러 함수를 만듭니다.
cont handleReq = (req, res) => {res.send("Do something")}
5. 라우터를 핸들러에 연결하려면 아래의 코드를 사용합니다.
routerOne.get("/", handleReq);
6. 사용자가 URL "/"를 가져오라는 요청을 받으면 사용자는 Express [app]에서 라우터 [homeRouter]로, 핸들러 함수 [handleReq]로 라우팅됩니다.