function myFunction() {
  document.getElementById("fn").innerHTML = "paragraph changed";
}

document.getElementById("helloh2").innerHTML = "<h2>Hello World</h2>";
// document.write(3+3);
// window.alert(4+3);
console.log(44 + 33);
let x, y, z;
x = 3;
y = 4;
z = x + y;
// x=3; y=4; z=4;one line allowed
document.getElementById("statement").innerHTML = "The value of z is " + z + ".";
function anotherFunction() {
  document.getElementById("f1").innerHTML = "hello js";
  document.getElementById("f2").innerHTML = "how are you ridoy";
}

document.getElementById("nums").innerHTML = 10.3;
document.getElementById("str").innerHTML = "ridoy" + " Sidoy";
let d;
d = 33;
document.getElementById("x1").innerHTML = d;
document.getElementById("op").innerHTML = (5 + 4) * 3;
document.getElementById("name").innerHTML = "john" + " " + "doe";
let c;
// c= 33; this is comment
c = 3; //i will be executed

// A JavaScript name must begin with:

// A letter (A-Z or a-z)
// A dollar sign ($)
// Or an underscore (_)

var mn = 22;
var xr = 33;
var ss = mn + xr;
document.getElementById("var").innerHTML = "the value of z is " + ss;

// this is single line comment
/*this is multiline comment*/

document.getElementById("myH").innerHTML = "this is heading";
document.getElementById("p1").innerHTML = "this is paragraph";

const pi = 3.14;
let persons = "ridoy khan";
let ages = 24;
document.getElementById("yiyi").innerHTML =
  pi + "<br>" + persons + "<br>" + ages;
let pName = "ridoy",
  carName = "volvo",
  price = 300;
document.getElementById("car").innerHTML = price;

let carnames;
document.getElementById("undefined").innerHTML = carnames; //output undefined

let xx = "44" + 4 + 3;
document.getElementById("aa").innerHTML = xx;
let yy = 5 + 5 + "10";
document.getElementById("aaa").innerHTML = yy;
let $ = "hello world";
let $$$ = 2;
let $myMoney = 5;
document.getElementById("toto").innerHTML =
  $ + " and my money is " + $$$ + $myMoney + "and i am very happy";

let ina = 44;
ina += 3;
document.getElementById("plus").innerHTML = ina;
let text1 = "A";
let text2 = "B";
let result = text1 > text2;
document.getElementById("t").innerHTML = "is a less than B " + result;

let t1 = "john";
let t2 = "doe";
let t3 = t1 + " " + t2;
document.getElementById("miu").innerHTML = t3;

let e1 = "what a very ";
e1 += "nice day";
document.getElementById("ano").innerHTML = e1;

let k = 5 + 4; //9
let gg = "5" + 4; //54
let xxx = "hello" + 66; //hello66
let ana = "hello" + gg; //hello54

document.getElementById("anothers").innerHTML =
  k + "<br>" + gg + "<br>" + xxx + "<br>" + ana;
let ab = 4;
let bc = ab ** 2;
document.getElementById("arithmatic").innerHTML = bc;
let anotherss = 4;
document.getElementById("arithmatic_another").innerHTML = Math.pow(
  anotherss,
  2
);
let te = "hello";
te += " ridoy";
document.getElementById("anotherhoho").innerHTML = te;
let no;
no = 1;
no = "ridoy";

document.getElementById("an1").innerHTML = no;
let aaa = 4;
let bbb = 4;
let ccc = 5;

document.getElementById("an2").innerHTML = (aaa == bbb) + "<br>" + (bbb == ccc);
const cars = ["saab", "volvo", "bmw"];
document.getElementById("an3").innerHTML = cars[0];
const person = {
  firstName: "ridoy",
  lastName: "khan",
  age: 24,
  eyeColor: "black",
};

document.getElementById("an4").innerHTML =
  person.firstName +
  " " +
  person.lastName +
  " is " +
  person.age +
  " years old" +
  " his eye color is " +
  person.eyeColor;

document.getElementById("typeo").innerHTML =
  typeof " " + "<br>" + typeof "ridoy" + "<br>" + typeof 22;

document.getElementById("typeof").innerHTML =
  typeof 0 +
  "<br>" +
  typeof 313 +
  "<br>" +
  typeof 3.44 +
  "<br>" +
  typeof 3 +
  "<br>" +
  typeof (3 + 4);

function myfuns(p1, p2) {
  return p1 * p2;
}
let results = myfuns(3, 4);
document.getElementById("fun").innerHTML = results;

