import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, TextInput, SafeAreaView, VirtualizedList, FlatList, Pressable,Modal } from 'react-native';
import React, { Component } from 'react';






export default function App() {

  const [contact, setContacto] = React.useState('');
  const [lista_contactos, setListaContactos] = React.useState([]);
  const [modalVisible, setModalVisible] = React.useState(false);

  function contactItemHandler(item) {
    console.log(item)
    console.log("Pressed")
  }

  //* Renderiza cada item de la lista
  const renderItem = ({ item }) => (
    <Pressable onPress={() => setModalVisible(true)}>
      <View>
        <Text>{item.nombre}</Text>
      </View>
    </Pressable>
  );

  //*Función para añadir contactos a la lista de contactos
  const añadir_contacto = () => {
    //* Verifica si se ingresó un contacto y lo agrega a la lista
    if (contact) {
      const newContact = { nombre: contact };
      setListaContactos([...lista_contactos, newContact]);
      setContacto("");
    }
  };



  return (
    //*View de la app
    <SafeAreaView style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        style = {styles.modalView}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View >
          <View >
            <Text >Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <View style={styles.input_container}>
        <Text>Contacto</Text>
        <TextInput
          style={styles.input}
          placeholder='Ingresar Contacto'
          onChangeText={(contacto) => setContacto(contacto)}
          value={contact}
        />
        <Button
          title="Agregar Contacto"
          onPress={añadir_contacto}
        />

      </View>
      <View style={styles.contacts_container}>
        <Text> Lista de Contactos</Text>


        <FlatList
          data={lista_contactos}
          renderItem={renderItem}
          keyExtractor={(contacto, index) => index.toString()}
        />
      </View>




      <StatusBar style="auto" />

    </SafeAreaView>
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
  text_contacto: {
    paddingBottom: 30
  },
  input: {
    height: 40,
    width: 190,
    margin: 12,
    borderWidth: 1,
    padding: 10

  },
  button: {
    height: 30,
    color: "#fff",
  },
  input_container: {
    flex: 1,
    flexDirection: "column",
    width: '100%',
    backgroundColor: "#8CAE68",
    justifyContent: "center",
    alignItems: 'center',
    marginTop: 50,
    padding: 0
  },
  contacts_container: {
    flex: 2,
    marginTop: 20,
    width: '100%',
    justifyContent: "center",
    alignItems: 'center',
    marginBottom: 20
  },
  container: {
    flex: 1,
    backgroundColor: '#DFE0E2',
    alignItems: 'center',
    justifyContent: 'center',
  },
});