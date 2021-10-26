const startBtn = document.getElementById("startBtn");
const video = document.getElementById("preview");

let stream;
let recorder;
let videoFile;
//업데이트 되야만 하는 요소들이기 때문에 const대신 let을 써준다.(생성x업데이트o)

const handleDownload = () => {
    const a = document.createElement("a");
    a.href = videoFile;
    a.download = "MyRecording.webm";
    document.body.appendChild(a);
    a.click();
  };

const handleStop = () => {
  startBtn.innerText = "Download Recording";
  startBtn.removeEventListener("click", handleStop);
  startBtn.addEventListener("click", handleDownload);
  recorder.stop();
};

const handleStart = () => {
  startBtn.innerText = "Stop Recording";
  startBtn.removeEventListener("click", handleStart);
  startBtn.addEventListener("click", handleStop);
  recorder = new MediaRecorder(stream, { mimeType: "video/webm" });
  recorder.ondataavailable = (event) => {
    videoFile = URL.createObjectURL(event.data);
    video.srcObject = null;
    video.src = videoFile;
    video.loop = true;
    video.play();
  };
  
  recorder.start();
 
};

const init = async () => {
  stream = await navigator.mediaDevices.getUserMedia({
    audio: true,
    video: false,
  });
  video.srcObject = stream;
  video.play();
};

init();

startBtn.addEventListener("click", handleStart);

// ----------------------------------------------------------------------------- //
//여기까지가 비디오 오디오 녹화 기능 !!주의!! 웹캠이나 오디오장치가 없으면 
//uncaught (in promise) domexception: requested device not found 이런 에러가 발생한다. 
//모든건 init function으로 부터 시작되는데 init function은 getUserMedia라는 function을 호출한다.
//getUserMedia는 mediaDevices라는 객체의 function인데 이 mediaDevice는 마이크, 카메라 같은 장치들에 접근하게 해준다.
//현재 나의 getUserMedia는 오디오만 true로 되어있는데 웹캠이 있는곳에서 true로 바꿔주고 실행하면 잘실행된다. (upload.pug에서 주석처리도 풀어줘야함)
