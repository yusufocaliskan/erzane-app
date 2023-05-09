import React, {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import color from "../colors/color";
import GoBackIcon from "../components/GoBackIcon";
import EnterWithSocialMedia from "../components/EnterWithSocialMedia";
const ForgotPassword = () => {
  return (
    <View style={styles.loginContainer}>
      <GoBackIcon />
      <View style={styles.loginContent}>
        <View style={styles.headerView}>
          <Text style={styles.headerText}>Forgot Password</Text>
        </View>

        <View style={styles.formView}>
          <View style={styles.formItem}>
            <TextInput placeholder="e-mail" style={styles.formInput} />
          </View>
        </View>

        <View style={styles.formView}>
          <TouchableOpacity style={styles.formButton}>
            <Text style={styles.formButtonText}>Send</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    height: "100%",
  },
  loginContent: {
    flex: 1,
  },
  headerView: {
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 34,
    fontWeight: "700",
    color: color.BLACK,
  },
  formView: {
    paddingLeft: "5%",
    marginBottom: 10,
    paddingRight: "5%",
  },
  formInput: {
    backgroundColor: color.WHITE,
    width: "100%",
    padding: 25,
    fontSize: 18,
    borderRadius: 6,
    borderColor: color.GRAY_BORDER,
    shadowColor: color.BLACK,
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },
  formForgorPassword: {
    marginTop: 10,
    flexDirection: "row-reverse",
  },
  formTextButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  formTextButtonText: {
    fontSize: 18,
    color: color.BLACK,
    marginRight: 5,
  },
  formButton: {
    marginTop: 50,
    backgroundColor: color.RED,
    padding: 15,
    borderRadius: 100,
    alignItems: "center",
    shadowColor: color.BLACK,
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },

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
    zIndex: 9999,
    marginBottom: 60,
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

export default ForgotPassword;
