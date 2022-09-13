let assert = chai.assert;

describe("sumUsingReduce", function () {
    it("sum of 1, 2, 3, 4 ", function () {
        assert.equal(sumUsingReduce([1, 2, 3, 4]), 10);
    });

    it("sum of 4, 5, 6, 7", function () {
        assert.equal(sumUsingReduce([4, 5, 6, 7]), 20);
    });
});

describe("multiplyUsingReduce", function () {
    it("multiply of 1, 2, 3, 4 ", function () {
        assert.equal(multiplyUsingReduce([1, 2, 3, 4]), 24);
    });

    it("multiply of 4, 5, 6, 7", function () {
        assert.equal(multiplyUsingReduce([4, 5, 6, 7]), 30);
    });
});

describe("reverseUsingreduce", function () {
    it("reverse string ", function () {
        assert.equal(reverseUsingreduce("reverse string"), "gnirts esrever");
    });

    it("reverseUsingreduce", function () {
        assert.equal(reverseUsingreduce("reverse Using reduce"), "reverseUsingreduce");
    });
});

describe("filterLongWordsUsingFilter", function () {
    it("Filter long word", function () {
        assert.deepEqual(filterLongWordsUsingFilter(["hello", "world", "hi"], 2), ["hello", "world"]);
    });

    it("Filter long word", function () {
        assert.deepEqual(filterLongWordsUsingFilter(["hello", "world", "hi"], 2), ["hello", "world", "hi"]);
    });
});