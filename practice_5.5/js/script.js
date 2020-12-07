let crypto = [
  {
    name: "Bitcoin",
    price: 1388.37
  },
  {
    name: "Ethereum",
    price: 716
  },
  {
    name: "Litecoin",
    price: 140
  }
]
const names = document.querySelectorAll('.name');
const prices = document.querySelectorAll('.price');
const graphs = document.querySelectorAll('.graph');
 for (a = 0; a<names.length; a++){
  names[a].innerHTML = crypto[a]['name'];
  prices[a].innerHTML =  crypto[a]['price'];
  graphs[a].style.width = (parseFloat(crypto[a]['price']) / parseFloat(crypto[0]['price']) * 100) + "%";
 }
