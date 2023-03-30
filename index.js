import * as Math from './Math';

console.log(Math.add(4,3,5));
console.log("mim apa");

// variable
var name= "abdalla ";
var age = 45;
var ismale = true;
var balance = 5678.98;
var dob = new Date(200, 2, 7);
var person = {}
var empty = undefined

console.log(typeof name);
console.log(typeof ismale)
console.log(typeof balance)
console.log(typeof dob)
console.log(typeof person)
console.log(typeof emptytypeof )
console.log(typeof age)

var brand = "Kamalabdalla";
console.log(brand.length)
console.log(brand.toUpperCase())
console.log(brand.toString())
console.log(brand.substring(0, 7))

var a = "kamal"
var b = "Abdalla"
console.log(`${a} ${b}`)

// Object
var person = {
    name: "abdalla",
    age: 23,
    ismale: true,
    balance: 34.32,
    dob: new Date(2000, 2, 3).toJSON(),
    address: {
        city: "shingwi",
        postcode: "4jd"
    }

};
console.log(person)
console.log(person.name)
console.log(person.age)
console.log(person.address.city)
console.log(person.dob)
console.log(Object.values(person))
console.log(Object.keys(person))
console.log(JSON.stringify(person))

// Array
var name = [
    'aki',
    "dl;",
    "kfkd",
    "lfkf",
    "lfkf"
]
console.log(name);
console.log(name[2]);
console.log(name.length);

//function
function addition(no1, no2){
    var addnum = no1 + no2;
    return addnum;
}
var result = addition(32, 23);
console.log(result)


function sub(n1, n2){
    var sust = n1-n2;
    return sust;
}
var res = sub(7, 4);
console.log(res);

for(let i =0; i < 5; i++){
    console.log(i);
   }
 
 for (const nam of name) {
    console.log(nam)
 }
 name.forEach(function(nam) {
    console.log(nam)
 });

 //while loops
 var condition = true;
 while(condition){
    console.log("condition")
    var condition = false;
 }

 var index = 0;
 while(index < name.length){
    console.log(name[index]);
    index = index + 1;
 }

//do while loop
do{
    console.log("even once");
}while(false);

//break
for(var i = 0; i <= 10; i++){
    console.log(i);
    if(i == 5){
        break;
    }
}
console.log();
// continue
for(var i = 0; i <= 10; i++){
    if(i<6){
        continue;
    }
    console.log(i);
}

//if statement
if (false){
console.log("mmi appa")
}else{
    console.log("not true");
}

var gender = "k";
if(gender == "M"){
    console.log("malee");
}else if(gender == "F"){
    console.log("female");
}else{
    console.log("unknow");
}

//ternary
var num = 8;
if (num % 2 == 0){
    console.log("even")
}else{
    console.log("odd");
}

var numb = 7;
var resl = numb % 2 == 0 ? 'even': 'odd';
console.log(resl);