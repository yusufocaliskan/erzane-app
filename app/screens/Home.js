import {
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import color from "../colors/color";

import Data from "../data";
import SectionHeader from "../components/SectionHeader";
import HorizontalProductList from "../components/HorizontalProductList";
import Header from "../components/Header";
import CategoryHeaderTab from "../components/CategoryHeaderTab";
import CategoryData from "../CategoryData";
const Home = (props) => {
  return (
    <ScrollView vertical={true} style={styles.homeContainer}>
      <Header {...props} />
      <CategoryHeaderTab Data={CategoryData} />
      <View style={styles.fashionSaleView}>
        <Image
          style={styles.fashinSaleImage}
          resizeMode="cover"
          source={{
            uri: "https://cdn.britannica.com/68/172968-050-DB4BF52C/Tom-Ford-mix-textures-patterns-collection-Pop-art-February-2013.jpg",
          }}
        />
        <View style={styles.fashionSaleTextView}>
          <Text style={styles.fashionSaleText}>Fashion Sale</Text>
          <TouchableOpacity style={styles.roundedButton}>
            <Text style={styles.roundedButtonText}>Check</Text>
          </TouchableOpacity>
        </View>
      </View>

      <SectionHeader
        title="New Product"
        description="a description about section"
      />
      <View styele={styles.newProducts}>
        <HorizontalProductList data={Data} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    height: "100%",
    backgroundColor: color.LIGHT_GRAY,
  },
  fashionSaleView: {
    height: 400,
    width: "100%",
  },
  fashinSaleImage: {
    height: "100%",
    width: "100%",
  },
  fashionSaleTextView: {
    position: "absolute",
    bottom: 30,
    left: 30,
  },
  fashionSaleText: {
    backgroundColor: color.WHITE,
    fontSize: 40,
    fontWeight: "bold",
    padding: 10,
  },
  roundedButton: {
    backgroundColor: color.RED,
    maxWidth: 180,
    marginTop: 30,
    borderRadius: 100,
    padding: 10,
    shadowColor: color.BLACK,
    shadowOpacity: 2,
    shadowRadius: 2.22,

    elevation: 3,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  roundedButtonText: {
    color: color.WHITE,
    fontSize: 18,
    textAlign: "center",
  },
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
    marginTop: 15,
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
export default Home;
