function showHide(id) {


  if (id === "interactive-elements") {
    document.getElementById("text-styling").style.display= "none";
    document.getElementById("combined-elements").style.display= "none";
  }
  else if (id === "text-styling") {
    document.getElementById("interactive-elements").style.display= "none";
    document.getElementById("combined-elements").style.display= "none";
  }
  else {
    document.getElementById("interactive-elements").style.display= "none";
    document.getElementById("text-styling").style.display= "none";
  }

  var e = document.getElementById(id);
  if (e.style.display === "block") {
    e.style.display = "none";
  }
  else {
    e.style.display = "block";
  }
}

function clearText(id) {
  var x = document.getElementById(id);
  x.value="";
}

function linkTo(url) {
  location.href=url;
}
