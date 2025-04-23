import BlogCard from "../../components/ui/BlogCard";
import { FlatList, Pressable, Button } from "react-native";
import {blogData} from "../../data/data";
import BlogsOverview from "../../components/ui/BlogsOverview";

function Feed({route, navigation}) {
    return (
        <>
        <BlogsOverview blogData={blogData}/>
        </>
    );
};

export default Feed;
