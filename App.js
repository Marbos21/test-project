import * as React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {OnePageAlbum, StartScreen} from './src/screens';
import {Store} from './src/redux/store';
import {Host} from 'react-native-portalize';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Host>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="StartScreen" component={StartScreen} />
            <Stack.Screen name="OnePageAlbum" component={OnePageAlbum} />
          </Stack.Navigator>
        </Host>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
