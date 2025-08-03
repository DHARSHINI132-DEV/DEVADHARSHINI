let reversed = (arr) => {

    let l=0
    let r=arr.length-1
    let temp=0

    while(l<=r)
    {
        temp=a[l]
        a[l]=a[r]
        a[r]=temp
    }

    console.log(arr);
    
}

a=[1,2,3,4,5]
reversed(a)