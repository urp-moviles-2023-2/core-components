import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, Button, FlatList } from "react-native";

export default function App() {
  const [contact, setContact] = useState("");
  const [contacts, setContacts] = useState([]);

  const addContactHandler = () => {
    if (contact) {
      // Agregar el nuevo contacto a la lista de contactos
      setContacts([...contacts, { name: contact }]);
      // Limpiar el campo de entrada
      setContact("");
    }
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Contact information"
          onChangeText={(text) => setContact(text)}
          value={contact}
        />
        <Button title="Add Contact" onPress={addContactHandler} />
      </View>
      <View style={styles.contactsContainer}>
        <Text style={styles.listContact} >List of Contacts</Text>
        <FlatList
          data={contacts}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Text>{item.name}</Text>
          )}
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
    justifyContent: "space-evenly",
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
    flex: 5,
    alignItems: "center",
    
  },
  listContact: {
    paddingBottom:20
  }
});

