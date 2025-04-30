import { Pressable, StyleSheet, Text } from "react-native";

function CustomButton({buttonTitle, customStyle, onPress}) {
    return (
        <Pressable onPress={onPress} style={({pressed}) => pressed ? [styles.buttonStyle, customStyle, styles.pressed] : [styles.buttonStyle, customStyle]}>
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
    pressed: {
      opacity: 0.75  
    },
    buttonText: {
        fontSize: 16
    }
});
