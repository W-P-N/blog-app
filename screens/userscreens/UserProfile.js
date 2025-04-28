import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { userData } from "../../data/data";

function UserProfile({navigation}) {
    // Change the logic of adding 'k' to the number above thousands.
    return (
        <View style={styles.outerContainer}>
            <Image style={styles.image} source={{
                uri: 'https://cdn-icons-png.freepik.com/512/2465/2465301.png'
            }}/>
            <Text style={styles.nameTitle}>Name</Text>
            <View style={styles.detailsContainer}>
                <View style={styles.detailContainer}>
                    <Text style={styles.detailStyleData}>{userData.ttlNumLikes > 1000 ? userData.ttlNumLikes.toString().slice(0, 3) + 'k': userData.ttlNumLikes}</Text>
                    <Text style={styles.detailStyle}>Likes</Text>
                </View>
                <View style={styles.detailContainer}>
                    <Text style={styles.detailStyleData}>{userData.ttlPosts}</Text>
                    <Text style={styles.detailStyle}>Posts</Text>
                </View>
                <View style={styles.detailContainer}>
                    <Text style={styles.detailStyleData}>{userData.ttlNumComents > 1000 ? userData.ttlNumComents.toString().slice(0, 2) + 'k': userData.ttlNumComents}</Text>
                    <Text style={styles.detailStyle}>Comments</Text>
                </View>
            </View>
            <View style={styles.optionsContainer}>
                <Pressable style={({pressed}) => pressed ? [styles.optionContainer, {opacity: 0.70}]: styles.optionContainer}
                    onPress={navigation.navigate()}
                >
                    <Text style={styles.option}>Edit Profile</Text>
                    <Ionicons name="chevron-forward-outline" size={32}/>
                </Pressable>
                <Pressable style={({pressed}) => pressed ? [styles.optionContainer, {opacity: 0.70}]: styles.optionContainer}
                    onPress={() => {}}
                >
                    <Text style={styles.option}>View Posts</Text>
                    <Ionicons name="chevron-forward-outline" size={32}/>
                </Pressable>
                <Pressable style={({pressed}) => pressed ? [styles.optionContainer, {opacity: 0.70}]: styles.optionContainer}
                    onPress={() => {}}
                >
                    <Text style={styles.option}>Logouts</Text>
                    <Ionicons name="chevron-forward-outline" size={32}/>
                </Pressable>
                <Pressable style={({pressed}) => pressed ? [styles.optionContainer, {opacity: 0.70}]: styles.optionContainer}
                    onPress={() => {}}
                >
                    <Text style={styles.option}>.</Text>
                    <Ionicons name="chevron-forward-outline" size={32}/>
                </Pressable>
            </View>
        </View>
    );
};

export default UserProfile;

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        padding: 12
    },
    image: {
        height: 150,
        width: 150,
    },
    nameTitle: {
        fontSize: 38
    },
    detailsContainer: {
        flexDirection: 'row',
        paddingHorizontal: 12,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    detailContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        width: 120
    },
    detailStyle: {
        fontSize: 20
    },
    detailStyleData: {
        fontWeight: 'bold',
        fontSize: 24
    },
    optionsContainer: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingVertical: 24,
        height: 300
    },
    optionContainer: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    option: {
        fontSize: 32,
        marginVertical: 12
    }
})
