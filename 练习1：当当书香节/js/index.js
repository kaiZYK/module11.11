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

// 图片懒加载功能
// 找到全部的img
let images = document.getElementsByClassName("images");
function lazyPic() {
  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  let clientHeight =
    document.documentElement.clientHeight || document.body.clientHeight;
  console.log(scrollTop);
  for (let item of images) {
    let offsetTop = item.offsetTop;
    if (
      scrollTop + clientHeight >= offsetTop - 200 &&
      item.getAttribute("data-src")
    ) {
      let src = item.getAttribute("data-src");
      item.setAttribute("src", src);
      item.removeAttribute("data-src");
    }
  }
}
window.addEventListener("load", lazyPic);
// 节流lazyPic
let flg = true;
window.addEventListener("scroll", function () {
  if (flg) {
    flg = false;
    lazyPic();
    setTimeout(function () {
      flg = true;
    }, 100);
  }
});
