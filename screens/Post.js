import { View, Image, Pressable, Text, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';

function Post({route, navigation}) {
    return (
       <View>
            <View style={styles.imageContainer}>
                <Image 
                    source={{
                        uri: route.params.imageUrl,
                    }}
                    resizeMode="cover"
                    style={styles.imageStyle}
                />
                <Pressable style={styles.shareButton} android_ripple={{color: '#ccc'}} onPress={() => console.log("Post Pressed")}>
                    <Ionicons name="arrow-redo-circle-outline" size={60} />
                </Pressable>
            </View>
            <View style={styles.detailsContainer}>
                <Text style={styles.authorText}>{route.params.author}</Text>
                <View style={styles.otherDetailsText}>
                    <Text>{route.params.publishDate}</Text>
                    <View style={styles.iconContainer}>
                        <Text>{route.params.likes}</Text>
                        <Ionicons name="heart" size={24} />
                    </View>
                    <View style={styles.iconContainer}>
                        <Text>{route.params.comments}</Text>
                        <Ionicons name="chatbubble" size={24} />
                    </View>
                    {route.params.trending ? <Ionicons name="trending-up" size={24}/> : <></>}
                </View>
            </View>
            <View style={styles.contentContainer}>
                <Text>
                    {route.params.content}
                </Text>
            </View>
       </View>
    );
};

export default Post;

const styles = StyleSheet.create({
    imageContainer: {
    },
    imageStyle: {
        height: 250,
        width: '100%'
    },
    shareButton: {
        zIndex: 2, 
        position: 'absolute',
        top: 200, 
        left: 350
    },
    detailsContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    authorText: {
        fontSize: 20,
        marginVertical: 8
    },
    otherDetailsText: {
        flexDirection: 'row',
        marginVertical: 4,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    contentContainer: {
        padding: 12
    }

})
