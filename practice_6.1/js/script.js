const form = document.forms[0];

form.onsubmit = function(e){
	e.preventDefault();

const city = form.elements.city.value;
const APIkey = '7a6c8d83a9576ad2b08ab9f6b2af0594';
const url = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+APIkey;
const temp = document.querySelector('.tempResult');
const windSpeed = document.querySelector('.windSpeedResult');

let xhr = new XMLHttpRequest();

    xhr.open('GET', url, false);
    xhr.send();

if(xhr.status != 200){
	console.log(xhr.status + ' ' + xhr.statusText);
} else {
	let DATA = JSON.parse(xhr.responseText);
	temp.innerHTML = Math.round(DATA.main.temp - 273) + ' ' + '°C';
	windSpeed.innerHTML = DATA.wind.speed + ' ' + 'м/с';
    }
}

