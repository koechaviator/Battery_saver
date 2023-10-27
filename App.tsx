import React from 'react';
import type {PropsWithChildren} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
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
  Image
} from 'react-native';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): JSX.Element {
  return (
    <>
    {/* <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#00BCD4" translucent = {true}/> */}
    <SafeAreaView >
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        >
        <View style={styles.sectionFirst}>
          <View style={styles.header}>
            <Text style={styles.title}>Battery Saver</Text>
          </View>
          <View style={styles.sectionDisplayBattery}>
            <Image 
              source={require('./images/low_battery.png')}
              style={{width: 300, height: 250}}
            />
            {/* <Icon name="battery-0" size={30} color="#900" /> */}
            <Text style={styles.percentage}>3%</Text>
            <Text  style={styles.percentageAbout}>About 22m left</Text>
          </View>
        </View>
        <View>
          <Button onPress={()=>Alert.alert('Hello')} title="This looks great!" />
          <TouchableOpacity onPress={()=>Alert.alert('Hello')} style={styles.button}>
            <Text>Click me</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  sectionFirst: {
    backgroundColor:"#ffff"
  },
  header:{
    paddingVertical: 10,
    paddingHorizontal:10,
    backgroundColor:"#f5fbfc"
  },
  title: {
    fontSize: 24,
    color:'black',
    fontWeight: '600',
  },
  sectionDisplayBattery:{
    flex:1,
    alignItems:'center',
    marginHorizontal:15,
    marginVertical:20,
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
    alignItems:'center',
    justifyContent:'center',
    height:40,
    backgroundColor:'#aedfe8'
  }
});

export default App;
