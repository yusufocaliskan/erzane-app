import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Platform,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import color from "../colors/color";
import GoBackIcon from "./GoBackIcon";
import { Ionicons } from "@expo/vector-icons";
export default function Header(props) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerRow}>
        {props.navigation.canGoBack() ? (
          <View style={[styles.headerCol, styles.headerLeft]}>
            <GoBackIcon {...props} />
          </View>
        ) : null}
        <View
          style={[
            styles.headerCol,
            styles.headerCenter,
            !props.navigation.canGoBack() ? { width: "85%" } : { width: "75%" },
          ]}
        >
          <View style={styles.searchBox}>
            <TextInput
              style={[styles.searchTextInput]}
              placeholder="Li tiştekî bigere."
              onBlur={() => setIsFocused(false)}
              onFocus={() => setIsFocused(true)}
            />
            <Feather
              style={styles.searchBoxIcon}
              name="search"
              size={22}
              color={color.GRAY}
            />
          </View>
        </View>
        <View style={[styles.headerCol, styles.headerRight]}>
          {isFocused == false ? (
            <TouchableOpacity style={[styles.notifications]}>
              <Ionicons
                name="notifications-outline"
                size={26}
                color={color.GRAY}
              />
              <View style={styles.notificationCount}></View>
            </TouchableOpacity>
          ) : null}
          {isFocused == true ? (
            <TouchableOpacity
              style={[styles.searchBoxCancelButton]}
              onPress={() => Keyboard.dismiss()}
            >
              <Text style={styles.searchBoxCancelButtonText}>Jêveger</Text>
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: 5,
    paddingVertical: 10,
    backgroundColor: color.WHITE,
    shadowColor: color.BLACK,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 5,
    shadowOpacity: 0.3,
    elevation: 20,
  },

  headerRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerLeft: {},
  headerCenter: {
    width: "75%",
  },
  searchBox: {
    position: "relative",
    width: "100%",
  },
  searchTextInput: {
    width: "100%",
    paddingVertical: 2,
    paddingRight: 10,
    paddingLeft: 35,
    fontSize: 15,
    margin: 5,
    borderWidth: 1,
    borderColor: color.GRAY_BORDER,
    borderRadius: 5,
    ...Platform.select({
      ios: {
        paddingVertical: 5,
        fontSize: 18,
      },
    }),
  },
  searchBoxIcon: {
    position: "absolute",
    top: 11,
    left: 10,
  },
  searchBoxCancelButton: {
    marginLeft: 13,
  },
  searchBoxCancelButtonText: {
    color: color.RED,
  },
  notifications: {
    marginLeft: 20,
    position: "relative",
  },

  notificationCount: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: color.RED,
    borderRadius: 25,
    color: color.WHITE,
    width: 14,
    height: 14,
    ...Platform.select({
      android: {
        width: 12,
        height: 12,
      },
    }),
  },
});
