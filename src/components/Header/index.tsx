import React from 'react';
import { Text, View } from 'react-native';

import { Container } from './styles';

const Header: React.FC = () => {
    return (
        <Container>
            <View>
                <Text>TestHeader</Text>
            </View>
        </Container>
    );
};

export default Header;