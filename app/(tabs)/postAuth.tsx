import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MenuScreen } from './menu';
import { SampleScreen } from './sample';

export default function StackNavigation() {
    const Stack = createNativeStackNavigator();
  return (
      <Stack.Navigator initialRouteName='Menu'>
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="Sample" component={SampleScreen} />
      </Stack.Navigator>
  );
}
