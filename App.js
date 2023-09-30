import {StyleSheet, View, FlatList} from 'react-native';
import React from 'react';
import ContactInput from './components/ContactInput';
import ContactItem from './components/ContactItem';

export default function App() {
  const [contacts, setContacts] = React.useState([]);

  const addContactHandler = contact => {
    setContacts(currentContacts => [...currentContacts, contact]);
  };

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
    backgroundColor: '#e3fae3',
  },
});
