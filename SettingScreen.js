import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import { icon, Button, Container, Header, Content, Left, Icon } from 'native-base'
import MapView from 'react-native-maps'
class SettingScreen extends Component {
    render() {
        return (
            <Container>
                <Header style={{ backgroundColor: 'white' }}>
                    <Left>
                        <Icon name='ios-menu' iconStyle={{ color: 'white' }} onPress={() => this.props.navigation.toggleDrawer()} />
                    </Left>
                </Header>
                <Content >
                    <MapView
                        initialRegion={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                    />
                </Content>

            </Container>

        );
    }
}

export default SettingScreen;
