function MFunc(){
	let num = parseFloat(prompt('введите число'));
	console.log(Math.abs( Math.pow (num, Math.floor(Math.random()*(9-1)+1))));
}
MFunc();