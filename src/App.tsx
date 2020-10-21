import 'react-native-gesture-handler';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar, View} from 'react-native';

import AppProvider from './hooks';
import Routes from './routes';

const App: React.FC = () => (
  <>
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#3d9be9" />
      <AppProvider>
        <View style={{flex: 1, backgroundColor: '#3d9be9'}}>
          <Routes />
        </View>
      </AppProvider>
    </NavigationContainer>
  </>
);

export default App;