let xm = myFunction(4, 6);
document.getElementById("afun").innerHTML = xm;

function myFunction(ax, bx) {
  return ax * bx;
}

function celcious(f) {
  return (5 / 9) * (f - 32);
}
let value = celcious(77);
document.getElementById("cel").innerHTML = value;

function anotherCel(ff) {
  return (5 / 9) * (ff - 32);
}
let values = anotherCel(77);
document.getElementById("anothercel").innerHTML = values;


function myAnotherFunction () {
    let bikeName = "fzs";
    let texts = "inside: "  + typeof bikeName + " "  + bikeName;
    document.getElementById('anoo').innerHTML = texts;
}

myAnotherFunction();

let texts = "outside: "  + typeof bikeName;
document.getElementById('anoo2').innerHTML = texts;

const what ={};

what.firstName = "ridoy";
what.lastName = "khan";
what.age = 23;
what.eyeColor = "black";

document.getElementById('anoo3').innerHTML = what.firstName + "is" + what.age + "years old" + "and his eye color is" + what.eyeColor;

const anotherPerson ={
    firstName  : "ridoy",
    lastName : "khan",
    id : 33345,
    fullName : function () {
        return this.firstName + " " + this.lastName;
    }
};


document.getElementById('woww').innerHTML = anotherPerson.fullName();

const persona = {
    firstName : "john" ,
    lastName : "doe",
    age : 40,
    eyeColor : "black"
};

const xna = persona;
persona.age = 10;

document.getElementById('js').innerHTML= persona.firstName + "is" + persona.age + "years old " + "and his eye color is " + persona.eyeColor;


const personns = {
    firstName : "ridoy",
    lastName : "khan",
    age : 44,
    eyeColor: "blue"
}

document.getElementById('anoob').innerHTML = personns["firstName"] + "is" + personns["age"] + " years old "  + "and his eye color is " + personns["eyeColor"];

const anop = {
    firstName : "mominul",
    lastName : "khan",
    age : 44,
    eyeColor : "blue",
    nationality: "bangladeshi"
};




let xxxxx= "firstName";
let yyyyy = "age";
let meow = "nationality"

document.getElementById('anootherwow').innerHTML = anop[xxxxx] + " is " + anop[yyyyy] + " years old" + "and he is " + anop[meow];   

const del = {
    firstName : "ridoy",
    lastName : "khan",
    age : 23,
    eyecolor : "blue"
};

delete del.age;

document.getElementById('delete').innerHTML = del.firstName + " is " + del.age + " years old "+ "and his eye color is "  + del.eyecolor;

const anotherobject = {
    name: "john",
    age: 23,
    myCars :{
      car1 : "Ford",
      car2 : "Volvo",
      car3: "Toyota"
    }
}

document.getElementById('anotherobject').innerHTML = anotherobject.myCars.car2;    
document.getElementById('anotherobject').innerHTML = anotherobject["myCars"]["car1"];

const anotherDist = {
  name : "ridoy",
  age :23,
  myCars : {
    carName1 : "wow",
    carName2 : "bmw",
    carName3 : "tesla"
  }
}
let p1 = "myCars";
let p2 = "carName2"
document.getElementById('diss').innerHTML = anotherDist[p1][p2];

const personss ={
  firstName : "ridoy",
  lastName : "khan",
  age : 23,
  fullName : function () {
    return this.firstName + " " + this.lastName; 
  }
};

document.getElementById('anotherObj').innerHTML= personss.fullName();


const anotherwow = {
  firstName : "john",
  lastName : "doe",
  age: 34,
  id: 444,
};

anotherwow.name = function() {
  return (this.firstName + " " + this.lastName).toUpperCase();
};

document.getElementById('case').innerHTML = "my friend name is " + anotherwow.name();

const lol = {
  firstName : "ridoy",
  lastName : "khan",
  id : 333,
};

document.getElementById('ro').innerHTML = lol;


const khamuna = {
  fistName : "john",
  lastName : "doe",
  age: 44,
  city : "new york"
};

document.getElementById('khao').innerHTML = khamuna.fistName + " " + khamuna.lastName + " and his age is " + khamuna.age + " and he lives in "+ khamuna.city;


const haha = {
  name : "ridoy",
  age : 33,
  city : "new york"
};

let text = "";
for (let x in haha) {
  text += haha[x]; + " ";
}

document.getElementById('intloop').innerHTML = text;
const haga = {
  name: "ridoy",
  age : 23,
  city : "dhaka"
};

let texto = "";
for (let x in haga) {
  texto += haga[x] + " ";
}

document.getElementById('a').innerHTML = texto;

