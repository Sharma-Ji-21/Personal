function sort(){
    let arr=[-6,20,8,-2,4];
    for(let i=1;i<arr.length;i++){
        let NumInserted=arr[i];
        let j=i-1;
    while(j>=0 && NumInserted<arr[j]){
            arr[j+1]=arr[j];
            j=j-1;
        }
        arr[j+1]=NumInserted;
    }
    console.log(arr);
}
sort();