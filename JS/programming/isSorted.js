let arr = [2,3,4,1,5,10]

let flag = true;

for(let i=1 ; i<arr.length;i++)
{
    if(arr[i-1] > arr[i])
    {
        flag = false       
        break;
    }
}

if(flag == true)
    console.log("sorted")
else
    console.log('not sorted')

/*let temp=arr
console.log(temp);


temp.sort((x,y)=>x-y);
console.log(temp);
console.log(arr);

for(let i=0 ; i< arr.length ; i++)
{

    console.log(arr[i]);
    console.log(temp[i]);
    if(arr[i]!=temp[i]){
        
        
        console.log("not sorted");
    }
}*/