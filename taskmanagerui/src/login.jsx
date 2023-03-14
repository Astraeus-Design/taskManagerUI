import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Button from 'react-bootstrap/Button';
import TaskCard from './components/TaskCard';
import ViewTasks from './components/ViewTasks';

const LoginButton = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  return <ViewTasks />;
  /*
  return (
    !isAuthenticated && (
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ margin: '30px auto' }}>THE Task Manager</h1>
        <p style={{ width: '35%', margin: '0 auto' }}>
          Easily manage your tasks and activities. Assign tasks to staff with
          ease. In use by thousands of happy users with many reviews.
        </p>
        <br></br>
        <br></br>
        <p style={{ width: '35%', margin: '0 auto' }}>
          "I've used Task Manager App for years wouldn't use any other:-
          Aldridge Prior"
        </p>
        <br></br>
        <br></br>
        <p style={{ width: '35%', margin: '0 auto' }}>
          "I used the App throughout my rise to power, it's brilliant" :-
          R.Sunak
        </p>
        <Button
          size="lg"
          variant="secondary"
          style={{ margin: '30px auto' }}
          onClick={() => loginWithRedirect()}
        >
          Log In To View Tasks
        </Button>
      </div>
    )
  );*/
};

export default LoginButton;
