
// We can console.log the `8` in this array if we
// console.log(arr2d[0][2]);
// the first index `0` will select the `[2, 5, 8]` sub-array
// the second index `2` will select the `8` out of that sub-array


var arr2d = [ [2, 5, 8],
              [3, 6, 1],
              [5, 7, 7] ];
    


// complete the following function
function flatten(arr2d) {
    var flat = [];
    for(var i = 0; i < arr2d.length; i++) {
        for(var x = 0; x < arr2d[i].length; x++) {
            flat.push(arr2d[i][x]);
        }
    }
    return flat;
}
    
var result = flatten( [ [2, 5, 8], [3, 6, 1], [5, 7, 7] ] );
console.log(result); // we expect to get back [2, 5, 8, 3, 6, 1, 5, 7, 7]


