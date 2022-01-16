const api = {
    key:'47ed1579724d74d2172110f23219cd7e',
    baseurl: "https://api.openweathermap.org/data/2.5/",
};

const seacrhBox = document.querySelector('.search-box');

seacrhBox.addEventListener('keypress', setQuery)

function setQuery(e){
    if(e.keyCode == 13){
        getResults(seacrhBox.value);
        console.log(seacrhBox.value);
    }
}

function getResults(query){
    fetch(`${api.baseurl}weather?q=${query}&units=motrics&APPID=${api.key}`)
    .then(weather => {
        return weather.json();
    }).then(displayResults);
}

function displayResults(weather){

}console.log(weather)