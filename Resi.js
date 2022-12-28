import React, { Fragment, useEffect, useState, Component  } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Pressable,
  Button,
  Modal, 
  TextInput,
  FlatList
} from 'react-native';
import Axios from 'axios';


const Resi = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [judul,setJudul] = useState('');
  const [resi, setResi] = useState('');


  handleStore = () =>
  {
    setModalVisible(!modalVisible)
    Axios.post('http://192.168.174.187:8000/api/post-data', {
      judul: judul,
      resi: resi
    })
    .then(function (response) {
      console.log(response);
      getGithubUser();
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  getGithubUser = async () => {
         Axios.get(`http://192.168.174.187:8000/api/get-data`)
        .then((json) => setData(json.data.data))
        .finally(() => setLoading(false));
  }

  useEffect(() => {
    getGithubUser();
    }, [])
const renderItem = (itemData) => {
  return(
    <View style={styles.card}   
    >
      <Text style={styles.font1} >{itemData.item.judul}</Text>
      <Text style={styles.font2}>{itemData.item.resi}</Text>
    </View>
  );
}
  return (
    <View style={{ flex: 1 }}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id }
            />

      <View style={{ marginLeft: 10, marginRight: 10, marginBottom: 10, marginTop: 5, borderRadius: 10 }}>
        <Button style={{ position: 'absolute' }}
          title="Buat Catatan"
          onPress={() => setModalVisible(!modalVisible)}
        />

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Masukan catatan anda</Text>
              <TextInput style={styles.inputModal} placeholder="Nama Barang" onChangeText={(text) => setJudul(text)} ></TextInput>
              <TextInput style={styles.inputModal} placeholder="Nomer Resi" onChangeText={(text) => setResi(text)}></TextInput>
         
              <Button title='Tambah Data' onPress={() => handleStore()}></Button>
            </View>
          </View>
        </Modal>
      </View>

    </View>
  );

};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#BAD7E9',
    borderColor: '#2B3467',
    margin: 10,
    padding: 7,
    borderRadius: 10
  },
  font1: {
    fontSize: 20,
    color: '#2B3467'
  },
  font2: {
    fontSize: 15,
    color: '#2B3467',
    marginTop: 10
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width : 300, 
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  inputModal : {
    borderColor : '#2B3467', borderWidth : 1, margin : 10, width : 200, borderRadius : 10, padding : 10
  }
});

export default Resi;