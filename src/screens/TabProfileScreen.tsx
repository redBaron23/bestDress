import React, { useState } from 'react';
import AuthenticatorService from '../services/AuthenticatorService';
import Profile from '../components/Profile';
import { useEffect } from 'react';

interface Props {
  route?: any
}

export default function TabProfileScreen(props: Props) {
    const { route } = props;
    const params = route.params;

    const [username, setUsername] = useState<string>(params?.username);

    useEffect(() => {
      if (params) {
        return;
      }
      AuthenticatorService.getUsername()
        .then(setUsername);
    }, []);

  return (<>
    {
      username &&  <Profile isSelfProfile={!params} username={username} />
    }
    </>
  );
};