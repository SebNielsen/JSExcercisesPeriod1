/**
 * Created by sebastiannielsen on 10/02/2016.
 */
/**What is an Immediately-Invoked Function Expression? It’s a function expression
 * that gets invoked immediately Just like the name would lead you to believe.*/

// This is a self-executing function. It's a function that executes (or
// invokes) itself, recursively:
function foo() { foo(); }

// This is a self-executing anonymous function. Because it has no
// identifier, it must use the  the `arguments.callee` property (which
// specifies the currently executing function) to execute itself.
var foo = function() { arguments.callee(); };

// This *might* be a self-executing anonymous function, but only while the
// `foo` identifier actually references it. If you were to change `foo` to
// something else, you'd have a "used-to-self-execute" anonymous function.
var foo = function() { foo(); };

// Some people call this a "self-executing anonymous function" even though
// it's not self-executing, because it doesn't invoke itself. It is
// immediately invoked, however.
(function(){ /* code */ }());

// Adding an identifier to a function expression (thus creating a named
// function expression) can be extremely helpful when debugging. Once named,
// however, the function is no longer anonymous.
(function foo(){ /* code */ }());

// IIFEs can also be self-executing, although this is, perhaps, not the most
// useful pattern.
(function(){ arguments.callee(); }());
(function foo(){ foo(); }());


/**
 * the term “self-executing” is somewhat misleading, because it’s not the function
 * that’s executing itself, even though the function is being executed. Also, “anonymous”
 * is unnecessarily specific, since an Immediately Invoked Function Expression can be
 * either anonymous or named. And as for my preferring “invoked” over “executed,” it’s
 * a simple matter of alliteration;
 */

/**
 * Its all about variable scoping. Variables declared in the self executing function are,
 * by default, only available to code within the self executing function. This allows
 * code to be written without concern of how variables are named in other blocks of
 * javascript code.
 */
