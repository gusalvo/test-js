function printTodos(){
    console.log(JSON.stringify(todos, undefined, 2) + '\n');
}


var todos = [

    {
        name:'andare in palestra',
        done: false
    },

    {
        name:'andare in ufficio',
        done: false
    },

    {
        name:'andare a correre',
        done: false
    },

    {
        name:'andare in bici',
        done: true
    },


]

function addTodo(valore) {

    todos.push({
        name: valore,
        done: false
    });

}    



function updateTodo(valore, valore2) {

    todos[valore].name = valore2;

}  


function markAsDone(valore) {

    todos[valore].done = true;

}  


function removeTodo(valore) {

    todos.splice(valore, 1);

} 



// funzione stampa solo elementi con valore true

function getDoneTodos() {
    
    var length = todos.length

    var result = []



    for(x = 0;x < length;x++){

        if (todos[x].done == true) {
            
            result.push(todos[x]);

        }
        
    }

    return result;
    
} 

//








//Execution

printTodos();
addTodo('Go to the Gym');
printTodos();
console.log('Added a Todo');


updateTodo(1,'Got eat a Salad');
console.log('Updated a Todo');
printTodos();


markAsDone(2);
console.log('Marked a Todo as done');
printTodos();


removeTodo(0);
console.log('Removed two todos');
printTodos();


console.log(JSON.stringify(getDoneTodos(), undefined, 2) + '\n');
printTodos();



/*
printTodos();
addTodo('Go eat an Hambureger');
console.log('Added a Todo');
printTodos();
updateTodo(1,'Got eat a Salad');
console.log('Updated a Todo');
printTodos();
markAsDone(0);
console.log('Marked a Todo as done');

console.log(JSON.stringify(getDoneTodos(), undefined, 2) + '\n');
printTodos();


removeTodo(1);


removeTodo(0);
console.log('Removed two todos');
printTodos();

*/
