module.exports = function toReadable (number) {
  let numberStr = number.toString();
  let numberLength = numberStr.length;
  let numberSimpleArr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let numberTeenArr = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let numberTyArr = ['zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let result = '';
  
  if (numberLength == 3) {
    result += numberSimpleArr[numberStr[0]] + " hundred";

    do {
      numberStr = numberStr.substr(1);
      numberLength = numberStr.length;
    } while (numberStr[0] == 0); // If second number is 0 or second number and third number are 0

    if (numberLength != 0) {
      result += " ";
    }
  }

  if (numberLength == 2) {
    if (numberStr[0] == 1) {
      // 10 - 19
      result += numberTeenArr[numberStr[1]];
    } else {
      // 20 - 99
      result += numberTyArr[numberStr[0]];
      if (numberStr[1] > 0) {
        result += " " + numberSimpleArr[numberStr[1]];
      }
    }
  }

  if (numberLength == 1) {
    // 0 - 10
    result += numberSimpleArr[numberStr[0]];
  }
  
  return result;
}
