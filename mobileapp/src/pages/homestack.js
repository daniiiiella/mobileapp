import { createStackNavigator } from '@react-navigation/stack';
import { Home } from './home';
import { Explorar } from './explorar';

const Stack = createStackNavigator();

export function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeStack" component={Home}/>
      <Stack.Screen name="Explorar" component={Explorar}/>
    </Stack.Navigator>
  );
}