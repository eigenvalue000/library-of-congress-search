
var search = $('.search-bar')
var requestUrl = `https://www.loc.gov/search/?q=${search}&fo=json`
function getApi(requestUrl) {
    fetch(requestUrl)
        .then(function (response) {
            console.log(response);
            // if (response.status === 200) {
            //     responseText.textContent = response.status;
            // }
            return response.json();
        });
}

$(document).ready(function () {
    $('.btn').click(function () {
        getApi(requestUrl);
    })
})

