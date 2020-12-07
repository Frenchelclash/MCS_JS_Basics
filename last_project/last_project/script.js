class Person {
	constructor (name){
		this.name = name;
		this.happiness = 0;
	}
	hasCat(){
		return this.happiness = parseInt(this.happiness) + 1;
	}
	hasRest(){
		return this.happiness = parseInt(this.happiness) + 1;
	}
	hasMoney(){
		return this.happiness = parseInt(this.happiness) + 1;
	}
	﻿isSunny(){
		const url = 'http://api.openweathermap.org/data/2.5/weather?q=Moscow&appid=7a6c8d83a9576ad2b08ab9f6b2af0594';
		let xhr = new XMLHttpRequest();
		xhr.open('GET', url, false);
		xhr.send();
		let DATA = JSON.parse(xhr.responseText);
		if (DATA.main.temp - 273 > 0){
			return this.happiness = parseInt(this.happiness) + 1;
		} else {
			return this.happiness;
		}
	}
}

const form = document.forms[0];
const personName = document.querySelector('.personName');
const icon = document.querySelector('.icon');


form.onsubmit = function(e) {
	e.preventDefault();
	const name = form.elements.name.value;
	const cat = form.elements.cat.value;
	const rest = form.elements.rest.value;
	const money = form.elements.money.value;

	const User = new Person(name);
	if (cat == "yes") { User.hasCat() };
	if (rest == "yes") { User.hasRest() };
	if (money == "yes") { User.hasMoney() };
	User.isSunny();

	personName.innerHTML = name;
	
	if (User.happiness === 4){
		icon.innerHTML = '😄';
	} else if (User.happiness === 2 || User.happiness === 3){
		icon.innerHTML = '😐';
	} else {
		icon.innerHTML = '☹️';
	}
}
	

