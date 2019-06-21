// implemented using reference to https://www.w3schools.com/howto/howto_js_navbar_hide_scroll.asp

var lastScrollPos = window.pageYOffset;
window.onscroll = function() {
var currScrollPos = window.pageYOffset;
  if (lastScrollPos > currScrollPos) {
    document.getElementById("header").style.top = "0";
    document.querySelector(".main-content").style.paddingTop = "12em";
  } else {
    document.getElementById("header").style.top = "-15em";
    document.querySelector(".main-content").style.paddingTop = "5em";
  }
  lastScrollPos = currScrollPos;
}
