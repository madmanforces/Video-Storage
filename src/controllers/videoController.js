import Video from "../models/Video";

/*
console.log("start")
Video.find({}, (error, videos) => {
  if(error){
    return res.render("server-error")
  }
  return res.render("home", { pageTitle: "Home", videos });
});
console.log("finished")


function안에서 return 은 아무 기능도 하지않는다. 단지 마무리라는 뜻일뿐 / 홈에서 리턴되는것은 어디어도 없다. 
렌더는 한번만 실행할수있으므로 확실한 표현으로 리턴을 써준다
여기선 function이 작업후 종료되게끔 리턴을 써준다 반복될수없으니까! "#function을 종료!!"
*/

export const home = async (req, res) => {
  const videos = await Video.find({});
  return res.render("home", { pageTitle: "Home", videos });
};

export const watch = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id);
  if (!video) {
    return res.render("404", { pageTitle: "Video not found." });
  }
  return res.render("watch", { pageTitle: video.title, video });
};
export const getEdit = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id);
  if (!video) {
    return res.render("404", { pageTitle: "Video not found." });
  }
  return res.render("edit", { pageTitle: `Edit: ${video.title}`, video });
};
export const postEdit = async (req, res) => {
    const { id } = req.params;
    const { title, description, hashtags } = req.body;
    const video = await Video.findById(id);
    if (!video) {
      return res.render("404", { pageTitle: "Video not found." });
    }
    video.title = title;
    video.description = description;
    video.hashtags = hashtags
      .split(",")
      .map((word) => (word.startsWith("#") ? word : `#${word}`));
    await video.save();
    return res.redirect(`/videos/${id}`);
  };
export const getUpload = (req, res) => {
    return res.render("upload", { pageTitle: "Upload Video" });
};
export const postUpload = async (req, res) => {
  const { title, description, hashtags } = req.body;
  try {
    await Video.create({
      title,
      description,
      hashtags,
    });
    return res.redirect("/");
  } catch (error) {
    return res.render("upload", {
      pageTitle: "Upload Video",
      errorMessage: error._message,
    });
  }
};









