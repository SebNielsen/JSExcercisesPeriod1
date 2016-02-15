/**
 * Created by sebastiannielsen on 09/02/2016.
 */
var names = ["Lars", "Jan", "Peter", "Bo", "Frederik"];

function lessOrEquals(value) {
    return value.length <= 4;
}

function toUpperCase(value) {
    return value.toUpperCase();
}

// filter method
var filtered = names.filter(lessOrEquals);

filtered.forEach(function(name){
    console.log(name);
});

// map method
var namesInUpperCase = names.map(toUpperCase);
namesInUpperCase.forEach(function(name){
    console.log(name);
});