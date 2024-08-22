import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm } from './FormContext';

const Form1Screen = () => {
  const navigation = useNavigation();
  const { updateFormData } = useForm();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

//Validates that all the fields are filled.
  const validate = () => {
    if (!name || !email || !phone) {
      Alert.alert('Validation Error', 'All fields are required.');
      return false;
    }
    
    // Validate email format
    if (!email.includes('@gmail.com')) {
      Alert.alert('Validation Error', 'Incorrect email format. Please use a @gmail.com address.');
      return false;
    }

    // Validate phone number length
    if (phone.length !== 10 || isNaN(phone)) {
      Alert.alert('Validation Error', 'Phone number must be 10 digits.');
      return false;
    }

    return true;
  };

//if all the fields are filled, it moves to the next screen
  const handleNext = () => {
    if (validate()) {
      updateFormData('userDetails', { name, email, phone });
      navigation.navigate('Address Details');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Food Delivery App</Text>

      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
        placeholderTextColor="#B0BEC5" // Light grey for placeholder text
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        placeholderTextColor="#B0BEC5" // Light grey for placeholder text
      />
      <TextInput
        style={styles.input}
        placeholder="Phone"
        value={phone}
        onChangeText={text => {
          // Restrict phone number to digits and maximum length of 10
          if (/^\d{0,10}$/.test(text)) {
            setPhone(text);
          }
        }}
        keyboardType="phone-pad"
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
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 50, 
    textAlign: 'center',
    color: 'black', 
    shadowColor: 'black', 
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
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
  },
});

export default Form1Screen;








