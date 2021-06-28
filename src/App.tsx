import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';

import React from 'react';
import {View, StatusBar} from 'react-native';

import Routes from './routes';

const App: React.FC = () => (
  <View style={{flex: 1, backgroundColor: '#0A0B18'}}>
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#0A0B18" />
      <Routes />
    </NavigationContainer>
  </View>
);

export default App;
