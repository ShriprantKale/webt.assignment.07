
const marvelHeros = ["Ironman", "Thor", "Captain America", "Black widow"];



var cap = marvelHeros[2];
console.log(cap);

console.log("----------------------------------------------------------------");
for (let i = 0; i < marvelHeros.length; i++){
    console.log(marvelHeros[i]);
    
}
console.log("----------------------------------------------------------------");

for (let hero of marvelHeros) {         // print values for each hero in the list above the current hero list 
    console.log(hero);
    
}
console.log("----------------------------------------------------------------");
marvelHeros.forEach((hero, i) => console.log(hero, i));


console.log("----------------------------------------------------------------");



let DCHeros = new Array( "Wonder women", "Flash", "Super man");
DCHeros.push("batman");
console.log(DCHeros);


console.log("----------------------------------------------------------------");

// DCHeros.shift();
// console.log(DCHeros);

console.log("----------------------------------------------------------------");

console.log("slice   " + DCHeros.slice(0,2));   //select ony elements from 0 to 2 indexes


console.log("----------------------------------------------------------------");

var arr = DCHeros.splice(0, 1);
console.log("splice " + arr);

console.log("----------------------------------------------------------------");

console.log(DCHeros);
DCHeros.splice(1, 2, "Aquaman", "Green arrow");
console.log(DCHeros);
