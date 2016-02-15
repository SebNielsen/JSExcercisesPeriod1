/**
 * Created by sebastiannielsen on 15/02/2016.
 */

//Declaration is hoisted
x = 5; // Assign 5 to x

console.log(x);

var x; // Declare x

//JavaScript only hoists declarations, not initializations.

console.log(y);

var y = 5;

/*JavaScript interpreter also allows you to use a function before the point at which it was declared
in the source code. This is useful because it allows you to express your high-level logic at
the beginning of your source code rather than the end.
 */

// Outputs: "Yes!"
isItHoisted();

function isItHoisted() {
    console.log("Yes!");
}