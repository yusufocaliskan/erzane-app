import {
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import color from "../colors/color";
import { EvilIcons } from "@expo/vector-icons";
import DisplayRatingStars from "./DisplayRatingStars";
const HorizontalProductList = ({ data }) => {
  const renderItem = ({ item, index }) => {
    return (
      <View
        style={[
          styles.horizontalProductListView,
          index == 0 ? { marginLeft: 20 } : null,
        ]}
      >
        <View style={styles.horizontalProductListTag}>
          <Text style={styles.horizontalProductListTagText}>New</Text>
        </View>
        <View style={styles.horizontalProductListImageView}>
          <TouchableOpacity>
            <Image
              source={{ uri: item.image }}
              style={styles.horizontalProductListImage}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.horizontalProductListLikeButton}>
              <EvilIcons
                style={styles.horizontalProductListLikeButtonIcon}
                name="heart"
                size={24}
                color="black"
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.horizontalProductListBody}>
          <View style={styles.horizontalProductListStars}>
            <DisplayRatingStars rating={item.rating} />
          </View>
          <Text numberOfLines={1} style={styles.horizontalProductListCategory}>
            {item.category}
          </Text>
          <Text numberOfLines={1} style={styles.horizontalProductListTitle}>
            {item.title}
          </Text>
          <Text style={styles.horizontalProductListPrice}>{item.price}</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.horziontalList}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal={true}
        contentContainerStyle={{ paddingBottom: 60 }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  horziontalList: {},

  horizontalProductList: {
    paddingHorizontal: 20,
  },

  horizontalProductListView: {
    height: 260,
    width: 150,
    marginRight: 20,
    borderRadius: 10,
    position: "relative",
  },
  horizontalProductListTag: {
    position: "absolute",
    top: 8,
    left: 8,
    zIndex: 999,
    backgroundColor: color.BLACK,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  horizontalProductListTagText: {
    color: color.WHITE,
    fontSize: 15,
    fontWeight: "600",
  },
  horizontalProductListImage: {
    width: 148,
    height: 184,
    borderRadius: 10,
  },
  horizontalProductListImageView: {
    position: "relative",
  },

  horizontalProductListLikeButton: {
    position: "absolute",
    right: 0,
    bottom: -20,
    backgroundColor: color.WHITE,
    borderRadius: 100,
    padding: 5,
    paddingVertical: 7,
    shadowColor: color.BLACK,
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  horizontalProductListLikeButtonIcon: {
    fontSize: 28,
  },
  horizontalProductListBody: {
    marginTop: 10,
  },
  horizontalProductListCategory: {
    fontSize: 13,
    color: color.GRAY,
    marginBottom: 4,
  },
  horizontalProductListTitle: {
    fontSize: 17,
    color: color.BLACK,
    fontWeight: "600",
    marginBottom: 5,
  },
  horizontalProductListPrice: {
    fontSize: 16,
    color: color.RED,
    fontWeight: "bold",
  },
  horizontalProductListStars: {
    marginBottom: 2,
  },
});
export default HorizontalProductList;
