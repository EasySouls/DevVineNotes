import { Dashboard, Home } from '@mui/icons-material';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Paths from './app/lib/paths';
import { queryClient } from './app/lib/query';
import ErrorPage from './components/ErrorPage';
import Contact from './features/contact/Contact';
import Layout from './components/Layout';
import TodosList, { loader as todosLoader } from './features/todos/TodosList';
import { action as todosAction } from './features/todos/NewTodo';
import Todo from './features/todos/Todo';
import { loader as todoLoader } from './features/todos/Todo';

const router = createBrowserRouter([
  {
    path: Paths.INDEX,
    element: <Layout />,
    errorElement: <ErrorPage />,
    //loader: appLoader,
    children: [
      {
        path: Paths.INDEX,
        element: <Home />,
      },
      {
        path: `${Paths.CONTACTS}/:contactId`,
        element: <Contact />,
      },
      {
        path: Paths.DASHBOARD,
        element: <Dashboard />,
      },
      {
        path: Paths.TODOS,
        element: <TodosList />,
        loader: todosLoader,
        action: todosAction,
      },
      {
        path: `${Paths.TODOS}/:todoId`,
        element: <Todo />,
        loader: todoLoader,
      },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
