import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";

const ContactInput = (props) => {
  const [contact, setContact] = React.useState("");

  const addContactHandler = () => {
    if (contact === "") {
      alert("Please enter a contact");
      return;
    }
    props.addContactHandler(contact);
    setContact("");
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Contact information"
        placeholderTextColor={"#cccccc"}
        onChangeText={(text) => setContact(text)}
        value={contact}
      />

      <TouchableOpacity style={styles.button} onPress={addContactHandler}>
        <Text style={styles.buttonText}>Add Contact</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ContactInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
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
