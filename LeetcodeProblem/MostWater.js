
// Question: https://leetcode.com/problems/container-with-most-water/


// var maxArea = function (heights) {
//     let totalWater = 0;

//     for (let i = 0; i < heights.length; i++) {

//         for (let j = i + 1; j < heights.length; j++) {

//             ///////    High level code     ////////

//             let height = Math.min(heights[i], heights[j]);
//             let width = j - i

//             let currentWater = height * width ;
//             totalWater = Math.max(currentWater, totalWater);




//             //////   low level code     ////

//             // let height;

//             // if(heights[i] > heights[j]) {
//             //     // 1            // 8
//             //     height = heights[j]
//             // }else {
//             //     height = heights[i]
//             // }



//             // console.log(totalWater);
//         //    let currentWater = height * width ;
//             // if(totalWater < currentWater) {
//             //     totalWater = currentWater;
//             // }


//             // console.log(currentWater)
//         }

//     }
//     return totalWater;
// }



var maxArea = function (heights) {
    let maxArea = 0;
    let firstPointer = 0;
    let lastPointer = heights.length - 1;

    while (firstPointer < lastPointer) {
        const height = Math.min(heights[firstPointer], heights[lastPointer]);
        const width = lastPointer - firstPointer;

        const area = height * width;
        maxArea = Math.max(maxArea, area);

        if (heights[firstPointer] <= heights[lastPointer]) {
            firstPointer++;
        } else {
            lastPointer--;
        }
    }
    return maxArea;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))

totalWater = 8;


// 1 * 8 = 8
