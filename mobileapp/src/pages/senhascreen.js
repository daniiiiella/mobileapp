import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

export function SenhaScreen() {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPasswordReset, setIsPasswordReset] = useState(false);

  const handleResetPassword = () => {
    setIsPasswordReset(true);
  };

  const [logoUrl, setLogoUrl] = useState(
    'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/c0004eaa1caaef1494a3a1466977a9c9'
  );

  return (
    <View style={styles.container}>

      <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={{ uri: logoUrl }}
            resizeMode="contain"
          />
        </View>
        
      <Text style={styles.title}>Redefinição de senha</Text>
      {isPasswordReset && <Text style={styles.successMessage}>Senha redefinida com sucesso!</Text>}
      <TextInput
        style={styles.input}
        placeholder="Digite seu e-mail"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite a nova senha"
        secureTextEntry
        value={newPassword}
        onChangeText={setNewPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirme a nova senha"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      <Button 
      style={styles.button}
      title="Redefinir Senha" 
      onPress={handleResetPassword} 
      color="#e6938a"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor:'#ebbeb9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color:'white',
    textShadowColor: 'rgba(0, 0, .1, 0.4)',
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 4,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: 'white',
    marginBottom: 12,
    paddingLeft: 8,
    borderRadius: 5,
    color:'#a16761',
    textShadowColor: 'white',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  successMessage: {
    color: 'green',
    fontSize: 16,
    marginBottom: 12,
  },
  button:{
   color:'white',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  logo: {
    width: 200,
    height: 200,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',

  },
});
