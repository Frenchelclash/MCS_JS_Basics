const popUp = document.querySelector('.popup');
const openMenu = document.querySelector('.openMenu');
const menu = document.querySelector('.menu');
const closeMenu = document.querySelector('.closeMenu');
const GetPU = document.querySelector('.request');
const closePU = document.querySelector('.closePopup');

GetPU.addEventListener('click', function(){
		popUp.style.display = 'flex';})      
closePU.addEventListener('click', function(){
		popUp.style.display = 'none';}) 
openMenu.addEventListener('click', function(){
		menu.style.left = "0"});
closeMenu.addEventListener('click', function(){
		menu.style.left = "-50vw"});
