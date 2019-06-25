// inspiration adapted from: https://www.w3schools.com/howto/howto_js_slideshow.asp
'use strict';
function showImageMU(x){
  if(x == "1"){
    document.querySelector('.dot-1').className = "image-dot dot-1 image-dot-active"
    document.querySelector('.dot-2').className = "image-dot dot-2"
    document.querySelector('.dot-3').className = "image-dot dot-3"
    document.querySelector('.image-preview').src = "img/item_1_0.png"
    document.querySelector('.image-preview').alt = "Man Utd image 1 preview"

  }
  if(x == "2"){
    document.querySelector('.dot-1').className = "image-dot dot-1"
    document.querySelector('.dot-2').className = "image-dot dot-2 image-dot-active"
    document.querySelector('.dot-3').className = "image-dot dot-3"
    document.querySelector('.image-preview').src = "img/item_1_1.png"
    document.querySelector('.image-preview').alt = "Man Utd image 2 preview"

  }
  if(x == "3"){
    document.querySelector('.dot-1').className = "image-dot dot-1"
    document.querySelector('.dot-2').className = "image-dot dot-2"
    document.querySelector('.dot-3').className = "image-dot dot-3 image-dot-active"
    document.querySelector('.image-preview').src = "img/item_1_2.png"
    document.querySelector('.image-preview').alt = "Man Utd image 3 preview"

  }

}

function showImageTH(x){
  if(x == "1"){
    document.querySelector('.dot-1').className = "image-dot dot-1 image-dot-active"
    document.querySelector('.dot-2').className = "image-dot dot-2"
    document.querySelector('.dot-3').className = "image-dot dot-3"
    document.querySelector('.image-preview').src = "img/item_2_0.png"
    document.querySelector('.image-preview').alt = "Hotspurs image 1 preview"

  }
  if(x == "2"){
    document.querySelector('.dot-1').className = "image-dot dot-1"
    document.querySelector('.dot-2').className = "image-dot dot-2 image-dot-active"
    document.querySelector('.dot-3').className = "image-dot dot-3"
    document.querySelector('.image-preview').src = "img/item_2_1.png"
    document.querySelector('.image-preview').alt = "Hotspurs image 2 preview"

  }
  if(x == "3"){
    document.querySelector('.dot-1').className = "image-dot dot-1"
    document.querySelector('.dot-2').className = "image-dot dot-2"
    document.querySelector('.dot-3').className = "image-dot dot-3 image-dot-active"
    document.querySelector('.image-preview').src = "img/item_2_2.png"
    document.querySelector('.image-preview').alt = "Hotspurs image 3 preview"

  }

}


function sortBy(key){
  if(key == '1'){
    // New to Old
    document.getElementById('MU1920').style.order="1"
    document.getElementById('MU1819').style.order="2"
    document.getElementById('TH1819').style.order="3"
    document.getElementById('MC1819').style.order="4"
    document.getElementById('C1819').style.order="5"
    document.getElementById('E1819').style.order="6"
    document.getElementById('A1718').style.order="7"
    document.getElementById('MU9800').style.order="8"
  }

  else if(key == '2'){
    // Old to New
    document.getElementById('MU9800').style.order="1"
    document.getElementById('A1718').style.order="2"
    document.getElementById('MU1819').style.order="3"
    document.getElementById('TH1819').style.order="4"
    document.getElementById('MC1819').style.order="5"
    document.getElementById('C1819').style.order="6"
    document.getElementById('E1819').style.order="7"
    document.getElementById('MU1920').style.order="8"


  }
  else if(key == '3'){
    // Low to High
    document.getElementById('A1718').style.order="1"
    document.getElementById('MU1819').style.order="2"
    document.getElementById('TH1819').style.order="3"
    document.getElementById('MC1819').style.order="4"
    document.getElementById('C1819').style.order="5"
    document.getElementById('E1819').style.order="6"
    document.getElementById('MU1920').style.order="7"
    document.getElementById('MU9800').style.order="8"

  }
  else if(key == '4'){
    // High to Low
    document.getElementById('MU9800').style.order="1"
    document.getElementById('MU1819').style.order="2"
    document.getElementById('TH1819').style.order="3"
    document.getElementById('MC1819').style.order="4"
    document.getElementById('C1819').style.order="5"
    document.getElementById('E1819').style.order="6"
    document.getElementById('MU1920').style.order="7"
    document.getElementById('A1718').style.order="8"

  }
}

function updatePrefs(x){
  if(x == "1"){
    document.querySelector(".passwordUpdate").style.display="block";
  }
  else{
  document.querySelector(".updateMessage").style.display="block";
  }
}

function eye(x){
  if(x == '1'){
    if(document.querySelector("#curr-pass").getAttribute('type') == "password"){
      document.querySelector("#curr-pass").setAttribute('type','text');
    }
    else if(document.querySelector("#curr-pass").getAttribute('type') == "text"){
      document.querySelector("#curr-pass").setAttribute('type','password');
    }
  }
  else if(x == '2'){
    if(document.querySelector("#new-pass").getAttribute('type') == "password"){
      document.querySelector("#new-pass").setAttribute('type','text');
    }
    else if(document.querySelector("#new-pass").getAttribute('type') == "text"){
      document.querySelector("#new-pass").setAttribute('type','password');
    }
  }

  else if(x == '3'){
    if(document.querySelector("#retype-pass").getAttribute('type') == "password"){
      document.querySelector("#retype-pass").setAttribute('type','text');
    }
    else if(document.querySelector("#retype-pass").getAttribute('type') == "text"){
      document.querySelector("#retype-pass").setAttribute('type','password');
    }
  }


}

// function changeProfileImg(){
//   var val = document.getElementById('picUpload').value;
//   if(val){
//     document.querySelector('profile-picture').src = val;
//   }
// }
