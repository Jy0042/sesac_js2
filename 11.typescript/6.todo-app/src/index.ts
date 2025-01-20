interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const todo: Todo[] = [];
let currentId: number = 1;

function addTodo(title: string): void {
  const newTodo = { id: currentId++, title, completed: false };
  todo.push(newTodo);
  console.log("Todo added: ", newTodo);
}

addTodo("Learn JavaScript");
addTodo("Learn TypeScript");
addTodo("잠자기");

console.log("Todos: ", todo);
