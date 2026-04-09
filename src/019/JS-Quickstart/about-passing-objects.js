// node --watch about-passing-objects.js

const doStuff = function(thing) {
    // I'll modify the object somehow
    thing.base += 10; // make bigger
}

const Triangle = function(base, height) {
    this.base = base;
    this.height = height;
}

const small = new Triangle(3, 5);
const big = new Triangle(13, 23);
console.log("My triangles:", small, big);

doStuff(small);
console.log(small);

// Compare this to working with primitives
const doOtherStuff = function(thing) {
    thing.length = 3;
    console.log("(inside function:", thing, thing.length, ")");
}

const numb = 23;
console.log("\n", numb, numb.length);
doOtherStuff(numb);
console.log(numb, numb.length);