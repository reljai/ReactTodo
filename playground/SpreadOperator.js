/*
function add(a, b) {
    return a + b;
}

console.log(add(3, 1));

var toAdd = [3, 9];
console.log(add(...toAdd));
*/

var groupA = ['mina', 'lena'];
var groupB = ['yoojin'];
var final = [...groupB, 3, ...groupA];

console.log(final);