const dairyIngredients = $('#dairyIngredients')
const glutenIngredients = $('#glutenIngredients')
const SUB_STR = 'check out this recipe: '
const BOD_STR = 'you can see the recipe in this video '
const createWeather = function(rend) {
    $.post('/addWeather', rend).then((res) => {
            if (res) {

                console.log(res);
                renderAdd(res)
                    // render(res);
            } else {
                console.log("user is added");
            }
            // Expected output: 123
        })
        .fail((xhr, status, error) => {
            console.error("Error occurred:", error);
        });
};
const deleteWeather = function(rend) {
    $.ajax({
        url: '/delWeather',
        type: 'DELETE',
        data: rend,
        success: function(res) {
            if (res) {
                console.log(res);
                renderAdd(res);
            } else {
                console.log("User is added");
            }
            // Expected output: 123
        },
        error: function(xhr, status, error) {
            console.error("Error occurred:", error);
        }
    });
};