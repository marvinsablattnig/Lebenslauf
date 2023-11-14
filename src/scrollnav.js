var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".screen-nav").style.top = "0";
  } else {
    document.querySelector(".screen-nav").style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
};
