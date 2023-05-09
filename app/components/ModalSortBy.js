import { View, Text, StyleSheet, TouchableOpacity, Modal } from "react-native";
import color from "../colors/color";

import { AntDesign } from "@expo/vector-icons";

const ModalSortBy = ({
  options,
  setSelectedPriceOption,
  getSelectedPriceOption,
  showModal,
  closeModal,
}) => {
  return (
    <View style={styles.priceFilterModalView}>
      <Modal
        animationType="slide"
        visible={showModal}
        style={styles.priceFilterModal}
        transparent={true}
      >
        <TouchableOpacity
          onPress={() => closeModal(false)}
          style={styles.modalOverlay}
        ></TouchableOpacity>

        <View style={styles.priceFilterContent}>
          <TouchableOpacity
            onPress={() => closeModal(false)}
            style={styles.modalClose}
          >
            <AntDesign name="closecircleo" size={24} color={color.GRAY} />
          </TouchableOpacity>
          <View style={styles.priceFilterModalTitle}>
            <Text style={styles.priceFilterModalTitleText}>Sort By</Text>
          </View>

          {/* Show options */}
          {options.map((x, i) => {
            return (
              <TouchableOpacity
                key={i}
                onPress={() => setSelectedPriceOption(x)}
                style={styles.priceFilterOption}
              >
                <Text
                  style={[
                    styles.priceFilterOptionText,
                    getSelectedPriceOption?.value == x.value
                      ? styles.priceFilterActiveOption
                      : null,
                  ]}
                >
                  {x.title}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
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
    opacity: 0.2,
  },
  modalClose: {
    position: "absolute",
    right: 25,
    top: 30,
    zIndex: 5,
  },
});

export default ModalSortBy;
