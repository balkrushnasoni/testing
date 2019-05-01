import React, { Component } from 'react'
 
import { icon, Button, Container, Header, Content, Left, Icon } from 'native-base'
import { FlatList, ActivityIndicator, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import CardView from 'react-native-cardview'




 class HomeScreen extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = { isLoading: true }
    }


    componentDidMount() {
        return fetch('http://bksoni-001-site3.htempurl.com/api/User/GetProduct', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                deviceToken: '123456',
                Gender: '1',
                CategoryId: '1',
            }),
        })
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    isLoading: false,
                    dataSource: responseJson.Data,
                }, function () {

                });

            })
            .catch((error) => {
                console.error(error);
            });
    }



    _renderItem = ({ item }) => (


        <CardView cardElevation={2}
            cardMaxElevation={2}
            cornerRadius={5} style={{ flex: 1, margin: 15, }}>


            <Image style={{ height: 250, left: 0, right: 0, resizeMode: 'stretch', }}
                source={{ uri: 'http://bksoni-001-site3.htempurl.com/UploadImage/' + item.List_Output.trim() }} />

            <Text style={{ fontSize: 20, margin: 10 }} key={"topicCat" + item.name}  >{item.name}</Text>


        </CardView>
    );

    state = {
        imgWidth: 0,
        imgHeight: 0,
    }





    render() {

        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, padding: 20 }}>
                    <ActivityIndicator />
                </View>
            )
        }

        return (

            <Container>
                 <Header style={{backgroundColor:'white'}}>
                    <Left>
                        
                        <Icon name='ios-menu' iconStyle={{ color: 'white' }} onPress={() =>this.props.navigation.toggleDrawer()} />
                    </Left>
                </Header>
                
                <Content>
                    <ScrollView>

                      
                        <FlatList
                            onScrollEndDrag={() => console.log("end")}
                            onScrollBeginDrag={() => console.log("start")}
                            data={this.state.dataSource}
                            renderItem={this._renderItem}
                            keyExtractor={({ id }, index) => id}
                        />
                    </ScrollView>
                </Content>

            </Container>

        );
    }



}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});



export default HomeScreen;
