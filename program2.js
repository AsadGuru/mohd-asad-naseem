function generateOddNumbers(a) {
     let result = [];
     for (let i = 0; i < a; i++) {
          result.push(2 * i + 1);
     }
     return result.join(', ');
}

console.log(generateOddNumbers(5));