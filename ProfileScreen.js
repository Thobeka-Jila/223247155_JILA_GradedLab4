import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useForm } from './FormContext';

const ProfileScreen = () => {
  const { formData } = useForm();
  const [theme, setTheme] = React.useState({
    textColor: 'black', 
    backgroundColor: '#87CEEB', 
    cardBackgroundColor: 'white', 
    buttonColor: '#87CEEB', 
    buttonTextColor: 'black' 
  });

  const handleThemeChange = (color) => {
    setTheme(prevTheme => ({ ...prevTheme, ...color }));
  };

  return (
    <ScrollView contentContainerStyle={[styles.container, { backgroundColor: theme.backgroundColor }]}>
      {/* User Details */}
      <View style={[styles.card, { backgroundColor: theme.cardBackgroundColor }]}>
        <Text style={[styles.cardTitle, { color: theme.textColor }]}>User Details</Text>
        <View style={styles.infoRow}>
          <Text style={[styles.label, { color: theme.textColor }]}>Name:</Text>
          <Text style={[styles.value, { color: theme.textColor }]}>{formData.userDetails.name || 'N/A'}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={[styles.label, { color: theme.textColor }]}>Email:</Text>
          <Text style={[styles.value, { color: theme.textColor }]}>{formData.userDetails.email || 'N/A'}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={[styles.label, { color: theme.textColor }]}>Phone:</Text>
          <Text style={[styles.value, { color: theme.textColor }]}>{formData.userDetails.phone || 'N/A'}</Text>
        </View>
      </View>

      {/* Address Details */}
      <View style={[styles.card, { backgroundColor: theme.cardBackgroundColor }]}>
        <Text style={[styles.cardTitle, { color: theme.textColor }]}>Address Details</Text>
        <View style={styles.infoRow}>
          <Text style={[styles.label, { color: theme.textColor }]}>Address:</Text>
          <Text style={[styles.value, { color: theme.textColor }]}>{formData.addressDetails.address || 'N/A'}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={[styles.label, { color: theme.textColor }]}>City:</Text>
          <Text style={[styles.value, { color: theme.textColor }]}>{formData.addressDetails.city || 'N/A'}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={[styles.label, { color: theme.textColor }]}>State:</Text>
          <Text style={[styles.value, { color: theme.textColor }]}>{formData.addressDetails.state || 'N/A'}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={[styles.label, { color: theme.textColor }]}>ZIP:</Text>
          <Text style={[styles.value, { color: theme.textColor }]}>{formData.addressDetails.zip || 'N/A'}</Text>
        </View>
      </View>

      {/* Payment Details */}
      <View style={[styles.card, { backgroundColor: theme.cardBackgroundColor }]}>
        <Text style={[styles.cardTitle, { color: theme.textColor }]}>Payment Details</Text>
        <View style={styles.infoRow}>
          <Text style={[styles.label, { color: theme.textColor }]}>Credit Card:</Text>
          <Text style={[styles.value, { color: theme.textColor }]}>{formData.paymentDetails.creditCard || 'N/A'}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={[styles.label, { color: theme.textColor }]}>Expiry Date:</Text>
          <Text style={[styles.value, { color: theme.textColor }]}>{formData.paymentDetails.expiryDate || 'N/A'}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={[styles.label, { color: theme.textColor }]}>CVV:</Text>
          <Text style={[styles.value, { color: theme.textColor }]}>{formData.paymentDetails.cvv || 'N/A'}</Text>
        </View>
      </View>

      {/* Theme Selector */}
      <View style={styles.themeSelector}>
        <TouchableOpacity onPress={() => handleThemeChange({ backgroundColor: 'white' })} style={[styles.button, { backgroundColor: theme.buttonColor }]}>
          <Text style={[styles.buttonText, { color: theme.buttonTextColor }]}>Change Background to White</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleThemeChange({ textColor: 'blue' })} style={[styles.button, { backgroundColor: theme.buttonColor }]}>
          <Text style={[styles.buttonText, { color: theme.buttonTextColor }]}>Change Text Color to Blue</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1, 
    padding: 20,
  },
  card: {
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textDecorationLine: 'underline',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    fontSize: 15,
    fontWeight: 'bold',
    width: '40%',
  },
  value: {
    fontSize: 16,
    width: '60%',
  },
  button: {
    padding: 10,
    borderRadius: 5,
    margin: 5,
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
  },
  themeSelector: {
    marginTop: 20,
    alignItems: 'center',
  },
});

export default ProfileScreen;










