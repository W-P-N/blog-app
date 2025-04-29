import { Text, TextInput, View } from "react-native";

function Login({title, password, inter}) {
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
        </View>
    );
};

export default Login;


