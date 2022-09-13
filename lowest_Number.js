let numbers = [2, 54, 6, 4, 34, 650, 5, 12, 6, 89]

function sort(arr){
    arr.sort((a, b) => a - b)   // low to high
    // arr.sort((a, b) => b - a)  // high to low

    console.log(arr)
}
sort(numbers)


let num = Math.max(...numbers)
let num2 = Math.min(...numbers)

// console.log(num)