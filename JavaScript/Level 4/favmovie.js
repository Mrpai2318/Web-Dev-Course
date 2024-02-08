const movie = "Avengers";

while (n=1){
    let ans = prompt("What is your favourite movie?" + " " + "Enter 'exit' to exit.");
    if (ans == movie){
        alert("Yeah! That's my favourite movie too!");
        break;
    }
    else if (ans == "exit"){
        break;
    }
    else{
        alert("I haven't watched that movie yet.");
    }
}