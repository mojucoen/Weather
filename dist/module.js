let data
const getWeatherDB = function() {
    $.get(`/weatherDB`, function(req, res) {}).then((response) => {
        renderAdd(response)
    })
}

$("#Key-City").on("keypress", function(event) {
    if (event.key === "Enter") {
        findCityWeather($("#Key-City").val());
    }
});


const findCityWeather = function() {
    let searchCity = $("#Key-City").val()

    if (searchCity) {
        $.get(`/cityName/${searchCity}`, function(response) {}).then((res) => {
            console.log(JSON.stringify(res))
            if (res.name) {
                renderSearch(res)
            } else {
                console.log("name of city not found")
            }
            // Expected output: 123
        });
    }

    return data
}
const findMyCord = function() {
    if ("geolocation" in navigator) {
        // Get the user's current position
        navigator.geolocation.getCurrentPosition(function(position) {
            // Get the latitude and longitude
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            $.get(`/coordinates/${latitude}/${longitude}`, function(response) {}).then((res) => {
                console.log(JSON.stringify(res))
                if (res.name) {
                    renderMy(res)
                } else {
                    console.log("name of city not found")
                }
                // Expected output: 123
            });
            // Do something with the coordinates
        }, function(error) {
            // Handle any errors
            console.error("Error getting geolocation:", error);
        });
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}
findMyCord()
getWeatherDB()