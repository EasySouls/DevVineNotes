import localforage from 'localforage';

export type Todo = {
  id: string;
  title: string;
  content: string;
};

export async function getTodos() {
  let todos = await localforage.getItem<Todo[]>('todos');
  if (!todos) {
    todos = [];
  }
  return todos;
}

type CreateTodoType = Omit<Todo, 'id'>;

export async function createTodo({ title, content }: CreateTodoType) {
  const id = Math.random().toString(36).substring(3, 7);
  const todo = { id, title, content };
  const todos = await getTodos();
  todos.unshift(todo);
}

export async function getTodo(id: string) {
  const todos = await localforage.getItem<Todo[]>('todos');
  const todo = todos?.find((todo) => todo.id === id);
  return todo ?? null;
}

export async function deleteTodo(id: string) {
  const todos = await localforage.getItem<Todo[]>('todos');
  const index = todos?.findIndex((todo) => todo.id === id);
  if (index && todos) {
    todos?.splice(index, 1);
    await set(todos);
    return true;
  }
  return false;
}

function set(todos: Todo[]) {
  return localforage.setItem('todos', todos);
}
