import React from 'react';
import type {PropsWithChildren} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
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
          <View style={styles.sectionDisplayBatter}>
            <Text>Hell</Text>
            <Icon name="key" size={30} color="#900" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  sectionFirst: {
    backgroundColor:"#f5fbfc"
  },
  header:{
    paddingVertical: 10,
    paddingHorizontal:10,
  },
  title: {
    fontSize: 24,
    color:'black',
    fontWeight: '600',
  },
  sectionDisplayBatter:{
    marginHorizontal:15,
    marginVertical:20,
    paddingVertical: 10,
    paddingHorizontal:10,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
