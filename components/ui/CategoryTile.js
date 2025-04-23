import { Text, View, StyleSheet, Platform, Pressable } from "react-native";
import { blogData } from "../../data/data";
import { useNavigation } from "@react-navigation/native";


function CategoryTile({catTitle}) {
    const navigation = useNavigation();
    const getBlogsInCategory = blogData.filter((blog) => blog.tags.includes(catTitle));
    function handleCategoryBlog() {
        return (
            navigation.navigate(
                'CategoryBlogs',
                {
                    title: catTitle,
                    blogs: getBlogsInCategory
                }
            )
        )

    };

    return (
            <Pressable
                android_ripple={{color: '#ccc'}}
                style={({pressed}) => [
                    styles.buttonStyle,
                    pressed ? styles.buttonPressed : null
                ]}
                onPress={handleCategoryBlog}
            >
                <View style={styles.container}>
                    <View style={[styles.innerContainer]}>
                        <Text style={styles.title}>
                            {catTitle}
                        </Text>
                    </View>
                </View>
            </Pressable>
    );
};

export default CategoryTile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 16,
        height: 150,
        width: 150,
        borderRadius: 8,
        elevation: 4,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : ''
    },
    buttonStyle: {
        flex: 1
    },
    buttonPressed: {
        opacity: 0.5
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center'
     },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'black',
        textAlign: 'center'
    }
})

