import { View, StyleSheet, TouchableOpacity } from "react-native";
import color from "../colors/color";

import { FontAwesome } from "@expo/vector-icons";

const LikeButton = ({ item, onPressIt }) => {
  return (
    <TouchableOpacity
      style={styles.verticalProductListLike}
      onPress={() => onPressIt(item)}
    >
      <FontAwesome
        style={styles.verticalProductListLikeIcon}
        name="heart-o"
        size={18}
        color={color.GRAY}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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

export default LikeButton;
