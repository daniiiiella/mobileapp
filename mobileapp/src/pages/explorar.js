import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Stack = createStackNavigator();

export function Explorar(){
  return (

   <ScrollView >
    <View style={styles.container}>

      <Text style={styles.informacoes}>
       Informações
        {'\n'}
        {'\n'}
       
      </Text>

      <Text style={styles.medida}>
        Como tirar sua medida para fazer seu pedido:
        {'\n'}
       
      </Text>

      <Text style={styles.textoestilo}>                             
  
        - Busto: Passe a fita métrica no centro dos seios.
        {'\n'}
        {'\n'}
        - Tórax: medir onde está a dobra abaixo das axilas.
        {'\n'}
        {'\n'}
        - Cintura: as mulheres devem medir um dedo acima do umbigo e os homens um dedo abaixo do umbigo.
        {'\n'}
        {'\n'}
        - Quadril: tanto as mulheres como os homens possuem um osso que limita a região do quadril, é só procurá-lo e medir por ele.
        {'\n'}
        {'\n'}
        - Abdômen: se localiza entre a região do umbigo e a dos ossos do quadril. É só organizar os pontos da fita entre o meio.
        {'\n'}
        {'\n'}
        - Bumbum: coloque a fita na parte mais volumosa do bumbum.
        {'\n'}
        {'\n'}
        - Pernas: deve ser medido do ossinho do quadril até o calcanhar.
        {'\n'}
        {'\n'}
        - Braços: medir o comprimento que vai do ombro até o dorso da mão.
        
        </Text>   
        
    </View>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
container:{
  flex: 1, 
  alignItems: 'center', 
  justifyContent: 'center', 
  backgroundColor: '#EBBEB9',
  borderRadius: 15,
  margin: 5.5,
},
informacoes:{
  textAlign:'center',
  fontSize: 44,
  fontWeight:'bold',
  color:'#fcf7f5',
  backgroundColor:'LightCoral',
  width: 372.5,
  height: 70,
  borderRadius: 15,
  textShadowColor: 'rgba(0, 0, .1, 0.4)',
  textShadowOffset: { width: 1, height: 2 },
  textShadowRadius: 4,
},
medida:{
  top: 10,
  fontSize: 24,
  margin: 15,
  textAlign: 'center',
  alignItems: 'center',
  fontWeight: '600',
  color:'white',
  textShadowColor: 'rgba(0, 0, .1, 0.4)',
  textShadowOffset: { width: 1, height: 2 },
  textShadowRadius: 4,
},
textoestilo:{
 top: -20,
 textAlign:'justify',
 fontSize: 18, 
 fontWeight: '400',
 color:'white',
 margin: 15,
 marginBottom: 10,
 textShadowColor: 'rgba(0, 0, .1, 0.4)',
 textShadowOffset: { width: 1, height: 2 },
 textShadowRadius: 4,
},
});