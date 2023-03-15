import React from 'react';
//import MyNavBar from './MyNavBar';
import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import TaskCard from './TaskCard';
import Stack from 'react-bootstrap/Stack';

function ViewTasks(props) {
  const [tasklist, setTasksArray] = useState([]);
  const [refreshCards, setRefresh] = useState(true);
  const [validData, setValidData] = useState(false);
  const [timerID, saveID] = useState(0);
  const [firsttime, setflag] = useState(true);

  let countVal;

  // useEffect for getting products

  useEffect(() => {
    console.log('inside the useEffect');

    async function getTasks() {
      try {
        console.log('calling async api');

        const digiUrl = 'http://127.0.0.1:3010/task';
        const tasksData = await axios.get(digiUrl);

        console.log(' here is the data   ', tasksData.data);
        const tempa = tasksData.data;
        console.log(tempa[0]._id);

        //console.log(digiData.description);
        //const digiData = imageData.data.results;
        setRefresh(false);
        setTasksArray(tasksData.data);
        setValidData(true);
        // response.status(200).send(digiData);
      } catch (error) {
        console.log(error);
        console.log('error in get products');

        //response.status(500).send("error in request for images");
      }
      //setCallApi(false);
    }

    if (refreshCards) {
      getTasks();
    }

    // return () => {
    //   console.log('in return');
    //   if (firsttime) {
    //     const myTimer = setInterval(() => {
    //       setRefresh(true);
    //       console.log('tick');
    //     }, 10000);
    //     saveID(myTimer);
    //     setflag(false);
    //   } else {
    //     clearInterval(timerID);
    //   }
    // };
  });

  // useEffect for post to keep independent from apiproduct acquisition
  /*
  useEffect(() => {
    async function postData() {
      // maybe post data in useeffect

      try {
        console.log('object is  ', sendPost);
        const postObj = {
          image_link: sendPost[1],
          name: sendPost[2],
          brand: sendPost[3],
          price: sendPost[4],
          description: sendPost[5],
        };

        const res = await axios.post('http://127.0.0.1:3001/product', postObj);
        console.log(res);
      } catch (error) {
        console.log('error in posting data');
      }
    }

    if (sendPost[0] === true) {
      postData();
      setSendPost([false]);
    }
  }, [sendPost]);  */

  /*
  const buttonHandler = (e) => {
    let i = e.target.attributes.getNamedItem('btnindex').value;
    let tempObj = cosmeticsJSON[i];
    const { image_link, name, brand, price, description } = tempObj;
    setSendPost([true, image_link, name, brand, price, description]);
  }; */

  // handler for delete button in task cards

  const deleteTask = async (e) => {
    let i = e.target.attributes.getNamedItem('idx').value;
    console.log(i, '  index value');

    if (window.confirm('Do you want to delete task?')) {
      console.log('in delete');
      try {
        console.log('calling async api');
        const tempObj = tasklist[i];
        const idStr = tempObj._id;
        console.log(idStr);
        const deleteUrl = 'http://127.0.0.1:3010/task/' + idStr;
        console.log(deleteUrl);
        const tasksData = await axios.delete(deleteUrl);

        setRefresh(true);

        // response.status(200).send(digiData);
      } catch (error) {
        console.log(error);
        console.log('error in get products');

        //response.status(500).send("error in request for images");
      }
    }
  };

  // handler for update button in task cards

  const updateTask = (e) => {
    let i = e.target.attributes.getNamedItem('idx').value;
    console.log(i, '  index value');
  };

  countVal = 0;

  if (validData) {
    return (
      <>
        {/* <MyNavBar /> */}
        <div>
          <Stack direction="vertical" gap={1}>
            {tasklist.map((item, index) => {
              /*
taskName: '',
dueDate: currentDate,
status: 'not started',
description: '',
priorityLevel: 5,
assignedUser: 'me',*/

              const {
                taskName,
                dueDate,
                status,
                description,
                priorityLevel,
                assignedUser,
              } = item;

              const taskObj = {
                taskName: taskName,
                dueDate: dueDate,
                status: status,
                description: description,
                priorityLevel: priorityLevel,
                assignedUser: assignedUser,
              };

              return (
                <TaskCard
                  taskprops={taskObj}
                  idx={countVal++}
                  btn1cb={deleteTask}
                  btn2cb={updateTask}
                />
              );
            })}
            ;
          </Stack>
        </div>
      </>
    );
  } else {
    return (
      <div style={{ margin: '50px auto 0 auto', textAlign: 'center' }}>
        <h3>Loading......</h3>
      </div>
    );
  }
}

export default ViewTasks;
