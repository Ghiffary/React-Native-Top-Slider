import React, {Component} from 'react';
import {TouchableHighlight, 
        FlatList, 
        ActivityIndicator, 
        View, 
        Image, 
        Alert,
        StackNavigator  } from 'react-native';
import { Title,
         Header,
         Container, 
         Content, 
         Card, 
         CardItem, 
         Thumbnail, 
         Text, 
         Button, 
         Icon, 
         Left, 
         Body, 
         Right } from 'native-base';
import { createBottomTabNavigator, 
         createAppContainer,
         createStackNavigator, 
         createSwitchNavigator,
         createMaterialTopTabNavigator } from 'react-navigation';
import { Rating, AirbnbRating } from 'react-native-elements';
import DetailsScreen from './Details'

// import HeaderContoh from '../../components/header'
// import Details from './Details'
// import Searching from '../../components/searchBar'
// // import Input from '../../components/searchBar'
// import { SearchBar } from 'react-native-elements';


class Listview extends Component {


 constructor(props){
    super(props);
    this.state ={ isLoading: true,username: ''}
    
  }

  onItemPress =(id) => {
    const { navigate } = this.props.navigation;
    //console.log(this.state.username);
    navigate('DetailsScreen',{
      Item: id,
      otherParam: 'anything you want here'
    });
    // //console.log(this.props.navigation)
  }

 

  onFocus() {
    const { navigate } = this.props.navigation;
    //console.log(this.state.username);
    navigate('Searcher');
  }

  

  componentDidMount(){
    return fetch('http://api.tvmaze.com/schedule/full',
   
    )
      .then((response) => response.json())
      .then((responseJson) => {
          // console.log(responseJson._embedded.episodes)
          
        this.setState({
          isLoading: false,
          dataSource: responseJson,
          // dataSource: responseJson.description,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }



  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      
      <View style={{flex: 1, paddingTop:0}}>
      {/* <HeaderContoh 
      title="Allstars Movie List" 
      style={{}}
      /> */}

      {/* Bagian custom header home screen */}
      {/* <Header style={{backgroundColor:'#f5f5f5'}}>
          <Left>
           <Button transparent onPress={this.clicked}>
               <Icon name='arrow-back' />
            </Button>
          <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          
        
          <Body style={{margin:10}} >
            <Title style={{color:'#43484d'}} >{ "iMove "}</Title>
          </Body>
          <Right>
            <Button 
            transparent
            onPress={ () => this.onFocus() }
            >
              <Icon name='ios-search' style={{color:'black'}}/>
            </Button>
            <Button 
            transparent
            >
              <Icon name='ios-notifications' style={{color:'black'}}/>
            </Button>
          </Right>
        </Header> */}

      {/* <Input/> */}
      {/* <SearchBar
        placeholder="Type Here..."
        platform="ios"
        onFocus={ () => this.onFocus() }

        containerStyle={{
        height: 60,
        borderTopWidth: 0,
        paddingRight:10,
        paddingLeft:10,
      }}
      /> */}
        <FlatList
          // initialScrollIndex={10}
          initialNumToRender={2}
          data={this.state.dataSource}
          renderItem={({item}) =>
          <TouchableHighlight
      // // onPress={() => this._onPress(item)}
      // // // onShowUnderlay={item._embedded.show.name}
      // // onHideUnderlay={item._embedded.show.name}
      // // onPress={() => Alert.alert(item._embedded.show.name) }
      // // onPress={() => this.goToNextScreen()}
      onPress={() => this.onItemPress(item._embedded.show.id)}
      // onPress={() => this.props.navigation.navigate('DetailsScreen')}
      underlayColor='black'
      
      >
          <Card>
          <CardItem>
            <Left>
              <Thumbnail 
                source={{uri: item._embedded.show.image === null?"https://cdn.moviemovie.com.hk/teaser/og-image.jpg":item._embedded.show.image.medium}} />
              {/* {console.log(item._embedded.show.image === null?"https://soliloquywp.com/wp-content/uploads/2016/08/How-to-Set-a-Default-Featured-Image-in-WordPress.png":item._embedded.show.image.medium)} */}
              <Body>
                
              <Text>{item._embedded.show.name}</Text>
                <Text 
                    note>Genre {item._embedded.show.genres === null?"-":item._embedded.show.genres + " " }</Text>
                {/* <Text></Text> */}
                {/* <Text>{item.airtime}</Text> */}
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image 
            source={{uri:item._embedded.show.image === null?"https://cdn.moviemovie.com.hk/teaser/og-image.jpg":item._embedded.show.image.original}} 
            style={{height: 500, objectFit: 'cover', flex: 1}}/>
            {/* {console.log(item.image.original)} */}
          </CardItem>
          <CardItem>
            <Left>
            <View pointerEvents="none" >
            <Rating 
            showRating fractions={2} 
            startingValue={item._embedded.show.rating.average === null?"4":item._embedded.show.rating.average}
            style={{ padding: 10 }}
            imageSize={20}
            ratingCount={10}
            
            />
              {/* <Button transparent>
                <Icon active name="thumbs-up" />
                <Text>12 Likes</Text>
              </Button> */}
              </View>
            </Left>
            <Body>
              {/* <Button transparent>
                <Icon active name="chatbubbles" />
                <Text>4 Comments</Text>
              </Button> */}
            </Body>
            <Right>
              <Text>Daily at {item._embedded.show.schedule.time} ({item._embedded.show.runtime} min)</Text>
            </Right>
          </CardItem>
        </Card>
        </TouchableHighlight>
          }
          keyExtractor={({id}, index) => id}
        />

        
      </View>
      
    );
  }
  

}
export default Listview

