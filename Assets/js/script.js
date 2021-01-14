var cityName = $("#search-city").val();

var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=0d2a7f7bab7c452a6b8b48c2632901db";


// // $.ajax({
// //     url: queryURL,
// //     method: "GET"
// //   }).then(function (response) {
  

// });

$("#search-button").on("click", function(event) {
    event.preventDefault();
    var cityName = $("#search-city").val().trim();
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=0d2a7f7bab7c452a6b8b48c2632901db";
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function (response) {
          console.log(response)
        //   Get Current city name
          var currentCity = $("#name")
          currentCity.text(response.name)
          $("#name").append(currentCity)
            // Get Current City Temp
          var Kalvin = response.main.temp
          var temperature = (Kalvin -273.15) * 1.80 + 32
          tempF = Math.floor(temperature);
          $("#temperature").text(tempF + " F")   
          // Get Current Humidity
          var currentHumidity = $("#humidity")
          currentHumidity.text(response.main.humidity + "%")
          $("#humidity").append(currentHumidity)
          // Get Wind Speed
          var currentWindspeed = $("#wind-speed")
          currentWindspeed.text(response.wind.speed + " MPH")
          $("#wind-speed").append(currentWindspeed)
          // Get UV index

    // "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

    })
  });


// function getWeather (cityName) {
//     $.ajax({
//         url: queryURL,
//         method: "GET"
//       }).then(function (response) {
//     $('#fofrecast)'.empty()
      
    
// });


