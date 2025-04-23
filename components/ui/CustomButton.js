import { Pressable, StyleSheet, Text } from "react-native";

function CustomButton({buttonTitle, customStyle, onPress}) {
    return (
        <Pressable onPress={onPress} style={[styles.buttonStyle, customStyle]} android_ripple={({pressed}) => (pressed ? '#ccc' : '')}>
            <Text>
                {buttonTitle}
            </Text>
        </Pressable>
    );
};

export default CustomButton;

const styles = StyleSheet.create({
    buttonStyle: {
        borderRadius: 12,
        borderWidth: 1,
        padding: 12,
        justifyContent: 'center',
        alignItems: 'center',
        width: 200
    },
    buttonText: {
        fontSize: 16
    }
});
