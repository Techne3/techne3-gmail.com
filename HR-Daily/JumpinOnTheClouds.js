// https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup

// function jumpingOnClouds(c) {}

console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]));

function jumpingOnClouds(c) {
  let count = 0;
  for (let i = 0; i < c.length; i++) {
    if (c[i] === 0) {
      if (c[i] === c[i + 1]) {
        count++;
        i++;
      }
    } else {
      count++;
    }
  }

  return count;
}

// function jumpingOnClouds(c) {

//     var stepsArray = [];

//     let i=0;
//     while(i < c.length - 1){

//         if ((i+2<c.length) && (c[i+2] === 0)) {
//             stepsArray.push(c[i + 2]);
//             i+=2;
//         } else{
//             stepsArray.push(c[i + 1]);
//             i+=1;
//         }

//     }
//     return stepsArray.length

// }
