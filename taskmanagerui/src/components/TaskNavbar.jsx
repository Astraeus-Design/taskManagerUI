import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import { LinkContainer } from 'react-router-bootstrap';
import LogoutButton from '../logout';
import { Link } from 'react-router-dom';
import bpuss from '../assets/bpuss2_icon.png';

function TaskNavbar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={bpuss} //"../assets/bpuss2_icon.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Task Manager
          </Navbar.Brand>
          <Stack direction="horizontal" gap={3}>
            <LinkContainer to="/main">
              <Button variant="secondary">View Tasks</Button>
            </LinkContainer>
            <LinkContainer to="/createTask">
              <Button variant="secondary">New Task</Button>
            </LinkContainer>
            <LogoutButton />
            <LinkContainer to="/updateTask">
              <Button variant="secondary">Update Task</Button>
            </LinkContainer>
            {/*}    <Link to='/updateTask'><Button variant="secondary">Spare</Button></Link> */}
          </Stack>
        </Container>
      </Navbar>
    </>
  );
}

export default TaskNavbar;
