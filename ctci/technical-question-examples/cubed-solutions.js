const n = 10;
let a, b, c, d;
let numSolutions = 0;

function cubed(num) {
    return Math.pow(num,3);
  }

function printSolutionsTrial() {
  for (let i = 1; i < n; i++) {
    a = i;
    c = i;
    for (let j = 1; j < n; j++) {
      b = j;
      d = j;
      if (cubed(a) + cubed(b) === cubed(c) + cubed(d)) {
        numSolutions++;
        console.log(`Solutions ${a}, ${b}, ${c}, ${d}`);
        break;
      }
    }
  }
}

function printSolutionsBrute() {
  for (let i = 1; i <= n; i++) {
    a = i;
    for (let j = 1; j <= n; j++) {
      b = j;
      for (let k = 1; k <= n; k++) {
        c = k;
        for (let l = 1; l <= n; l++) {
          d = l;
          if (cubed(a) + cubed(b) === cubed(c) + cubed(d)) {
            numSolutions++;
            console.log(`Solutions ${a}, ${b}, ${c}, ${d}`);
            break;
          }
        }
      }
    }
  }
}

printSolutionsBrute();
console.log(numSolutions);
