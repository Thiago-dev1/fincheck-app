import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { TextComponent } from '../../src/components/Text';
import { useAuth } from '../../src/hooks/useAuth';
import { DefaultLayoutScreen } from './components/DefaultLayoutScreen';

export interface IBankAccount {
    id: string;
    name: string;
    initialBalance: number;
    color?: string;
    type: string;
}


const bankAccounts: IBankAccount[] = [
    {
        id: '1',
        name: 'Conta corrente',
        initialBalance: 1000,
        type: 'checking_account',
    },
    {
        id: '2',
        name: 'Conta poupança',
        initialBalance: 500,
        type: 'savings_account',
    },
    {
        id: '3',
        name: 'Carteira',
        initialBalance: 200,
        type: 'wallet',
    },
    {
        id: '4',
        name: 'Investimentos',
        initialBalance: 2000,
        type: 'investments',
    },
    {
        id: '5',
        name: 'Cartão de crédito',
        initialBalance: -500,
        type: 'credit_card',
    },
    {
        id: '6',
        name: 'Empréstimo',
        initialBalance: 1000,
        type: 'loan',
    },
    {
        id: '7',
        name: 'Outros',
        initialBalance: 0,
        type: 'others',
    },
];

export default function HomeScreen() {
    const { user } = useAuth();
    return (
        <DefaultLayoutScreen title="" >
            <View style={styles.container}>
                <TextComponent>Olá, {user.email}</TextComponent>

                <View style={styles.containerBalance}>
                    <TextComponent style={styles.labelBalance}>Saldo</TextComponent>
                    <TextComponent style={styles.balance}>R$ 0,00</TextComponent>
                </View>

                <View style={styles.containerListAccounts}>
                    <TextComponent>Lista de contas</TextComponent>

                    <View style={{ paddingBottom: 10 }}>
                        <FlatList
                            data={bankAccounts}
                            keyExtractor={item => item.id}
                            horizontal={true}

                            ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
                            renderItem={({ item }) => (
                                <View style={styles.containerAccount}>
                                    <TextComponent>{item.name}</TextComponent>
                                    <TextComponent>{item.initialBalance}</TextComponent>
                                </View>
                            )}
                        />
                    </View>
                </View>
            </View>

        </DefaultLayoutScreen>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    containerBalance: {
        width: '100%',
        flexDirection: 'column',
        gap: 10,
    },

    labelBalance: {
        fontSize: 18,

    },

    balance: {
        fontSize: 24,
        fontWeight: '700',
    },

    containerListAccounts: {
        flex: 1,
        justifyContent: 'flex-end'
    },

    containerAccount: {
        flexDirection: 'column',
        gap: 10,
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ccc',
    }
})
