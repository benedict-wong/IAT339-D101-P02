// inspiration adapted from: https://www.w3schools.com/howto/howto_js_slideshow.asp

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

// function changeProfileImg(){
//   var val = document.getElementById('picUpload').value;
//   if(val){
//     document.querySelector('profile-picture').src = val;
//   }
// }
