//Named function



//Named function
function sayHelo(name) {
    // console.log("Hello");
    console.log(`Hello ${name}`);
    
}
sayHelo("ADI");

//-------------------------------
//Anonymous Function
var myfunc = function () {
    console.log("addfriend");
}
myfunc();

//----------------------------------------

//Arrow function
const great = () => console.log("Good Morning");
great();

const myname = () => console.log("Name is SRK ");
myname();

const marks = (m1, m2) => console.log("Marks are: m1 = " + m1 + " "+" m2 =" + m2);
marks(10,20);
