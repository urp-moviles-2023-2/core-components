import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  FlatList,
} from "react-native";
import React from "react";

export default function App() {
  const [contact, setContact] = React.useState("");
  const [contacts, setContacts] = React.useState([]);
  const name = ""

  function addContactHandler() {
    setContacts((currentContacts) => [
      ...currentContacts,
      { text: contact, id: Math.random().toString() },
    ]);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Contact information"
          onChangeText={(text) => setContact(text)}
        />
        <Button title="Add Contact" onPress={addContactHandler} />
        <Button title="Add Contact 1" />
      </View>
      <View style={styles.contactsContainer}>
        <FlatList
          data={contacts}
          renderItem={(itemData) => {
            return (
              <View style={styles.contactItem}>
                <Text style={styles.contactText}>{itemData.item.text}</Text>
              </View>
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 80,
    paddingHorizontal: 16,
  },
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
  },
  contactsContainer: {
    flex: 6,
  },
  contactItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#54c45e",
  },
  contactText: {
    color: "white",
  },
});
