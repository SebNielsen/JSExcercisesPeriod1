/**
 * Created by sebastiannielsen on 09/02/2016.
 */

function person(first, last, age){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.getDetails = function(){
      return"" + this.firstName + " " + this.lastName + " " + this.age;
    };
}

var user = new person("Sebastian", "Nielsen", 27);

console.log(user.getDetails());