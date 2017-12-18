describe("Fizzbuzz", function() {
  it("should return 'Fizz' on a mulitple of 3", function() {
    expect(fizzbuzz(3)).toEqual("Fizz");
    expect(fizzbuzz(54)).toEqual("Fizz");
  });

  it("should return 'Buzz' on a multiple of 5", function() {
    expect(fizzbuzz(5)).toEqual("Buzz");
    expect(fizzbuzz(110)).toEqual("Buzz");
  });

  it("should return 'FizzBuzz' on multiples of both 3 and 5", function() {
    expect(fizzbuzz(15)).toEqual("FizzBuzz");
    expect(fizzbuzz(75)).toEqual("FizzBuzz");
  });

});
