function printArraySum(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    console.log("Sum of the array elements:", sum);
  }
  printArraySum([1, 2, 3])