const priya = 'Asif Akbar';
const meye = "Meye tumi ki dukkhu cino";
const kobita = `kobita tumi shopno charini`;

const multiLine = 'This is my first line. \n' +
    'this is my second line.\n' +
    'third line text here\n' +
    'fourth line text here';

const multilineNew = `
    This is my first line
    This is my second line
    third line text here
`;
console.log(multilineNew);

const friends = ['abul', 'babul', 'kabul', 'sabul'];

const count = 5;
const old = '<h3 class ="friend-name">Friend-5</h3>';
const old2 = '<h3 class ="friend-name">Friend-' + count + '</h3>';
const new1 = `<h3 class ="friend-name">Friend-${count}</h3>`;
const new2 = `<h3 class="friend-name">Friend-${friends.length}</h3>`;
console.log(new2);

const first = 'Mamun';
const last = 'Chowdhury';
const fullOld = 'This person name is ' + first + ' ' + last;
const fullNew = `This person name is: ${first} ${last}. Has money ${(friends.length + 10) * 500}. He lives in Dhaka.`;

console.log(fullNew);