const luckCheck = luckNumber => {
  if (luckNumber.length <= 1) {
    return true;
  }
  let leftSide = 0;
  let rightSide = 0;
  let middle = luckNumber.length / 2;
  if (luckNumber.length % 2 === 0) {
    for (let i = 0; i < luckNumber.length; i++) {
      if (i < middle) {
        leftSide += parseInt(luckNumber.charAt(i));
      } else {
        rightSide += parseInt(luckNumber.charAt(i));
      }
    }
  } else {
    for (let i = 0; i < luckNumber.length; i++) {
      if (i < Math.floor(middle)) {
        leftSide += parseInt(luckNumber.charAt(i));
      } else if (i > middle) {
        rightSide += parseInt(luckNumber.charAt(i));
      }
    }
  }
  return leftSide === rightSide;
};

console.log(luckCheck("28549"));
