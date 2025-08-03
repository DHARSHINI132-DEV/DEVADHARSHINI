// output should be [0,0,0,0,1,1,1,1,1]
let arr = [1,1,0,1,0,0,1,0,1]

let  l=0
let r=arr.length-1
let temp = 0

while(l<=r){

    if(arr[l]>arr[r]){
        temp=arr[l]
        arr[l]=arr[r]
        arr[r]=temp
        l++
        r--
    }

    if(arr[l]==0)
    {
        l++
    }

    else{
        r--
    }
}

console.log(arr);


// let arr = [1,1,0,1,0,0,1,0,1]

// let i = 0 
// let j = 0

// while(j < arr.length)
// {
//     if(arr[j] ==1)
//         j++;
//     else{

//         let t = arr[j]
//         arr[j] = arr[i]
//         arr[i] = t

//         i++;
//         j++;
//     }
// }

// console.log(arr)
// console.log(10 & 1)