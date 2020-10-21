import React, { useState, useEffect } from 'react';
import  Icon  from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';

import api from '../../services/index';


import styles from './styles';

export default function ClientCreated() {
  const [client, setClient] = useState([]);
  const [total, setTotal] = useState(0);

  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  function navigateToDetail(client) {
    navigation.navigate('Inputs', { client });
  }

  async function loadclient() {
    if (loading) {
      return;
    }

    if (total > 0 && client.length === total) {
      return;
    }

    setLoading(true);

    const response = await api.get('/clients/', {
      params: { page }
    });

    setClient([...client, ...response.data]);
    setTotal(response.headers['x-total-count']);
    setPage(page + 1);
    setLoading(false);
  }

  useEffect(() => {
    loadclient();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      </View>

      <Text style={styles.description}>Escolha um de seus clientes e entre em contato.</Text>

      <FlatList
        data={client}
        style={styles.clientList}
        keyExtractor={client => String(client.id)}
        // showsVerticalScrollIndicator={false}
        onEndReached={loadclient}
        onEndReachedThreshold={0.2}
        renderItem={({ item: client }) => (
          <View style={styles.client}>
            <Text style={styles.clientProperty}>Nome:</Text>
            <Text style={styles.clientValue}>{client.full_name}</Text>

            <Text style={styles.clientProperty}>Cidade:</Text>
            <Text style={styles.clientValue}>{client.city}</Text>

            <Text style={styles.clientProperty}>telefone:</Text>
        <Text style={styles.clientValue}>{client.phone}</Text>


            <Text style={styles.clientProperty}>VALOR:</Text>
            <Text style={styles.clientValue}>
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }).format(client.preferred_price)}
            </Text>

            <TouchableOpacity
              style={styles.detailsButton}
              onPress={() => navigateToDetail(client)}
            >
              <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
              <Icon name="arrow-right" size={16} color="#E02041" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
