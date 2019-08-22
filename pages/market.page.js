import React, { Component } from 'react';

import { ImageBackground,Image ,TouchableHighlight , StyleSheet, View, ListView, TextInput, ActivityIndicator, Alert,ScrollView,RefreshControl  } from 'react-native';
import { Container , Row , Col , Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import Font  from "expo-font";

import { Modal,BackHandler  } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';

import ProductPage from './product.page';


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
    },
    {
      // Simplest usage.
      // url: "https://avatars2.githubusercontent.com/u/7970947?v=3&s=460",
      // url:
      // "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527660246058&di=6f0f1b19cf05a64317cbc5d2b3713d64&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0112a85874bd24a801219c7729e77d.jpg",
      // You can pass props to <Image />.
    //   props: {
    //     // headers: ...
    //     source: require('../assets/img/2645515.jpg')
    //   },
    //   freeHeight: true
    }
  ];

export default class MarketPage extends Component {
    constructor(props) {
        
        super(props)
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
          }


    static navigationOptions = ({navigation}) =>{
        return {
            title: navigation.getParam('name'),
            headerStyle: {
                backgroundColor: 'green',
                
            },
              headerTintColor:'white',
        }
    }

   state = {
    index: 0,
    modalVisible: true
  };

    componentDidMount (){
       // let market = this.props.navigation.state.params;
        //console.log('แสดง', market.group_n);
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
        this.setState({
           // markets:market.type,
          //  unitPrice: market.unit
            
        })
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
    }

    
    handleBackButtonClick() {
        this.props.navigation.goBack(null);
        return true;
    }
    render() {
        
       

        return (

            <View
        style={{
          padding: 10
        }}
      >
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
      </View>
        )
    }
}

const styles = StyleSheet.create({})
