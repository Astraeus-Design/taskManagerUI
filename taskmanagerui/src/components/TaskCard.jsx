import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import { useState } from 'react';
import Stack from 'react-bootstrap/Nav';
import {
  Trash3,
  PencilSquare,
  Icon2SquareFill,
  Icon3SquareFill,
  Icon1SquareFill,
  SquareFill,
} from 'react-bootstrap-icons';

function TaskCard(props) {
  const [selected, setSelectVal] = useState('#first');
  const taskVals = props.taskprops;
  let bVariant;
  let sVariant;
  let btext;
  let stext;
  let titleString;
  let strikeout;
  let isOwner = true;

  console.log(taskVals);

  switch (taskVals.priorityLevel) {
    case 0:
      bVariant = 'primary';
      btext = 'High';
      break;
    case 1:
      bVariant = 'secondary';
      btext = 'Medium';
      break;
    case 2:
      bVariant = 'dark';
      btext = 'Low';
      break;
    default:
      bVariant = 'dark';
      btext = 'Low';
      break;
  }

  switch (taskVals.status) {
    case '0':
      sVariant = 'warning';
      stext = 'Pending';
      break;
    case '1':
      sVariant = 'danger';
      stext = 'Overdue';
      break;
    case '2':
      sVariant = 'success';
      stext = 'Completed';
      break;
    default:
      sVariant = 'warning';
      stext = 'Pending';
      break;
  }

  // override the above values by checking due time to current
  console.log(Date.parse(taskVals.dueDate), Date.now());

  if (Date.parse(taskVals) >= Date.now() && taskVals.status !== '2') {
    sVariant = 'danger';
    stext = 'Overdue';
  }

  if (taskVals.status === '2') {
    titleString = taskVals.taskName;
    strikeout = 'line-through';
  } else {
    titleString = taskVals.taskName;
    strikeout = 'none';
  }

  return (
    <Card style={{ width: '35rem', margin: '3px auto 3px auto' }}>
      <Card.Header>
        <Nav
          variant="tabs"
          defaultActiveKey="#first"
          onSelect={(selectedKey) => {
            setSelectVal(selectedKey);
            console.log(selectedKey);
          }}
        >
          <Nav.Item>
            <Nav.Link href="#first">Task Detail</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#second">Properties</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#third">Task Owner</Nav.Link>
          </Nav.Item>
        </Nav>
      </Card.Header>
      {selected === '#first' && (
        <Card.Body id="first">
          <Card.Title style={{ textDecoration: `${strikeout}` }}>
            {taskVals.taskName}
          </Card.Title>
          <Card.Text>{taskVals.description}</Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      )}

      {selected === '#second' && (
        <Card.Body id="second">
          <Card.Title>Assigned Attributes</Card.Title>
          <Card.Text>
            Task due: {taskVals.dueDate}
            <br></br>
            Priority Level: {taskVals.priorityLevel}
          </Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      )}

      {selected === '#third' && (
        <Card.Body id="third">
          <Card.Title>Task Owner</Card.Title>
          <Card.Text>Task owner: {taskVals.assignedUser}</Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      )}
      <Stack direction="horizontal" gap={3} style={{ margin: '5px' }}>
        {/* <Button variant={bVariant} size="sm" style={{ marginRight: '5px' }}>
          Priority: {btext}
        </Button>
        <Button variant={sVariant} size="sm" style={{ marginRight: '5px' }}>
          Status: {stext}
        </Button> */}
        <button
          color="gray"
          size="sm"
          style={{ marginRight: '5px', border: '0px' }}
        >
          Priority:{' '}
          {btext === 'Low' && <Icon1SquareFill color="gray" size={32} />}
          {btext === 'Medium' && <Icon2SquareFill color="gray" size={32} />}
          {btext === 'High' && <Icon3SquareFill color="gray" size={32} />}
        </button>
        <button
          color="gray"
          size="sm"
          style={{ marginRight: '5px', border: '0px' }}
        >
          Status:{' '}
          {stext === 'Pending' && <SquareFill color="orange" size={32} />}
          {stext === 'Overdue' && <SquareFill color="red" size={32} />}
          {stext === 'Completed' && <SquareFill color="green" size={32} />}
        </button>

        {isOwner && (
          <div style={{ marginLeft: 'auto' }}>
            <button
              style={{ marginRight: '3px', border: '0px' }}
              onClick={props.btn1cb}
              idx={props.idx}
            >
              <Trash3
                onClick={props.btn2cb}
                idx={props.idx}
                color="gray"
                size={32}
              />
            </button>
            <button
              style={{ marginRight: '3px', border: '0px' }}
              onClick={props.btn2cb}
              idx={props.idx}
            >
              <PencilSquare color="gray" size={32} />
            </button>
          </div>
          // <div style={{ marginLeft: 'auto' }}>
          //   <Button
          //     variant="secondary"
          //     size="sm"
          //     style={{ marginRight: '5px' }}
          //     onClick={props.btn1cb}
          //     idx={props.idx}
          //   >
          //     Delete
          //   </Button>
          //   <Button
          //     variant="secondary"
          //     size="sm"
          //     style={{ marginRight: '5px' }}
          //     onClick={props.btn2cb}
          //     idx={props.idx}
          //   >
          //     Update
          //   </Button>
          // </div>
        )}
      </Stack>
    </Card>
  );
}

export default TaskCard;
