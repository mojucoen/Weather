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
getWeatherDB()