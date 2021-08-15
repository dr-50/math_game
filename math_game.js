var a = Number
var b = Number
var c = Number
var d = Number
var ac = Number
var cd = Number
var ab = Number
var bd = Number
var symbol = ['+', '-', 'x']
var acSymbol = Math.floor(Math.random() * symbol.length);
var cdSymbol = Math.floor(Math.random() * symbol.length);
var abSymbol = Math.floor(Math.random() * symbol.length);
var bdSymbol = Math.floor(Math.random() * symbol.length);
var max = 20
var min = 5

function gameStart(){


//cd=Math.floor(Math.random()*(max-min)+min);
//d=Math.floor(Math.random()*cd)
c = 10
d = 2
switch(cdSymbol) {
    case 0:
        //c=cd-d;
        cd = c+d;
        break;
    case 1:
        //c=cd+d;
        cd = c-d;
        break;
    case 2:
        //c=cd/d;
        cd = c*d;
        break;
    default:
       console.log('default triggered')
}

switch(acSymbol) {
    case 0:
        a=ac-c;
    case 1:
        a=ac+a;
    case 2:
        a=ac/c;
    default:
        console.log('default triggered')
}

switch(abSymbol){
    case 0:
        b=ab-a;
    case 1:
        b=ab+a;
    case 2:
        b=ab/a;
    default:
        console.log('default triggered')
}
//random number for start of game
console.log(`a symbol b is ${symbol[abSymbol]}`, abSymbol);
console.log(`a symbol c is ${symbol[acSymbol]}`, acSymbol);
console.log(`b symbol d is ${symbol[bdSymbol]}`, bdSymbol);
console.log(`c symbol d is ${symbol[cdSymbol]}`, cdSymbol);

console.log(`results cd is ${cd}`);
console.log(`box a is ${a}`);
console.log(`box b is ${b}`);
console.log(`box c is ${c}`);
console.log(`box d is ${d}`);

console.log(symbol);
//Select random math symbol
console.log(symbol[cdSymbol]);

}

gameStart()