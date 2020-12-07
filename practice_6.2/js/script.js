class Tiger {
	constructor (name){
		this.name = name;
	}
	feedCat(){
		return 'Purrrrrr';
	}
}
class angryTiger extends Tiger {
	throwDart(){
		return 'ZzZzzZzZz';
	}
}
const Barsik = new Tiger ('Barsik');
console.log(Barsik.feedCat());
const Murzik = new angryTiger ('Murzik');
console.log(Murzik);
console.log(Murzik.throwDart);