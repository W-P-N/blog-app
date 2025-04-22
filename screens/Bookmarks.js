import { StyleSheet, View } from "react-native";
import { blogData } from "../data/data";
import BlogsOverview from "../components/BlogsOverview";

function Bookmarks() {
    const bookmarkedData = blogData.filter((blog) => blog.isBookmarked === true);
    return (
        <View style={styles.container}>
            <BlogsOverview blogData={bookmarkedData} />
        </View>
    );
};

export default Bookmarks;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
    }
})
