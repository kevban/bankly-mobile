import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper'
import { Provider as StoreProvider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import AppContent from './AppContent';
import rootReducer from './reducers/rootReducer';
import { NavigationContainer } from '@react-navigation/native';
import { NativeRouter } from 'react-router-native';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
const store = configureStore({ reducer: rootReducer })

export default function App() {
  return (
    <NavigationContainer>
      <StoreProvider store={store}>
        <NativeRouter>
          <PaperProvider>
            <AppContent></AppContent>
          </PaperProvider>
        </NativeRouter>
      </StoreProvider >
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
