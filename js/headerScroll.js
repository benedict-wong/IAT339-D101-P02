// implemented using reference to https://www.w3schools.com/howto/howto_js_navbar_hide_scroll.asp
if(window.innerHeight < window.innerWidth){
  var lastScrollPos = window.pageYOffset;
  window.onscroll = function() {
  var currScrollPos = window.pageYOffset;
    if (lastScrollPos > currScrollPos) {
      document.getElementById("header").style.top = "0";
      document.querySelector(".main-content").style.paddingTop = "12em";
    } else {
      document.getElementById("header").style.top = "-15em";
      document.querySelector(".profile-right").style.paddingTop = "";
    }
    lastScrollPos = currScrollPos;
  }
}
