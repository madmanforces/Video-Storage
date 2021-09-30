https://expressjs.com/ko/4x/api.html#express.json [ express document ]
참고
RESPOND
1. .get("URL", "GET 핸들러 함수")을 설정하면 Get 요청이 처리되지만 GET requeust에는 응답하지 않는다!
2. 서버가 사용자의 GET 요청에 응답하도록 하려면 EventHandler 기능을 화살표 함수 기능으로 수정해야 합니다. 그런 다음 화면과 같이 응답 인수 .end() 또는 .send()를 만듭니다.
구조 손잡이홈 = (req, res) => {
답장.send ("노예야 응답하거라!.");
};
3. GET 핸들러 함수 내의 첫 번째 인수는 일반적으로 "req"로 명명되며 요청 개체를 사용합니다.
4. 두 번째 인수는 보통 "res"라고 이름 붙여지고 응답 객체를 받아들입니다.
5. res.end()는 응답을 반환하지 않고 종료하며 res.send()는 사용자의 브라우저에 입력을 반환합니다. 이 예에서는 서버에 홈("/") URL 페이지를 요청할 때 브라우저에 "노예야 응답하거라!"라는 문자열이 표시됩니다.

