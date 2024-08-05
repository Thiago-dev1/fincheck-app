import { useRouter } from 'expo-router';
import React from 'react';
import { Button } from '../../src/components/Button';
import { DefaultLayoutScreen } from '../components/DefaultLayoutScreen';


export default function ProfileScreen() {
    const router = useRouter();

    const goToEditProfile = () => {
        router.push('/edit');
    }

    return (
        <DefaultLayoutScreen title="Profile">
            <Button onPress={goToEditProfile} label={'Edit Profile'} />
        </DefaultLayoutScreen>
    );
}