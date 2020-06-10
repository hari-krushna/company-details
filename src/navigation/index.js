

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Screens
import DetailsScreen from "../screens/Details";
import CompanyScreen from "../screens/Company";
  
  const Stack = createStackNavigator();
  
  function AppNavigation() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Company Details">
          <Stack.Screen name="Company Details" component={CompanyScreen} />
          <Stack.Screen name="Success" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  export default AppNavigation;