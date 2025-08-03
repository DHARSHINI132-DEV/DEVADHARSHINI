
// !  right rotate the array by 1 position

let arr = [10,20,30,40,50,60]

// output = >  [60,10,20,30,40,50]

let n = arr.length

let copy = arr[n-1]

for(let i=n-2 ; i>=0;i--)
{
   arr[i+1] =  arr[i]
}

arr[0] = copy

console.log(arr)

/*let arr=[10,20,30,40,50,60]

let temp=arr[arr.length-1]


for(let i=arr.length-1 ; i>0 ; i--)
{
    arr[i]=arr[i-1]
}

arr[0]=temp

console.log(arr);
 */