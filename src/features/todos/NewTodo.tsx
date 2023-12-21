import { Form } from 'react-router-dom';
import { createTodo } from './todos';

export async function action() {
  const todo = await createTodo();
  return { todo };
}

const NewTodo = () => {
  return (
    <Form method="post">
      <button type="submit">Create</button>
    </Form>
  );
};

export default NewTodo;
