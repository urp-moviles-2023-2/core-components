import {StyleSheet, View, FlatList} from 'react-native';
import React from 'react';
import ContactInput from './components/ContactInput';
import ContactItem from './components/ContactItem';
import ContactList from './ContactList';
import { StyleSheet, Text, TextInput, View, Button } from "react-native";

export default function App() {
  const [contacts, setContacts] = React.useState("");
  //const App = () => {
    //const contactos = [
      //{ id: 1, nombre: 'Juan', telefono: '123-456-7890' },
      //{ id: 2, nombre: 'María', telefono: '987-654-3210' },
      // ... más contactos
    //];
  
    //return (
      //<div className="App">
        //<h1>Lista de Contactos</h1>
        //<ContactList contactos={contactos} />
      //</div>
    //);
  //};
 // const addContactHandler = contact => {
    //setContacts(currentContacts => [...currentContacts, contact]);
  //};

  const addContactHandler = () => {
    console.log(contact);

  const deleteContactHandler = id => {
    setContacts(currentContacts => {
      return currentContacts.filter(contact => contact.id !== id);
    });
  };

  // TODO: Implement ContactList component defined in components folder

  return (
    <View style={styles.appContainer}>
      <ContactInput onAddContactHandler={addContactHandler} />
      <View style={styles.contactsContainer}>
      <TextInput
          style={styles.textInput}
          placeholder="Contact information"
          onChangeText={(text) => setContact(text)}
        />
        <FlatList
          data={contacts}
          renderItem={itemData => {
            return (
              <ContactItem
                onDeleteContactHandler={deleteContactHandler}
                itemData={itemData}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
          <Button title="Add Contact" onPress={addContactHandler} />
      </View>
      <View style={styles.contactsContainer}>
        <Text>List of Contacts...</Text>
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
    backgroundColor: '#e3fae3',
  },
})};
