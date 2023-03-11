import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Button from 'react-bootstrap/Button';

const LogoutButton = () => {
  const { isAuthenticated, logout } = useAuth0();

  console.log('is authenticated state in logout button ', isAuthenticated);

  return (
    // isAuthenticated &&
    <Button
      variant="secondary"
      size="lg"
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
    >
      Log Out
    </Button>
  );
};

export default LogoutButton;
