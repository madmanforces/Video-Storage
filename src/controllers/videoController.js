import video from "../models/video";

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
  const videos = await video.find({});
  return res.render("home", { pageTitle: "Home", videos });
};

export const watch = (req, res) => {
  const { id } = req.params;
  return res.render("watch", { pageTitle: `Watching` });
};
export const getEdit = (req, res) => {
  const { id } = req.params;
  return res.render("edit", { pageTitle: `Editing` });
};
export const postEdit = (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    return res.redirect(`/videos/${id}`);
};
export const getUpload = (req, res) => {
    return res.render("upload", { pageTitle: "Upload Video" });
};
export const postUpload = (req, res) => {
    const { title } = req.body;
    return res.redirect("/");
};









