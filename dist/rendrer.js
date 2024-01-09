const weatherSearch = $("#weatherSearch-template").html()
const templateSearch = Handlebars.compile(weatherSearch)
const weatherAdd = $("#weatherAdd-template").html()
const templateAdd = Handlebars.compile(weatherAdd)
const renderSearch = function(renderer) {
    $("#weathers").empty()
    let newHtml = templateSearch({ renderer })
    $("#weathers").append(newHtml)
}
const renderAdd = function(renderer) {
    $("#weathers").empty()
    $("#weathersAdd").empty()
    let newHtml = templateAdd({ renderer })
    $("#weathersAdd").append(newHtml)
}