function countMultiples(arr) {
     const counts = {};
     for (let i = 1; i <= 9; i++) {
          counts[i] = 0;
     }

     arr.forEach(num => {
          for (let i = 1; i <= 9; i++) {
               if (num % i === 0) {
                    counts[i]++;
               }
          }
     });

     return counts;
}

const inputArray = [1, 2, 8, 9, 12, 46, 76, 82, 15, 20, 30];
console.log(countMultiples(inputArray)); 