import { StyleSheet, Text, Button, View, Pressable, Alert } from "react-native";
import CustomInput from "../../components/ui/CustomInput";
import { useState } from "react";
import { Ionicons } from '@expo/vector-icons';
import CustomButton from "../../components/ui/CustomButton";

function Signup() {

    const [showPassword, setShowPassword] = useState(false);

    const [email, setEmail] = useState('');
    function handleEmail(text) {
        setEmail(text);
    };
    const [password, setPassword] = useState('');
    function handlePassword(text) {
        setPassword(text);
    };

    function handleSubmit() {
        const emailIsValid = email.includes('@');
        const passwordIsValid = password.length >= 6 && password.length() !== 0;
        if(!emailIsValid && !passwordIsValid) {
            Alert.alert('Invalid credentails', 'Please re-enter the credentials');

        }
        // Show visual feedback.
    };

    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Text style={styles.labelStyle}>Enter Email ID:</Text>
                <CustomInput 
                    onChangeText={handleEmail} 
                    options={{
                        autoCorrect: false, 
                        keyboardType: 'email-address', 
                        inputMode: 'email'
                    }}
                />
                <Text style={styles.labelStyle}>Password</Text>
                <View style={styles.passwordContainer}>
                    <CustomInput 
                        onChangeText={handlePassword} 
                        customStyle={{flex: 1}}
                        options={{
                            secureTextEntry: !showPassword
                        }}
                    />
                    <Pressable style={styles.pressStyle}>
                        <Ionicons name={showPassword ? 'eye-off' : 'eye' } size={32} onPress={() => setShowPassword(!showPassword)}/>
                    </Pressable>
                </View>
                <CustomButton customStyle={{padding: 12, marginTop: 24}} buttonTitle='Submit' onPress={handleSubmit}/>
            </View>
        </View>
    );
};

export default Signup;

const styles = StyleSheet.create({
    container: {
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    innerContainer: {
        width: '80%'
    },
    labelStyle: {
        fontWeight: 'bold',
        fontSize: 16
    },
    pressStyle: {
        paddingHorizontal: 12
    },
    passwordContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
})
