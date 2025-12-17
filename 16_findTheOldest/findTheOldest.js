const findTheOldest = function(arr) {
    return arr.reduce((oldest, people) => {
        let currentYear = new Date().getFullYear()

        if (!people.yearOfDeath) people.yearOfDeath = currentYear

        if (!oldest.yearOfDeath) oldest.yearOfDeath = currentYear

        let age = people.yearOfDeath - people.yearOfBirth
        let prevAge = oldest.yearOfDeath - oldest.yearOfBirth

        if (age > prevAge) oldest = people
        return oldest
    })
};

// Do not edit below this line
module.exports = findTheOldest;
