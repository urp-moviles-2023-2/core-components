import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  FlatList,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React from "react";

export default function App() {
  const [contact, setContact] = React.useState("");
  const [contacts, setContacts] = React.useState([]);

  const contactInputHandler = (enteredText) => {
    setContact(enteredText);
  };

  const addContactHandler = () => {
    if (contact === "") {
      alert("Please enter a contact");
      return;
    }
    setContacts((currentContacts) => [
      ...currentContacts,
      { text: contact, id: Math.random().toString() },
    ]);
    setContact("");
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
          placeholderTextColor={"#cccccc"}
          onChangeText={contactInputHandler}
          value={contact}
        />
        
        <TouchableOpacity style={styles.button} onPress={addContactHandler}>
          <Text style={styles.buttonText}>Add Contact</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.contactsContainer}>
        <FlatList
          data={contacts}
          renderItem={(itemData) => {
            return (
              <Pressable onPress={deleteContactHandler.bind(this, itemData.item.id)}>
                <View style={styles.contactItem}>
                  <Text style={styles.contactText}>{itemData.item.text[0].toUpperCase() + itemData.item.text.slice(1)}</Text>
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
    borderRadius: 5,
    overflow: "hidden",
  },
  contactsContainer: {
    flex: 6,
    backgroundColor: "#e3fae3",
  },
  contactItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#cccccc",
    backgroundColor: "white",
  },
  contactText: {
    color: "black",
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
  }
});
