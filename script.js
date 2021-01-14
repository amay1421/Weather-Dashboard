var cityName = $("#search-city").val();

var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=0d2a7f7bab7c452a6b8b48c2632901db";

var savedCities = JSON.parse(localStorage.getItem('cityListNames')) || [];

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
              //Get 5 Day Calendar dates
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
            //Get 5 day calendar temps
          var Kalvin = response.list[2].main.temp
          var temperature = (Kalvin -273.15) * 1.80 + 32
          tempF = Math.floor(temperature);
          $("#temperature-day1").text(tempF + " F")   
            //day 2 temp
          var Kalvin = response.list[10].main.temp
          var temperature = (Kalvin -273.15) * 1.80 + 32
          tempF = Math.floor(temperature);
          $("#temperature-day2").text(tempF + " F")  
          //day 3 temp
          var Kalvin = response.list[18].main.temp
          var temperature = (Kalvin -273.15) * 1.80 + 32
          tempF = Math.floor(temperature);
          $("#temperature-day3").text(tempF + " F")  
          // day 4 temp
          var Kalvin = response.list[26].main.temp
          var temperature = (Kalvin -273.15) * 1.80 + 32
          tempF = Math.floor(temperature);
          $("#temperature-day4").text(tempF + " F")  
          // day 5 temp
          var Kalvin = response.list[34].main.temp
          var temperature = (Kalvin -273.15) * 1.80 + 32
          tempF = Math.floor(temperature);
          $("#temperature-day5").text(tempF + " F")  
        // 5 Day forecast weather icons: day 1
          var day1Image = $("#image-day1")
          var newLink1 = "http://openweathermap.org/img/wn/" + response.list[2].weather[0].icon +"@2x.png"
          day1Image.attr("src", newLink1)
          // day 2 weather icon
          var day2Image = $("#image-day2")
          var newLink2 = "http://openweathermap.org/img/wn/" + response.list[10].weather[0].icon +"@2x.png"
          day2Image.attr("src", newLink2)
        // day 3 weather icon
        var day3Image = $("#image-day3")
        var newLink3 = "http://openweathermap.org/img/wn/" + response.list[18].weather[0].icon +"@2x.png"
        day3Image.attr("src", newLink3)
        // day 4 weather icon
        var day4Image = $("#image-day4")
        var newLink4 = "http://openweathermap.org/img/wn/" + response.list[26].weather[0].icon +"@2x.png"
        day4Image.attr("src", newLink4)
        // day 5 weather icon
        var day5Image = $("#image-day5")
        var newLink5 = "http://openweathermap.org/img/wn/" + response.list[34].weather[0].icon +"@2x.png"
        day5Image.attr("src", newLink5)
        // Humidity for 5 Day forecast: day 1
        var day1Humidity = $("#humidity-day1")
        day1Humidity.text(response.list[2].main.humidity + "%")
        $("#humidity-day1").append(day1Humidity)
         // day 2 humidity
        var day2Humidity = $("#humidity-day2")
        day2Humidity.text(response.list[10].main.humidity + "%")
        $("#humidity-day2").append(day2Humidity)
        // day 3 humidity
        var day3Humidity = $("#humidity-day3")
        day3Humidity.text(response.list[18].main.humidity + "%")
        $("#humidity-day3").append(day3Humidity)
        // day 4 humidity
        var day4Humidity = $("#humidity-day4")
        day4Humidity.text(response.list[26].main.humidity + "%")
        $("#humidity-day4").append(day4Humidity)
        // day 5 humidity
        var day5Humidity = $("#humidity-day5")
        day5Humidity.text(response.list[34].main.humidity + "%")
        $("#humidity-day5").append(day5Humidity)
          })
          
  });
  for (let index = 0; index < savedCities.length; index++) {
    var List = $("#generatedList")
    var newItem = $("<li>")
    newItem.addClass("list-group-item")
    newItem.text(savedCities[index])
    List.append(newItem)
  }
  

// function clearHistory(event){
//     event.preventDefault();
//     savedCities=[];
//     localStorage.removeItem("cityListNames");
//     document.location.reload();



