2021/09/30 WETUBE CLONE - GET Request

1. 서버를 만든 후에는 서버가 사용자 요청에 응답하도록 만들어야 합니다.
2. HTTP 프로토콜을 사용하여 요청합니다. 이 요청을 GET 요청이라고 합니다.
3. 주소 표시줄에 URL을 입력하고 페이지가 로드되면 실제로 GET 요청을 서버로 전송하여 응답을 받고 브라우저에 응답을 표시합니다.

저장할 때마다 서버가 다시 시작됩니다.
-> 최신서버를 가지고 있다.

서버가 요청에 응답하도록 만드는 방법
/를 가져올 수 없음
- /: 루트 또는 서버의 첫 페이지
- 예: google.com으로 이동 === google.com/으로 이동
- GET: HTTP 메서드
-- HTTP: https
--- 서버와의 대화 방식 또는 서버 간 통신 방식
- 여러 방법 중 하나지만 가장 견고하고 오래된 방법이며 첫 번째 방법이다.
- https://nomadcoders.co에 가면 브라우저가 당신을 위해 HTTP 요청을 하고 있다.
--- HTTP 요청: 웹 사이트로 이동하거나 서버에 정보를 보내는 방법
--- HTTP에는 여러 가지 메서드가 있으며, 그 중 하나가 GET입니다.
--- GET: "HTTP, 이 페이지를 주세요."
---- 로컬호스트(localhost)에 가면 그렇게 한다:4000
---- 아무것도 하지 않았는데 브라우저가 자동으로 이 페이지를 가져오려고 합니다.
--- 웹사이트에 가면, 실제로 웹사이트에 가는 것이 아니라 "집사야, 네 홈페이지를 나에게 가져다 주렴"라고 말하는 것이다.
---- 브라우저가 웹 사이트를 요청하고 페이지를 가져옵니다.

"mongodb://127.0.0.1:27017/suntube"