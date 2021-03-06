import  mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
    title: { type: String, required: true, trim: true,  },
    fileUrl: { type: String, required: true },
    thumbUrl: { type: String, required: false },
    description: { type: String, required: true, trim: true, minLength: 2 },
    createdAt: { type: Date, required: true, default: Date.now },
    hashtags: [{ type: String, trim: true }],
    meta: {
        views: { type: Number, default: 0, required: true },
        
    },
    owner: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
});
/* 미들웨어는 모델이 생성되기 전에 만들어져야한다!
    startsWith 메소드로 어떤 문자열이 다른 문자열로 시작하는지 확인 할 수 있습니다. 대소문자를 구분합니다. */
 videoSchema.static("formatHashtags", function (hashtags) {
        return hashtags
      .split(",")
      .map((word) => (word.startsWith("#") ? word : `#${word}`));
  });
  

const Video = mongoose.model("Video", videoSchema);
export default Video;

///비디오의 데이터 형태를 정의 해줌 -> 그다음 모델을 만들고 그다음 비디오형태의 스키마를 만든다 -> 모델은 모델의 이름과
///데이터형태의 스키마로 만든다 -> 그다음 디폴트로 익스폴트 해주고 모두가 해당 모델를 알수있게 해줘야하기때문에
//server.js에 db를 임포트 시킨후 해당연결이 성공적일때 비디오를 임포트 해주는것임 
//db를 몽구스와 연결시켜서 비디오 모델을 인식시키는 ? 그러한 형태//