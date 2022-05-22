function add(num1, num2 = 50) {
    //option 2
    // num2 = num2 || 0;
    /* if (num2 == undefined) {
        num2 = 0;
    } */
    // option 1
    const total = num1 + num2;
    return total;
}
const result = add(12);
console.log(result);

function fullName(first, last = 'Chowdhury') {
    const name = first + ' ' + last;
    return name;
}
const person = fullName('Aminul');
console.log(person);