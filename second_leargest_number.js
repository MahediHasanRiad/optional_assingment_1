
const numbers = [3, 4, 90, 56, 74, 38, 28, 12, 80]

function sort(arr){
    let leargestNum = arr.sort((a, b) => b - a)     // leargest to lowest number
    let secondLeargestNum = leargestNum[1]          // second leargest Number

    // console.log(leargestNum)         
    console.log(secondLeargestNum)      
}
sort(numbers);