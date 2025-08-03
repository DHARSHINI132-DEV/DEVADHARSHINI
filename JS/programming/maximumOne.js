let arr = [ 1,1,0,0,1,0,1,1,1]


let c = 0 ;
let max = 0 

for(let i=0 ; i<arr.length ; i++)
{
    if(arr[i] == 1)
    {
        c++;
        max = Math.max(max,c)
    }
    else{
        c = 0 
    }
}

console.log(max)

/*let consecutiveCount = (arr) =>{
    let count=0;
    let max_count=0
    
    for(let i=0; i<arr.length ; i++){
        if(arr[i]==1){
            count++;
           
            if(count > max_count){
                    max_count=count;
                }

            // or   max_count=Math.max(max_count,count)
        }

        else{
            count=0
        }
    }
    
    return max_count
}

let arr=[1,1,0,0,1,0,1,1,1]
console.log(consecutiveCount(arr));


let a=[0,0,1,1,1,1,0,1,1,0]
console.log(consecutiveCount(a)); */