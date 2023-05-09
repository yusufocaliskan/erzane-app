import {
  FlatList,
  Image,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from "react-native";
import { useState } from "react";
import CategoryData from "../CategoryData";
import CategoryHeaderTab from "../components/CategoryHeaderTab";
import GoBackIcon from "../components/GoBackIcon";
import color from "../colors/color";

import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import VerticalProductList from "../components/VerticalProductList";
import RectangleProductList from "../components/RectangleProductList";

import data from "../data";
import HatData from "../HatData";
import ShoesData from "../ShoesData";

import ModalSortBy from "../components/ModalSortBy";
import Header from "../components/Header";

const Catalog = (props) => {
  const [getListShape, setShape] = useState("vertical");
  const [getCategoty, setCategory] = useState("Hats");
  const [getData, setData] = useState(data);
  const [getShowPriceModal, setShowPriceModal] = useState(false);
  const [getSelectedPriceOption, setSelectedPriceOption] = useState();
  const { route } = props;

  const priceFilterOptions = [
    {
      title: "popular",
      value: 1,
    },
    {
      title: "newest",
      value: 2,
    },
    {
      title: "costum review",
      value: 3,
    },
    {
      title: "price: lowest to hight",
      value: 4,
    },
    {
      title: "price: hight to lowest",
      value: 5,
    },
  ];

  const filterByCategory = (item) => {
    setCategory(item.name);

    let Data = data;
    if (item.name == "Shoes") {
      Data = ShoesData;
    }

    if (item.name == "Hats") {
      Data = HatData;
    }
    setData(Data);
  };

  const getProductDetailt = (item) => {
    props.navigation.navigate("ProductDetails", { productId: item.id });
    console.log("I clicked: ", item.title);
  };

  const onLikeIt = (item) => {
    console.log("I like: ", item.title);
  };

  const changeShapeOfProductList = () => {
    if (getListShape == "vertical") {
      setShape("rectangel");
      return;
    }
    setShape("vertical");
  };

  return (
    <>
      <View style={styles.header}>
        <Header {...props} />

        <View style={styles.catalogHeaderView}>
          <Text style={styles.catalogHeaderTitle}>{route.params.name}</Text>
        </View>

        <CategoryHeaderTab Data={CategoryData} onPressTab={filterByCategory} />

        {/* Filter */}
        <View style={styles.filterView}>
          <TouchableOpacity style={[styles.filterFilter, styles.filterColm]}>
            <Ionicons
              style={styles.filterIcon}
              name="filter"
              size={22}
              color="black"
            />

            <Text style={styles.filterTitle}>Filtering</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setShowPriceModal(true)}
            style={[styles.filterPrice, styles.filterColm]}
          >
            <FontAwesome5
              style={styles.filterIcon}
              name="sort-amount-up-alt"
              size={20}
              color="black"
            />
            <Text style={styles.filterTitle}>Price: lowest to hight</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => changeShapeOfProductList()}
            style={[styles.filterShape, styles.filterColm]}
          >
            {getListShape == "vertical" ? (
              <MaterialCommunityIcons
                style={[styles.filterIcon, styles.filterShapeIcon]}
                name="shape"
                size={24}
                color="black"
              />
            ) : (
              <MaterialCommunityIcons
                style={[styles.filterIcon, styles.filterShapeIcon]}
                name="shape-plus"
                size={24}
                color="black"
              />
            )}
          </TouchableOpacity>
        </View>
      </View>
      <ModalSortBy
        showModal={getShowPriceModal}
        closeModal={setShowPriceModal}
        options={priceFilterOptions}
        setSelectedPriceOption={setSelectedPriceOption}
        getSelectedPriceOption={getSelectedPriceOption}
      />
      <View style={styles.filteredProducts}>
        {getListShape == "rectangel" ? (
          <RectangleProductList
            data={getData}
            onLikeIt={onLikeIt}
            onPressProduct={getProductDetailt}
          />
        ) : (
          <VerticalProductList
            data={getData}
            onLikeIt={onLikeIt}
            onPressProduct={getProductDetailt}
          />
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: color.WHITE,
    shadowColor: color.GRAY,
    shadowOpacity: 2,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    zIndex: 444,
  },

  catalogHeaderView: {
    paddingHorizontal: 20,
  },
  catalogHeaderTitle: {
    fontSize: 35,
    fontWeight: "800",
  },
  filterView: {
    marginHorizontal: 10,
    padding: 5,
    paddingBottom: 20,
    flexDirection: "row",
  },
  filterColm: {
    flexDirection: "row",
    alignItems: "center",
  },
  filterFilter: {
    width: "45%",
  },

  filterPrice: {
    width: "45%",
  },
  filterIcon: {
    marginRight: 10,
  },
  filterTitle: {
    color: color.GRAY,
  },
  filterShape: {},
  filterShapeIcon: {
    marginLeft: 20,
  },
  priceFilterModal: {},
  priceFilterContent: {
    backgroundColor: color.LIGHT_GRAY,
    position: "absolute",
    bottom: 0,
    width: "100%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 30,
    shadowColor: color.BLACK,
    shadowOpacity: 1,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  priceFilterModalTitle: {
    alignItems: "center",
    marginBottom: 20,
  },
  priceFilterModalTitleText: {
    fontSize: 20,
    color: color.BLACK,
    fontWeight: "700",
  },
  priceFilterOption: {},

  priceFilterOptionText: {
    padding: 15,
    marginBottom: 5,
    fontSize: 18,
    color: color.BLACK,
  },
  priceFilterActiveOption: {
    backgroundColor: color.RED,
    color: color.WHITE,
  },
  modalOverlay: {
    backgroundColor: color.BLACK,
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    opacity: 0.8,
  },
  modalClose: {
    position: "absolute",
    right: 25,
    top: 33,
    zIndex: 5,
  },
});

export default Catalog;
