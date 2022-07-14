import { NativeNavigation } from '@nx-expo-nextjs/navigation/native';
import { Provider } from '@nx-expo-nextjs/provider';
import React from 'react';

const App = () => {
  return (
    <Provider>
      <NativeNavigation />
    </Provider>
  );
};

export default App;
