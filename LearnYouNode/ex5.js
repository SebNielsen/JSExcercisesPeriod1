/**
 * Created by sebastiannielsen on 09/02/2016.
 */
var fs = require('fs')
var path = process.argv[2]
var type = process.argv[3]

fs.readdir(path, function (err, files) {
    files.forEach(function(file){
        var parts = file.split(".");
        if(parts[1] === type) console.log(file);
    });
})

// Another solution
//var fs = require('fs')
//var path = require('path')
//
//fs.readdir(process.argv[2], function (err, list) {
//    list.forEach(function (file) {
//        if (path.extname(file) === '.' + process.argv[3])
//            console.log(file)
//    })
//})