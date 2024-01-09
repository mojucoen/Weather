const express = require('express')
const router = express.Router()
const Weather = require('../model/weatherDB')
    // const moment = require('moment')
const { default: axios } = require('axios')
let config = require('../config/config')
let weatherData
router.get('/cityName/:city', function(req, res) {
    const city = req.params['city']
    if (city) {
        try {
            axios.get(`${config.apiCordinait}q=${city}&limit=${config.limit}&appid=${config.apiKey}`).then(response => {
                if (response.data[0]) {
                    const lat = response.data[0].lat
                    const lon = response.data[0].lon
                    axios.get(`${config.apiCity}lat=${lat}&lon=${lon}&units=${config.tempUnit}&appid=${config.apiKey}`).then(res1 => {
                        // console.log(res1.data)

                        let DATA = res1.data
                        weatherData = { name: DATA.name, temperature: DATA.main.temp, condition: DATA.weather[0].description, conditionPic: DATA.weather[0].icon }

                        res.send(weatherData)
                    })
                }
            })
        } catch (error) {

            res.send(console.log("name of city not found"))

        }
    }

})


router.post('/addWeather', function(req, res) {
    weatherAdd = req.body
    if (weatherAdd) {
        try {
            Weather.findOne({ 'name': weatherAdd.name }).then(respCond => {
                if (respCond) {
                    console.log("it's alraedy added")
                    Weather.find({}).then(response => {
                        res.status(208).json(response)

                    })
                } else {

                    exp = new Weather(weatherAdd)
                    exp.save()
                    console.log("city added")

                    Weather.find({}).then(response => {
                        res.status(201).json(response)

                    })

                }
            })
        } catch (error) {}
    }
})

router.delete('/delWeather', function(req, res) {
    weatherAdd = req.body
    console.log(weatherAdd)
    if (weatherAdd) {
        try {

            Weather.findOneAndDelete({ 'name': weatherAdd.name }).then(respCond => {
                if (respCond) {
                    console.log("it's alraedy added")
                    Weather.find({}).then(response => {
                        res.status(208).json(response)

                    })
                } else {

                    exp = new Weather(weatherAdd)
                    exp.save()
                    console.log("city added")

                    Weather.find({}).then(response => {
                        res.status(201).json(response)

                    })

                }
            })
        } catch (error) {}
    }
})




router.get('/weatherDB', function(req, res) {
    Weather.find({}).sort({ id: -1 }).then(response => {
        res.status(201).json(response)

    })
})



module.exports = router