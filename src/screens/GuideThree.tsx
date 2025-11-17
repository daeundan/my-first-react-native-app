import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import NextButton from '../components/NextButton';

export default function GuideThree({ navigation }: any) {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Image
        source={require('../img/logo-icon.png')}
        style={styles.logo}
      />
      <View style={styles.content}>
        <Image
          source={require('../img/guideimg03.png')}
          style={styles.guideImage}
          resizeMode="contain"
        />
        <Text style={styles.subtitle}>위치를 기반으로{'\n'}주변 안전시설을{'\n'}안내합니다</Text>
        <Text style={styles.counterText}>
          정확한 기능을 위해{'\n'}위치 설정 동의가 필요합니다.
        </Text>
        <NextButton
          title="다음"
          onPress={() => navigation.navigate('GuideThree')}
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
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  guideImage: {
    width: 300,
    height: 200,
    marginBottom: 42,
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
