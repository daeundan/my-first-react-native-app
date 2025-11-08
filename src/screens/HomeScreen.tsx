import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../components/Button';

export default function HomeScreen({ navigation }: any) {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🏠 홈 화면</Text>
      <Text style={styles.subtitle}>내 첫 React Native 앱</Text>

      {/* <View style={styles.counterContainer}>
        <Text style={styles.counterText}>카운터: {count}</Text>
        <Button 
          title="+ 증가" 
          onPress={() => setCount(count + 1)}
          backgroundColor="#34C759"
        />
        <Button 
          title="- 감소" 
          onPress={() => setCount(count - 1)}
          backgroundColor="#FF3B30"
        />
        <Button 
          title="리셋" 
          onPress={() => setCount(0)}
          backgroundColor="#8E8E93"
        />
      </View> */}

      <Button
        title="프로필로 이동 →"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F7',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 40,
  },
  counterContainer: {
    backgroundColor: '#fff',
    padding: 30,
    borderRadius: 20,
    marginBottom: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  counterText: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 20,
    color: '#007AFF',
  },
});