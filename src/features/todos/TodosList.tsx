import { Link, useLoaderData } from 'react-router-dom';
import { getTodos } from './todos';
import NewTodo from './NewTodo';

export const loader = async () => {
  const todos = await getTodos();
  return { todos };
};

const TodosList = () => {
  const { todos } = useLoaderData();

  return (
    <div className="">
      <h2 className="text-2xl">Todos</h2>
      <NewTodo />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <Link to={`todos/${todos.id}`}>{todo.title}</Link>
            <p>{todo.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodosList;
