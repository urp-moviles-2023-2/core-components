import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import ContactItem from "./ContactItem";

const ContactList = (props) => {
  return (
    <View style={styles.contactsContainer}>
      <FlatList
        data={props.contacts}
        renderItem={(itemData) => {
          return (
            <ContactItem
              onDeleteContactHandler={props.deleteContactHandler}
              itemData={itemData}
            />
          );
        }}
        keyExtractor={(item, index) => {
          console.log("a", item)
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
    backgroundColor: "#e3fae3",
  },
});
