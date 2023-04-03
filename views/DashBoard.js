import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import Card from '../components/card';
import { Header as HeaderRNE, Switch, } from '@rneui/themed';


const img = require("../assets/Vector.png");
const fan = require("../assets/fan.png");
const bulb = require("../assets/bulb.png");
const Logo = require("../assets/logo1.png");

export default function DashBoard() {

  const [checked, setChecked] = useState(false);

  const toggleSwitch = () => {
    setChecked(!checked);
  };

  return (
    <ScrollView>
    <HeaderRNE
      backgroundColor='#7DC253'
      leftComponent={
        <Image source={Logo} style={{width: '100%', resizeMode: 'contain', }}></Image>
  }

      centerComponent={{ text: 'DashBoard', style: styles.heading }}
      
    />

      <View style={{ flex: 1,flexDirection: "row", gap: 10, flexWrap: 'wrap', padding: 10 }} >

        <View style={{ width: "48%", position: 'relative', }}>
         <Card>
            <Text style={styles.h1}>BedRoom</Text>
            <View style={{flexDirection: 'row',}}>

              <Image  source={bulb} style={[styles.image,{height: 95, resizeMode: 'contain',}]}/>
              <View style={{right: 15 }}>
                <Switch
                  value={checked}
                  onValueChange={(value) => setChecked(value)}
                />
              </View>
            </View>
         </Card>
        </View>

        <View style={{ width: "48%", position: 'relative', }}>
         <Card>
            <Text style={styles.h1}>Hall</Text>
            <View style={{flexDirection: 'row', height: 95}}>

              <Image  source={fan} style={[styles.image,{height: 65, resizeMode: 'contain', left: 5, top: 15}]}/>
              <View style={{right: 15 }}>
                <Switch
                  value={checked}
                  onValueChange={(value) => setChecked(value)}
                />
              </View>
              </View>
         </Card>
        </View>
        
      <View style={{ width: "48%", position: 'relative', }}>
         <Card>
            <Text style={styles.h1}>Hall</Text>
            <View style={{flexDirection: 'row',}}>

              <Image  source={bulb} style={[styles.image,{height: 95, resizeMode: 'contain',}]}/>
              <View style={{right: 15 }}>
                <Switch
                  value={checked}
                  onValueChange={(value) => setChecked(value)}
                />
              </View>
            </View>
         </Card>
        </View>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  h1: {
    // fontfamily: 'Qualion',
    fontStyle: 'normal',
    fontSize: 20,
    fontWeight: 800,
    paddingBottom: 10,
    color: "#7DC253",
  },
  h2: {
      // fontfamily: 'Qualion',
      fontStyle: 'normal',
      fontSize: 35,
      fontWeight: 800,
      lineHeight: 50,
      color: "#000",
  },
  h3:{
    // fontfamily: 'Qualion',
    fontStyle: 'normal',
    fontSize: 25,
    fontWeight: 600,
    lineHeight: 40,
    color: "#C15252",
  },
  h4: {
      // fontfamily: 'Qualion',
      fontStyle: 'normal',
      fontSize: 30,
      fontWeight: 700,
      lineHeight: 45,
      color: "#000",
  },
  card: {
    backgroundColor: '#ffff',
    borderRadius: 20,
  },
  image:{
    width: 120,
  },
  heading: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  headerRight: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 5,
  },
  textSecondary: {
    marginVertical: 20,
    textAlign: 'center',
    fontSize: 17,
    color: 'red'
  },
});
