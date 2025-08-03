

let isSortedRotated = (arr)=>{

    let n = arr.length
    let count = 0

    for (let i=1; i<n;i++)
    {
        if(arr[i-1] > arr[i])
        {
            count++;
        }
    }

    if(arr[n-1] > arr[0])
        count++
   

    // console.log(count)
    if(count ==1)
        console.log("sorted and rotated")
    else
        console.log('not sorted and rotated')
}

let a = [5,6,1,2,3,4]
let b = [13,10,11,12]
let c =[1,4,5,6,5,7]

isSortedRotated(a)
isSortedRotated(b)
isSortedRotated(c)

/*let arr=[5,6,1,2,3,4]

let combined_arr=arr.concat(arr)

console.log(combined_arr);




for (let i=0 ; i<combined_arr.length ; i++)
{
    if(arr[0]== combined_arr[i])
    {
         while (arr.length>0){
            if(combined_arr[i]!=arr[i])
            {
             flag=false;
            }
            else
                flag=true;
        }
        break;

    }
   
    

}


if(flag==true)
    console.log("Sorted");

else
    console.log("not sorted");*/