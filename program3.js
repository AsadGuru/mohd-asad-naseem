function generateConditionalOddNumbers(a) {
     let result = [];
     for (let i = 0; i < a; i++) {
          if (i % 2 === 0) {
               result.push(2 * (i + 1) - 1);
          }
     }
     return result.join(', ');
}

console.log(generateConditionalOddNumbers(5));