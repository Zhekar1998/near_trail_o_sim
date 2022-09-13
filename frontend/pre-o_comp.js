function load_carusell(images){
    document.getElementById("carusell").innerHTML+='';
    for (let i=1; i<images.lenght+1; i++){
    document.getElementById("carusell").innerHTML+= '<div class="mySlides"> <div class="numbertext">'+ i+' / '+ images.lenght+'</div><img src="'+images[i-1]+'" style="width:100%"></div>';
    }
    if (images.lenght>1){
        document.getElementById("carusell").innerHTML+= '<a class="prev" onclick="plusSlides(-1)">&#10094;</a> <a class="next" onclick="plusSlides(1)">&#10095;</a>';
    }
    document.getElementById("carusell").innerHTML+='<div class="caption-container"> <p id="caption"></p></div><div class="row">';
    for (let i=1; i<images.lenght+1; i++){
        document.getElementById("carusell").innerHTML+='<div class="column"><img class="demo cursor" src="'+images[i-1]+'" style="width:100%" onclick="currentSlide(1)" alt="slide'+i+'"></div>'
    }
}

function load_map(maps, legends, names){
    for (let i=1; i<maps.lenght+1; i++){
        document.getElementById("map").innerHTML ='<div class="mySlides2"> <div class="numbertext">'+ i+' / '+ maps.lenght+'</div><img src="'+maps[i-1]+'" style="width:100%"></div>';
    }
    if(maps.lenght>1){
        document.getElementById("map").innerHTML+= '<a class="prev" onclick="plusSlides2(-1,'+names+')">&#10094;</a> <a class="next" onclick="plusSlides2(1,'+names+')">&#10095;</a>';
    }
    document.getElementById("map").innerHTML+='<div class="caption-container"> <p id="caption2"></p></div><div class="row">';
    for (let i=1; i<legends.lenght+1; i++){
        document.getElementById("map").innerHTML+='<div class="mySlides3"> <div class="numbertext">'+ i+' / '+ legends.lenght+'</div><img src="'+legends[i-1]+'" style="width:100%"></div>';
    }
}

function draw_buttons(number_controls){
    document.getElementById("ansvButton").innerHTML = '';
    let b;
    for (let i = 0; i<number_controls; i++){
        switch (i) {
            case 0:
                b = 'A';
                break;
            case 1:
                b = 'B';
            case 2:
                b = 'C';
                break;
            case 3:
                b = 'D';
            case 4:
                b = 'E';    
            default:
                break;
        }
        document.getElementById("ansvButton").innerHTML += '<div class="column"><button>'+b+'</button></div>'
    }
    document.getElementById("ansvButton").innerHTML += '<div class="column"><button>Z</button></div>'
}

function card(controls){
    document.getElementById("card").innerHTML = '<table><tr>';
    for (let i=1; i<controls+1; i++){
        document.getElementById("card").innerHTML += '<th id="controlCard'+i+'">'+i+'</th>'; 
    }
    document.getElementById("card").innerHTML += '</tr><tr>';
    for (let i=1; i<controls+1; i++){
        document.getElementById("card").innerHTML += '<th id="controlCardA'+i+'">A</th>'; 
    }
    document.getElementById("card").innerHTML += '</tr><tr>';
    for (let i=1; i<controls+1; i++){
        document.getElementById("card").innerHTML += '<th id="controlCardB'+i+'">B</th>'; 
    }
    document.getElementById("card").innerHTML += '</tr><tr>';
    for (let i=1; i<controls+1; i++){
        document.getElementById("card").innerHTML += '<th id="controlCardC'+i+'">C</th>'; 
    }
    document.getElementById("card").innerHTML += '</tr><tr>';
    for (let i=1; i<controls+1; i++){
        document.getElementById("card").innerHTML += '<th id="controlCardD'+i+'">D</th>'; 
    }
    document.getElementById("card").innerHTML += '</tr><tr>';
    for (let i=1; i<controls+1; i++){
        document.getElementById("card").innerHTML += '<th id="controlCardE'+i+'">E</th>'; 
    }
    document.getElementById("card").innerHTML += '</tr><tr>';
    for (let i=1; i<controls+1; i++){
        document.getElementById("card").innerHTML += '<th id="controlCardZ'+i+'">Z</th>'; 
    }
    document.getElementById("card").innerHTML += '</tr></table>';    
}


let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n, names) {
  showSlides(slideIndex += n, names);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

let slideIndex2 = 1;
showSlides2(slideIndex2, names);

// Next/previous controls
function plusSlides2(n, names) {
  showSlides2(slideIndex2 += n, names);
}

// Thumbnail image controls
function currentSlide2(n, names) {
  showSlides2(slideIndex2 = n, names);
}

function showSlides2(n, names) {
  let i;
  let slides = document.getElementsByClassName("mySlides2");
  let legslides = document.getElementsByClassName("mySlides3");
  let captionText = document.getElementById("caption2");
  if (n > slides.length) {slideIndex2 = 1}
  if (n < 1) {slideIndex2 = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    legslides[i].style.display = "none";
  }

  slides[slideIndex2-1].style.display = "block";
  legslides[slideIndex2-1].style.display = "block";
  captionText.innerHTML = names[slideIndex-1];
}

