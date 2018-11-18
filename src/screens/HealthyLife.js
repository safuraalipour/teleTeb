import React, {Component} from 'react';
import {View, Image, Animated, Easing, StyleSheet, Text} from "react-native";


export default class HealthyLife extends Component {

    constructor(props) {
        super(props);
        this.spinValue = new Animated.Value(0);
        this.springValue = new Animated.Value(.3);
    }

    componentWillMount() {
        this.spin();
    }

    spin() {
        this.spinValue.setValue(0);
        Animated.timing(this.spinValue, {
            toValue: 1,
            duration: 20000,
            easing: Easing.linear
        }).start(() => this.spin())
    }

    spring() {
        this.springValue.setValue(.3);
        Animated.spring(this.springValue, {
            toValue: 1,
            friction: .5
        }).start();
    }

    render() {
        const spin = this.spinValue.interpolate({
            inputRange: [0, 2],
            outputRange: ['0deg', '360deg']
        });

        const marginLeft = this.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 400]
        });

        const movingMargin = this.spinValue.interpolate({
            inputRange: [0, .5, 1],
            outputRange: [0, 200, 0]
        });

        const fontSize = this.spinValue.interpolate({
            inputRange: [0, .5, 1],
            outputRange: [12, 20, 12]
        });
        const rotateY = this.spinValue.interpolate({
            inputRange: [0, .5, 1],
            outputRange: ['0deg', '180deg', '0deg']
        });

        return (
            <View>
                <View style={styles.containerStyle}>
                    <Animated.Image source={require('../sources/sun.jpg')} style={{
                        alignSelf: 'flex-end',
                        position: 'absolute',

                        width: 100,
                        height: 100,
                        borderRadius: 100,
                        transform: [{rotate: spin}]
                    }}/>
                    <Animated.Image source={require('../sources/cloud.jpg')} style={{
                        marginTop: 30,
                        alignSelf: 'center',
                        width: 90,
                        height: 50,
                        borderRadius: 20,
                        marginLeft
                    }}/>
                    <Animated.Image source={require('../sources/cloud.jpg')} style={{
                        marginTop: 60,
                        position: 'absolute',
                        top: 5,
                        width: 70,
                        height: 50,
                        borderRadius: 20,
                        right: movingMargin
                    }}/>
                    <Animated.View style={{
                        position: 'absolute',
                        top: 10,
                        width: 60,
                        borderRadius: 100,
                        backgroundColor: '#e8adc7',
                        height: 50,
                        marginTop: 3,
                        margin: 20,
                        transform: [{rotateY}]
                    }}>
                        <Animated.Image source={require('../sources/q.png')} style={{
                            position: 'absolute',
                            top: 10,
                            width: 30,
                            height: 30,
                            alignSelf: 'center',
                            color: '#FF8B23',
                            paddingTop: 10
                        }}/>
                    </Animated.View>
                </View>
                <View style={styles.logoStyle}>
                    <Text onPress={this.spring.bind(this)}>click here</Text>
                    <Animated.Image source={require('../sources/logo.png')}
                                    style={{marginTop: 20, transform: [{scale: this.springValue}]}}/>
                </View>
                <View style={{ paddingTop: 30}}>
                    <Animated.Text style={{fontSize, alignSelf:'center'}}>تله طب</Animated.Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: '#6679ff',
        height: 150,
    },
    logoStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 70,
    }

});
