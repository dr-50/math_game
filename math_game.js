var a = 0
var b = 0
var c = 0
var d = 0
var ac = 0
var cd = 0
var ab = 0
var bd = 0
var symbol = ['+', '-']
var acSymbol = Math.floor(Math.random() * symbol.length);
var cdSymbol = Math.floor(Math.random() * symbol.length);
var abSymbol = Math.floor(Math.random() * symbol.length);
var bdSymbol = Math.floor(Math.random() * symbol.length);
var gameMax = 20
var boxMax = Math.floor(gameMax/2)
var min = 5

function gameStart(){

ac =Math.floor(Math.random()*(boxMax-min)+min);
ab = Math.floor(Math.random()*(boxMax-min)+min);
bd = Math.floor(Math.random()*(boxMax-min)+min);
cd=Math.floor(Math.random()*(boxMax-min)+min);
d = Math.floor(Math.random()*(boxMax-min)+min);
switch(cdSymbol) {
    case 0:
        c=cd-d;
        break;
    case 1:
        c=cd+d;
        break;
    case 2:
        c=cd/d;
        break;
    default:
       console.log('default triggered')
       break;
}

switch(acSymbol) {
    case 0:
        a=ac-c;
        break;
    case 1:
        a=ac+a;
        break;
    case 2:
        a=ac/c;
        break;
    default:
        console.log('default triggered')
        break;
}

switch(abSymbol){
    case 0:
        b=ab-a;
        break;
    case 1:
        b=ab+a;
        break;
    case 2:
        b=ab/a;
        break;
    default:
        console.log('default triggered')
        break;
}
//random number for start of game
console.log(`a symbol b is ${symbol[abSymbol]}`, abSymbol);
console.log(`a symbol c is ${symbol[acSymbol]}`, acSymbol);
console.log(`b symbol d is ${symbol[bdSymbol]}`, bdSymbol);
console.log(`c symbol d is ${symbol[cdSymbol]}`, cdSymbol);

console.log(`results ac is ${ac}`);
console.log(`results ab is ${ab}`);
console.log(`results bd is ${bd}`);
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