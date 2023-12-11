import { Routes, Route } from "react-router-dom";
import LoggedInLayout from "./components/LoggedInLayout";
import Home from "./components/Home";
import Login from "./components/Login";
import NotesList from "./notes/NotesList";
import Dashboard from "./dashboard/Dashboard";

function App() {
  return (
    <Routes>
      <Route path='/' element={<LoggedInLayout />}>
        {/* Landing page for the application */}
        <Route index element={<Home />} />

        {/* Auth */}
        <Route path='login' element={<Login />} />
        {/*<Route path='register' element={<Register />} />*/}

        {/* Notes */}
        <Route path='notes'>
          <Route index element={<NotesList />} />
        </Route>

        {/* Dashboard */}
        <Route path='dashboard' element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

export default App;
