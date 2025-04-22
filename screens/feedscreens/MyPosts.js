import { Text } from "react-native";
import BlogsOverview from "../../components/BlogsOverview";
import { blogData } from "../../data/data";
import { userData } from "../../data/data";

function MyPosts() {
    const myblogposts = blogData.filter((blog) => blog.author === userData.name);
    return (
        <>
        <BlogsOverview blogData={myblogposts} isOwner={true}/>
        </>
    );
};

export default MyPosts;
