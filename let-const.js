let balance = 1240;
balance = 1200;
console.log(balance);

const userName = 'Rahim Uddin';
const fullName = 'Mohammad' + ' ' + userName;
console.log(fullName);

const numbers = [12, 23, 24, 45, 67];
//numbers = [99, 100, 120]   // not allowed
numbers.push(200);
numbers[1] = 333;
console.log(numbers);

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    sum = sum + number;
    console.log(number);
}

const student = { roll: 101, name: 'mofij', job: 'intern' }
student.name = 'Mofajjol';
console.log(student);