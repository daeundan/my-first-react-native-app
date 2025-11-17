import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Button from '../components/Button';

export default function HomeScreen({ navigation }: any) {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>내 안전 지키미</Text>
      <Image  source={require('../img/logo.png')}   style={{width: 200, height: 200}}></Image>
      <Text style={styles.subtitle}>HOMEDOT</Text>

      <Button
        title="시작하기"
        onPress={() => navigation.navigate('GuideOne')}
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
    color: '#fff',
    marginBottom: 40,
  },
  // counterContainer: {
  //   backgroundColor: '#fff',
  //   padding: 30,
  //   borderRadius: 20,
  //   marginBottom: 40,
  //   shadowColor: '#000',
  //   shadowOffset: { width: 0, height: 2 },
  //   shadowOpacity: 0.1,
  //   shadowRadius: 8,
  //   elevation: 5,
  // },
  counterText: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 20,
    color: '#01608d',
  },
});