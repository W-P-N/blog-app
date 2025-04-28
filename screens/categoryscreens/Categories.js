import { Text, FlatList, Pressable, View, StyleSheet } from "react-native";
import { blogData } from "../../data/data";
import CategoryTile from "../../components/ui/CategoryTile";

function Categories({navigation}) {
    const categories = [...new Set(blogData.map((item) => item.tags).flat())];
    const categoriesList = categories.map((item, index) => ({
        id: index.toString(),
        name: item
    }));

    function renderCategories(blogItem) {
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

