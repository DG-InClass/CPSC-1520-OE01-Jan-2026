console.clear();
const log = console.log;
log('About functions and params/args');

log(1,1,2,3,5,8,13);

const add = function(first, second) {
    return first + second;
};

let answer;
answer = add(5, 7, 9, 12, 'bob');
console.log('The answer is', answer);

console.log('\nThe add function is\n', add.toString());


