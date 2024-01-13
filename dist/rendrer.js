const weatherSearch = $("#weatherSearch-template").html()
const templateSearch = Handlebars.compile(weatherSearch)
const weatherAdd = $("#weatherAdd-template").html()
const templateAdd = Handlebars.compile(weatherAdd)
const weatherMy = $("#weatherAdd-template").html()
const templateMy = Handlebars.compile(weatherMy)
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
const renderMy = function(renderer) {
    $("#weathersMy").empty()
    let newHtml = templateSearch({ renderer })
    $("#weathersMy").append(newHtml)
}