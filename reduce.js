  
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:
const nums = [0, 1, 2, 3, 4];
let sum = nums.reduce((acc, curr) => acc + curr, 0); // .reduce() takes 2 PARAMS [acc= accumulator; curr = current value], 0 = initial value
console.log(sum);
/*returns
10
*/

const teamMembers = [
  {
    name: 'Andrew',
    profession: 'Developer',
    yrsExperience: 5
  },
  {
    name: 'Ariel',
    profession: 'Developer',
    yrsExperience: 7
  },
  {
    name: 'Michael',
    profession: 'Designer',
    yrsExperience: 1
  },
  {
    name: 'Kelly',
    profession: 'Designer',
    yrsExperience: 3
  }
];

// EXAMPLE 1: Totaling a specific object property -  TOTAL yrsExp fo entire team:
const totalYrs = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0); // 0 is 1st accumulator, then add curr.yrsExperience
console.log(totalYrs);
/*returns
16
*/


// EXAMPLE 2 :  Grouping by a property, and totaling it too - Group by preofession, and total yrsExp by profession:
// {developer: 12, designer: 4} <-- This is what we want !!

let experienceByProfession = teamMembers.reduce((acc, curr) => {
  let key = curr.profession;
  if (!acc[key]) { // if profession still does not exist in new results' array, create it, and add value
    acc[key] = curr.yrsExperience;
  } else { // if profession exists, sum value
    acc[key] += curr.yrsExperience;
  }
  return acc;
}, {}) // last {} is DEFINED ACCUMULATOR = empty obj. to avoid crashes and bugs..
console.log(experienceByProfession);

/*---> If I add more teamMembers with new professions, these will add to array: { Developer: 12, Designer: 4, Accountant: 31 }*/

/* EXAMPLE 3 : 
{
  Developer: ['Andrew, 'Ariel'],
  Designer: ['Michael', 'Kelly']
}*/

const namesByProfession = teamMembers.reduce((acc, curr) => {
  let key = curr.profession;
  if (!acc[key]) {
    acc[key] = [curr.name];
  } else {
    acc[key].push[curr.name];
  }
  return acc;
}, {});
console.log(namesByProfession);