import 'react-native-gesture-handler';
import * as React from 'react';
import {Provider} from 'react-redux';

import store from './utils/store';

import RootNavigator from "./navigation";

const App = () => {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
};

export default App;
