import React, { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const GoBackIcon = (props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.loginContainer}>
      <TouchableOpacity
        style={styles.goBackIconView}
        onPress={() => navigation.goBack()}
      >
        <Ionicons
          style={styles.goBackIcon}
          name="chevron-back"
          size={24}
          color="black"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  goBackIconView: {},
  goBackIcon: {
    fontSize: 35,
  },
});

export default GoBackIcon;
