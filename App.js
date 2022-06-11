import * as React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {OnePageAlbum, StartScreen} from './src/screens';
import {Store} from './src/redux/store';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="OnePageAlbum" component={OnePageAlbum} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
