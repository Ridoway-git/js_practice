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

const lo = {
  name : "ridoy",
  age : 33,
  city : "rajshahi"
};

const  myArray = Object.values(lo);
document.getElementById('b').innerHTML = myArray;

const fruits =  {
  Banana:300 , Orange: 200, Apples: 100
};

let text33 = "";

for (let [fruit, amount ] of Object.entries(fruits)) {
  text33 += fruit + " : " + amount + "<br>";

}

document.getElementById('fruits').innerHTML= text33;

const p11 = {
  name: "ridoy",
  age: 22,
  city : "dhaka"
};

document.getElementById('rido').innerHTML = JSON.stringify(p11);

function paappaa (first, last, age, eye) {
  this.firtName = first;
  this.lastName = last;
  this.age = age;
  this.eyecolor = eye;
}

const myFather = new paappaa("john", "doe", 44, "blue");

document.getElementById("kkk").innerHTML = myFather.age;

function ooo (first, last, age, eye) {
  this.firstname = first;
  this.lastname = last;
  this.age = age;
  this.eyecolor = eye;
}

const myFathero = new ooo ("ridoy", "khan", 33, "black");
const myMother = new ooo ("janina" ,"khan" , 23, "blue");

document.getElementById("aaaa").innerHTML = "my father is " + myFathero.age + " my mother is " + myMother.age + " years old";

function ada(first,last,age,color)  {
  this.firstname = first;
  this.lastname = last;
  this.age = age;
  this.eyecolor = color;
  this.nationality = "english";
}

const myFatther= new ada ("john" , "khan", 33, "black" );
const myMotther = new ada("johny" ,"aktar", 34, "blue");

document.getElementById('ow').innerHTML = "my father is " + myFatther.nationality + "my mother is" + myMotther.nationality; 


function lll (first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eye = eye;
  this.fullName = function () 
  {
    return this.firstName + " " + this.lastName
  };
}

const kkk = new lll ("john", "kh", 22, "black");

document.getElementById("lol").innerHTML = "my father is " + kkk.fullName();


function koop (first, last, age, eye){
  this.firstname = first;
  this.lastname = last;
  this.age = age;
  this.color = eye;
}

const myF = new koop("john", "loop", 33, "black");
const myM = new  koop ("johmno", "karima" , 33, "blue");

myM.changeName = function(name) {
  this.lastname = name;
}

myM.changeName ("doe");

document.getElementById('changeName').innerHTML = "my mother's last name is"+ myM.lastname;

function pap (firstname,lastname,age,color) {
  this.firstname = firstname;
  this.lastname = lastname;
  this.age = age;
  this.color = color;
}

const myfff = new pap ("sally", "aaa", 23, "black") ;
pap.prototype.changeName = function (name) {
  this.lastname = name;
}


myfff.changeName("doe");

document.getElementById("add").innerHTML = "my mother last name is" + myfff.lastname;

function displayDate () {
  document.getElementById('aas').innerHTML = Date();
}

let wows = "We are the so-called \"Vikings\" from the north.";
document.getElementById('aaww').innerHTML= wows;
let textaa = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
document.getElementById('char').innerHTML = textaa.length;

let lap = 
"jhon";
let lap2 = new String("john");

document.getElementById('wwp').innerHTML = typeof lap + " and " + typeof lap2;
const namre = "w3schools";
let letters = namre.at(2); //output should be s
document.getElementById('w3').innerHTML= letters;

const anoname = "ridoy";
let wowsa = anoname[2];
document.getElementById('anothermethod').innerHTML= wowsa;
let textks = "apple, banana, guava";
let part = textks.slice(3,9);
document.getElementById('slice').innerHTML= part;


let con1= "hello";
let con2 = "world";
let con3= con1.concat(" ", con2);

document.getElementById('concat').innerHTML = con3;

let as =  "          Hello world";
let as2 = as.trim();

document.getElementById('trimmer').innerHTML = "the as char is " + as.length + "and the as2 is " + as2.length;
let tla = "please a where 'locate' ridoy";
let index = tla.indexOf("ridoy");
document.getElementById('index').innerHTML = index;
let index2 = "please locate where 'locate' occurs";
let indexo = index2.indexOf("john");
document.getElementById("notFound").innerHTML = indexo;

let sl  = "the rain in SPAIN stays  mainly in the   plain"
const myAr = sl.match("ain");
document.getElementById("wol").innerHTML= myAr;

let kka = "i love cats cats are easy to love"
const interior =  kka.matchAll("cats");
document.getElementById("da").innerHTML = Array.from(interior);

let naa = "hello world,welcome to the universe";
document.getElementById("include").innerHTML = naa.includes("world");

let tempo = `he is often called "johny"`;
document.getElementById("temp").innerHTML= tempo;

let tempoo = `he
is
good 
as 
he`;
document.getElementById('loop').innerHTML= tempoo;

let firstNameo = "john";
let lastNameo = "Doe";

let tl = `Welcome ${firstNameo}, ${lastNameo}!`;

document.getElementById("lo").innerHTML= tl;

let header = "Template Strings";
let tags = ["template strings","javascript","es6"];

let html = `<h2>${header}</h2><ul>`;
for(const x of tags ) {
  html += `<li>${x}</li>`;
}

html += `</ul>`;
document.getElementById("templ").innerHTML= html;

let mynumner = 2;
let yoo= "";
let counter = 0;
while(mynumner != Infinity) {
  mynumner =  mynumner * mynumner;
  yoo = yoo + mynumner + "<br>"; 
  counter ++;

}

document.getElementById("mma").innerHTML = yoo;

let ala  = 2/0;
let apa = -2/0;

document.getElementById('al').innerHTML = ala + "<br>" + apa;

let aal = 444444444444444;
let aoa= 9999999999999999;

document.getElementById('nuo').innerHTML = aal + "<br>" + aoa;