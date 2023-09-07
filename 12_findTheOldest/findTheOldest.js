const findTheOldest = function(people) {
    currentYear = new Date().getFullYear();
    people.sort((a, b) => {
        if('yearOfDeath' in a){
            aAge = a.yearOfDeath - a.yearOfBirth;
        }
        else{
            aAge = currentYear - a.yearOfBirth;
        }
        if('yearOfDeath' in b){
            bAge = b.yearOfDeath - b.yearOfBirth;
        }
        else{
            bAge = currentYear - b.yearOfBirth;
        }
        return bAge - aAge;
    });
    return people[0];
};
// Do not edit below this line
module.exports = findTheOldest;
