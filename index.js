// Add your functions here
function map(arr, func){
    let final= []
    arr.forEach(element => {
        final.push(func(element))
    });
    return final
}

function reduce(arr, func, start){
    let b = (!!start) ? start : arr[0];
    let i = (!!start) ? 0 : 1

    for(; i < arr.length; i++){
        b = func(arr[i], b)
    }
    return b
}