
let sum = 0;

function avarage(...number){
    for(let num of number){  
        sum += num          // sum total number
    }

    sum /= number.length    // total number / total index
    console.log(sum)
}
avarage(10, 5, 3, 5, 3, 4)

