////////// Grouping items into objects //////////
// Example one: Separate variables for everything
const playerOneName = "tim";
const playerTwoName = "jenn";
const playerOneMarker = "X";
const playerTwoMarker = "O";

// Example two: Creating object literals
const playerOne = {
	name: "tim",
	marker: "X",
};

const playerTwo = {
	name: "jenn",
	marker: "O",
};

////////// Object Constructors //////////

function Player(name, marker) {
	this.name = name;
	this.marker = marker;
	this.sayName = function () {
		console.log(`${name}`);
	};
}

const player = new Player("David", "X");
//console.log(player.name);
//player.sayName();

/** EXERCISE
 * Create a "Book" object constructor. Requires:
 * @param {string} title
 * @param {string} author
 * @param {number} pages
 * @param {number} read
 * @param {requestCallback} info - Print to console, the book title, author, # of pages, whether it has been read or not.
 */

function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
}

Book.prototype.info = function () {
	if (this.read === 1) {
		console.log(
			`${this.title} by ${this.author}, ${this.pages} pages long, read.`
		);
		return;
	}
	console.log(
		`${this.title} by ${this.author}, ${this.pages} pages long, not read.`
	);
};

const homeland = new Book("Homeland", "R.A. Salvatore", "352", 1);
const theHobbit = new Book("The Hobbit", "J.R.R. Tolkein", "295", 0);

homeland.info();
theHobbit.info();
