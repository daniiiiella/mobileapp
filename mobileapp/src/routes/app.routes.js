import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import { HomeStack } from '../pages/homestack';
import { Feed } from '../pages/feed';
import { Perfil } from '../pages/perfil';
import { SettingsStack } from '../pages/settingsstack';

 
const Tab = createBottomTabNavigator();

export function AppRoutes(){
    return (
        <NavigationContainer>
            <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                  let iconName;

                  if (route.name === 'Home') {
                    iconName = 'home';
                  } else if (route.name === 'Feed') {
                    iconName = 'bars';
                  } else if (route.name === 'Perfil') {
                    iconName = 'user';
                  } else if (route.name === 'Settings') {
                    iconName = 'setting';
                  }

                  return <AntDesign name={iconName} size={size} color={color} />;
                },
              })}
              tabBarOptions={{
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor:  'gray',
                  tabBarStyle: [
                    {
                      display: "flex",
                    },
                    null
                  ]
                
              }}
            >
              <Tab.Screen name="Home" component={HomeStack} />
              <Tab.Screen name="Feed" component={Feed} />
              <Tab.Screen name="Perfil" component={Perfil} />
              <Tab.Screen name="Settings" component={SettingsStack} />
                     
        
      </Tab.Navigator>
         
        </NavigationContainer>

    )
}
