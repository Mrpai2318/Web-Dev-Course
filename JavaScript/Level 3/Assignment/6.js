let arr = ["hello",'a',23,64,99,-6];
let ele = prompt("Enter a element to check if it is present in the array: ");

if (arr.indexOf(ele) != -1) {
    console.log("Element is present in the array");
} else {
    console.log("Element is not present in the array");
}