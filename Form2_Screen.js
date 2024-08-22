import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm } from './FormContext';

const Form2Screen = () => {
  const navigation = useNavigation();
  const { updateFormData } = useForm();
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');

//Validates that all the fields are filled.
  const validate = () => {
    if (!address || !city || !state || !zip) {
      Alert.alert('Validation Error', 'All fields are required.');
      return false;
    }
    return true;
  };

//if all the fields are filled, it moves to the next screen
  const handleNext = () => {
    if (validate()) {
      updateFormData('addressDetails', { address, city, state, zip });
      navigation.navigate('Payment Details');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Address Details</Text>
      <TextInput
        style={styles.input}
        placeholder="Address"
        value={address}
        onChangeText={setAddress}
        placeholderTextColor="#B0BEC5" // Light grey for placeholder text
      />
      <TextInput
        style={styles.input}
        placeholder="City"
        value={city}
        onChangeText={setCity}
        placeholderTextColor="#B0BEC5" // Light grey for placeholder text
      />
      <TextInput
        style={styles.input}
        placeholder="State"
        value={state}
        onChangeText={setState}
        placeholderTextColor="#B0BEC5" // Light grey for placeholder text
      />
      <TextInput
        style={styles.input}
        placeholder="ZIP Code"
        value={zip}
        onChangeText={setZip}
        keyboardType="numeric"
        placeholderTextColor="#B0BEC5" // Light grey for placeholder text
      />
      <View style={styles.buttonContainer}>
        <Button title="Next" onPress={handleNext} color="white" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87CEEB', // Sky blue background
    padding: 20,
    justifyContent: 'center',
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: 'black', 
  },

  input: {
    borderBottomWidth: 1,
    borderBottomColor: 'black', 
    marginBottom: 20,
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  
  buttonContainer: {
    backgroundColor: 'black', 
    borderRadius: 5,
    overflow: 'hidden',
    marginTop: 20,
  },
});

export default Form2Screen;




