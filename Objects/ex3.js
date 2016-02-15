/**
 * Created by sebastiannielsen on 09/02/2016.
 */

var person = {first : "Sebastian", last: "Nielsen", age: 27};

function listAllProperties(o){
    var objectToInspect;
    var result = [];

    for(objectToInspect = o; objectToInspect !== null; objectToInspect = Object.getPrototypeOf(objectToInspect)){
        result = result.concat(Object.getOwnPropertyNames(objectToInspect));
    }

    return result;
}

var result = listAllProperties(person);

result.forEach(function(property){
   console.log(property);
});

delete person.constructor;

result = listAllProperties(person);
result.forEach(function(property){
    console.log(property);
});