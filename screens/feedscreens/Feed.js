import BlogCard from "../../components/BlogCard";
import { FlatList, Pressable, Button } from "react-native";
import {blogData} from "../../data/data";

function Feed({route, navigation}) {    

    const renderCard = (post) => {
        const postItem = post.item;
        return (
            <Pressable onPress={() => {
                navigation.navigate(
                    'Post',
                    {
                        title: postItem.title,
                        author: postItem.author,
                        likes: postItem.likes,
                        comments: postItem.comments,
                        isBookmarked: postItem.isBookmarked,
                        publishDate: postItem.publishDate,
                        imageUrl: postItem.imageUrl,
                        trending: postItem.trending,
                        hideTitle: true,
                        content: postItem.content
                    }

                )
            }
            }>
                <BlogCard author={post.item.author} title={post.item.title} likes={post.item.likes} imageUrl={post.item.imageUrl} comments={post.item.comments}/>
            </Pressable>
        );
    };

    return (
        <>
        <FlatList 
            data={blogData}
            renderItem={renderCard}
        />
        
        </>
    );
};

export default Feed;
