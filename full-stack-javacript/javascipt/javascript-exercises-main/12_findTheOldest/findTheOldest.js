const findTheOldest = function (people) {
	let today = new Date();
	let year = today.getFullYear();

	let lifeLength = 0;
	let longestLife = 0;
	let oldestPerson = {};
	people.forEach((person) => {
		if ("yearOfDeath" in person) {
			lifeLength = person.yearOfDeath - person.yearOfBirth;
		} else {
			lifeLength = year - person.yearOfBirth;
		}
		if (lifeLength > longestLife) {
			longestLife = lifeLength;
			oldestPerson = person;
		}
	});
	return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
