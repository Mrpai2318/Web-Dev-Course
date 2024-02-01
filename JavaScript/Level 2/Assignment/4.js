let gldstr = prompt("Enter a string: ");

if ([gldstr[0] === 'A' || gldstr[0] === 'a'] && gldstr.length > 5){
    console.log("Golden String");
}
else{
    console.log("Not a Golden String");
}