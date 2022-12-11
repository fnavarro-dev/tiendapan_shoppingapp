import React from 'react';
import { View, Text, Button } from 'react-native';
import { COLORS } from '../../constants/themes/colors';

import { styles } from './styles';

const Products = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Productos</Text>
            <Button
                title="Ir al Producto"
                color={COLORS.primary}
                onPress={() => navigation.navigate('Producto')} 
            />
        </View>
    );
};

export default Products;