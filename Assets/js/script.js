var cityName = $("#search-city").val();

var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=0d2a7f7bab7c452a6b8b48c2632901db";

var savedCities = JSON.parse(localStorage.getItem('cityListNames')) || [];


// // $.ajax({
// //     url: queryURL,
// //     method: "GET"
// //   }).then(function (response) {
  

// });



$("#search-button").on("click", function(event) {
    event.preventDefault();
    var cityName = $("#search-city").val().trim();

    savedCities.push(cityName);

    localStorage.setItem("cityListNames", JSON.stringify(savedCities));
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
        })
          
        var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=0d2a7f7bab7c452a6b8b48c2632901db"
        $.ajax({
            url: queryURL,
            method: "GET"
          }).then(function (response) {
              console.log(response)
          var day1Date = $("#day1date")
          day1Date.text(response.list[2].dt_txt)
          var day2Date = $("#day2date")
          day2Date.text(response.list[10].dt_txt)
          var day3Date = $("#day3date")
          day3Date.text(response.list[18].dt_txt)
          var day4Date = $("#day4date")
          day4Date.text(response.list[26].dt_txt)
          var day5Date = $("#day5date")
          day5Date.text(response.list[34].dt_txt)
        
          var day1Temp = $("temperature-day1")
          day1Date.text(response.list[2].dt_txt)

          var day1Image = $("#image-day1")
          var newLink1 = "http://openweathermap.org/img/wn/" + response.list[2].weather[0].icon +"@2x.png"
          day1Image.attr("src", newLink1)
          })
  });




  for (let index = 0; index < savedCities.length; index++) {
    var List = $("#generatedList")
    var newItem = $("<li>")
    newItem.addClass("list-group-item")
    newItem.text(savedCities[index])
    List.append(newItem)
  }
  






// function getWeather (cityName) {
//     $.ajax({
//         url: queryURL,
//         method: "GET"
//       }).then(function (response) {
//     $('#fofrecast)'.empty()
      
    
// });


