import React, { useState } from "react"
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function AdicionarItem({ funcao }) {
  const [texto, setTexto] = useState('');

  const pegarMudanca = (val) => {
    setTexto(val);
  }

  return (
    <View >
    
      <TextInput
        style={styles.input}
        placeholder="seu pedido..."
        onChangeText={pegarMudanca}
      />

      <Button
        onPress={() => funcao(texto)}
        title="Enviar pedido"
        color="#e6938a"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddigndHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});
