
let arr = [1,2,3,4,6]

let n = 6


let expectedSum = (n * (n+1))/2

// console.log(expectedSum)

let sum = 0 
for(let i = 0;i<arr.length ;i++)
{
     sum = sum + arr[i]
}

let missingNumber = expectedSum - sum 

console.log(missingNumber)


// ===============================================================

let xor1 = 0

for(let i=0;i<arr.length;i++)
{
   xor1 = xor1 ^ arr[i]
}

let xor2 = 0 

for(let i=1;i<=n;i++)
{
    xor2 = xor2 ^ i
}

console.log(xor1 ^ xor2)

/*


let missing = (arr,n) => {
    arr.sort((x,y) => x-y);
    
    console.log(arr);

    for(let i=0 ; i<=n ; i++){
        if(arr[i] !=i){
            return i
        }
    }
    return -1
}

let arr=[0,1,2,3,4,6]

let n=6;

console.log(missing(arr,n));

let a=[1,2,3,4,5]
let n1=5

console.log(missing(a,n1));

//-------------------------------ALTER METHOD---------------------------------------

let b= [1,2,3,5,6]

let n2=6

let expected_sum = (n2 *(n2+1))/2;

console.log(expected_sum);

let actual_sum=0

for(let i=1 ; i<=n2 ; i++){
    actual_sum=actual_sum+b[i]
}

let missing_number = expected_sum-actual_sum;

console.log(missing_number);
 */