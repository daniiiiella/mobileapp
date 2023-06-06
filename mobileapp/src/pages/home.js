import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Button,
  TextInput,
  ScrollView,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import AdicionarItem from './adicionaritem';
import ItensListados from './itenslistados';

const Stack = createStackNavigator();

export function Home({ navigation }) {
  const [name, setName] = useState('');

  const [logoUrl, setLogoUrl] = useState(
    'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/c0004eaa1caaef1494a3a1466977a9c9'
  );

  const data = [
    {
      id: '1',
    },
  ];

  const [lista, setLista] = useState([
    { texto: 'Seu pedido', key: 1 },
    { texto: 'vestido', key: 2 },
  ]);

  const apertarItem = (key) => {
    setLista((prevLista) => {
      return prevLista.filter((texto) => texto.key != key);
    });
  };

  const submeterInformacao = (texto) => {
    setLista((prevLista) => {
      return [{ texto: texto, key: Math.random().toString() }, ...prevLista];
    });
  };

  const renderItem = ({ item }) => (
    <View style={styles.post}>
      <Text style={styles.title}>Faça seu pedido</Text>

      <View style={styles.buttonContainer}>
        <Button
          alignItems="center"
          color="#cf8178"
          title="Mais informações"
          onPress={() => navigation.navigate('Explorar')}
        />
      </View>

      <View style={styles.conteudo}>
        <AdicionarItem funcao={submeterInformacao} />

        <View style={styles.estiloLista}>
          <FlatList
            data={lista}
            renderItem={({ item }) => (
              <ItensListados props={item} funcao={apertarItem} />
            )}
          />
        </View>
      </View>
    </View>
  );

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={{ uri: logoUrl }}
            resizeMode="contain"
          />
        </View>

        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  conteudo: {
    alignItems: 'center',
  },
  estiloLista: {
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#ebbeb9',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  logo: {
    width: 200,
    height: 200,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    marginBottom: 20,
    textShadowColor: 'rgba(0, 0, .1, 0.4)',
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 4,
  },
  post: {
    marginBottom: 20,
    padding: 10,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
});