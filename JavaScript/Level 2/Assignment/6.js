let num1 = prompt("Enter the first number: ");
let num2 = prompt("Enter the second number: ");

if (num1[num1.length - 1] === num2[num2.length - 1]){
    console.log(`Both numbers have the same last digit ${num1[num1.length - 1]}`);
}
else{
    console.log(`Both numbers have different last digits ${num1[num1.length - 1]} and ${num2[num2.length - 1]}`);
}