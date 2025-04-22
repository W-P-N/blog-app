import { StyleSheet, Text, View, FlatList } from "react-native";
import { blogData } from "../data/data";
import BlogCard from "../components/BlogCard";

function Bookmarks() {
    const bookmarkedData = blogData.filter((blog) => blog.isBookmarked === true);
    function renderBlogCard(blogData) {
        const blog = blogData.item;
        return (
            <BlogCard author={blog.author} comments={blog.comments} imageUrl={blog.imageUrl} likes={blog.likes} title={blog.title} />
        )
    }
    return (
        <View style={styles.container}>
            <FlatList
                 data={bookmarkedData}
                 keyExtractor={(blogData) => blogData.id}
                 renderItem={renderBlogCard}
            />
        </View>
    );
};

export default Bookmarks;

const styles = StyleSheet.create({
    container: {
        padding: 8,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
