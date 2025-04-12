class Calculator {
     constructor(a, b, operation) {
          this.a = a;
          this.b = b;
          this.operation = operation;
     }

     calculate() {
          switch (this.operation) {
               case 'addition':
                    return this.a + this.b;
               case 'subtraction':
                    return this.a - this.b;
               case 'multiplication':
                    return this.a * this.b;
               case 'division':
                    if (this.b !== 0) {
                         return this.a / this.b;
                    } else {
                         return 'Error: Division by zero';
                    }
               default:
                    return 'Invalid operation';
          }
     }
}

const calc = new Calculator(10, 5, 'addition');
console.log(calc.calculate());