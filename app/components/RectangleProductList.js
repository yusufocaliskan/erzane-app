import {
  FlatList,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import color from "../colors/color";
import DisplayRatingStars from "./DisplayRatingStars";
import LikeButton from "./LikeButton";

const RectangleProductList = ({ data, onLikeIt, onPressProduct }) => {
  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.rectangleProductListView}>
        <View style={styles.rectangleProductListImageView}>
          <TouchableOpacity onPress={() => onPressProduct(item)}>
            <Image
              style={styles.rectangleProductListImage}
              resizeMode="cover"
              source={{
                uri: item.image,
              }}
            />
          </TouchableOpacity>
          <View style={styles.rectangleProductListLike}>
            <LikeButton onPressIt={onLikeIt} item={item} />
          </View>
        </View>

        <View style={styles.rectangleProductListBody}>
          <View style={styles.rectangleProductListRating}>
            <DisplayRatingStars rating={3} />
          </View>
          <View style={styles.rectangleProductListBrand}>
            <Text style={styles.rectangleProductListBrandText}>
              {item.brand}
            </Text>
          </View>
          <View style={styles.rectangleProductListTitle}>
            <Text style={styles.rectangleProductListTitleText}>
              {item.title}
            </Text>
          </View>
          <View style={styles.rectangleProductListPrice}>
            <Text style={styles.rectangleProductListPriceText}>
              {item.price}$
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.rentengleProductView}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 400 }}
        numColumns="2"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleProductListView: {
    margin: 20,
    width: 175,
    minHeight: 290,
  },
  rectangleProductListImage: {
    height: 185,
    width: "100%",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: color.GRAY_BORDER,
  },
  rectangleProductListImageView: {
    position: "relative",
  },
  rectangleProductListLike: {
    position: "absolute",
    bottom: -5,
    right: 0,
    borderRadius: 25,
    backgroundColor: color.WHITE,
    padding: 10,
  },
  rectangleProductListRating: {
    marginVertical: 5,
  },
  rectangleProductListBrandText: {
    color: color.GRAY,
  },
  rectangleProductListTitle: {
    marginVertical: 4,
  },
  rectangleProductListTitleText: {
    fontSize: 20,
    fontWeight: "700",
  },
  rectangleProductListPriceText: {
    fontSize: 16,
    fontWeight: "600",
  },
});

export default RectangleProductList;
