// Question 3
class MyMath {
  pi = 3.14;
  add(x, y) {
      return x + y;
  }

  subtract(x, y) {
      return x - y;
  }

  multiply(x, y) {
      return x * y;
  }

  divide(x, y) {
      return x / y;
  }
}

module.exports = new MyMath();