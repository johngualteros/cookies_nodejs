import express from "express";
import cookieParser from "cookie-parser";

const app = express();

app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/setcookie", (req, res) => {
  res.cookie("name", "test cookie saved", {
    maxAge: 1000 * 60 * 60 * 24,
    // expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
    httpOnly: true,
    sameSite: "lax",
  });
  res.send("Cookie set");
});

app.get("/getcookies", (req, res) => {
  console.log(req.cookies);
  res.send("reading cookies");
});

app.get("/deletecookies", (req, res) => {
    res.clearCookie("name");
  res.send("deleting cookies");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
