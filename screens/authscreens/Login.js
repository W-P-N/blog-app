import { Pressable, Text, TextInput, View } from "react-native";

function Login({navigation}) {

    return (
        <View>
            <Text>
                Welcome to the blog app
            </Text>
            <View>
                <Text>Email ID</Text>
                <TextInput />
                <Text>Password</Text>
                <TextInput />
            </View>
            <Pressable onPress={() => {navigation.navigate('signup')}}>
                <Text>
                    Signup
                </Text>
            </Pressable>
        </View>
    );
};

export default Login;


