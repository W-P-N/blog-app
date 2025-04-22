import { Text } from "react-native";
import BlogsOverview from "../../components/BlogsOverview";
import { blogData } from "../../data/data";

function TrendingPosts() {
    const trendingBlogs = blogData.filter((blog) => blog.trending === true);

    return (
        <>
        <BlogsOverview blogData={trendingBlogs}/>
        </>
    );
};

export default TrendingPosts;
