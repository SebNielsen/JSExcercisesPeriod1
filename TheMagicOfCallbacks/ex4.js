/**
 * Created by sebastiannielsen on 09/02/2016.
 */

function handleNumArrays(na1,na2,callback){
    if (callback && typeof(callback) === "function"){
        var newArray = [];
        for(i = 0; i < na1.length; i++){
            newArray.push(na1[i] + na2[i]);
        }
        callback(newArray);
    }
    else {
        throw Error("TypeError: " + callback + " is not a function");
    }
}

var a = [1,2,3];
var b = [1,2,3];

handleNumArrays(a,b,function(res){
    console.log(res.join(","));
});

handleNumArrays(a,b,function(res){
    var total = 0;
    res.forEach(function(number){
      total += number;
    });
    console.log(total);
});

handleNumArrays(a,b,function(res){
    for(i = 0; i < res.length; i++){
        res[i] = res[i]*10;
    }
    console.log(res.join(","));
});

