import { View } from "react-native";
import BlogsOverview from "../../components/ui/BlogsOverview";

function CategoryBlogs({route}) {
    // title: blogData.title,
    // author: blogData.author,
    // likes: blogData.likes,
    // comments: blogData.comments,
    // isBookmarked: blogData.isBookmarked,
    // publishDate: blogData.publishDate,
    // imageUrl: blogData.imageUrl,
    // trending: blogData.trending,
    // hideTitle: true,
    // content: blogData.conten
    
    const blogs = route.params.blogs;

    return (
        <View>
            <BlogsOverview blogData={blogs} />
        </View>
    );
};

export default CategoryBlogs;
