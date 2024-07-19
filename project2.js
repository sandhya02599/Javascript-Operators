var a= 30;
var b= 50;

document.write(a+b)

var a= 30;
var b= 50;

document.write(a-b)


var a= 30;
var b= 50;

document.write(a*b)

var a= 30;
var b= 50;

document.write(a/b)

var a= 30;
var b= 20;

document.write(a%b)

var a= 30;
a++
var b= 50;
b++

document.write(a)


var a= 30;
a--
var b= 50;
b--

document.write(b)

// coditions:


var x = 100;
var y = 50;
var z = 200;

if(x !== y){
    document.write("pink color")
}else if(y > z){
    document.write("green color")
}else if(z < x){
    document.write("red color")
}else{
    document.write("All Wrong Statements")
}

// logical operators:


var x = 100;
var y = 50;
var z = 200;

if(x == y && y < z){
    document.write("yes this is correct answer");
}
else if((x+y) < z){
    document.write("this is bule color" + )
}

// OR operators:

var x=100;
var y=50;
var z=200;

if((x>z)||(z>y)){
    document.write("z is the greater than all")
}


// Dialog Box:

alert
prompt
confirm

if(10<20){
    alert("10 is lessthan 20")
}

promt & confirm

var woman = confirm("Are you a woman")
if(woman){
    let name = prompt("Please enter your name");
    document.write("Hello Madam." + name + "Welocome to my page")
}else{
    let name = prompt("Please Enter your name");
    document.write("Hello Mr." + name + "Welocome to my page")
}


// Type of convertions:


var a = "45";
var b = 66;
document.write(typeof a + "<br>")


var a = "65";
var b = 78;
document.write(typeof b + "<br>")


// //_________________________________________________________


var a = "45";
var b = 66;

var Z = parseInt(a)
var x = String(b)
document.write(typeof Z + "<br>")
document.write(typeof x )





