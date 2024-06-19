import React from 'react';
import {StyleSheet} from 'react-native';
import FingerPage from './views/FingerPage';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainPage from './views/MainPage';

function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaProvider style={styles.backgroundStyle}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="MainPage"
          screenOptions={{headerShown: true}}>
          <Stack.Screen name="Finger" component={FingerPage} />
          <Stack.Screen name="MainPage" component={MainPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
  },
});

export default App;
