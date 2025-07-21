
const scores = [100,20,3,100];
let minScore = scores[0]; 

for (let i = 1; i < scores.length; i++) {
  if (scores[i] < minScore) {
    minScore = scores[i]; 
  }
}
console.log(minScore);

