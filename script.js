const api = {
    key:"5e749cabe8b2e231de277a7d55b8bf18",
    baseurl:"https://api.openweathermap.org/data/2.5/",
};
const searchBox = document.querySelector('.search-box');

searchBox.addEventListener('keypress', setQuery);

function setQuery(e){
    if(e.keyCode == 13){
        getResults(searchBox.value);
        console.log(searchBox.value);
    }
}

function getResults(query) {
    fetch(`${api.baseurl}weather?q=${query}&unts=metric&APPID=${api.key}`)
    .then(weather =>{
        return weather.json();
    }).then(displayResults);
}


function displayResults(weather){
    console.log(weather);
    let city = document .querySelector(".location .city");
    city.innerHTML = `${weather.name}, ${weather.sys.country}`;
    let now = new Date();
    let date = document.querySelector('.location .date');
    date.innerHTML = dateBuilder(now);
}

function dateBuilder(i){
    let months = [
        'January', 
        'February', 
        'March', 
        'April', 
        'May', 
        'June', 
        'Juiy', 
        'August', 
        'September', 
        'October', 
        'November', 
        'December'
    ];
    let days = [
        'Sunday', 
        'Monday', 
        'Tuesday', 
        'Wednesday', 
        'Thursday', 
        'Friday', 
        'Saturday'
    ];

    let day = days[i.getDay()];
    let date = i.getDate();
    let month = months[i.getMonth()];
    let year = i.getFullYear();


    return `${day} ${date} ${month} ${year}`;
}


