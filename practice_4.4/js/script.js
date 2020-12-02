const answerBox = document.querySelector('.answer');
let HaveEnough = function(){
  	    let totalCash = parseInt(prompt('Сколько наличных у вас есть?'))
        let watchesCount = parseInt(prompt('Сколько часов вы хотите купить?'))
        let watchesCost = parseInt(prompt('Сколько стоят часы?'))
        let earringsCount = parseInt(prompt('Сколько пар серёжек вы хотите купить?'))
        let earringsCost = parseInt(prompt('Сколько стоят серёжки?'))
	    watchSum = watchesCost * watchesCount;
        earringsSum = earringsCost * earringsCount;
        if( earringsSum + watchSum <= totalCash ) {
	        answerBox.innerHTML = 'Enough $$$';}
        else{
	         answerBox.innerHTML = 'Not enough $$$';}
}



