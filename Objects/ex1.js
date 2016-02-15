/**
 * Created by sebastiannielsen on 09/02/2016.
 */

var person = {name : "", birthday: "", hobby : "", email: "" };

for(property in person){
    console.log(property);
}

console.log("");

delete person.birthday;

for(property in person){
    console.log(property);
}

//has property name
console.log("has property name: " + person.hasOwnProperty("name"));

//has property birthday
console.log("has property birthday: " + person.hasOwnProperty("birthday"));