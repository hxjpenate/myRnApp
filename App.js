// // import React, { Component } from 'react';
// // import { Text, View } from 'react-native';
// // import {StackNavigator} from 'react-navigation';
// // import HomeScreen from './HomeScreen'; 
// // import ChatScreen from './ChatScreen' 
// // const  Navigator = StackNavigator(
// //   //设置导航要展示的页面
// //       {
// //          HomeScreen:{screen:HomeScreen},
// //          ChatScreen:{screen:ChatScreen}  
// //       },
// //       //设置navigationOptions属性对象
// //       {
// //         navigationOptions: {
// //           title: '标题', //在导航中显示的标题内容
// //           headerBackTitle:'这是测试',
// //           headerTintColor:'#333333',
// //           showIcon:true,
// //           swipeEnabled:false,
// //           animationEnabled:false,
// //           width:'100%'
// //         },
// //         mode:'card',  //设置mode属性
// //       }
// //   );
// //   export default class App extends Component {
// //     render() {
// //       return (
// //          <Navigator/>
// //       );
// //     }
// //   }

// import React, { Component } from 'react'
// import { Text, View } from 'react-native'
// import {StackNavigator,TabNavigator,TabBarBottom} from 'react-navigation';
// import TabBarItem from './src/components/tabbarItem';
// import HomeScreen from './HomeScreen'; 
// import MineScreen from './ChatScreen' 
// import Index from './src/screens/Index'
// import Find from './src/screens/Find'

// const Tab = TabNavigator({
//   Home:{
//     screen:HomeScreen,
//     navigationOptions:({navigation}) => ({
//       tabBarLabel:'首页',
//       tabBarIcon:({focused,tintColor}) => (
//           <TabBarItem
//               tintColor={tintColor}
//               focused={focused}
//               normalImage={require('./src/images/1.png') }
//               selectedImage={require('./src/images/2.png')}
//           />
//       )
//     }),
//   },


//   Find:{
//     screen:Find,
//     navigationOptions:({navigation}) => ({
//       tabBarLabel:'发现',
//       tabBarIcon:({focused,tintColor}) => (
//           <TabBarItem
//               tintColor={tintColor}
//               focused={focused}
//               normalImage={require('./src/images/1.png')}
//               selectedImage={require('./src/images/2.png')}
//           />
//       )
//     }),
//   },
 
//   Index:{
//     screen:Index,
//     navigationOptions:({navigation}) => ({
//       tabBarLabel:'首页',
//       tabBarIcon:({focused,tintColor}) => (
//           <TabBarItem
//               // tintColor={tintColor}
//               // focused={focused}
//               normalImage={require('./src/images/1.png')}
//               selectedImage={require('./src/images/2.png')}
//           />
//       )
//     }),
//   },
//   Mine:{
//     screen:MineScreen,
//     navigationOptions:({navigation}) => ({
//       tabBarLabel:'我的',
//       tabBarIcon:({focused,tintColor}) => (
//           <TabBarItem
//               tintColor={tintColor}
//               focused={focused}
//               normalImage={require('./src/images/1.png')}
//               selectedImage={require('./src/images/2.png')}
//           />
//       )
//     }),
//   },

// },


//     {
//       tabBarComponent:TabBarBottom,
//       tabBarPosition:'bottom',
//       swipeEnabled:false,
//       animationEnabled:false,
//       lazy:true,
//       tabBarOptions:{
//         activeTintColor:'red',
//         inactiveTintColor:'#979797',
//         labelStyle: {
//           fontSize: 20, // 文字大小
//         },
//       }
// });
// const Navigator = StackNavigator(
//   {
//       Tab:{screen:Tab},

//   },

//   {
//       navigationOptions:{
//           // title:'首页',
//           headerBackTitle:null,
//           headerTintColor:'#333333',
//           showIcon:true,
//           swipeEnabled:false,
//           animationEnabled:false,
//       },

//       mode:'card',
//   });
//   export default class App extends Component {
//     render() {
//       return (
    
//             <Navigator/>
//       );
//     }
//   }


import React from "react";
import { View, Text ,Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

//第一个
class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details',{
            itemId:86,
            otherParam:'anything you want here'
          })}
        />
      </View>
    );
  }
}

//第二个
class DetailsScreen extends React.Component {
  render() {
    const {navigation} = this.props;
    const itemId  = navigation.getParam('itemId','NO-ID')
    const otherParam = navigation.getParam('otherParam', 'some default value');

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Button
          title="Go to Details... again"
          onPress={() =>
            this.props.navigation.push('Details', {
              itemId: Math.floor(Math.random() * 100),
            })}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}
const AppNavigator = createStackNavigator({
       Home: HomeScreen,
       Details: DetailsScreen
},
{
  initialRouteName: "Home"
}

);

const AppContainer = createAppContainer(AppNavigator);
export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

