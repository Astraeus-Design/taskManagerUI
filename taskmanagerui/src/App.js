import logo from './logo.svg';
import './App.css';
import LoginButton from './login';
import Logout from './logout';
import Profile from './profile';
import { useAuth0 } from '@auth0/auth0-react';
import TaskNavbar from './components/TaskNavbar';
import TaskRouter from './router/TaskRouter';

function App() {
  const userNameContext = useAuth0();

  return (
    <div className="App">
      {/* <TaskRouter> */}
      <TaskNavbar />
      {/* </TaskRouter> */}
      {/* <Profile /> */}
    </div>
  );
}

export default App;
