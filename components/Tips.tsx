import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView, ScrollView, Modal, Pressable, Alert } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import React, { useState } from 'react'

export default function Tips() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);

  return (
    <SafeAreaView style={{backgroundColor:"white", paddingHorizontal:20, height:1000}}>
      <ScrollView >
        <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Pressable style={{marginLeft:'auto'}} onPress={() => setModalVisible(!modalVisible)}>
                  <FontAwesome name="times" size={23} color="black"/>
                </Pressable>
                <Text style={{color:"black",fontSize:15}}>
                  Other power adapters and chargers can charge slowly or not at all. They can also damage your phone or battery.
                </Text>
              </View>
            </View>
          </Modal>
          <View style={{flex:1, flexGrow:1, flexDirection:'row', alignItems:'center'}}>
            <View style={{flexGrow:1,}}>
              <Text style={{fontSize:20,fontWeight:'500',color:'black'}}>Correct power adapter</Text>
              <Text style={{fontSize:15,}}>Use the power adapter that came with your phone</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => setModalVisible1(true)}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible1}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible1(!modalVisible1);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Pressable style={{marginLeft:'auto'}} onPress={() => setModalVisible1(!modalVisible1)}>
                  <FontAwesome name="times" size={23} color="black"/>
                </Pressable>
                <Text style={{color:"black",fontSize:15}}>
                Avoid situations where your phone can overheat, especially when your battery is fully charged. Your battery drains much faster when it's hot, even when not in use. This kind of drain can damage your battery.
                </Text>
              </View>
            </View>
          </Modal>
          <View style={{flex:1, flexGrow:1, flexDirection:'row', alignItems:'center'}}>
            <View style={{flexGrow:1,}}>
              <Text style={{fontSize:20,fontWeight:'500',color:'black'}}>Keep it cool</Text>
              <Text style={{fontSize:15,}}>Avoid overheating</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => setModalVisible2(true)}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible2}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible1(!modalVisible2);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Pressable style={{marginLeft:'auto'}} onPress={() => setModalVisible2(!modalVisible2)}>
                  <FontAwesome name="times" size={23} color="black"/>
                </Pressable>
                <Text style={{color:"black",fontSize:15}}>
                You don’t need to teach your phone the battery’s capacity by going from full charge to zero, or zero to full. We recommend you occasionally drain your battery to under 10% and then charge it fully overnight.
                </Text>
              </View>
            </View>
          </Modal>
          <View style={{flex:1, flexGrow:1, flexDirection:'row', alignItems:'center'}}>
            <View style={{flexGrow:1,}}>
              <Text style={{fontSize:20,fontWeight:'500',color:'black'}}>Charge little</Text>
              <Text style={{fontSize:15,}}>Charge as much or as little as needed</Text>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  button:{
    flex:1,
    marginVertical:10,
    height:50,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:"space-between",
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  }
})