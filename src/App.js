import { useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DarkModeContext } from './context/darkModeContext';
import Form from './pages/forms/Form';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Landing from './pages/landing/Landing';
import Users from './pages/users/Users';
import './style/dark.scss';

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="landing" element={<Landing />} />
            <Route path="users" element={<Users />} />
            <Route path="forms">
              <Route index element={<Form />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
