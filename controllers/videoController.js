export const trending = (req, res) => res.render("home", {pageTitle: "Home"});

export const see = (req, res) =>res.render("watch");

export const edit = (req,res) =>res.send("edit");

export const search = (res, req) => res.send("Search");

export const upload = (res, req) => res.send("Upload");

export const deletevideo = (res, req) => res.send("Delete Video");





