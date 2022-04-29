let count = 0;
function recursiveCount(num = 0) {
  // redo this code with recursion 
  // let count = 0;
  // while (count < 10) {
  //   console.log(count);
  //   ++count;
  // }

  if (count < 10) {
    console.log(count);
    recursiveCount(count++);
  }

  //solution with using num = 0 instead of global veriable - count:
  // if (num < 10) {
  //  console.log(num);
  //  recursiveCount(num + 1);
  // }
}

if (require.main === module) {
  recursiveCount();
}

module.exports = recursiveCount;

// OPTIONAL
// Please add your pseudocode to this file
// And a written explanation of your solution
