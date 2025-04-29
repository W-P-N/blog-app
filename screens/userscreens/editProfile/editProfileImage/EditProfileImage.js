import { useState } from "react";
import { Button, Image, StyleSheet, View } from "react-native";
import { userData } from "../../../../data/data";

function EditProfileImage({navigation}) {

    function handleRemove() {
        navigation.goBack();
    }
    function handleTakePhoto() {}
    function handleLoadFromDevice() {}

    return (
        <View style={styles.rootContainer}>
            <Image source={{
                uri: userData.profileImageUri
            }}
                height={200}
                width={200} 
                style={styles.image}
            />
            <View style={styles.buttonContainer}>
                <Button title="Take Photo" onPress={handleTakePhoto}/>
                <Button title="Load from device" onPress={handleLoadFromDevice}/>
                <Button title="Remove" onPress={handleRemove}/>
            </View>
        </View>
    );
};

export default EditProfileImage;

const styles = StyleSheet.create({
    rootContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24
    },
    image: {
        marginVertical: 12
    },
    buttonContainer: {
        padding: 12,
        gap: 8
    }
});
