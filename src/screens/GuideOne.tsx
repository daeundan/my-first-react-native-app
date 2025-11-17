import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import NextButton from '../components/NextButton';

export default function GuideOne({ navigation }: any) {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Image
        source={require('../img/logo-icon.png')}
        style={styles.logo}
      />
      <View style={styles.content}>
        <Image
          source={require('../img/guideimg01.png')}
          style={styles.guideImage}
          resizeMode="contain"
        />
        <Text style={styles.subtitle}>위험한 순간,{'\n'}당신의 안전을{'\n'}지키는 앱</Text>
        <Text style={styles.counterText}>
          귀가길 자취방 긴박한 상황에서{'\n'}필요한 기능을 이용해 보세요!
        </Text>
        <NextButton
          title="다음"
          onPress={() => navigation.navigate('Profile')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  logo: {
    width: 120,
    alignSelf: 'center',
    marginBottom: 20,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  guideImage: {
    width: 200,
    height: 200,
    marginBottom: 22,
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
    color: '#161616',
    marginBottom: 40,
    textAlign: 'center',
  },
  counterText: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 20,
    color: '#9B9B9B',
  },
});
