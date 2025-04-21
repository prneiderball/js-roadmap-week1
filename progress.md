## Monday 4/21/25

### Tasks Completed:
- Experimented with JavaScript `for` loops and `setTimeout`.
- Explored how `var` behaves in asynchronous code.

```js
for (var i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}


This logs 3 3 3 after 1 second. The reason is that var is function-scoped, not block-scoped. This means all setTimeout callbacks share the same i, and by the time they execute, the loop has already completed and i equals 3. 

for (var i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}

This logs 5 5 5 5 5, for the same reason—i is shared across all iterations due to var's function scope.

var is an older declaration and can using let or const is almost always preferred. However, there are some edge cases where var is preferrable. For example:

Hoisting:

function hoistMe() {
    console.log(a)
    var a = 10
    console.log(a)
}

when function is called the output is undefined and then 10 this due to hoisting... this occurs because of the execution context of javascript code. Before any code is ran the Javascript engine allocates memory for all functions and variables. this would mean that the JS engine would read the code like:


//creation phase
function hoistMe() {
    var a = undefined //--hoisted variable memory allocated
}

//execution phase
console.log(a) //undefined due to hoisting
var a = 10 // a finally receives a declaration
