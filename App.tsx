import { Provider } from 'react-redux';
import Toast from 'react-native-toast-message';

import { store } from './store';

import AppNavigation from './navigation/AppNavigation';

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigation />
      <Toast />
    </Provider>
  );
}
