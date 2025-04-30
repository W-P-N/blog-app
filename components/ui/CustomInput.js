import { TextInput, StyleSheet } from "react-native";

function CustomInput({text, onChangeText, customStyle, options}) {
    return (
        <>
        <TextInput style={[styles.input, customStyle]} value={text} onChangeText={onChangeText} {...options}/>
        </>
    );
};

export default CustomInput;

const styles = StyleSheet.create({
    input: {
      marginVertical: 12,
      borderWidth: 1,
      padding: 10,
      borderRadius: 4,
      fontSize: 18
    },
  });

