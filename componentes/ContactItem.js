import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

const ContactItem = (props) => {
  return (
    <Pressable onPress={props.deleteContactHandler.bind(this, props.itemData.item.id)}>
      <View style={styles.contactItem}>
        <Text style={styles.contactText}>
          {props.itemData.item.text[0].toUpperCase() + props.itemData.item.text.slice(1)}
        </Text>
      </View>
    </Pressable>
  );
};

export default ContactItem;

const styles = StyleSheet.create({
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
});
