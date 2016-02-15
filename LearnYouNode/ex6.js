/**
 * Created by sebastiannielsen on 10/02/2016.
 */

var fs = require('fs')
var path = process.argv[2]
var type = process.argv[3]

var printfiles = function() {
    fs.readdir(path, function (err, list) {
        list.forEach(function (file) {
            if (path.extname(file) === '.' + process.argv[3])
                console.log(file)
        })
    })
}

module.exports = printfiles();