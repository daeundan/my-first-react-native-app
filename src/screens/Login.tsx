import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
import Button from '../components/Button';
import NextButton from '../components/NextButton';

export default function Login({ navigation }: any) {
  const [count, setCount] = useState(0);
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
    const handleLogin = () => {
    console.log('아이디:', id);
    console.log('비밀번호:', pw);


    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
        <Text style={styles.title}>내 안전 지키미</Text>
        <Image  source={require('../img/logo.png')}   style={{width: 200, height: 200}}></Image>
        <Text style={styles.subtitle}>HOMEDOT</Text>
        <TextInput
        style={styles.input}
        placeholder="아이디"
        placeholderTextColor="#ccc"
        />
      {/* 비밀번호 입력 */}
        <TextInput
        style={styles.input}
        placeholder="비밀번호"
        placeholderTextColor="#ddd"
        secureTextEntry={true}
        value={pw}
        onChangeText={setPw}
        />
     {/* <Button title="로그인" mode="secondary" onPress={handleLogin} /> */}
     <Button title="로그인" mode="secondary" onPress={() => navigation.navigate('Main')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#556DEF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 40,
  },
  counterText: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 20,
    color: '#01608d',
  },
    input: {
    width: '68%',
    height: 48,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
  },
});