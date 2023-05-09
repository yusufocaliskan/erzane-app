import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import color from "../colors/color";

//Data
import CategoryData from "../CategoryData";
import ShoesCategories from "../ShoesCategories";
import BagsCategories from "../BagsCategories";

import { useEffect, useState } from "react";
import CategoryHeaderTab from "../components/CategoryHeaderTab";
import GoBackIcon from "../components/GoBackIcon";

import Header from "../components/Header";
const Shop = (props) => {
  const [getData, setData] = useState();
  const { navigation } = props;

  useEffect(() => {
    setData(CategoryData);
  }, []);

  /**
   * Listing sub categories by its parent name
   * @returns compnenet
   */
  const GetSubCategoryItemByParentId = (item) => {
    let Data = CategoryData;
    if (item.name == "Bags") {
      Data = BagsCategories;
    }

    if (item.name == "Shoes") {
      Data = ShoesCategories;
    }
    setData(Data);
  };

  /**
   * List Producst by category id
   */
  const getCatalogByCategory = (item) => {
    navigation.navigate("Catalog", item);
  };

  const renderCategoryItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        style={styles.categoryView}
        onPress={() => getCatalogByCategory(item)}
      >
        <View style={styles.categoryViewLeft}>
          <View style={styles.categoryTitleView}>
            <Text numberOfLines={1} style={styles.categoryTitleText}>
              {item.name}
            </Text>
            <Text numberOfLines={2} style={styles.categoryDescText}>
              {item.desc}
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

  return (
    <>
      <Header {...props} />
      <View style={styles.shopContainer}>
        <CategoryHeaderTab
          Data={CategoryData}
          onPressTab={GetSubCategoryItemByParentId}
        />
      </View>

      <View style={styles.redAdvertisement}>
        <Text style={styles.redAdvertisementTitle}>Summer Sale</Text>
        <Text style={styles.redAdvertisementDesc}>Up to %50 off</Text>
      </View>

      <View style={styles.ListedSubCategoryItemView}>
        <FlatList
          data={getData}
          renderItem={renderCategoryItem}
          keyExtractor={(item) => item.id}
          style={styles.horizontalProductList}
          contentContainerStyle={{ paddingBottom: 420 }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  seperator: {},
  shopContainer: {
    paddingVertical: 10,
  },
  categoryTabView: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    margin: 3,
    backgroundColor: color.BLACK,
    borderRadius: 25,
  },
  categoryActiveTab: {
    backgroundColor: color.RED,
  },
  categoryTabTitle: {
    color: color.WHITE,
  },
  categoryFlatList: {
    paddingVertical: 10,
    marginVertical: 10,
  },
  redAdvertisement: {
    backgroundColor: color.RED,
    margin: 20,
    alignItems: "center",
    padding: 20,
    paddingVertical: 30,
    borderRadius: 10,
  },
  redAdvertisementTitle: {
    fontSize: 25,
    fontWeight: "700",
    color: color.WHITE,
    marginBottom: 8,
  },
  redAdvertisementDesc: {
    fontSize: 15,
    fontWeight: "500",
    color: color.WHITE,
  },
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
    padding: 20,
    width: "60%",
  },
  categoryTitleText: {
    fontSize: 20,
    fontWeight: "600",
  },

  categoryDescText: {
    fontSize: 16,
    color: color.GRAY,
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

export default Shop;
