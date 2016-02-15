/*Explain the use of: "use strict"?

Strict mode (see Strict Mode) enables more warnings and makes JavaScript a cleaner language
(nonstrict mode is sometimes called “sloppy mode”). To switch it on, type the following line
first in a JavaScript file or a <script> tag: 'use strict';

ECMAScript 5 has a strict mode that results in cleaner JavaScript, with fewer unsafe features,
more warnings, and more logical behavior.

All variables must be explicitly declared in strict mode. This helps to prevent typos.
In sloppy mode, assigning to an undeclared variable creates a global variable:
*/
function sloppyFunc() {
    sloppyVar = 123;
}
sloppyFunc();  // creates global variable `sloppyVar`
console.log(sloppyVar);  // 123


//In strict mode, assigning to an undeclared variable throws an exception:

function strictFunc() {
    'use strict';
    strictVar = 123;
}
strictFunc();  // ReferenceError: strictVar is not defined

/*--> Functions in Strict Mode <--

Strict mode limits function-related features.

In strict mode, all functions must be declared at the top level of a scope (global scope or
directly inside a function). That means that you can’t put a function declaration inside a
block. If you do, you get a descriptive SyntaxError. For example, V8 tells you: “In strict
mode code, functions can only be declared at top level or immediately within another function”

*/

function strictFunc() {
    'use strict';
    if (true) {
        // SyntaxError:
        function nested() {
        }
    }
}

/*
That is something that isn’t useful anyway, because the function is created in the scope of
the surrounding function, not “inside” the block. If you want to work around this limitation,
you can create a function inside a block via a variable declaration and a function expression:
*/

function strictFunc() {
    'use strict';
    if (true) {
        // OK:
        var nested = function () {
        };
    }
}