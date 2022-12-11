import React from 'react';
import { View, Text, Button } from 'react-native';
import { COLORS } from '../../constants/themes/colors';

import { styles } from './styles';

const Categories = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Categorías Centro</Text>
            <Button
                title="Ir al Productos"
                color={COLORS.primary}
                onPress={() => navigation.navigate('Productos')} //aquí está ocupando el navigation
            />
        </View>
    );
};

export default Categories;