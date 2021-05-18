import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import GoogleLogin from 'react-google-login';
import { useHistory } from 'react-router';

import Admininputform from '../../components/Admininputform';
import EventsCalendar from '../../components/EventsCalendar';
import { AuthRepository } from '../../services/AuthServices';
import { RootState, useAppDispatch, useAppSelector } from '../../Store';

enum clubnames {
  codingclub = 'Coding Club',
  aiclub = 'AI and Data Science Club',
  roboticsClub = 'Robotics Club'
}


const Admin: React.FC = () => {
  const [LoggedIn, setLoggedIn] = useState(false);
  const [EventsData, setEventsData] = useState([]);
  const [loading, setLoading] = useState(false);

  const history = useHistory();
  const isLogin = useAppSelector((state: RootState) => state.loggedIn);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("login");
    console.log(loggedInUser);
    if (loggedInUser) {
      dispatch({type: 'LOGIN_SUCCESS'});
      let path = `addevent`; 
      history.push(path);
    }
    return () => {
    };
  }, []);

  const updateData = async () => {
    const clubs = [clubnames.aiclub];
  }
  const login = async (identity: string) => {
    try {
      setLoading(true);
      const resp = await AuthRepository.getAdminPerms(identity);
      console.log(resp);
      if (resp.data.success) {
        setLoggedIn(true);
        setLoading(false);
        await dispatch({type: 'LOGIN_SUCCESS'});
        console.log(isLogin);
        await localStorage.setItem('login', 'true');
        let path = `addevent`; 
        history.push(path);
      }
    }
    catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  const responseGoogle = (response: any) => {
    const user = {
      name: response.profileObj.name,
      email: response.profileObj.email,
      avatar: response.profileObj.imageUrl,
    }
    console.log(user);
    const iden = user.email.split('@')[0];
    login(iden);
  }

  return (
    <>
    <Container>
     
       <div style={{marginLeft:50, width:'100%'}}>  <GoogleLogin
                clientId="92821589740-n027pnhb5hla7cfjc76emtvg6hvkhd4u.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
                buttonText="LOGIN WITH GOOGLE"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
            /> </div>  
     
     </Container>
    </>
  );
};

export default Admin;
