let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let num = parseInt(prompt("Enter a number: "));

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
        arr.splice(i, 1);
    }
}
console.log(`Array after removing all the occurance of ${num} is: ${arr}`);