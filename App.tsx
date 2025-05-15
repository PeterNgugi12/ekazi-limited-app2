import React from 'react';

import {SafeAreaView} from 'react-native-safe-area-context';

import { AppNavigator } from './navigators/app-navigator';
import { colors } from './theme/colors';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.background}}>
      <AppNavigator />
    </SafeAreaView>
  );
};

export default App;


