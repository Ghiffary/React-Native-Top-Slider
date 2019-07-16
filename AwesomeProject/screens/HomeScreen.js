import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  
  TouchableOpacity,
  View,
  Dimensions, 
  StatusBar
} from 'react-native';
import { MonoText } from '../components/StyledText';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import { Constants } from 'expo';
import { Title,
  Header,
  Container,
  Button, 
  Icon, 
  Left, 
  Body, 
  Right } from 'native-base';
  import { Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';
// import Animated from 'react-native-reanimated';
import Animated from 'react-native-reanimated';




export default function HomeScreen() {
  return (
    <Container>
    {/* <StatusBar backgroundColor="blue" barStyle="light-content" /> */}
    <TabViewExample/>
    </Container>
    // <View style={styles.container}>
    //   <ScrollView
    //     style={styles.container}
    //     contentContainerStyle={styles.contentContainer}>
    //     <View style={styles.welcomeContainer}>
    //       <Image
    //         source={
    //           __DEV__
    //             ? require('../assets/images/robot-dev.png')
    //             : require('../assets/images/robot-prod.png')
    //         }
    //         style={styles.welcomeImage}
    //       />
          
    //     </View>

    //     <View style={styles.getStartedContainer}>
    //       <DevelopmentModeNotice />

    //       <Text style={styles.getStartedText}>Get started by opening</Text>

    //       <View
    //         style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
    //         <MonoText>screens/HomeScreen.js</MonoText>
    //       </View>

    //       <Text style={styles.getStartedText}>
    //         Change this text and your app will automatically reload.
    //       </Text>
    //     </View>

    //     <View style={styles.helpContainer}>
    //       <TouchableOpacity onPress={handleHelpPress} style={styles.helpLink}>
    //         <Text style={styles.helpLinkText}>
    //           Help, it didn’t automatically reload!
    //         </Text>
    //       </TouchableOpacity>
    //     </View>
    //   </ScrollView>

    //   <View style={styles.tabBarInfoContainer}>
    //     <Text style={styles.tabBarInfoText}>
    //       This is a tab bar. You can edit it in:
    //     </Text>

    //     <View
    //       style={[styles.codeHighlightContainer, styles.navigationFilename]}>
    //       <MonoText style={styles.codeHighlightText}>
    //         navigation/MainTabNavigator.js
    //       </MonoText>
    //     </View>
    //   </View>
    // </View>
  );
}

function HeaderContoh () {
  
      
    return (

      <Header style={{backgroundColor:'#f5f5f5'}}>
        {/* <Left>
         <Button transparent onPress={this.clicked}>
             <Icon name='arrow-back' />
          </Button>
        <Button transparent>
            <Icon name='menu' />
          </Button>
        </Left>
         */}
      
        <Body style={{margin:10}} >
          <Title style={{color:'#43484d'}} >{ "iMove "}</Title>
        </Body>
        <Right>
          <Button 
          transparent
          onPress={ () => this.props.navigation.navigate('LinkScreen',  {})}
          >
            <Icon name='search' style={{color:'black'}}/>
          </Button>
          <Button 
          transparent
          >
            <Icon name='ios-notifications' style={{color:'black'}}/>
          </Button>
        </Right>
      </Header>
    );
  }

  function SpaceHeader (){
    return (
      <Header style={{backgroundColor:'#ccc'}}>
        
      </Header>
    );
  }


HomeScreen.navigationOptions = {
  header: <SpaceHeader/> ,
};

// function DevelopmentModeNotice() {
//   if (__DEV__) {
//     const learnMoreButton = (
//       <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
//         Learn more
//       </Text>
//     );

//     return (
//       <Text style={styles.developmentModeText}>
//         Development mode is enabled: your app will be slower but you can use
//         useful development tools. {learnMoreButton}
//       </Text>
//     );
//   } else {
//     return (
//       <Text style={styles.developmentModeText}>
//         You are not in development mode: your app will run at full speed.
//       </Text>
//     );
//   }
// }

// function handleLearnMorePress() {
//   WebBrowser.openBrowserAsync(
//     'https://docs.expo.io/versions/latest/workflow/development-mode/'
//   );
// }

// function handleHelpPress() {
//   WebBrowser.openBrowserAsync(
//     'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes'
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   developmentModeText: {
//     marginBottom: 20,
//     color: 'rgba(0,0,0,0.4)',
//     fontSize: 14,
//     lineHeight: 19,
//     textAlign: 'center',
//   },
//   contentContainer: {
//     paddingTop: 30,
//   },
//   welcomeContainer: {
//     alignItems: 'center',
//     marginTop: 10,
//     marginBottom: 20,
//   },
//   welcomeImage: {
//     width: 100,
//     height: 80,
//     resizeMode: 'contain',
//     marginTop: 3,
//     marginLeft: -10,
//   },
//   getStartedContainer: {
//     alignItems: 'center',
//     marginHorizontal: 50,
//   },
//   homeScreenFilename: {
//     marginVertical: 7,
//   },
//   codeHighlightText: {
//     color: 'rgba(96,100,109, 0.8)',
//   },
//   codeHighlightContainer: {
//     backgroundColor: 'rgba(0,0,0,0.05)',
//     borderRadius: 3,
//     paddingHorizontal: 4,
//   },
//   getStartedText: {
//     fontSize: 17,
//     color: 'rgba(96,100,109, 1)',
//     lineHeight: 24,
//     textAlign: 'center',
//   },
//   tabBarInfoContainer: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     ...Platform.select({
//       ios: {
//         shadowColor: 'black',
//         shadowOffset: { width: 0, height: -3 },
//         shadowOpacity: 0.1,
//         shadowRadius: 3,
//       },
//       android: {
//         elevation: 20,
//       },
//     }),
//     alignItems: 'center',
//     backgroundColor: '#fbfbfb',
//     paddingVertical: 20,
//   },
//   tabBarInfoText: {
//     fontSize: 17,
//     color: 'rgba(96,100,109, 1)',
//     textAlign: 'center',
//   },
//   navigationFilename: {
//     marginTop: 5,
//   },
//   helpContainer: {
//     marginTop: 15,
//     alignItems: 'center',
//   },
//   helpLink: {
//     paddingVertical: 15,
//   },
//   helpLinkText: {
//     fontSize: 14,
//     color: '#2e78b7',
//   },
// });




// const FirstRoute = () => (
//   <View style={[stylesTab.scene, { backgroundColor: '#ff4081' }]} />
// );

// const SecondRoute = () => (
//   <View style={[stylesTab.scene, { backgroundColor: '#673ab7' }]} />
// );

// const OfferRoute = () => (
//   <View style={[stylesTab.scene, { backgroundColor: '#003cd9' }]} />
// );

// // This is our placeholder component for the tabs
// // This will be rendered when a tab isn't loaded yet
// // You could also customize it to render different content depending on the route
// const LazyPlaceholder = ({ route }) => (
//   <View style={stylesTab.scene}>
//     <Text>Loading {route.title}…</Text>
//   </View>
// );

// class TabViewExample extends React.Component {
//   state = {
//     index: 0,
//     routes: [
//       { key: 'first', title: 'First' },
//       { key: 'second', title: 'Second' },
//       {key : 'offer', title : 'Offer'}
//     ]
//   };

//   _handleIndexChange = index => this.setState({ index });

//   _renderLazyPlaceholder = ({ route }) => <LazyPlaceholder route={route} />;

//   render() {
//     return (
//      <Container>
//       <TabView
//         lazy
//         navigationState={this.state}
//         renderScene={SceneMap({
//           first: FirstRoute,
//           second: SecondRoute,
//           offer: OfferRoute,
//         })}
//         renderLazyPlaceholder={this._renderLazyPlaceholder}
//         onIndexChange={this._handleIndexChange}
//         initialLayout={{ width: Dimensions.get('window').width }}
//         style={stylesTab.container}
//       />
//       </Container>
//     );
//   }
// }

// const stylesTab = StyleSheet.create({
//   container: {
//     // marginTop: StatusBar.currentHeight,
//   },
//   scene: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


const FirstRoute = () => (
  <View style={[stylesTab.container, { backgroundColor: '#ff4081' }]} />
);
const SecondRoute = () => (
  <View style={[stylesTab.container, { backgroundColor: '#673ab7' }]} />
);

class TabViewExample extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'First' },
      { key: 'second', title: 'Second' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderTabBar = props => {
    const inputRange = props.navigationState.routes.map((x, i) => i);

    return (
      <View style={stylesTab.tabBar}>
        {props.navigationState.routes.map((route, i) => {
          var color = Animated.color(
            Animated.round(
              Animated.interpolate(props.position, {
                inputRange,
                outputRange: inputRange.map(inputIndex =>
                  inputIndex === i ? 255 : 0
                ),
              })
            ),
            0,
            0
          );

          return (
            <TouchableOpacity
              style={stylesTab.tabItem}
              onPress={() => this.setState({ index: i })}>
              <Animated.Text 
              style={{ color }}>
              {route.title}
              </Animated.Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  _renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={this._renderScene}
        renderTabBar={this._renderTabBar}
        onIndexChange={this._handleIndexChange}
      />
    );
  }
}

const stylesTab = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    flexDirection: 'row',
    paddingTop: 22,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
});

