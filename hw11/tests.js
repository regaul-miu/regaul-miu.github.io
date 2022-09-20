window.onload = tester;

function tester() { 
    describe("returnHiddenValue", function(){
        it("returns the hidden value of the val element == 15", function(){
            assert.strictEqual(returnHiddenValue(), "15");
        });
    });
}