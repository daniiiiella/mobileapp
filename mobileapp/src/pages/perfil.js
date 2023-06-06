import React from 'react';
import { View, Image, Text, FlatList, StyleSheet, ScrollView } from 'react-native';

export function Perfil() {
  const images = [];
  
  const renderItem = ({ item }) => (
    <Image
      style={{ width: 120, height: 120, margin: 5,}}
      source={{ uri: item.uri }}
    />
  );

  return (

   <ScrollView> 
    <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center' }}>

      <View style={{ alignItems: 'center', marginTop: 30 }}>
        <Image
          style={{ width: 200, height: 200, borderRadius: 150, overflow: 'hidden', borderWidth: 1, borderColor: '#615e5e' }}
          source={{ uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/c0004eaa1caaef1494a3a1466977a9c9' }}
        />
        <Text style={styles.user}>Franci_confecçoes</Text>

      </View>
      <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 10, textAlign: 'center' }}>Arte e Costura🧵</Text>
      <Text style={{ fontSize: 12, marginHorizontal: 20, textAlign: 'center', marginTop: 10 }}>🛍Abadás/ Costuras em Gerais/ Fantasias/ Vestidos e etc</Text>
      <Text style={{ fontSize: 12, marginHorizontal: 20, textAlign: 'center',marginTop: 5 }}>📲Contato via Whatsapp: (81) 98581-6087</Text>
      <Text style={{ fontSize: 12, marginHorizontal: 20, textAlign: 'center', marginTop: 5 }}></Text>

      <View style={styles.borda}>
      <Text style={styles.descricao}>Bem-vindo(a) à nossa confecção de roupas, onde a moda encontra expressão pessoal. Oferecemos peças únicas e exclusivas para aqueles que valorizam estilo, qualidade e autenticidade. Nossa equipe de designers cria com paixão, usando materiais de alta qualidade e técnicas refinadas de costura. Inspirados pela arte, cultura e histórias de vida, buscamos constantemente inovação. Nosso compromisso com a sustentabilidade é evidente em nossas práticas de produção. Valorizamos o relacionamento com nossos clientes e incentivamos seu feedback e ideias. Nossa missão é proporcionar roupas que transmitam confiança e autenticidade, permitindo que cada pessoa se sinta verdadeiramente única. Junte-se a nós nesta jornada de moda e descubra o poder de se expressar através das roupas!
      </Text>
      </View>

      <FlatList
        data={images}
        renderItem={renderItem}
        numColumns={3}
        keyExtractor={(item) => item.id}
        style={{ marginVertical: 20 }}
      />
    </View>
   </ScrollView> 
  );
}

const styles = StyleSheet.create({

user:{
  fontSize: 24, 
  fontWeight: 'bold', 
  marginTop: 5,
  textShadowColor: 'rgba(0, 0, .1, 0.4)',
  textShadowOffset: { width: 1, height: 2 },
  textShadowRadius: 4,
},  
descricao:{
  fontSize: 18, 
  marginHorizontal: 20, 
  textAlign: 'center', 
  marginTop: 10,
  margin: 10,
  textShadowColor: 'rgba(0, 0, 0, 0.5)',
    
},
borda:{
 borderColor: '#615e5e',
 borderWidth: 1,
 borderRadius: 20,
 marginVertical: 10,
 backgroundColor: '#f3d8d5',
 marginLeft: 5,
 marginRight: 5,
},
});