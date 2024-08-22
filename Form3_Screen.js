import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm } from './FormContext';

const Form3Screen = () => {
  const navigation = useNavigation();
  const { updateFormData, completeForm } = useForm();
  const [creditCard, setCreditCard] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

//validates the inputed data
  const validate = () => {
    const creditCardRegex = /^\d{16}$/;
    const expiryDateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/; // MM/YY format
    const cvvRegex = /^\d{3}$/;

    if (!creditCardRegex.test(creditCard)) {
      Alert.alert('Validation Error', 'Credit Card number must be exactly 16 digits.');
      return false;
    }
    if (!expiryDateRegex.test(expiryDate)) {
      Alert.alert('Validation Error', 'Expiry Date must be in MM/YY format.');
      return false;
    }
    if (!cvvRegex.test(cvv)) {
      Alert.alert('Validation Error', 'CVV must be exactly 3 digits.');
      return false;
    }
    return true;
  };

//if all the fields are filled, it moves to the next screen
  const handleSubmit = () => {
    if (validate()) {
      updateFormData('paymentDetails', { creditCard, expiryDate, cvv });
      completeForm();
      navigation.navigate('MenuScreen');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment Details</Text>
      <TextInput
        style={styles.input}
        placeholder="Credit Card Number"
        value={creditCard}
        onChangeText={text => {
          // Restrict credit card number to 16 digits only
          if (/^\d{0,16}$/.test(text)) {
            setCreditCard(text);
          }
        }}
        keyboardType="numeric"
        placeholderTextColor="#B0BEC5" // Light grey for placeholder text
      />
      <TextInput
        style={styles.input}
        placeholder="Expiry Date (MM/YY)"
        value={expiryDate}
        onChangeText={text => {
          // Restrict expiry date to MM/YY format
          const formattedText = text
            .replace(/[^0-9/]/g, '') // Remove non-numeric and non-slash characters
            .replace(/(.{2})\/(.{2}).*/, '$1/$2'); // Format MM/YY
          setExpiryDate(formattedText);
        }}
        placeholderTextColor="#B0BEC5" // Light grey for placeholder text
      />
      <TextInput
        style={styles.input}
        placeholder="CVV"
        value={cvv}
        onChangeText={text => {
          // Restrict CVV to 3 digits only
          if (/^\d{0,3}$/.test(text)) {
            setCvv(text);
          }
        }}
        keyboardType="numeric"
        placeholderTextColor="#B0BEC5" // Light grey for placeholder text
      />
      <View style={styles.buttonContainer}>
        <Button title="Submit" onPress={handleSubmit} color="#FFFFFF" />
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

export default Form3Screen;










