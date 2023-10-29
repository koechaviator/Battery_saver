import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'
import { getPowerState,  getBrightness, getBatteryLevel } from 'react-native-device-info';
import React, { useState } from 'react'

export default function BatteryInfo() {
  const [batteryStatus,setBatteryStatus]=useState({
    batteryState:'',
    batteryLevel:0
  })

  getPowerState().then((powerState:any) => {
    setBatteryStatus(powerState);
  }).catch(()=>{
    console.log("Unable to set system brightness")
  });
  return (
   <SafeAreaView style={{backgroundColor:"white", paddingHorizontal:20, height:1000}}>
    <ScrollView >
      <View style={{paddingBottom:20}}>
        <View style={styles.button}>
          <View style={{flex:1, flexGrow:1, flexDirection:'row', alignItems:'center'}}>
            <View style={{flexGrow:1,}}>
              <Text style={{fontSize:18,color:'black'}}>Battery status</Text>
              <Text style={{fontSize:15,}}>{batteryStatus.batteryState}</Text>
            </View>
          </View>
        </View>

        <View style={styles.button}>
          <View style={{flex:1, flexGrow:1, flexDirection:'row', alignItems:'center'}}>
            <View style={{flexGrow:1,}}>
              <Text style={{fontSize:18,color:'black'}}>Battery level</Text>
              <Text style={{fontSize:15,}}>{batteryStatus.batteryLevel}%</Text>
            </View>
          </View>
        </View>

        <View style={styles.button}>
          <View style={{flex:1, flexGrow:1, flexDirection:'row', alignItems:'center'}}>
            <View style={{flexGrow:1,}}>
              <Text style={{fontSize:18,color:'black'}}>Duration</Text>
              <Text style={{fontSize:15,}}>22m</Text>
            </View>
          </View>
        </View>
      </View>
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
  }
})