import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Header from '../components/Header';

import Home from '../pages/Home';
import Movie from '../pages/Movie';
import Favorites from '../pages/Favorites';
import Search from '../pages/Search';

const Routes = createStackNavigator();

const AppRoutes: React.FC = () => (
  <Routes.Navigator
    initialRouteName="Home"
    headerMode="float"
    screenOptions={{
      header: () => <Header />,
      headerTransparent: true,
      cardStyle: {backgroundColor: '#0A0B18'},
      headerStyle: {backgroundColor: '#0A0B18'},
    }}>
    <Routes.Screen name="Home" component={Home} />
    <Routes.Screen name="Movie" component={Movie} />
    <Routes.Screen name="Favorites" component={Favorites} />
    <Routes.Screen name="Search" component={Search} />
  </Routes.Navigator>
);

export default AppRoutes;
