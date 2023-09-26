import { StyleSheet, View, FlatList, StatusBar } from "react-native";
import React from "react";
import ContactInput from "./components/ContactInput";
import ContactItem from "./components/ContactItem";
import ContactList from "./components/ContactList";

export default function App() {
  const [contacts, setContacts] = React.useState([]);

  const addContactHandler = (contact) => {
    setContacts((currentContacts) => [
      ...currentContacts,
      contact,
    ]);
  };

  const deleteContactHandler = (id) => {
    setContacts((currentContacts) => {
      return currentContacts.filter((contact) => contact.id !== id);
    });
  };

  // TODO: Implement ContactList component defined in components folder

  return (
    <View style={styles.contactsContainer}>
      <ContactInput onAddContactHandler={addContactHandler} />
      <View style={styles.contactsContainer}>
      <ContactList
        contacts={contacts} 
        deleteContactHandler={deleteContactHandler} 
      />
      </View>
      



      <StatusBar style="auto" />
      

    </View>
  );
}


//* Estilos para la app
const styles = StyleSheet.create({


  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  contactsContainer: {
    flex: 6,
    backgroundColor: "#e3fae3",
  },
});
