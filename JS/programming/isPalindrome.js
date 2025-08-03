let isPalindrome =(arr)=>{
    
    let i = 0 ;
    let j = arr.length - 1 ;

    while(i<=j)
    {
      
        if(arr[i] != arr[j])
            return false

        i++;
        j--

    }

    return true
    
 
}


let a = [1,2,3,2,1]
let b = [1,5,6,4,1]

console.log(isPalindrome(a)) 
console.log(isPalindrome(b)) 

/*let flag= true

let isPalindrome = (arr) =>{

    let l=arr[0]
    let r=arr[arr.length-1]

    while(l <= r){
        if(arr[l] != arr[r]){

            flag=false;
        }

        l++
        r-- 
        
    }

    if(flag==true){
            console.log("palindrome");
    }
        

    else
    {
            console.log("not palindrome");
    }
        

}

let a= [1,2,3,2,1]
isPalindrome(a)

let b=[2,2,5,6,7,9]
isPalindrome(b) */