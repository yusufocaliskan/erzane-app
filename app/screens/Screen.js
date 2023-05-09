import React, { StyleSheet, View, SafeAreaView } from "react-native";
import color from "../colors/color";

export default Screen = (props) => {
  return (
    <SafeAreaView style={styles.screenContainer}>{props.children}</SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: color.LIGHT_GRAY,
  },
});
