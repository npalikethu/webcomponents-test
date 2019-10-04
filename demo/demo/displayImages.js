var html='';
$(document).ready(function(){
var dirPath="../assets/";

var slideArry = [
{uri: "../assets/image1.jpg", text: "Caption 1"},
{uri: "../assets/image2.jpg", text: ""},
{uri: "../assets/image3.jpg", text: "Caption 3"},
{uri: "../assets/image4.jpg", text: "Caption 4"},
{uri: "../assets/image5.jpg", text: ""},
{uri: "../assets/image6.jpg", text: ""},
{uri: "../assets/image7.jpg", text: ""},
{uri: "../assets/image8.jpg", text: ""}
];
var slide_count=8;

for(var i=1;i<=slide_count;i++){
    var img_count=8;
    var slide_index = 4;
    html='<div class="container">';
    for(var j=0;j<slideArry.length;j++){
var isCaptionFound = slideArry[j].text != "";
html=html
+'<div class="flowerSlides" onmouseout="show()" onmouseover="hide()"><img src="'+slideArry[j].uri+'" style="width:100%"><div class="'+(isCaptionFound ?'caption' : '')+'">'+slideArry[j].text +'</div></div>'
    ;}
    html=html
    +'<br>'
    +'<div class="rowClass" id="gal">';
    for(var k=1;k<=img_count;k++){
    slide_img=dirPath+"image"+k+".jpg";
    html=html
    +'<div class="column"><img class="demo cursor img-height" src="'+slide_img+'" style="width:100%" onclick="currentSlide('+k+')" alt="image'+k+'"></div>'
    ;}
    html=html
    +'</div>'
    +'</div>';
    $('#test').html(html);
    displaySlides(slide_index);

}

});

function addSlides(n) {
  displaySlides(slide_index += n);
}

function currentSlide(n) {
$('#test').html(html);
  displaySlides(slide_index = n);
}

function displaySlides(n) {
  var i;
  var slides = document.getElementsByClassName("flowerSlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slide_index = 1}
  if (n < 1) {slide_index = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slide_index-1].style.display = "block";
  dots[slide_index-1].className += " active";
  captionText.innerHTML = dots[slide_index-1].alt;
 
}

function hide(){
document.getElementById('gal').style.display="none";
}
function show(){
document.getElementById('gal').style.display="block";
}