import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import GoogleLogin from 'react-google-login';

import Admininputform from '../../components/Admininputform';
import EventsCalendar from '../../components/EventsCalendar';
import { AuthRepository } from '../../services/AuthServices';

enum clubnames {
  codingclub = 'Coding Club',
  aiclub = 'AI and Data Science Club',
  roboticsClub = 'Robotics Club'
}


const Admin: React.FC = () => {
  const [LoggedIn, setLoggedIn] = useState(false);
  const [EventsData, setEventsData] = useState([]);
  const [loading, setLoading] = useState(false);



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
<<<<<<< HEAD
    <Container>
     {
       !LoggedIn? <><EventsCalendar editable={true} />
       <Admininputform /></> :<div style={{marginLeft:50, width:'100%'}}>  <GoogleLogin
                clientId="92821589740-n027pnhb5hla7cfjc76emtvg6hvkhd4u.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
                buttonText="LOGIN WITH GOOGLE"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
            /> </div>  
     } 
     </Container>
=======
      <Container>
        {
          LoggedIn ? <><EventsCalendar editable={true} />
            <Admininputform /></> : <div style={{ marginLeft: 50, width: '100%' }}>  <GoogleLogin
              clientId="92821589740-n027pnhb5hla7cfjc76emtvg6hvkhd4u.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
              buttonText="LOGIN WITH GOOGLE"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
            /> </div>
        }
      </Container>
>>>>>>> 6ae0b2439244ff02788f92195647adc04ff4e16a
    </>
  );
};

export default Admin;
