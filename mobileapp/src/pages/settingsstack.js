import { createStackNavigator } from '@react-navigation/stack';
import {Settings} from './settings';
import {ContaScreen} from './contascreen';
import {SenhaScreen} from './senhascreen';
import {NotificacoesScreen} from './notificacoesscreen';
import {AjudaScreen} from './ajudascreen';

const Stack = createStackNavigator();

export function SettingsStack() {
  return (

      <Stack.Navigator>
        <Stack.Screen name="Área do Usuário" component={Settings} />
        <Stack.Screen name="Conta" component={ContaScreen} />
        <Stack.Screen name="Senha" component={SenhaScreen} />
        <Stack.Screen name="Notificações" component={NotificacoesScreen} />
        <Stack.Screen name="Ajuda" component={AjudaScreen} />
      </Stack.Navigator>
    
  );
}
