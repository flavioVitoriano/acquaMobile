import React, { useEffect, useState } from 'react';
import { View, Text, FlatList,TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from "@react-navigation/native";

import api from '../../services/index';
import styles from './styles';

export default function Main() {
  const navigation= useNavigation();

    const [product, setProduct] = useState([1]);
    const [total, setTotal] = useState(0)
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)

    async function loadProducts() {

        if (loading) {
            return;
        }

        if (total > 0 && product.length === total) {
            return;
        }
        setLoading(true);

        const response = await api.get('product', {
            params: { page }
        });

        setProduct([...product]);
        setTotal(response.headers['x-total-count'])
        setPage(page + 1);
        setLoading(false);
    }

    useEffect(() => {
        loadProducts()
    }, []);

    return (
        <>

            <Text style={styles.productTitle}> Total de rotas: 25  nesse momento.</Text>

            <FlatList contentContainerStyle={styles.list}
                data={product}
                keyExtractor={product => String(1)}
                showsVerticalScrollIndicator={false}
                onEndReached={loadProducts}
                onEndReachedThreshold={0.2}
                renderItem={({ item: product }) => (

                    <View style={styles.productContainer}>
                       <Text style={styles.productTitle}>Rotas Atrasadas</Text>
                        <Text style={styles.productDescription}>25 nesse momento</Text>

                        <TouchableOpacity style={styles.productButton}
                         onPress={()=>{}}>
                            <Text style={styles.productButtonText}>Acessar</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </>
    );
}
