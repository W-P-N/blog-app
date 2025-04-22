import BlogCard from "../../components/BlogCard";
import { FlatList, Pressable, Button } from "react-native";
import {blogData} from "../../data/data";
import BlogListShell from "../../components/BlogListsShell";

function Feed({route, navigation}) {

    // const blogDataToPass = blogData;
    
    // function handleBlogOnPress() {
    //     return (
    //         navigation.navigate(
    //             'blog',
    //             {
    //                 title: blogItem.title,
    //                 author: blogItem.author,
    //                 likes: blogItem.likes,
    //                 comments: blogItem.comments,
    //                 isBookmarked: blogItem.isBookmarked,
    //                 publishDate: blogItem.publishDate,
    //                 imageUrl: blogItem.imageUrl,
    //                 trending: blogItem.trending,
    //                 hideTitle: true,
    //                 content: blogItem.content
    //             }
        
    //         )
    //     )
    // }
    return (
        <>
        <BlogListShell blogData={blogData}/>
        </>
    );
};

export default Feed;
