import React from 'react';
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
