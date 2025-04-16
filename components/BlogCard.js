import { View, Image, Text, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';

function BlogCard({imageUrl, title, author, likes, comments}) {
    return (
        <View style={styles.rootContainer}>
            <View style={styles.imageContainer}>
                <Image 
                    source={{
                        uri: "https://picsum.photos/200/300"
                    }}
                    style={styles.imageStyle}
                    resizeMode="cover"
                />
            </View>
            <View style={styles.bottomContainer}>
                <Text style={styles.author}>
                    {author}
                </Text>
                <Text style={styles.title}>
                    {title}
                </Text>
                <View style={styles.likeCommentContainer}>
                    <View style={styles.likesText}>
                        {/* Number of likes and icon */}
                        <Text>{likes}</Text>
                        <Ionicons name="heart" size={32} />
                    </View>
                    <View style={styles.likesText}>
                        {/* Number of comments and icon */}
                        <Text>{comments}</Text>
                        
                        <Ionicons name="chatbubble" size={32} />
                    </View>
                </View>
            </View>
        </View>
    );
};

export default BlogCard;

const styles = StyleSheet.create({
    rootContainer: {
        borderRadius: 8,
        overflow: 'hidden',
        borderWidth: 2,
        margin: 12,
        flexDirection: 'row',
        shadowColor: 'black',
        shadowRadius: 4,
        shadowOffset: {height: 0.2, width: 0.4},
        height: 300,
        
    },
    imageContainer: {
        flex: 1
    },
    imageStyle: {
        height: 300,
        width: '100%'
    },
    bottomContainer: {
        flex: 1,
        margin: 12,
        justifyContent: 'center'
    },
    author: {
        fontSize: 18,
    },
    title: {
        fontSize: 30
    },
    likeCommentContainer: {
        flexDirection: 'row',
        marginVertical: 12,
        gap: 24
    },
    likesText: {
        flexDirection: 'row',
        gap: 4,
        justifyContent: 'center',
        alignItems: 'center'    
    }



})
