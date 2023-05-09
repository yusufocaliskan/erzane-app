import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Platform,
} from "react-native";
import color from "../colors/color";
import { useState } from "react";

const CategoryHeaderTab = ({ navigation, onPressTab, Data }) => {
  const [getSubCategoryId, setSubCategoryId] = useState();

  /**
   * Create horizontal tab categories
   */
  const renderCategoryTab = ({ item }) => {
    return (
      <TouchableOpacity
        style={[
          styles.categoryTabView,
          getSubCategoryId == item.name ? styles.categoryActiveTab : null,
        ]}
        onPress={() => onPressIt(item)}
      >
        <Text style={styles.categoryTabTitle}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  /**
   * List Producst by category id
   */
  const onPressIt = (item) => {
    setSubCategoryId(item.name);
    onPressTab(item);
  };

  return (
    <View style={styles.shopContainer}>
      <FlatList
        data={Data}
        renderItem={renderCategoryTab}
        keyExtractor={(item) => item.id}
        horizontal={true}
        style={styles.categoryFlatList}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  shopContainer: {
    paddingHorizontal: 20,
  },
  categoryTabView: {
    marginRight: 4,
    paddingHorizontal: 20,
    paddingVertical: 8,
    backgroundColor: color.BLACK,
    borderRadius: 25,
    ...Platform.select({
      android: { paddingVertical: 5, paddingHorizontal: 15 },
    }),
  },
  categoryActiveTab: {
    backgroundColor: color.RED,
  },
  categoryTabTitle: {
    color: color.WHITE,
  },
  categoryFlatList: {
    paddingVertical: 10,
  },
});

export default CategoryHeaderTab;
