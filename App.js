import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';
import backFun from './Components/backFun';

export default function App() {
  //https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=512&date=31-03-2021
  var st1 = 'https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=';
  var st2 = '&date=';
  var today = new Date();
  var month = today.getMonth() + 1;
  var year = today.getFullYear();
  var date = today.getDate();
  var st3 = "";
  if (month < 10) {
    month = '0' + month;
  }
  st3 = st3 + date + '-' + month + '-' + year;
  console.log(st3);
  st2 = st2 + st3;



  const stateD = require('./assets/states.json');
  const [pickerValue, setPickerValue] = useState(0);
  const [pickerValueD, setPickerValueD] = useState(0);
  const [pickerValueP, setPickerValueP] = useState("Free");
  const [pickerValueV, setPickerValueV] = useState("Any");
  const [pickerValueS, setPickerValueS] = useState("available_capacity_dose1");
  var rows = [];
  var rows2 = [];
  for (let i = 0; i < stateD.states[pickerValue].districts.length; i++) {
      // note: we are adding a key prop here to allow react to uniquely identify each
      // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
      rows.push(<Picker.Item label={stateD.states[pickerValue].districts[i].district_name} value = {stateD.states[pickerValue].districts[i].district_id} />);
  }
  for (let i = 0 ; i < stateD.states.length; i++) {
    rows2.push(<Picker.Item label={stateD.states[i].state_name} value ={i} />)
  }
  console.log(pickerValueD);
  return (
      <View style={styles.container}>
      <Text style={{color: 'white', paddingTop: 20}}>Enter Your State: </Text>
      <View style={{backgroundColor: 'gray'}}>
        <Picker 
          style={styles.picker} 
          selectedValue={pickerValue} 
          onValueChange = { (itemValue) => setPickerValue(itemValue)}>
              {rows2}
        </Picker>
        </View>
        <Text style={{color: 'white', paddingTop: 20}}>Select your district: </Text>
        <View style={{backgroundColor: 'gray'}}>
        <Picker
          style={styles.picker} 
          selectedValue={pickerValueD} 
          onValueChange = { (itemValue) => setPickerValueD(itemValue)}>
            {rows}
        </Picker>
        </View>
        <Text style={{color: 'white', paddingTop: 20}}>Paid vaccine or unpaid vaccine: </Text>
        <View style={{backgroundColor: 'gray'}}>
        <Picker
          style={styles.picker}
          selectedValue={pickerValueP}
          onValueChange = { (itemValue) => setPickerValueP(itemValue)}>
            <Picker.Item label="Paid" value="Paid" />
            <Picker.Item label="Free" value="Free" />
            <Picker.Item label="Both" value="Both" />
        </Picker>
        </View>
        <Text style={{color: 'white', paddingTop: 20}}>Which vaccine</Text>
        <View style={{backgroundColor: 'gray', marginBottom: 20}}>
        <Picker
          style={styles.picker}
          selectedValue={pickerValueV}
          onValueChange = { (itemValue) => setPickerValueV(itemValue)}>
            <Picker.Item label="COVISHIELD" value="COVISHIELD" />
            <Picker.Item label="COVAXIN" value="COVAXIN" />
            <Picker.Item label="Any" value="Any" />
        </Picker>
        </View>
        <Text style={{color: 'white', paddingTop: 20}}>Which Dose</Text>
        <View style={{backgroundColor: 'gray', marginBottom: 20}}>
        <Picker
          style={styles.picker}
          selectedValue={pickerValueS}
          onValueChange = { (itemValue) => setPickerValueS(itemValue)}>
            <Picker.Item label="First Dose" value="available_capacity_dose1" />
            <Picker.Item label="Second Dose" value="available_capacity_dose2" />
        </Picker>
        </View>
        <Button //st1,st2,pickerValueD,pickerValueP,pickerValueV
          onPress={() => {
            let url = st1 + pickerValueD + st2;
            console.log(url);
            backFun(url,pickerValueP,pickerValueV, pickerValueS);
          }}
          title="Start Search for Slots"
          color="#841584"
          accessibilityLabel="Start the process of continuosly fetching from the cowin API and finding free slots"
        />
      </View>
  )
}

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    picker: {
        height: 45,
        width: 300,
        color: 'white',
        borderWidth: 1,
        paddingBottom: 10
    }
})
