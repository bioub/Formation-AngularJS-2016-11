
// function declaration
function hello() {
    console.log('Hello 1');
}

// function expression
var hello = function () {
    console.log('Hello 2');
};

// anonymous function expression
setTimeout(function() {
    hello();
}, 1000);

// named function expression
setTimeout(function hello() {

}, 1000);

setInterval(function() {
    console.log('500ms');
}, 500);
