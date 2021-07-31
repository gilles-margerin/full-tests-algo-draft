import assert from "assert/strict";

function incrCustomType(arr) {
  let result = [];
  let lastDigit = false;

  for (let i = arr.length - 1, j = 0; i >= 0; i--, j++) {
    if (lastDigit) {
      result[j] = arr[i];
    } else {
      if (arr[i] < 9) {
        result[j] = -(~arr[i]);
        lastDigit = true;
      } else {
        result[j] = 0;
        result[j + 1] = arr[i - 1] || 1;
      }
    }
  }

  return result.reverse();
}


assert.deepStrictEqual(incrCustomType([1, 2, 3]), [1, 2, 4]);
assert.deepStrictEqual(incrCustomType([9, 9]), [1, 0, 0]);
assert.deepStrictEqual(incrCustomType([9]), [1, 0]);
