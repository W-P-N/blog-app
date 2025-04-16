import { Text, View, StyleSheet } from "react-native";


function CategoryTile({catTitle}) {
    return (
        <View style={styles.container}>
            <Text>
                {catTitle}
            </Text>
        </View>
    );
};

export default CategoryTile;

const styles = StyleSheet.create({
    container: {
        height: 150,
        width: 150,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'black',
        margin: 10,
        borderRadius: 8
    }
})

