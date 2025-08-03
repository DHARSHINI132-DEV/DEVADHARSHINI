let arr = [1,2,3,3,2,4,1]

// output =>  4

let ans = 0 
for(let i=0; i<arr.length ; i++)
{
    ans = ans ^ arr[i]

}

console.log(ans)

/*let arr=[1,2,3,3,1,4,2]

arr.sort((x,y)=>x-y)



for (let i=1 ; i<=arr.length-1 ; i++)
{
     
    if(arr[i-1]==arr[i])
        i++;
    else
        console.log(arr[i]);
        
}

if(arr[arr.length-1]!=arr[arr.length-2])
    console.log(arr[arr.length-1]);


//ALTER METHOD --> using xor --> in xor 0^0=0 / 1^1=0 / 2^2=0  and 0^1=1 / 0^4=4 

// so if any element is present 2 times then it will return the element which is not repeated 2 times

arr1=[2,6,2,5,3,6,4,3,4]
let res=0

for( let i=0 ; i<arr1.length ; i++)
    {
        res=res^arr1[i]
    } 

console.log(res);

     */