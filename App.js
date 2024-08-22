import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';

import MenuScreen from './MenuScreen';
import CartScreen from './CartScreen';
import ProfileScreen from './ProfileScreen';
import Form1_Screen from './Form1_Screen';
import Form2_Screen from './Form2_Screen';
import Form3_Screen from './Form3_Screen';
import { FormProvider, useForm } from './FormContext';
import { ThemeProvider } from './ThemeContext';
import { CartProvider } from './CartContext';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function FormStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="User Details" component={Form1_Screen} />
      <Stack.Screen name="Address Details" component={Form2_Screen} />
      <Stack.Screen name="Payment Details" component={Form3_Screen} />
    </Stack.Navigator>
  );
}

function AppNavigator() {
  const { isFormCompleted } = useForm();

  return isFormCompleted ? (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Menu':
              iconName = 'menu';
              return <Ionicons name={iconName} size={size} color={color} />;
            case 'Cart':
              iconName = 'cart';
              return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
            case 'Profile':
              iconName = 'user';
              return <FontAwesome name={iconName} size={size} color={color} />;
            default:
              return null;
          }
        },
      })}
    >
      <Tab.Screen name="Menu" component={MenuScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  ) : (
    <Stack.Navigator>
      <Stack.Screen name="FormStack" component={FormStack} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <FormProvider>
      <ThemeProvider>
        <CartProvider>
          <NavigationContainer>
            <AppNavigator />
          </NavigationContainer>
        </CartProvider>
      </ThemeProvider>
    </FormProvider>
  );
}


