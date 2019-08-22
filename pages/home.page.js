import React, { Component } from 'react';

import { ImageBackground,Image ,TouchableHighlight , StyleSheet, View, ListView, TextInput, ActivityIndicator, Alert,ScrollView,RefreshControl  } from 'react-native';
import { Container , Row , Col , Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import Font  from "expo-font";

import { Modal,BackHandler  } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';


const images = [
  {
    // Simplest usage.
    // url: "https://avatars2.githubusercontent.com/u/7970947?v=3&s=460",
    // url:
    // "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527660246058&di=6f0f1b19cf05a64317cbc5d2b3713d64&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0112a85874bd24a801219c7729e77d.jpg",
    // You can pass props to <Image />.
    props: {
      // headers: ...
      source: require('../assets/img/2645515.jpg')
    },
    freeHeight: true
  }
];




export default class HomePage extends Component {
 
  static navigationOptions = {
    title: 'MIS สำหรับผู้บริหาร',
    headerTitleStyle: {
      textAlign: 'center',

      flexGrow: 1,
      alignSelf: 'center',
    },
    headerStyle: {
      backgroundColor: 'blue',

    },
    headerTintColor: 'white',

  };

  constructor(props) {

    super(props);

    this.state = {
      refreshing: false,
      isLoading: true,
      text: '',
      modalVisible: false,
    }

    this.arrayholder = [] ;
  }
 
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
    });
    this.setState({ loading: false });
  }
  _onRefresh = () => {
    this.setState({refreshing: true});
    this.componentDidMount();
    this.setState({refreshing: false});
  }

  async componentDidMount() {
 
    console.log('เริ่มแอพ...');
    
        var that = this;
        var date = new Date().getDate(); //Current Date
        var month = new Date().getMonth() + 1; //Current Month
        var year = new Date().getFullYear(); //Current Year
        var hours = new Date().getHours(); //Current Hours
        var min = new Date().getMinutes(); //Current Minutes
        var sec = new Date().getSeconds(); //Current Seconds

    return fetch('https://www.hydro-1.net/Data/HD-04/houly/webservice.php')
      .then((response) => response.json())
      .then((responseJson) => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          time: hours,
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson),
        }, function() {

          // In this block you can do something with new state.
          this.arrayholder = responseJson ;

        });
      })
      .catch((error) => {
        console.error(error);
      });
      
  }



  GetListViewItem (station_id) {
    
   Alert.alert(station_id);
   
  }
  
   SearchFilterFunction(text){
     
     const newData = this.arrayholder.filter(function(item){
         const itemData = item.station_id.toUpperCase()
         const textData = text.toUpperCase()
         return itemData.indexOf(textData) > -1
     })
     this.setState({
         dataSource: this.state.dataSource.cloneWithRows(newData),
         text: text
     })
 }
 
  ListViewItemSeparator = () => {
    return (
      <View
        style={{
          height: .5,
          width: "100%",
          backgroundColor: "#000",
        }}
      />
    );
  }
 
  onRefresh() {
    
       const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    
       this.setState({dataSource : ds.cloneWithRows([ ]),text:''})
    
       this.componentDidMount();
     
     }

     itemSelected = ()=>{
      //console.log('เลือกแล้ว',product.name);
      //alert('test');
    this.props.navigation.navigate('Market');//ชื่อ page ที่จะส่งข้อมูลไป
      
      
    }

    onPress = () => {
      this.setState({ modalVisible: true });
     }

  render() {

    var myloop = [];

    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }
 
    

    return (
     
      <Container>
        <Content>
        <Row>
        <Col>
        
        
          <Card >
          <TouchableHighlight
        
         onPress={this.onPress}
        >
            <CardItem >
              <Image  source={{uri: 'http://farmerone.org/style/dist/img/icon/1.png'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            </TouchableHighlight>
         

            <CardItem>
            
              <Body>
              <Text>ข้าวนาปี</Text>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>ปรับปรุงเมือ {"\n"}22 ส.ค. 62</Text>
                </Button>
              </Body>
             
            </CardItem>
          </Card>
      
          </Col>
          <Col>
        
    
          <Card>
            
            <CardItem >
              <Image source={{uri: 'http://farmerone.org/style/dist/img/icon/2.png'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
            
              <Body>
              <Text>ข้าวโพด</Text>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>ปรับปรุงเมือ {"\n"}22 ส.ค. 62</Text>
                </Button>
              </Body>
             
            </CardItem>
          </Card>
        
          </Col>

          
        </Row>


        <Row>
          <Col>
          <Card >
            
            <CardItem >
              <Image source={{uri: 'http://farmerone.org/style/dist/img/icon/3.png'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
            
              <Body>
              <Text>อ้อยโรงงาน</Text>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>ปรับปรุงเมือ {"\n"}22 ส.ค. 62</Text>
                </Button>
              </Body>
             
            </CardItem>
          </Card>
          </Col>
          
          <Col>
          <Card>
            
            <CardItem >
              <Image source={{uri: 'http://farmerone.org/style/dist/img/icon/4.png'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
            
              <Body>
              <Text>มันสำปะหลัง</Text>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>ปรับปรุงเมือ {"\n"}22 ส.ค. 62</Text>
                </Button>
              </Body>
             
            </CardItem>
          </Card>
          </Col>
          </Row>

          <Row>
          <Col>
          <Card>
            
            <CardItem >
              <Image source={{uri: 'http://farmerone.org/style/dist/img/icon/5.png'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
            
              <Body>
              <Text>ปาล์มน้ำมัน</Text>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>ปรับปรุงเมือ {"\n"}22 ส.ค. 62</Text>
                </Button>
              </Body>
             
            </CardItem>
          </Card>
          </Col>
          
          <Col>
          <Card>
            
            <CardItem >
              <Image source={{uri: 'http://farmerone.org/style/dist/img/icon/6.png'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
            
              <Body>
              <Text>มะพร้าว</Text>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>ปรับปรุงเมือ {"\n"}22 ส.ค. 62</Text>
                </Button>
              </Body>
             
            </CardItem>
          </Card>
          </Col>
          </Row>

          <Modal
          visible={this.state.modalVisible}
          transparent={true}
          onRequestClose={() => this.setState({ modalVisible: false })}
        >
          <ImageViewer
            imageUrls={images}
            index={this.state.index}
            onSwipeDown={() => {
              console.log('onSwipeDown');
            }}
            onMove={data => console.log(data)}
            enableSwipeDown={true}
          />
        </Modal>
          </Content>
          
      </Container>

      
    );
  }
}

 
const styles = StyleSheet.create({
 
 MainContainer :{

  justifyContent: 'center',
  flex:1,
  margin: 7,
 
  },
 
  warning:{
    color:'red'
  },

  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  },

  list:{
    backgroundColor : "#FFFFFF"
  },

 rowViewContainer: {
  // fontSize: 17,
  justifyContent: 'center',
   padding: 10,
   backgroundColor : "#FFFFFF",
   opacity:0.9,
  },

  head: {
    textAlign: 'center', // <-- the magic
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 0,
    width: 200,
    //backgroundColor: 'yellow',
    },

    left: {
      fontSize: 16,
      width: '50%',
     },
     right: {
      fontSize: 16,
      width: '50%',
     },
     note: {
      textAlign: 'right',
      fontSize: 12,
      color:'blue',
      
     },

  TextInputStyleClass:{
        
   textAlign: 'center',
   height: 40,
   borderWidth: 1,
   borderColor: '#009688',
   borderRadius: 7 ,
   backgroundColor : "#FFFFFF"
        
   }
 
});

