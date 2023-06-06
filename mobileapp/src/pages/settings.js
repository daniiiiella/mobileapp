import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export function Settings() {
  const navigation = useNavigation();
  const [showHelpOptions, setShowHelpOptions] = useState(false);

  const handleHelpPress = () => {
    setShowHelpOptions(!showHelpOptions);
  };

  return (
    <View style={styles.container}>
      <View style={styles.settingsList}>
        <TouchableOpacity style={styles.settingItem} onPress={() => navigation.navigate('Conta')}>
          <Ionicons name="person-circle-outline" size={24} color="black" />
          <Text style={styles.settingText}>Conta</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem} onPress={() => navigation.navigate('Senha')}>
          <Ionicons name="key-outline" size={24} color="black" />
          <Text style={styles.settingText}>Senha</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem} onPress={() => navigation.navigate('Notificações')}>
          <Ionicons name="notifications-outline" size={24} color="black" />
          <Text style={styles.settingText}>Notificações</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem} onPress={handleHelpPress}>
          <Ionicons name="help-circle-outline" size={24} color="black" />
          <Text style={styles.settingText}>Ajuda</Text>
        </TouchableOpacity>

        {showHelpOptions && (
          <View>
            <TouchableOpacity style={styles.helpItem} onPress={() => console.log('Cancelar pedido')}>
              <Text style={styles.helpText}>Cencelar pedido</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.helpItem} onPress={() => console.log('Alterar pedido')}>
              <Text style={styles.helpText}>Alterar pedido</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.helpItem} onPress={() => console.log('Entrar em contato')}>
              <Text style={styles.helpText}>Entrar em contato</Text>
            </TouchableOpacity>
          </View>
        )}

        <TouchableOpacity style={styles.settingItem} onPress={() => navigation.navigate('Sair')}>
          <Ionicons name="log-out-outline" size={24} color="black" />
          <Text style={styles.settingText}>Sair</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  settingsList: {
    flex: 1,
    paddingVertical: 20,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ccc',
  },
  settingText: {
    marginLeft: 15,
    fontSize: 16,
  },
  helpItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ccc',
    marginLeft: 30, // Ajuste a margem para criar o recuo das opções de ajuda
  },
  helpText: {
    fontSize: 16,
  },
});
