import User from "../models/User";

export const getJoin = (req, res) => res.render("join", { pageTitle: "Join" });
export const postJoin = async (req, res) => {
    const { name, username, email, password,password2, location } = req.body;
    const pageTitle = "Join";
  if (password !== password2) {
    return res.render("join", {
      pageTitle,
      errorMessage: "비밀번호가 일치하지 않습니다.",
    });
  }
  const exists = await User.exists({ $or: [{ username }, { email }] });
  if (exists) {
    return res.render("join", {
      pageTitle,
      errorMessage: "이미 존재하는 닉네임 혹은 이메일 입니다.",
    });
  }
    await User.create({
      name,
      username,
      email,
      password,
      location,
    });
    return res.redirect("/login");
};

export const edit = (req, res) => res.send("Edit User");

export const remove = (req, res) => res.send("Remove User");

export const login = (req, res) => res.send("Login User");

export const see = (req, res) => res.send("User ID");

export const logout = (req, res) => res.send("Logout User");
