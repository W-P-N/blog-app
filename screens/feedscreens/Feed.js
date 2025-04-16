import BlogCard from "../../components/BlogCard";
import { FlatList, Pressable, Button } from "react-native";
import {blogData} from "../../data/data";

function Feed() {
    const blogElemet = blogData;
    const renderCard = (post) => {
        return (
            <Pressable onPress={() => console.log("Post Pressed")}>
                <BlogCard author={post.item.author} title={post.item.title} likes={post.item.likes} imageUrl={post.item.imageUrl}  comments={post.item.comments}/>
            </Pressable>
        )
    }
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
