/*

Write a function that returns minimum total cost of adding all array items with the following conditions:

1. You can only add two array items at once
2. Cost of adding two array items is equal to the sum of the two items

For example, given the array [ 1, 2, 3, 4 ]

- 1st iteration: Add 1 and 2, which costs 3 and yields [ 3, 3, 4 ]. Total cost is 3
- 2nd iteration: Add 3 and 3, which costs 6 and yields [ 6, 4 ]. Total cost is 3 + 6 = 9
- 3rd iteration: Add 6 and 4, which costs 10 and yields [ 10 ]. Total cost is 9 + 10 = 19
- Total cost is 19
*/

// [ 1, 2, 3, 4 ]
//  acc: 1
// acc: 3
// acc 3 : total 3
// total 6

/// sort
// cache totals [1, 3, 7,  ]
// push math to total
// if arr.length <= 0 push
// else arr.push el + arr[arr.length - 1]
// return totals.pop()

// const  section [1,2] = arr.splice(0,2)  //  [3, 4 ]

// const   = arr.splice(0,2)  //  [3, 4 ]
// const  [1,3] = arr.splice(0,2)  //  [3, 4 ]

/// sort
// cache totals [1, 3, 7,  ]
// push math to total
// if arr.length <= 0 push
// else arr.push el + arr[arr.length - 1]
// return totals.pop()

function returnS(r) {
  const arr = r.sort()
  const totals = []
  for (let i = 0; i < arr.length; i++) {
    console.log('reduce', totals)
    if (totals.length) {
      totals.push(arr[i] + totals[totals.length - 1])
    } else {
      totals.push(arr[i])
    }
  }

  return totals.reduce((acc, el, i) => {
    console.log('reduce', el)
    if (i > 0) acc += el
    return acc
  }, 0)
}

console.log(returnS([1, 2, 3, 4]))
console.log(returnS([4, 3, 2, 1]))
console.log(returnS([1, 1, 1, 1]))
