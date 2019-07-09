/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1.Global Binding - the 'this' is referencing the window object. Javascript has a Global context

* 2.Implicit Binding - When a function is called by a preceding dot, that object before the '.' is what 'this' is referring to.

* 3.New Binding - involves a constructor function. Refers to the newly created instance of the Object, which is then returned.

* 4.Explicit Binding - Refers to whenever JS's call or apply method is used.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function newMan(name) {
    console.log(this);
    console.log (`Look, it's the new guy, ${name}!`)
}
newMan("Kyle");
// Principle 2

// code example for Implicit Binding
const joke = {
    question: 'Why did the chicken cross the road?',
    punchLine: function (punch) {
        console.log(`${this.question}`);
        console.log(`${punch}`);
    }
};
joke.punchLine('To get to the other side!');

// Principle 3

// code example for New Binding
function funnyGuy(comedian) {
    this.joke = 'So i walk into a bar....';
    this.comedian = `Joke by ${comedian}`;
    this.pitch = function() {
        console.log(this.joke + this.comedian);
        console.log(this)
    };
}

const kyle = new funnyGuy('Kyle');
const bob = new funnyGuy('Bob');

console.log(kyle.pitch());
console.log(bob.pitch());

// Principle 4

// code example for Explicit Binding
function funnyGuy(comedian) {
    this.joke = 'So i walk into a bar....';
    this.comedian = `Joke by ${comedian}`;
    this.pitch = function() {
        console.log(this.joke + this.comedian);
        console.log(this)
    };
}

const jim = new funnyGuy('Jim');
const joe = new funnyGuy('Joe');

console.log(jim.pitch.call(joe));
console.log(joe.pitch.apply(jim));