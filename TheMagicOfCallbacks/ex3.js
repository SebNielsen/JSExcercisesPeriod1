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

Array.prototype.myFilter = function(callback){
    if (callback && typeof(callback) === "function"){
        var newArray = [];
        this.forEach(function(element){
            if(callback(element)) newArray.push(element);
        })
        return newArray;
    }
    else {
        throw Error("TypeError: " + callback + " is not a function");
    }
}

var userDefinedArrayFilter = names.myFilter(lessOrEquals);

userDefinedArrayFilter.forEach(function(name){
    console.log(name);
})

// userdefined map

Array.prototype.myMap = function(callback){
    if (callback && typeof(callback) === "function"){
        var newArray = [];
        this.forEach(function(element){
           newArray.push(callback(element));
        });

        return newArray;
    }
    else {
        throw Error("TypeError: " + callback + " is not a function");
    }
}

var userDefinedArrayMap = names.myMap(toUpperCase);

userDefinedArrayMap.forEach(function(name){
    console.log(name);
})
