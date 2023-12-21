import { useLoaderData } from 'react-router-dom';
import { getTodo } from './todos';

// eslint-disable-next-line @typescript-eslint/no-explicit-any, react-refresh/only-export-components
export async function loader({ params }: any) {
  const todo = await getTodo(params.todoId);
  return { todo };
}

const Todo = () => {
  const { todo } = useLoaderData();

  return <div>Todo</div>;
};

export default Todo;
