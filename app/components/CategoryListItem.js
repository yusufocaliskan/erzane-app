import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import color from "../colors/color";

const CategoryListItem = ({ data, onPressIt }) => {
  const renderCategoryItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        style={styles.categoryView}
        onPress={() => onPressOnIt(item)}
      >
        <View style={styles.categoryViewLeft}>
          <View style={styles.categoryTitleView}>
            <Text numberOfLines={1} style={styles.categoryTitleText}>
              {item.name}
            </Text>
          </View>
        </View>
        <View style={styles.categoryViewRight}>
          <Image
            style={styles.categoryImage}
            resizeMode="cover"
            source={{
              uri: item.image,
            }}
          />
        </View>
      </TouchableOpacity>
    );
  };

  const onPressOnIt = (item) => {
    onPressIt(item);
  };

  return (
    <View style={styles.shopContainer}>
      <FlatList
        data={data}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item.id}
        style={styles.horizontalProductList}
        contentContainerStyle={{ paddingBottom: 420 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  shopContainer: {},
  categoryView: {
    borderWidth: 1,
    borderColor: color.GRAY_BORDER,
    marginHorizontal: 20,
    marginVertical: 5,
    borderRadius: 7,
    overflow: "hidden",
    flexDirection: "row",
    maxHeight: 100,
  },
  categoryViewLeft: {
    backgroundColor: color.WHITE,
    padding: 30,
    width: "60%",
  },
  categoryTitleText: {
    fontSize: 20,
    fontWeight: "600",
  },
  categoryViewRight: {
    backgroundColor: "blue",
    width: "40%",
  },
  categoryImage: {
    width: "100%",
    height: "100%",
  },
  seperator: {
    marginBottom: 100,
  },
});

export default CategoryListItem;
