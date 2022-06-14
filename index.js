"use strict"

const fetchImage = function() {
  // const response = await fetch('http://example.com/movies.json');
  // const myJson = await response.json(); //extract JSON from the http response
  // var dailyboot = document.getElementById("imagediv");
  // var img = document.createElement("img")
  // img.classList.addd("image")
  // const dailyboot2 = {url: "https://lh6.googleusercontent.com/-qOPFG4zdfHI/AAAAAAAAAAI/AAAAAAAAA1I/E7WTSHLzCPM/photo.jpg"}
  // // const dailyboot2 = {url: "background.JPG"}
  // img.src = dailyboot2.url;
  // dailyboot.appendChild(img);
  var dailyboot = document.getElementById("imagediv");
  var img = document.createElement("img");
  img.src = "background.JPG"
  img.classList.add("image")
  dailyboot.appendChild(img);

}
fetchImage()
// var dailyboot = document.getElementById("daily");
// const dailyboot2 = {url: "https://lh6.googleusercontent.com/-qOPFG4zdfHI/AAAAAAAAAAI/AAAAAAAAA1I/E7WTSHLzCPM/photo.jpg"}
// dailyboot.src = dailyboot2.url

// var dailyboot = document.getElementById("imagediv");
// var img = document.createElement("img");
// img.src = "background.JPG"
// img.classList.add("image")
// dailyboot.appendChild(img);
