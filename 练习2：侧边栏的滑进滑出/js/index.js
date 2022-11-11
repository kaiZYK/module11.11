// 设置页面setRem功能
// 找到html
let html = document.documentElement;
function setRem() {
  let ui_w = 357;
  let cl_w = document.documentElement.clientWidth || document.body.clientWidth;
  cl_w = cl_w < 250 ? 250 : cl_w;
  html.style.fontSize = (cl_w / ui_w) * 10 + "px";
}
window.addEventListener("load", setRem);
// 防抖setRem
let timer = null;
window.addEventListener("resize", function () {
  clearTimeout(timer);
  timer = setTimeout(setRem, 50);
});
