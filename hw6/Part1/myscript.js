function sumUsingReduce(input) {
    return input.reduce((a, b) => a + b, 0);
}

function multiplyUsingReduce(input) {
    return input.reduce((a, b) => a * b, 1);
}

function reverseUsingreduce(input) {
    return input.split("").reduce((rev, char)=> char + rev, ''); 
}

function filterLongWordsUsingFilter(words, i) {
    return words.filter(w => w.length > i);
}

console.log(filterLongWordsUsingFilter(["hello", "world", "hi"], 2));
