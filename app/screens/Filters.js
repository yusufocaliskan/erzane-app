import { useEffect, useState } from "react";
import { TextInput, View, StyleSheet, Text, FlatList } from "react-native";
import CheckBox from "@react-native-community/checkbox";

//import Slider from "@react-native-community/slider";
const Filters = () => {
  const [getSelectedColors, setSelectedColors] = useState([]);
  const colors = [
    { value: "red", id: 1, state: false },
    { value: "blue", id: 2, state: false },
    { value: "yellow", id: 3, state: false },
    { value: "green", id: 4, state: false },
  ];
  const pushColors = (e, value, index) => {
    //Uncheecked: Remove it
    console.log(index);
    if (e == false) {
      const old_colors = [...getSelectedColors];
      const selected_index = old_colors.indexOf(value);
      if (selected_index != -1) {
        old_colors.splice(selected_index, 1);
      }
      setSelectedColors((old) => old_colors);
    } else {
      //checked: Add new color..
      setSelectedColors((old) => [value, ...old]);
    }
  };

  useEffect(() => {
    console.log(getSelectedColors);
  }, [getSelectedColors]);

  return (
    <View style={styles.filterView}>
      <View style={styles.filterSectionView}>
        <Text style={styles.filterSectionTitle}>Colors</Text>
        <View style={[styles.filterSectionContent, styles.filterColors]}>
          <View styles={[styles.colors]}>
            <FlatList
              data={colors}
              renderItem={({ item, index }) => {
                return (
                  <View
                    key={item.id}
                    style={[
                      styles.colorView,
                      styles.blue,
                      styles.selectedColor,
                    ]}
                  >
                    <CheckBox
                      style={[styles.colorCheckbox]}
                      value={item.state}
                      onValueChange={(e) => pushColors(e, item.value, index)}
                    />
                  </View>
                );
              }}
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  blue: {
    backgroundColor: "#161867",
  },
  desert: {
    backgroundColor: "#E1BC8D",
  },
  rhino: {
    backgroundColor: "#BDA9A9",
  },
  red: {
    backgroundColor: "#BB2222",
  },
  white: {
    backgroundColor: "#F7F7F7",
  },
  black: {
    backgroundColor: "#080813",
  },
  colors: {
    borderRadius: 100,
    borderWidth: 3,
    borderColor: "white",
  },
  sliderRight: {
    transform: [{ rotate: "180deg" }],
    width: "50%",
    marginLeft: -6,
  },
  sliderLeft: {
    width: "50%",
    marginRight: -4,
  },
  filterSectionContent: {
    flexDirection: "row",
  },
  colorView: {
    padding: 15,
    backgroundColor: "red",
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "white",
  },
  colorCheckbox: {},
  selectedColor: {
    borderWidth: 2,
    outlineColor: "#523009",
    outlineStyle: "solid",
    outlineWidth: 4,
  },
});

export default Filters;
