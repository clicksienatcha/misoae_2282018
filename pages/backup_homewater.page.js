import React from "react";
import { StyleSheet, View, Alert } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
  Form,
  Item,
  Input,
  Label,
  List,
  ListItem,
  Thumbnail
} from "native-base";

export default class HomePage extends React.Component {

  static navigationOptions = {
    title: 'ระดับน้ำ RealTime ภาคเหนือตอนบน',
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

  state = {
    items: [],
    time: '',
    water: '',
    loading: true,
  }

  nameArray = [
    "John Doe",
    "Peter Corp",
    "Tessa",
    "Depp",
    "Tony Stark",
    "Bruce Banner"
  ];




  constructor(props) {
    super(props);
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

    let k = 21;

    const da = 'rowData.level' + hours;
    console.log(da);
    let response = await fetch("https://www.hydro-1.net/Data/HD-04/houly/webservice.php");
    // console.log(response);
    let json = await response.json();
    //console.log(response.json.level1);
    //console.log(json);


    this.setState({
      items: json,
      time: hours,
      water: da,
      number: k
    })
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });
    this.setState({ loading: false });
  }

  itemSelected = (category) => {
    // console.log('เลือกแล้ว',category.group_n);
    //alert(category.group_n)
    this.props.navigation.navigate('Product', category);
  }

  render() {
    if (this.state.loading) {
      return <Expo.AppLoading />;
    }

    var myloop = [];

    if (this.state.time == 1) {


      myloop.push(
        <List dataArray={this.state.items}
          renderRow={(rowData) => {

            return (
              //<ListItem onPress={()=>this.itemSelected(rowData)} thumbnail>
              <ListItem thumbnail>
                <Left>
                  <Text>{rowData.station_id}</Text>
                </Left>
                <Body>

                  <Text>ระดับน้ำ {rowData.level1}</Text>
                  <Text >ปริมาณน้ำ {rowData.dischg1}</Text>
                  <Text note>วันที่ {rowData.date}</Text>

                </Body>
              </ListItem>
            )
          }}
        >

        </List>
      );
    }

    if (this.state.time == 2) {


      myloop.push(
        <List dataArray={this.state.items}
          renderRow={(rowData) => {

            return (
              //<ListItem onPress={()=>this.itemSelected(rowData)} thumbnail>
              <ListItem thumbnail>
                <Left>
                  <Text>{rowData.station_id}</Text>
                </Left>
                <Body>

                  <Text>ระดับน้ำ {rowData.level2}</Text>
                  <Text >ปริมาณน้ำ {rowData.dischg2}</Text>
                  <Text note>วันที่ {rowData.date}</Text>

                </Body>
              </ListItem>
            )
          }}
        >

        </List>
      );
    }

    if (this.state.time == 3) {


      myloop.push(
        <List dataArray={this.state.items}
          renderRow={(rowData) => {

            return (
              //<ListItem onPress={()=>this.itemSelected(rowData)} thumbnail>
              <ListItem thumbnail>
                <Left>
                  <Text>{rowData.station_id}</Text>
                </Left>
                <Body>

                  <Text>ระดับน้ำ {rowData.level3}</Text>
                  <Text >ปริมาณน้ำ {rowData.dischg3}</Text>
                  <Text note>วันที่ {rowData.date}</Text>

                </Body>
              </ListItem>
            )
          }}
        >

        </List>
      );
    }

    if (this.state.time == 4) {


      myloop.push(
        <List dataArray={this.state.items}
          renderRow={(rowData) => {

            return (
              //<ListItem onPress={()=>this.itemSelected(rowData)} thumbnail>
              <ListItem thumbnail>
                <Left>
                  <Text>{rowData.station_id}</Text>
                </Left>
                <Body>

                  <Text>ระดับน้ำ {rowData.level4}</Text>
                  <Text >ปริมาณน้ำ {rowData.dischg4}</Text>
                  <Text note>วันที่ {rowData.date}</Text>

                </Body>
              </ListItem>
            )
          }}
        >

        </List>
      );
    }

    if (this.state.time == 5) {


      myloop.push(
        <List dataArray={this.state.items}
          renderRow={(rowData) => {

            return (
              //<ListItem onPress={()=>this.itemSelected(rowData)} thumbnail>
              <ListItem thumbnail>
                <Left>
                  <Text>{rowData.station_id}</Text>
                </Left>
                <Body>

                  <Text>ระดับน้ำ {rowData.level5}</Text>
                  <Text >ปริมาณน้ำ {rowData.dischg5}</Text>
                  <Text note>วันที่ {rowData.date}</Text>

                </Body>
              </ListItem>
            )
          }}
        >

        </List>
      );
    }

    if (this.state.time == 6) {


      myloop.push(
        <List dataArray={this.state.items}
          renderRow={(rowData) => {

            return (
              //<ListItem onPress={()=>this.itemSelected(rowData)} thumbnail>
              <ListItem thumbnail>
                <Left>
                  <Text>{rowData.station_id}</Text>
                </Left>
                <Body>

                  <Text>ระดับน้ำ {rowData.level6}</Text>
                  <Text >ปริมาณน้ำ {rowData.dischg6}</Text>
                  <Text note>วันที่ {rowData.date}</Text>

                </Body>
              </ListItem>
            )
          }}
        >

        </List>
      );
    }

    if (this.state.time == 7) {


      myloop.push(
        <List dataArray={this.state.items}
          renderRow={(rowData) => {

            return (
              //<ListItem onPress={()=>this.itemSelected(rowData)} thumbnail>
              <ListItem thumbnail>
                <Left>
                  <Text>{rowData.station_id}</Text>
                </Left>
                <Body>

                  <Text>ระดับน้ำ {rowData.level7}</Text>
                  <Text >ปริมาณน้ำ {rowData.dischg7}</Text>
                  <Text note>วันที่ {rowData.date}</Text>

                </Body>
              </ListItem>
            )
          }}
        >

        </List>
      );
    }


    if (this.state.time == 8) {


      myloop.push(
        <List dataArray={this.state.items}
          renderRow={(rowData) => {

            return (
              //<ListItem onPress={()=>this.itemSelected(rowData)} thumbnail>
              <ListItem thumbnail>
                <Left>
                  <Text>{rowData.station_id}</Text>
                </Left>
                <Body>

                  <Text>ระดับน้ำ {rowData.level8}</Text>
                  <Text >ปริมาณน้ำ {rowData.dischg8}</Text>
                  <Text note>วันที่ {rowData.date}</Text>

                </Body>
              </ListItem>
            )
          }}
        >

        </List>
      );
    }

    if (this.state.time == 9) {


      myloop.push(
        <List dataArray={this.state.items}
          renderRow={(rowData) => {

            return (
              //<ListItem onPress={()=>this.itemSelected(rowData)} thumbnail>
              <ListItem thumbnail>
                <Left>
                  <Text>{rowData.station_id}</Text>
                </Left>
                <Body>

                  <Text>ระดับน้ำ {rowData.level9}</Text>
                  <Text >ปริมาณน้ำ {rowData.dischg9}</Text>
                  <Text note>วันที่ {rowData.date}</Text>

                </Body>
              </ListItem>
            )
          }}
        >

        </List>
      );
    }
    if (this.state.time == 10) {


      myloop.push(
        <List dataArray={this.state.items}
          renderRow={(rowData) => {

            return (
              //<ListItem onPress={()=>this.itemSelected(rowData)} thumbnail>
              <ListItem thumbnail>
                <Left>
                  <Text>{rowData.station_id}</Text>
                </Left>
                <Body>

                  <Text>ระดับน้ำ {rowData.level10}</Text>
                  <Text >ปริมาณน้ำ {rowData.dischg10}</Text>
                  <Text note>วันที่ {rowData.date}</Text>

                </Body>
              </ListItem>
            )
          }}
        >

        </List>
      );
    }

    if (this.state.time == 11) {


      myloop.push(
        <List dataArray={this.state.items}
          renderRow={(rowData) => {

            return (
              //<ListItem onPress={()=>this.itemSelected(rowData)} thumbnail>
              <ListItem thumbnail>
                <Left>
                  <Text>{rowData.station_id}</Text>
                </Left>
                <Body>

                  <Text>ระดับน้ำ {rowData.level11}</Text>
                  <Text >ปริมาณน้ำ {rowData.dischg11}</Text>
                  <Text note>วันที่ {rowData.date}</Text>

                </Body>
              </ListItem>
            )
          }}
        >

        </List>
      );
    }

    if (this.state.time == 12) {


      myloop.push(
        <List dataArray={this.state.items}
          renderRow={(rowData) => {

            return (
              //<ListItem onPress={()=>this.itemSelected(rowData)} thumbnail>
              <ListItem thumbnail>
                <Left>
                  <Text>{rowData.station_id}</Text>
                </Left>
                <Body>

                  <Text>ระดับน้ำ {rowData.level12}</Text>
                  <Text >ปริมาณน้ำ {rowData.dischg12}</Text>
                  <Text note>วันที่ {rowData.date}</Text>

                </Body>
              </ListItem>
            )
          }}
        >

        </List>
      );
    }

    if (this.state.time == 13) {


      myloop.push(
        <List dataArray={this.state.items}
          renderRow={(rowData) => {

            return (
              //<ListItem onPress={()=>this.itemSelected(rowData)} thumbnail>
              <ListItem thumbnail>
                <Left>
                  <Text>{rowData.station_id}</Text>
                </Left>
                <Body>

                  <Text>ระดับน้ำ {rowData.level13}</Text>
                  <Text >ปริมาณน้ำ {rowData.dischg13}</Text>
                  <Text note>วันที่ {rowData.date}</Text>

                </Body>
              </ListItem>
            )
          }}
        >

        </List>
      );
    }

    if (this.state.time == 14) {


      myloop.push(
        <List dataArray={this.state.items}
          renderRow={(rowData) => {

            return (
              //<ListItem onPress={()=>this.itemSelected(rowData)} thumbnail>
              <ListItem thumbnail>
                <Left>
                  <Text>{rowData.station_id}</Text>
                </Left>
                <Body>

                  <Text>ระดับน้ำ {rowData.level14}</Text>
                  <Text >ปริมาณน้ำ {rowData.dischg14}</Text>
                  <Text note>วันที่ {rowData.date}</Text>

                </Body>
              </ListItem>
            )
          }}
        >

        </List>
      );
    }

    if (this.state.time == 15) {


      myloop.push(
        <List dataArray={this.state.items}
          renderRow={(rowData) => {

            return (
              //<ListItem onPress={()=>this.itemSelected(rowData)} thumbnail>
              <ListItem thumbnail>
                <Left>
                  <Text>{rowData.station_id}</Text>
                </Left>
                <Body>

                  <Text>ระดับน้ำ {rowData.level15}</Text>
                  <Text >ปริมาณน้ำ {rowData.dischg15}</Text>
                  <Text note>วันที่ {rowData.date}</Text>

                </Body>
              </ListItem>
            )
          }}
        >

        </List>
      );
    }

    if (this.state.time == 16) {


      myloop.push(
        <List dataArray={this.state.items}
          renderRow={(rowData) => {

            return (
              //<ListItem onPress={()=>this.itemSelected(rowData)} thumbnail>
              <ListItem thumbnail>
                <Left>
                  <Text>{rowData.station_id}</Text>
                </Left>
                <Body>

                  <Text>ระดับน้ำ {rowData.level16}</Text>
                  <Text >ปริมาณน้ำ {rowData.dischg16}</Text>
                  <Text note>วันที่ {rowData.date}</Text>

                </Body>
              </ListItem>
            )
          }}
        >

        </List>
      );
    }

    if (this.state.time == 17) {


      myloop.push(
        <List dataArray={this.state.items}
          renderRow={(rowData) => {

            return (
              //<ListItem onPress={()=>this.itemSelected(rowData)} thumbnail>
              <ListItem thumbnail>
                <Left>
                  <Text>{rowData.station_id}</Text>
                </Left>
                <Body>

                  <Text>ระดับน้ำ {rowData.level17}</Text>
                  <Text >ปริมาณน้ำ {rowData.dischg17}</Text>
                  <Text note>วันที่ {rowData.date}</Text>

                </Body>
              </ListItem>
            )
          }}
        >

        </List>
      );
    }

    if (this.state.time == 18) {


      myloop.push(
        <List dataArray={this.state.items}
          renderRow={(rowData) => {

            return (
              //<ListItem onPress={()=>this.itemSelected(rowData)} thumbnail>
              <ListItem thumbnail>
                <Left>
                  <Text>{rowData.station_id}</Text>
                </Left>
                <Body>

                  <Text>ระดับน้ำ {rowData.level18}</Text>
                  <Text >ปริมาณน้ำ {rowData.dischg18}</Text>
                  <Text note>วันที่ {rowData.date}</Text>

                </Body>
              </ListItem>
            )
          }}
        >

        </List>
      );
    }

    if (this.state.time == 19) {


      myloop.push(
        <List dataArray={this.state.items}
          renderRow={(rowData) => {

            return (
              //<ListItem onPress={()=>this.itemSelected(rowData)} thumbnail>
              <ListItem thumbnail>
                <Left>
                  <Text>{rowData.station_id}</Text>
                </Left>
                <Body>

                  <Text>ระดับน้ำ {rowData.level19}</Text>
                  <Text >ปริมาณน้ำ {rowData.dischg19}</Text>
                  <Text note>วันที่ {rowData.date}</Text>

                </Body>
              </ListItem>
            )
          }}
        >

        </List>
      );
    }

    if (this.state.time == 20) {


      myloop.push(
        <List dataArray={this.state.items}
          renderRow={(rowData) => {

            return (
              //<ListItem onPress={()=>this.itemSelected(rowData)} thumbnail>
              <ListItem thumbnail>
                <Left>
                  <Text>{rowData.station_id}</Text>
                </Left>
                <Body>

                  <Text>ระดับน้ำ {rowData.level20}</Text>
                  <Text >ปริมาณน้ำ {rowData.dischg20}</Text>
                  <Text note>วันที่ {rowData.date}</Text>

                </Body>
              </ListItem>
            )
          }}
        >

        </List>
      );
    }

    if (this.state.time == 21) {


      myloop.push(
        <List dataArray={this.state.items}
          renderRow={(rowData) => {

            return (
              //<ListItem onPress={()=>this.itemSelected(rowData)} thumbnail>
              <ListItem thumbnail>
                <Left>
                  <Text>{rowData.station_id}</Text>
                </Left>
                <Body>

                  <Text>ระดับน้ำ {rowData.level21}</Text>
                  <Text >ปริมาณน้ำ {rowData.dischg21}</Text>
                  <Text note>วันที่ {rowData.date}</Text>

                </Body>
              </ListItem>
            )
          }}
        >

        </List>
      );
    }

    if (this.state.time == 22) {


      myloop.push(
        <List dataArray={this.state.items}
          renderRow={(rowData) => {

            return (
              //<ListItem onPress={()=>this.itemSelected(rowData)} thumbnail>
              <ListItem thumbnail>
                <Left>
                  <Text>{rowData.station_id}</Text>
                </Left>
                <Body>

                  <Text>ระดับน้ำ {rowData.level22}</Text>
                  <Text >ปริมาณน้ำ {rowData.dischg22}</Text>
                  <Text note>วันที่ {rowData.date}</Text>

                </Body>
              </ListItem>
            )
          }}
        >

        </List>
      );
    }

    if (this.state.time == 23) {


      myloop.push(
        <List dataArray={this.state.items}
          renderRow={(rowData) => {

            return (
              //<ListItem onPress={()=>this.itemSelected(rowData)} thumbnail>
              <ListItem thumbnail>
                <Left>
                  <Text>{rowData.station_id}</Text>
                </Left>
                <Body>

                  <Text>ระดับน้ำ {rowData.level23}</Text>
                  <Text >ปริมาณน้ำ {rowData.dischg23}</Text>
                  <Text note>วันที่ {rowData.date}</Text>

                </Body>
              </ListItem>
            )
          }}
        >

        </List>
      );
    }

    if (this.state.time == 24) {


      myloop.push(
        <List dataArray={this.state.items}
          renderRow={(rowData) => {

            return (
              //<ListItem onPress={()=>this.itemSelected(rowData)} thumbnail>
              <ListItem thumbnail>
                <Left>
                  <Text>{rowData.station_id}</Text>
                </Left>
                <Body>

                  <Text>ระดับน้ำ {rowData.level24}</Text>
                  <Text >ปริมาณน้ำ {rowData.dischg24}</Text>
                  <Text note>วันที่ {rowData.date}</Text>

                </Body>
              </ListItem>
            )
          }}
        >

        </List>
      );
    }
    return (


      <Container>

        <Content>
          
          {myloop}


        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  itemFont: {
    color: 'green'
  }
})