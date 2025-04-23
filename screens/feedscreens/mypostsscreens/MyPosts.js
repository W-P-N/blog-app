import { Text, View } from "react-native";
import BlogsOverview from "../../../components/ui/BlogsOverview";
import { blogData } from "../../../data/data";
import { userData } from "../../../data/data";

function MyPosts() {
    const myblogposts = blogData.filter((blog) => blog.author === userData.name);
    return (
        <View>
            <BlogsOverview blogData={myblogposts} isOwner={true }/>
        </View>
    );
};

export default MyPosts;
