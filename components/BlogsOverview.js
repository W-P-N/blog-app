import { StyleSheet, FlatList, Pressable, View } from "react-native";
import BlogCard from "./BlogCard";
import { useNavigation } from "@react-navigation/native";

function BlogsOverview({blogData}) {

    const navigation = useNavigation();
    console.log(blogData);

    const renderBlogCard = (blog) => {
        const blogItem = blog.item;
        return (
            <Pressable onPress={() =>  (
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
                            content: blogItem.content
                        }
                    )
                )
            }
            >
                <BlogCard author={blog.item.author} title={blog.item.title} likes={blog.item.likes} imageUrl={blog.item.imageUrl} comments={blog.item.comments}/>
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
