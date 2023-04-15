import * as React from 'react';
import {View, Text, FlatList, Animated} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {NavigationContainer} from '@react-navigation/native';
// const HeavyLoadedView = React.lazy(() => import('./HeavyLoad'));
import HeavyLoadedView from './HeavyLoad';

import RTNCenteredText from 'rtn-centered-text/js/RTNCenteredTextNativeComponent';

type HomeProps = {
  // Props for Home view
};

const Home: React.FC<HomeProps> = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <RTNCenteredText
        text="Hello World!"
        style={{width: '100%', height: 30}}
      />
    </View>
  );
};

// type MarketplaceProps = {
//   // Props for Marketplace view
// };

// const Marketplace: React.FC<MarketplaceProps> = () => {
//   const renderItem = ({index}: {index: number}) => {
//     return (
//       <View style={{padding: 16}}>
//         <Text>{`Item ${index}`}</Text>
//       </View>
//     );
//   };

//   const data = Array.from({length: 200}, (_, index) => ({key: `${index}`}));

//   return (
//     <View style={{flex: 1}}>
//       <FlatList data={data} renderItem={renderItem} />
//     </View>
//   );
// };

type BottomTabParamList = {
  Home: undefined;
  Marketplace: undefined;
};

const Tab = createMaterialBottomTabNavigator<BottomTabParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        shifting={true}
        initialRouteName="Home"
        activeColor="#f0edf6"
        inactiveColor="#3e2465"
        barStyle={{backgroundColor: '#694fad'}}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          options={{
            tabBarLabel: 'Marketplace',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons
                name="appstore1"
                color={color}
                size={26}
              />
            ),
          }}
          name="Marketplace"
          component={HeavyLoadedView}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
