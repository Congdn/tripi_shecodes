import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './app/redux/store';
import Main from './app/main';

export default function App() {
  /* const userid = useSelector(state => state.state);
  console.log(userid); */
  return (
    <Provider store={store}>
      <Main></Main>
    </Provider>
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
