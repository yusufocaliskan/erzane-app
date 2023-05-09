import React, { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import color from "../colors/color";
const EnterWithSocialMedia = ({ headerText }) => {
  return (
    <View style={styles.container}>
      <View style={styles.formFooterSocialLinks}>
        <View style={styles.formFooterTextView}>
          <Text style={styles.formFooterText}>{headerText}</Text>
        </View>

        <View style={styles.formFooterIcons}>
          <TouchableOpacity
            style={[styles.formFooterIconView, { marginRight: 30 }]}
          >
            <Entypo name="facebook-with-circle" size={30} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.formFooterIconView}>
            <AntDesign name="google" size={30} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formButtonText: {
    color: color.WHITE,
    fontSize: 20,
    textTransform: "uppercase",
  },

  formFooterTextView: {
    textAlign: "center",
    flexDirection: "row",
    justifyContent: "center",
    padding: 20,
  },
  formFooterText: {
    fontSize: 18,
  },
  formFooterSocialLinks: {
    marginBottom: 30,
  },
  formFooterIcons: {
    flexDirection: "row",
    justifyContent: "center",
  },
  formFooterIconView: {
    alignItems: "center",
    padding: 20,
    backgroundColor: color.WHITE,
    shadowColor: color.BLACK,
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    borderRadius: 20,
  },
});

export default EnterWithSocialMedia;
