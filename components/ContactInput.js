import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Modal,
} from "react-native";
import React from "react";

const ContactInput = (props) => {
  const [contact, setContact] = React.useState("");
  const [modalVisible, setModalVisible] = React.useState(false);

  const addContactHandler = () => {
    if (contact === "") {
      alert("Please enter a contact");
      return;
    }
    props.onAddContactHandler(contact);
    setContact("");
    hideModal(false)
  };

  const showModal = () => {
    setModalVisible(true)
  }

  const hideModal = () => {
    setModalVisible(false)
  }

  return (
    <>
      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Contact information"
            placeholderTextColor={"#cccccc"}
            onChangeText={(text) => setContact(text)}
            value={contact}
          />

          <TouchableOpacity style={styles.button} onPress={addContactHandler}>
            <Text style={styles.buttonText}>Add</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <TouchableOpacity style={styles.button} onPress={showModal}>
        <Text style={styles.buttonText}>Add Contact</Text>
      </TouchableOpacity>
    </>
  );
};

export default ContactInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    marginTop: 80,
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 10,
    padding: 10,
    borderRadius: 5,
    overflow: "hidden",
  },
  button: {
    marginTop: 10,
    height: 40,
    width: 120,
    borderRadius: 5,
    backgroundColor: "#54c45e",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});
