import {StyleSheet, View, FlatList} from 'react-native';
import React from 'react';
import ContactItem from './ContactItem';
import ContactList from './ContactList';

const ContactList = props => {
  const contacts = [];
  const App = () => {
    const contactos = [
      { id: 1, nombre: 'Arelis', telefono: '123-596-4440' },
      { id: 2, nombre: 'Luis', telefono: '996-964-4440' },
      // ... más contactos
    ];

    return (
      <div className="App">
        <h1>Lista de Contactos</h1>
        <ContactList contactos={contactos} />
      </div>
    );
  };

  return (
    <View style={styles.contactsContainer}>
      <FlatList
        data={contacts}
        renderItem={itemData => {
          return (
            <ContactItem
              onDeleteContactHandler={props.deleteContactHandler}
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
  );
};

export default ContactList;

const styles = StyleSheet.create({
  contactsContainer: {
    flex: 6,
    backgroundColor: '#e3fae3',
  },
});
