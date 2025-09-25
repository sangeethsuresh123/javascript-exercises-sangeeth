const findTheOldest = function (people) {
  // return people.map(person => {
  //   if (!('yearOfDeath' in person))
  //     person['yearOfDeath'] = (new Date()).getFullYear();
  //   person['age'] = person['yearOfDeath'] - person['yearOfBirth'];
  //   return person;
  // }).sort((a, b) => b.age - a.age)[0];

  // people.map(person => {
  //   if (!('yearOfDeath' in person))
  //     person['yearOfDeath'] = (new Date()).getFullYear();
  //   person['age'] = person['yearOfDeath'] - person['yearOfBirth'];
  //   return person;
  // });
  // people.sort((a, b) => b.age - a.age);
  // return people[0];
  // let maxAge = 0;
  // const oldestPerson = people.reduce((oldestPerson, person) => {
  //   let age;
  //   if ('yearOfDeath' in person) {
  //     age = person['yearOfDeath'] - person['yearOfBirth'];
  //     // console.log(age);
  //   }
  //   else
  //     age = today - person['yearOfBirth'];
  //   if (age > maxAge) {
  //     maxAge = age;
  //     console.log(maxAge);
  //     oldestPerson = person;
  //   }
  //   console.log(oldestPerson);
  //   return oldestPerson;
  // }, {})
  // return oldestPerson;

  return people.sort((a, b) => getAge(b) - getAge(a))[0];
};

function getAge(person) {
  person.yearOfDeath ??= new Date().getFullYear();
  return person.yearOfDeath - person.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
