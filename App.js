import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  FlatList,
  Pressable,
} from "react-native";
import React from "react";

export default function App() {
  const [contact, setContact] = React.useState("");
  const [contacts, setContacts] = React.useState([]);

  const contactInputHandler = (enteredText) => {
    setContact(enteredText);
  };

  const addContactHandler = () => {
    setContacts((currentContacts) => [
      ...currentContacts,
      { text: contact, id: Math.random().toString() },
    ]);
  };

  const deleteContactHandler = (id) => {
    console.log("delete "+ id)
    setContacts((currentContacts) => {
      return currentContacts.filter((contact) => contact.id !== id);
    });
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Contact information"
          onChangeText={contactInputHandler}
        />
        <Button title="Add Contact" onPress={addContactHandler} />
      </View>
      <View style={styles.contactsContainer}>
        <FlatList
          data={contacts}
          renderItem={(itemData) => {
            return (
              <Pressable onPress={deleteContactHandler.bind(this, itemData.item.id)}>
                <View style={styles.contactItem}>
                  <Text style={styles.contactText}>{itemData.item.text}</Text>
                </View>
              </Pressable>
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
