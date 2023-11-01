import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import DeviceBrightness from '@adrianso/react-native-device-brightness'
import { getUniqueId, getBrightness, getDisplay, getPowerState, isAirplaneMode, getManufacturer, getBatteryLevel } from 'react-native-device-info';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Alert,
  Text,
  Button,
  Pressable,
  Modal,
  TouchableOpacity,
  View,
  Image,
  Switch
} from 'react-native';
import Slider from '@react-native-community/slider';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function HomeScreen({navigation}:any): JSX.Element {
  const [batteryLevel,setBatteryLevel]=useState(0)
  const [isEnabled, setIsEnabled] = useState(false);
  const [brightness,setBrightness]=useState(0)
  const [checkAirplaneMode,setAirplaneMode]=useState(false)
  const [modalVisible, setModalVisible] = useState(false);
  const [getBright,setGetBright]=useState(0)

  getBatteryLevel().then((battery)=>{
    setBatteryLevel(Math.round(battery*100))
  })
  getBrightness().then((battery)=>{
    setGetBright(battery)
  })

 // Getting brightness
 const getSystemBrightness=async()=>{
  try {
    const systemBrightness:any = await DeviceBrightness.getSystemBrightnessLevel();
    console.log(systemBrightness);
    setBrightness(systemBrightness)
  } catch (error:any) {
    console.log(error)
  }
 }

 const checkAirplaneModeFunction=()=>{
    isAirplaneMode().then((airplane)=>{
      if (!airplane) {
        Alert.alert("Airplane mode is off, turn on to improve your battery life")
      }else{
        Alert.alert("Airplane mode is on")
      }
    }).catch(()=>{
      Alert.alert("Unable to check airplane mode")
    })
  }

  function durationToFullyCharge(currentBatteryLevel:any){
    let remainingPercentage=100-currentBatteryLevel
    let numerator=remainingPercentage*180
    let  remainingHours=Math.round(numerator/100)
    return remainingHours
  }
  let duration=durationToFullyCharge(Math.round(batteryLevel))
  let timeReducePower=180-duration

  return (
    <>
    {/* <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#00BCD4" translucent = {true}/> */}
    <SafeAreaView style={{backgroundColor:'white',height:1000}}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        >
        <View style={styles.sectionFirst}>
          <View style={styles.sectionDisplayBattery}>
            {batteryLevel<80?(
              <Image 
              source={require("../images/low_battery.png")}
              style={{width: 300, height: 250}}
            />)
            :
            (
              <Image 
              source={require("../images/full_battery.png")}
              style={{width: 300, height: 250}}
            />)}
            <Text style={styles.percentage}>{batteryLevel}%</Text>
            <Text  style={styles.percentageAbout}>About {timeReducePower}m left</Text>
          </View>
        </View>

        <View style={{marginVertical:20}}>
          <TouchableOpacity style={styles.button}>
            <View style={{flex:1, flexGrow:1, flexDirection:'row', alignItems:'center'}}>
              <View  style={{ padding:20,}}>
                <Icon name="bolt" size={30} color="#fcba03"/>
              </View>
              <View style={{flexGrow:1,}}>
                <Text style={{fontSize:20,fontWeight:'500',color:'black'}}>Battery saver</Text>
                <Text style={{fontSize:15,}}>{timeReducePower}m remaining</Text>
              </View>
            </View>
            <Switch
              thumbColor={isEnabled ? '#55a36c' : '#f4f3f4'}
              onValueChange = {()=>{
                setBrightness(0.1)
                DeviceBrightness.setBrightnessLevel(0.1)
              }}
              value={isEnabled}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Battery info')}>
            <View style={{flex:1, flexGrow:1, flexDirection:'row', alignItems:'center'}}>
              <View  style={{ padding:15,}}>
                <Entypo name="battery" size={28} color="#31a5d4"/>
              </View>
              <View style={{flexGrow:1,}}>
                <Text style={{fontSize:20,fontWeight:'500',color:'black'}}>Battery information</Text>
                <Text style={{fontSize:15,}}>Status, Charging and quality</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onShow={()=>{
                // getSystemBrightness()
              }}
              onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
              }}>
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Pressable style={{marginLeft:'auto'}} onPress={() => setModalVisible(!modalVisible)}>
                    <FontAwesome name="times" size={23} color="black"/>
                  </Pressable>
                  <Text style={{color:"black",fontSize:18}}>Brightness</Text>
                  <Slider
                    maximumValue={1}
                    minimumValue={0}
                    minimumTrackTintColor="#307ecc"
                    maximumTrackTintColor="#000000"
                    step={0.1}
                    value={brightness}
                    onValueChange={(brightness) => {
                      setBrightness(brightness);
                      DeviceBrightness.setBrightnessLevel(brightness);
                    }}
                  />
                </View>
              </View>
            </Modal>
            <View style={{flex:1, flexGrow:1, flexDirection:'row', alignItems:'center'}}>
              <View  style={{ padding:15,}}>
                <Feather name="sun" size={28} color="#fcba03"/>
              </View>
              <View style={{flexGrow:1,}}>
                <Text style={{fontSize:20,fontWeight:'500',color:'black'}}>Display</Text>
                <Text style={{fontSize:15,}}>Screen brightness</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={checkAirplaneModeFunction}>
            <View style={{flex:1, flexGrow:1, flexDirection:'row', alignItems:'center'}}>
              <View  style={{ padding:15,}}>
                <Ionicons name="airplane-outline" size={28} color="black"/>
              </View>
              <View style={{flexGrow:1,}}>
                <Text style={{fontSize:20,fontWeight:'500',color:'black'}}>Airplane mode</Text>
                <Text style={{fontSize:15,}}>Check airplane mode</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Tips')}>
            <View style={{flex:1, flexGrow:1, flexDirection:'row', alignItems:'center'}}>
              <View  style={{ padding:15,}}>
                <Feather name="info" size={28} color="#55a36c"/>
              </View>
              <View style={{flexGrow:1,}}>
                <Text style={{fontSize:20,fontWeight:'500',color:'black'}}>Tips</Text>
                <Text style={{fontSize:15,}}>How to improve your battery life</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  sectionFirst: {
    backgroundColor:"white"
  },
  sectionDisplayBattery:{
    flex:1,
    alignItems:'center',
    marginHorizontal:15,
    flexDirection:'column',
    paddingVertical: 10,
    paddingHorizontal:10,
  },
  percentage: {
    color:'#2ebfd9',
    fontWeight: '600',
    fontSize:50,
  },
  percentageAbout:{
    fontSize:15,
  },
  button:{
    flex:1,
    height:73,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:"space-between",
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default HomeScreen;
