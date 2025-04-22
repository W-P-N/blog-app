import { Text, FlatList, Pressable } from "react-native";
import { blogData } from "../data/data";
import CategoryTile from "../components/CategoryTile";

function Categories({navigation}) {
    const categories = [...new Set(blogData.map((item) => item.tags).flat())];
    const categoriesList = categories.map((item, index) => ({
        id: index.toString(),
        name: item
    }));

    function renderCategories(blogItem) {
        function handleOnPressCategory({blogData = blogItem}) {
            const blog = {
                title: blogData.title,
                author: blogData.author,
                likes: blogData.likes,
                comments: blogData.comments,
                isBookmarked: blogData.isBookmarked,
                publishDate: blogData.publishDate,
                imageUrl: blogData.imageUrl,
                trending: blogData.trending,
                hideTitle: true,
                content: blogData.content
            };

            return (
                navigation.navigate(
                    'CategoryBlogs',
                    {
                        blogs
                    }
                )
            )
        }
        return (
                <CategoryTile catTitle={blogItem.item.name} key={blogItem.item.id} />
        )
    };

    return (
        <FlatList 
            data={categoriesList}
            keyExtractor={(item) => item.id}
            renderItem={renderCategories}
            numColumns={2}
        />
    );
};

export default Categories;
