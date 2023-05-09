import {
  FlatList,
  Image,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import color from "../colors/color";

import DisplayRatingStars from "../components/DisplayRatingStars";
import LikeButton from "./LikeButton";
const Catalog = ({ data, onPressProduct, onLikeIt }) => {
  const renderVerticalProductItem = ({ item, index }) => {
    return (
      <View style={styles.verticalProductListView}>
        <TouchableOpacity
          onPress={() => onPressProduct(item)}
          style={styles.verticalProductListTouchable}
        >
          <View style={styles.verticalProductListColm}>
            <Image
              style={styles.verticalProductListImage}
              resizeMode="cover"
              source={{
                uri: item.image,
              }}
            />
          </View>

          <View style={styles.verticalProductListColm}>
            <View style={styles.verticalProductListTop}>
              <Text numberOfLines={1} style={styles.verticalProductListTitle}>
                {item.title}
              </Text>
              <Text numberOfLines={1} style={styles.verticalProductListBrand}>
                {item.brand}
              </Text>
            </View>
            <View style={styles.verticalProductListRating}>
              <DisplayRatingStars rating={item.rating} />
            </View>

            <View style={styles.verticalProductListPrice}>
              <Text style={styles.verticalProductListPriceText}>
                {item.price}$
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <LikeButton onPressIt={onLikeIt} item={item} />
      </View>
    );
  };

  return (
    <View style={styles.filteredProducts}>
      <FlatList
        data={data}
        renderItem={renderVerticalProductItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 420 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  verticalProductListView: {
    backgroundColor: color.WHITE,
    marginVertical: 10,
    marginHorizontal: 20,
    position: "relative",
    borderRadius: 10,
  },
  verticalProductListTouchable: {
    flexDirection: "row",
  },
  verticalProductListImage: {
    width: 134,
    height: 134,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  verticalProductListTop: {
    paddingTop: 15,
    paddingBottom: 5,
    paddingHorizontal: 20,
  },
  verticalProductListTitle: {
    fontSize: 22,
    fontWeight: "600",
  },
  verticalProductListBrand: {
    color: color.GRAY,
    fontSize: 15,
  },
  verticalProductListRating: {
    flexDirection: "row",
    marginLeft: 15,
    alignItems: "center",
    marginTop: -5,
  },
  verticalProductListRatingText: {
    color: color.GRAY,
    marginTop: 3,
    marginLeft: 5,
    fontSize: 15,
  },
  verticalProductListRatingIcon: {
    marginLeft: 2,
  },

  verticalProductListPrice: {
    marginLeft: 18,
    marginTop: 10,
  },
  verticalProductListPriceText: {
    fontSize: 17,
    fontWeight: "600",
  },
  verticalProductListLike: {
    position: "absolute",
    right: 0,
    bottom: -8,
    borderRadius: 25,
    backgroundColor: color.WHITE,
    padding: 10,
    shadowColor: color.GRAY,
    shadowOpacity: 2,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
});

export default Catalog;
