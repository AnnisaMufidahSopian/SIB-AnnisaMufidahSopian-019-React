//function declaration menyimpan fungsi / result nya kedalam variabel
function addA (a, b){
    return a + b;
}
add(2,3);
console.log(add);

//function expression 
const add2 = function (a,b){
    return a + b;
}

//arrow function
const add3 = (a, b) => {
    return a + b;
}

function add(a, b){
    return a + b;
}

function square(x){
    return x*x;
}

function three(){
    return 3;
}

//implicit return arrow function
/*const add = (a,b) => a+b;
const square = x => x*x;
const three = () => 3;

//eksplisit return arrow function
const add = (a,b) => {
    const temp = a+b;
    return temp;
}*/

//manajemen this keyword
/*function Person(){ //NaN akan dicetak berulang di console
    this.age = 0;

    setInterval(function(){
        this.age++;
        console.log(this.age);
    },1000);
}

const p = new Person();*/

//perbaikan this keyword 1
/*function Person(){
    this.age = 0;

    const that = this;
    setInterval(function(){
        this.age++;
        console.log(that.age);
    }.bind(this), 1000);
}

const p = new Person();*/

//perbaikan this keyword 2
/*function Person(){
    this.age = 0;

    setInterval(function(){
        this.age++;
        console.log(this.age);
    }.bind(this),1000);
}

const p = new Person();*/

//perbaikan this keyword 3
function Person(){
    this.age = 0;

    setInterval(() =>{
        this.age++;
        console.log(this.age);
    }, 1000);
}
//const p = new Person();
Person()