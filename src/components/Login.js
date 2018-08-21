import React, { Component } from 'react';
import { View, LayoutAnimation, UIManager, TouchableWithoutFeedback } from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import DismissKeyboard from 'dismissKeyboard'; //included with keyboard-spacer...
import { Input, Button } from 'react-native-elements';

class Login extends Component {
    state = { showOTPSection: false, phone: '', otp: '' };

    componentWillMount() {
        UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
        LayoutAnimation.easeInEaseOut();
    }

    componentWillUpdate() {
        UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
        LayoutAnimation.easeInEaseOut();
    }

    renderButton() {
        return (
        <Button
            title="Send OTP"
            onPress={() => {
                this.setState({ showOTPSection: true });
            }}
            titleStyle={{
                flex: 2
            }}
            buttonStyle={{
                backgroundColor: 'rgba(92, 99,216, 1)',
                width: 300,
                height: 45,
                borderWidth: 0,
                borderRadius: 20
            }}
        />);
    }

    renderOTPInput() {
        if (this.state.showOTPSection) {
            return (
                <Input
                    keyboardType={'phone-pad'}
                    label="Enter"
                    value={this.state.otp}
                    onChangeText={text => this.setState({ otp: text })}
                    labelStyle={{
                        marginLeft: 40,
                        marginRight: 40
                    }}
                    inputContainerStyle={{
                        marginLeft: 40,
                        marginRight: 40,
                        marginBottom: 20,
                    }}
                />
            );
        }
    }

    render() {
        console.log(this.state);
        return (
            <TouchableWithoutFeedback onPress={()=>{DismissKeyboard()}}>
                <View style={{ flex: 1 }} behavior="padding" enabled>
                    <View style={styles.containerStyle}>
                        <Input
                            keyboardType={'phone-pad'}
                            label="Phone No."
                            value={this.state.phone}
                            onChangeText={text => this.setState({ phone: text })}
                            labelStyle={{
                                marginLeft: 40,
                                marginRight: 40
                            }}
                            inputContainerStyle={{
                                marginLeft: 40,
                                marginRight: 40,
                                marginBottom: 20,
                            }}
                        />
                        {this.renderOTPInput()}
                        {this.renderButton()}
                    </View>
                    <KeyboardSpacer />
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    containerStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    }
};

export default Login;
