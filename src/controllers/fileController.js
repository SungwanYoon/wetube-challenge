import fs from "fs";
import path from "path";

export const file = (req, res) => {
  res.render("file");
};

export const fileAdd = (req, res) => {
  fs.readFile(req.file.path, "utf8", function(err, data) {
    if (err) {
      res.render("read", { txtContent: err });
    } else {
      res.render("read", { txtContent: data });
    }
  });
};
