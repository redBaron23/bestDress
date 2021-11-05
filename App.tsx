import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as PaperProvider } from 'react-native-paper';
import Amplify from 'aws-amplify'
import config from './src/aws-exports'
// @ts-ignore
import { withAuthenticator } from 'aws-amplify-react-native'

Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
Storage: {
  AWSS3: {
    ...config,
  },
},
});

import useCachedResources from './src/hooks/useCachedResources';
import useColorScheme from './src/hooks/useColorScheme';
import Navigation from './src/navigation';
import { useEffect } from 'react';
import AuthenticatorService from './src/services/AuthenticatorService';

function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  // const currentCred = Auth.currentUserCredentials().then(console.log);
  // const currentInfo = Auth.currentUserInfo().then(console.log);

 // console.log(`[TEST] Auth.currentUserCredentials ${JSON.stringify(currentCred)}`);
 // console.log(`[TEST] Auth.currentUserInfo ${JSON.stringify(currentInfo)}`);

 useEffect(() => {
   AuthenticatorService.initialize();
 },[])


  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <PaperProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </PaperProvider>
      </SafeAreaProvider>
    );
  }
}

export default withAuthenticator(App, {
  signUpConfig: {
    hiddenDefaults: ['phone_number']
  }
});