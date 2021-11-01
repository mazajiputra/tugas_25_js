var array1 = [2,39,76,50,9,7,41,2,24,1,16];
function sorting(data) {
    return data.sort()
}

function reverse(data) {
    return data.reverse()
}

function filter(data) {
    let hasil= data.filter(data => {
        return data >10 ;
    });
    return hasil
}

console.log("Sebelumnya :",array1);
console.log("Ascending :",sorting(array1));
console.log("Descending :",reverse(array1));
console.log("Filter > 10 :",filter(array1));