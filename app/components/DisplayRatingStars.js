import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import color from "../colors/color";

/**
 * Display rating as start
 * @param {integer} param0 rating count
 * @returns component
 */
const DisplayRatingStars = ({ rating }) => {
  const positive = Array(rating);
  const empties = Array(Math.abs(rating - 5));

  return (
    <View style={styles.verticalProductListRating}>
      {positive.fill(null).map((x, i) => {
        return (
          <View key={i}>
            <AntDesign
              style={styles.verticalProductListRatingIcon}
              name="star"
              size={17}
              color={color.YELLOW}
              key={i}
            />
          </View>
        );
      })}
      {empties.fill(null).map((x, i) => {
        return (
          <View key={i}>
            <AntDesign
              style={styles.verticalProductListRatingIcon}
              name="staro"
              size={17}
              color={color.YELLOW}
            />
          </View>
        );
      })}
      <Text style={styles.verticalProductListRatingText}>({rating})</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  verticalProductListRating: {
    flexDirection: "row",
    alignItems: "center",
    alignItems: "center",
    marginTop: 1,
  },
  verticalProductListRatingText: {
    color: color.GRAY,
    marginTop: 3,
    marginLeft: 5,
    fontSize: 15,
  },
  verticalProductListRatingIcon: {},
});
export default DisplayRatingStars;
