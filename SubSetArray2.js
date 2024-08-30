arr1=[1,2,3];
arr2=[6,5,2,3,8,1];
function isSubSet(a,b){
    for(i of arr1){
        if(!arr2.includes(i)){
            return "arr1[] is not a sunset of arr2[]"
        }
    }
    return "arr1[] is a subset of arr2[]"
}
console.log(isSubSet(arr1,arr2))