import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import color from "../colors/color";
const SectionHeader = ({ title, description, link, linkText = "View all" }) => {
  return (
    <View style={styles.sectionHeaderView}>
      <View style={styles.sectionHeaderLeft}>
        <Text style={styles.sectionHeaderTitle}>{title}</Text>
        <Text style={styles.sectionHeaderDescription}>{description}</Text>
      </View>
      <View style={styles.sectionHeaderRight}>
        <TouchableOpacity onPress={link} style={styles.sectionHeaderLink}>
          <Text style={styles.sectionHeaderLinkText}>{linkText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionHeaderView: {
    paddingVertical: 30,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sectionHeaderTitle: {
    fontSize: 35,
    fontWeight: "700",
  },
  sectionHeaderDescription: {
    marginTop: 5,
    color: color.GRAY,
  },
  sectionHeaderRight: {
    alignSelf: "center",
  },
});
export default SectionHeader;
