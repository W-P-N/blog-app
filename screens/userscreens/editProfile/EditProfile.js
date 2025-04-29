import { ImageBackground, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Ionicons } from '@expo/vector-icons';
import { useContext, useState } from "react";
import {launchCameraAsync} from 'expo-image-picker';
import { userData } from "../../../data/data";
import { UserContext } from "../../../context/User/user-data-context";

function EditProfile({navigation}) {  // Get user data as input and put the data in the fields

    const userCtx = useContext(UserContext);
    const [imageUri, setImageUri] = useState(userCtx.userProfileImageUri);

    const goEditProfileImage = () => {
        navigation.navigate(
            'EditProfileImage',
            {
                imageUri: imageUri
            }
        )
    };

    return (
        <ScrollView contentContainerStyle={styles.rootContainer}>
            {/* <View style={styles.profilephotoContainer}> */}
                <Pressable style={styles.profilephotoContainer} onPress={goEditProfileImage}>
                    <ImageBackground
                        source={{
                            uri: imageUri
                        }}
                        style={styles.imageBackground}
                    >
                        {/* <Image source={{
                            uri: 'https://cdn-icons-png.freepik.com/512/2465/2465301.png'
                        }}
                            height={200}
                            width={200}
                        /> */}
                        <Ionicons style={styles.cameraIcon} name="camera-outline" size={42}/>
                    </ImageBackground>
                </Pressable>
            {/* </View> */}
            <View>
                <Text>Name</Text>
                <TextInput />
                <Text>Phone Number</Text>
                <TextInput />
                <Text>Email ID</Text>
                <TextInput />
                <Text>Gender</Text>
                <TextInput />
            </View>
        </ScrollView>
    );
};

export default EditProfile;

const styles = StyleSheet.create({
    rootContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24
    },
    profilephotoContainer: {
        flexDirection: 'row',
        marginVertical: 12,
    },
    imageBackground: {
        width: 200,
        height: 200,
        borderRadius: 90,
        overflow: 'hidden'
      },
    cameraIcon: {
        top: 150,
        left: 130,
        zIndex: 10
    }
})
