import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Header from '../components/Header';

import Home from '../pages/Home';
import Description from '../pages/Description';
import Favorites from '../pages/Favorites';
import Search from '../pages/Search';

const Routes = createStackNavigator();

const AppRoutes: React.FC = () => (
    <Routes.Navigator initialRouteName="Home"
        screenOptions={{
            headerStyle: {height: 60}
        }}
    >
        <Routes.Screen name="Home" component={Home} />
        <Routes.Screen name="Description" component={Description} />
        <Routes.Screen name="Favorites" component={Favorites} />
        <Routes.Screen name="Search" component={Search} />
    </Routes.Navigator>
);

export default AppRoutes;