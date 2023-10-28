import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import ScreenBrightness from 'react-native-screen-brightness';
import { getUniqueId, getDisplay, getPowerState, isAirplaneMode, getManufacturer, getBatteryLevel } from 'react-native-device-info';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Alert,
  Text,
  Button,
  TouchableOpacity,
  View,
  Image,
  Switch
} from 'react-native';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function HomeScreen({navigation}:any): JSX.Element {
  const [manufacturer,setManufacturer]=useState('')
  const [batteryLevel,setBatteryLevel]=useState(0)
  const [isEnabled, setIsEnabled] = useState(false);
  const [brightness,setBrightness]=useState()
  const [checkAirplaneMode,setAirplaneMode]=useState(false)

  getManufacturer().then((manufacturer)=>{
    setManufacturer(manufacturer)
  })
  getBatteryLevel().then((battery)=>{
    setBatteryLevel(battery)
  })
  // ScreenBrightness.setBrightness(0.5); // between 0 and 1
 
  ScreenBrightness.getBrightness().then((brightness:any) => {
    setBrightness(brightness);
  }).catch(()=>{
    Alert.alert("Unable to set system brightness")
  });

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

  const toggleSwitch = () =>{
    setIsEnabled(previousState => !previousState);
    Alert.alert("Successfully turned on battery saver")
    console.log(isEnabled)
    if(isEnabled!==true){
    }
  };

  return (
    <>
    {/* <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#00BCD4" translucent = {true}/> */}
    <SafeAreaView style={{backgroundColor:'white'}}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        >
        <View style={styles.sectionFirst}>
          <View style={styles.sectionDisplayBattery}>
            <Image 
              source={require("../images/low_battery.png")}
              style={{width: 300, height: 200}}
            />
            {/* <Icon name="battery-0" size={30} color="#900" /> */}
            <Text style={styles.percentage}>{batteryLevel}%</Text>
            <Text  style={styles.percentageAbout}>About 22m left {manufacturer} {brightness}</Text>
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
                <Text style={{fontSize:15,}}>22m remaining</Text>
              </View>
            </View>
            <Switch
              // trackColor={{false: '#dee2e3', true: '#767577'}}
              thumbColor={isEnabled ? '#55a36c' : '#f4f3f4'}
              onValueChange = {toggleSwitch}
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

          <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Battery info')}>
            <View style={{flex:1, flexGrow:1, flexDirection:'row', alignItems:'center'}}>
              <View  style={{ padding:15,}}>
                <Feather name="sun" size={28} color="#fcba03"/>
              </View>
              <View style={{flexGrow:1,}}>
                <Text style={{fontSize:20,fontWeight:'500',color:'black'}}>Display</Text>
                <Text style={{fontSize:15,}}>Screen brightness, font size</Text>
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
    // marginVertical:20,
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
  }
});

export default HomeScreen;
