let todo = [];

let input = prompt("What would you like to do?");

while (input !== "quit") {
    if (input === "new") {
        let newTodo = prompt("Enter a new todo");
        todo.push(newTodo);
    }
    else if (input === "list") {
        console.log("**********");
        todo.forEach(function (todo, i) {
            console.log(i + ": " + todo);
        });
        console.log("**********");
    }
    else if (input === "delete") {
        let index = parseInt(prompt("Enter the index of the todo to delete"));
        todo.splice(index, 1);
        console.log("Todo removed");
    }
    input = prompt("What would you like to do?");
}