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

// userdefined filter

function myFilter(array, callback){
    if (callback && typeof(callback) === "function"){
        var newArray = [];
        array.forEach(function(element){

            if(callback(element)) newArray.push(element);
        })
        return newArray;
    }
    else {
        throw Error("TypeError: " + callback + " is not a function");
    }
}

var userDefinedArrayFilter = myFilter(names, lessOrEquals);

userDefinedArrayFilter.forEach(function(name){
    console.log(name);
})

// userdefined map

function myMap(array, callback){
    if (callback && typeof(callback) === "function"){
        var i;
        for(i = 0; i < array.length; i++){
            array[i] = callback(array[i]);
        }
        return array;
    }
    else {
        throw Error("TypeError: " + callback + " is not a function");
    }
}

var userDefinedArrayMap = myMap(names, toUpperCase);

userDefinedArrayMap.forEach(function(name){
    console.log(name);
})