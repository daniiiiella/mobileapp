import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Modal } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons';


export function NotificacoesScreen() {
  const [notificacoes, setNotificacoes] = useState([
    {
      id: 1,
      texto: 'Muito obrigada. Seu pedido foi recebido!',
    },
    {
      id: 2,
      texto: 'Seu pedido está sendo produzido!',
    },
    {
      id: 3,
      texto: 'Seu pedido foi enviado!',
    },
    {
      id: 4,
      texto: 'Seu pedido foi entregue, nós agradecemos a compra!',
    },
  ]);
  const [modalVisible, setModalVisible] = useState(false);
  const [deletedNotification, setDeletedNotification] = useState(null);

  const removerNotificacao = (id) => {
    const notification = notificacoes.find((item) => item.id === id);
    setDeletedNotification(notification);
    setNotificacoes((prevNotificacoes) =>
      prevNotificacoes.filter((notificacao) => notificacao.id !== id)
    );
    setModalVisible(true);
  };

  const renderNotificacao = ({ item }) => (
    
    
    <View style={styles.notificationContainer}>
      <Text style={styles.texto1}>{item.texto}</Text>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => removerNotificacao(item.id)}>
          <Ionicons style={styles.icon} name="trash" size={20} />
        </TouchableOpacity>
        <AntDesign style={styles.icon} name="heart" size={20} color="black" />
      </View>
    </View>
  );

  return (

    <View style={styles.container0}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>
              Notificação excluída com sucesso!
            </Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.modalButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <FlatList
        data={notificacoes}
        renderItem={renderNotificacao}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>

  );
}

const styles = StyleSheet.create({
  container0: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#f5dfdc',
  },
  notificationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#ebbeb9',
    borderRadius: 15,
    top: 10,
    margin: 10,
    height: 60,
  },
  iconContainer: {
    flexDirection: 'row',
    marginLeft: 'auto',
    marginRight: 10,
  },
  icon: {
    marginRight: 5,
    color: '#765f5d',
  },
  texto1: {
    fontSize: 16,
    fontWeight: '500',
    flex: 1,
    paddingLeft: 5,
    textAlign: 'center',
    textAlignVertical: 'bottom',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  modalButton: {
    backgroundColor: '#ebbeb9',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'center',
  },
  modalButtonText: {
    color: '#765f5d',
    fontSize: 16,
    fontWeight: 'bold',
  },
});