import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Login from './components/Login';
import NotesList from './features/notes/NotesList';
import Dashboard from './features/dashboard/Dashboard';
import Paths from './app/utils/paths';
import ErrorPage from './components/ErrorPage';
import Register from './features/register/Register';

function App() {
  return (
    <Routes>
      <Route path={Paths.INDEX} element={<Layout />}>
        {/* Landing page for the application */}
        <Route index element={<Home />} />

        {/* Auth */}
        <Route path={Paths.LOGIN} element={<Login />} />
        <Route path={Paths.REGISTER} element={<Register />} />

        {/* Notes */}
        <Route path={Paths.NOTES}>
          <Route index element={<NotesList />} />
        </Route>

        {/* Dashboard */}
        <Route path={Paths.DASHBOARD} element={<Dashboard />} />

        {/* Fallback page for the not defined routes */}
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default App;
