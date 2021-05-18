import React, { useState, useEffect } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useHistory } from 'react-router';

import Admininputform from '../../components/Admininputform';
import EventsCalendar from '../../components/EventsCalendar';
import { RootState, useAppDispatch, useAppSelector } from '../../Store';

interface Iprop {
  // LoggedIn: boolean
}

const Admininput: React.FC = (props:Iprop) => {
  const isLogin = useAppSelector((state: RootState) => state.loggedIn);
  // console.log('input form',isLogin);
  const dispatch = useAppDispatch();
  const history = useHistory();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("login");
    console.log(loggedInUser);
    if (loggedInUser) {
      dispatch({type: 'LOGIN_SUCCESS'});
      // let path = `addevent`; 
      // history.push(path);
    }
    return () => {
    };
  }, []);
  const handleLogout = async () => {
    await localStorage.clear();
    dispatch({type: 'LOGOUT'});
    let path = `admin`; 
    history.push(path);
  }
  return (
    <div>
      {
        isLogin?<Container style={{marginTop:50}}>
        <EventsCalendar editable={true} />
        <Admininputform />
        <Button style={{margin:'auto', marginTop:50}} onClick={handleLogout}>
          Logout
        </Button>
      </Container>:<><h1>User Not Logged In</h1></>
      }
      
    </div> 
  );
};

export default Admininput;
