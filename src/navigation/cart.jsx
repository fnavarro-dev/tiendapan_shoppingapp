import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { COLORS } from '../constants/themes/colors';
import { Cart } from '../screens';
import { isIOS } from '../utils';

const Stack = createNativeStackNavigator();

const CartNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Cart"
      screenOptions={{
        headerStyle: {
          backgroundColor: isIOS ? COLORS.backgroundLight : COLORS.backgroundDark,
        },
        headerTintColor: isIOS ? COLORS.text : COLORS.white,
        headerTitleStyle: {
          fontFamily: 'Lato-Bold',
        },
        presentation: 'card',
        headerBackTitle: '',
      }}>
      <Stack.Screen name="Carrito de compras" component={Cart} />
    </Stack.Navigator>
  );
};

export default CartNavigator;
