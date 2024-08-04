import React from 'react';
import { useAuth } from '../../src/hooks/useAuth';
import { DefaultLayoutScreen } from './components/DefaultLayoutScreen';

export default function HomeScreen() {
    const { user } = useAuth();
    return (
        <DefaultLayoutScreen title="Home" >

        </DefaultLayoutScreen>
    );
}
