import { Text, FlatList } from "react-native";
import { blogData } from "../data/data";
import CategoryTile from "../components/CategoryTile";

function Categories() {
    const categories = [...new Set(blogData.map((item) => item.tags).flat())];
    const categoriesList = categories.map((item, index) => ({
        id: index.toString(),
        name: item
    }))
    return (
        <FlatList 
            data={categoriesList}
            keyExtractor={(item) => item.id}
            renderItem={(data) => <CategoryTile catTitle={data.item.name} key={data.item.id}/>}
            numColumns={2}
        />
    );
};

export default Categories;
