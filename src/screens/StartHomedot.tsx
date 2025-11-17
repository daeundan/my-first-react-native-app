import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Button from '../components/Button';

export default function StartHomedot({ navigation }: any) {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>그럼 이제,{'\n'}당신의 안전을{'\n'}스스로 지켜볼까요?</Text>
      <Image  source={require('../img/logo.png')}   style={{width: 200, height: 200}}></Image>
      <Text style={styles.subtitle}>HOMEDOT</Text>

      <Button
        title="로그인 하기"
        onPress={() => navigation.navigate('StartHomedot')}
      />
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
    color: '#ffffff',
    marginBottom: 40,
    textAlign: 'center',
  },
  counterText: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 20,
    color: '#01608d',
  },
});