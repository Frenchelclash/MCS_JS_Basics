const answerBox = document.querySelector('.answer');
let HaveEnough = function(){
  	    let totalCash = prompt('Сколько наличных у вас есть?')
        let watchesCount = prompt('Сколько часов вы хотите купить?')
        let watchesCost = prompt('Сколько стоят часы?')
        let earringsCount = prompt('Сколько пар серёжек вы хотите купить?')
        let earringsCost = prompt('Сколько стоят серёжки?')
	    watchSum = parseInt(watchesCost)*parseInt(watchesCount);
        earringsSum = parseInt(earringsCost)*parseInt(earringsCount);
        watchSum = parseInt(watchSum);
        earringsSum = parseInt(earringsSum);
        totalCash = parseInt(totalCash);
        switch ( earringsSum + watchSum <= totalCash ) {
        	case true:
	        answerBox.innerHTML = 'Enough $$$';
	        break;
	        case false:
	         answerBox.innerHTML = 'Not enough $$$';}
}


