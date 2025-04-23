import { StyleSheet, FlatList, Pressable, View } from "react-native";
import BlogCard from "./BlogCard";
import { useNavigation } from "@react-navigation/native";

function BlogsOverview({blogData, isOwner}) {

    const navigation = useNavigation();

    const renderBlogCard = (blog) => {
        const blogItem = blog.item;
        return (
            <Pressable onPress={() =>  (
                isOwner ? (
                    navigation.navigate(
                        'EditPost',
                        {blog: blogItem}
                    )
                ) : (
                    navigation.navigate(
                        'Post',
                        {
                            title: blogItem.title,
                            author: blogItem.author,
                            likes: blogItem.likes,
                            comments: blogItem.comments,
                            isBookmarked: blogItem.isBookmarked,
                            publishDate: blogItem.publishDate,
                            imageUrl: blogItem.imageUrl,
                            trending: blogItem.trending,
                            hideTitle: true,
                            content: blogItem.content,
                            isOwner: isOwner
                        }
                    )
                )
                )
            }
            >
                <BlogCard author={blog.item.author} title={blog.item.title} likes={blog.item.likes} imageUrl={blog.item.imageUrl} comments={blog.item.comments} isOwner={isOwner}/>
            </Pressable>
        );
    };
    return (
        <View>
            <FlatList
                data={blogData}
                keyExtractor={(blog) => blog.id}
                renderItem={renderBlogCard}
            />
        </View>
    );
};

export default BlogsOverview;

const styles = StyleSheet.create({

})
