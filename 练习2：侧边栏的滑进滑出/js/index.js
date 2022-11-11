// 设置页面setRem功能
// 找到html
let html = document.documentElement;
function setRem() {
  let ui_w = 357;
  let cl_w = document.documentElement.clientWidth || document.body.clientWidth;
  cl_w = cl_w < 280 ? 280 : cl_w;
  cl_w = cl_w > 800 ? 800 : cl_w;
  html.style.fontSize = (cl_w / ui_w) * 10 + "px";
}
window.addEventListener("load", setRem);
// 防抖setRem
let timer = null;
window.addEventListener("resize", function () {
  clearTimeout(timer);
  timer = setTimeout(setRem, 50);
});

let userPic = document.getElementsByClassName("userPic")[0];
let mask = document.getElementsByClassName("mask")[0];
let user = document.getElementsByClassName("user")[0];
userPic.addEventListener("click", function () {
  mask.style.display = "block";
  user.style.visibility = "visible";
  user.style.left = "0rem";
});
mask.addEventListener("click", function () {
  mask.style.display = "none";
  user.style.left = "-22rem";
  setTimeout(function () {
    user.style.visibility = "hidden";
  }, 500);
});
