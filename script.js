//Any negative numbers need to be replced with at zero.

function zeroOut(arr){

var newArr = []

    for (var i = 0; i < arr.length; i++){
        if (arr[i] < 0){
            arr[i] = 0;
        }
        newArr.push(arr[i]);
    }
    return newArr;
}