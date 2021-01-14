var cityName = $("#search-city").val();

var queryURL = "https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=0d2a7f7bab7c452a6b8b48c2632901db";


// // $.ajax({
// //     url: queryURL,
// //     method: "GET"
// //   }).then(function (response) {
  

// });

$("#search-button").on("click", function(event) {
    event.preventDefault();
    var cityName = $("#search-city").val().trim();
    var queryURL = "https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=0d2a7f7bab7c452a6b8b48c2632901db";
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function (response) {

    });

//     // getWeather(cityName);
  });


// function getWeather (cityName) {
//     $.ajax({
//         url: queryURL,
//         method: "GET"
//       }).then(function (response) {
//     $('#fofrecast)'.empty()
      
    
// });


// let tempF =(response.main.temp -273.15) * 1.80 + 32;
