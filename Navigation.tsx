import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Card } from './screens/Card';
import { Main } from './screens/Main';

export const Navigation = () => {

  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Main' component={Main} />
        <Stack.Screen name='Card' component={Card} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}