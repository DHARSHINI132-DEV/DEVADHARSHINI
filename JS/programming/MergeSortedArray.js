let a = [ 1,3,5,7,9]
let b =[2,4,6 ]


let i = 0 
let j = 0

let c = []

while(i<a.length && j<b.length)
{
    if(a[i] < b[j])
    {
        c.push(a[i])
        i++
    }
    else{
        c.push(b[j])
        j++;
    }
}



while(i<a.length)
{
    c.push(a[i])
    i++
}


while(j< b.length)
{
    c.push(b[j])
    j++
}
console.log(c)

/*let arr1 = [1,3,5,7,9]

let arr2 = [2,4,6,]

let arr3 = [...arr1 , ...arr2]


arr3.sort((x , y) => x-y)

console.log(arr3);

// Alter  method

let n = (arr1.length)+(arr2.length)
let l=0
let r=0
let res=[]

for (let i=0 ; i<n ;i++)
{
    if(i%2==0)
    {
        res[i] = arr1[l]
        l++
    }

    else{
        res[i] = arr2[r]
        r++
    }
}

console.log(res);


// alter method 

let ans=[]

let j=0
let k=0

while (j<arr1.length && k<arr2.length){


    if(arr1[j]<arr2[k]){
        ans.push(arr1[j])
        j++
    }

    else{
        ans.push(arr2[k])
        k++
    }
}

    while(j < arr1.length){
        ans.push(arr1[j])
        j++
    }

    while(k < arr2.length){
        ans.push(arr2[k])
        k++
    }


    console.log(ans);
     */