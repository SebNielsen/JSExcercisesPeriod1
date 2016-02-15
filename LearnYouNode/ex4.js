/**
 * Created by sebastiannielsen on 09/02/2016.
 */

var fs = require('fs');
var numberOfLines = undefined;

function findNumberOfLines(callback) {
    fs.readFile(process.argv[2], function doneReading(err, contents) {
        if(err) return console.error(err)
        else{
            numberOfLines = contents.toString().split('\n').length - 1;
            callback()
        }
    })
}

function printNumberOfLines(){
    console.log(numberOfLines);
}

findNumberOfLines(printNumberOfLines);


// Another Solution

//var fs = require('fs')
//var file = process.argv[2]
//
//fs.readFile(file, function (err, contents) {
//    // fs.readFile(file, 'utf8', callback) can also be used
//    var lines = contents.toString().split('\n').length - 1
//    console.log(lines)
//})