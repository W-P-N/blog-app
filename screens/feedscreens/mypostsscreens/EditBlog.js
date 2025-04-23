import { StyleSheet, View, Text } from "react-native";
import CustomButton from "../../../components/ui/CustomButton";
import CustomInput from "../../../components/ui/CustomInput";
import { useState } from "react";

function EditBlog({route, navigation}) {

    const tempData = route.params.blog;

    const [title, setTitle] = useState(tempData.title);
    const [tags, setTags] = useState(convertTagsToCSV(tempData.tags));
    const [content, setContent] = useState(tempData.content);

    function convertTagsToCSV(tags) {
        return tags.join()
    };

    function handleCancel() {
        navigation.goBack();
    };

    function handleUpdate() {
        navigation.goBack();
    };

    function handlePostBlog() {
        navigation.goBack();
    };

    return (
            <View style={styles.outerContainer}>
                <View>
                    <Text style={styles.headingText}>
                        Title
                    </Text>
                    <CustomInput text={title} onChangeText={setTitle}/>
                </View>
                <View>
                    <Text style={styles.headingText}>
                        Tags
                    </Text>
                    <CustomInput text={tags} onChangeText={setTags}/>
                </View>
                <View>
                    <Text style={styles.headingText}>
                        Post
                    </Text>
                    <CustomInput text={content} onChangeText={setContent} customStyle={{
                        multiline: true,
                        numberOfLines: 10,
                        textAlignVertical: 'top',
                        editable: true
                    }}/>
                </View>
                <View style={styles.buttonContainer}>
                    <CustomButton customStyle={styles.buttonStyle} onPress={handleCancel} buttonTitle={"Cancel"}/>
                    <CustomButton customStyle={styles.buttonStyle} onPress={handleUpdate} buttonTitle={"Update"}/>
                </View>
            </View>
    );
};

export default EditBlog;

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        marginVertical: 24,
        gap: 12,
        padding: 12
    },
    headingText: {
        fontSize: 24
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    buttonStyle: {
        felx: 1,
        marginVertical: 10,
        padding: 12,
        borderRadius: 4,
    }
})

