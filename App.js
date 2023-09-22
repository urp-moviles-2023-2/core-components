import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
} from "react-native";
import React from "react";
import ContactInput from "./componentes/ContactInput";
import ContactItem from "./componentes/ContactItem";

export default function App() {
  
  const [contacts, setContacts] = React.useState([]);

  const addContactHandler = (contact) => {
    setContacts((currentContacts) => [
      ...currentContacts,
      { text: contact, id: Math.random().toString() },
    ]);
  };

  const deleteContactHandler = (id) => {
    setContacts((currentContacts) => {
      return currentContacts.filter((contact) => contact.id !== id);
    });
  };

  return (
    <View style={styles.appContainer}>
      <ContactInput addContactHandler={addContactHandler} />
      <View style={styles.contactsContainer}>
        <FlatList
          data={contacts}
          renderItem={(itemData) => {
            return (
              <ContactItem
                deleteContactHandler={deleteContactHandler}
                itemData={itemData}
              />
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
  contactsContainer: {
    flex: 6,
    backgroundColor: "#e3fae3",
  }
});
