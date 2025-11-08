import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../components/Button';

export default function ProfileScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <View style={styles.profileCard}>
        <Text style={styles.emoji}>👤</Text>
        <Text style={styles.name}>임다은</Text>
        <Text style={styles.email}>frontend@example.com</Text>
        
        <View style={styles.infoContainer}>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>가입일</Text>
            <Text style={styles.infoValue}>2025.11.08</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>레벨</Text>
            <Text style={styles.infoValue}>초보자 🌱</Text>
          </View>
        </View>
      </View>

      <Button
        title="← 홈으로 돌아가기"
        onPress={() => navigation.goBack()}
        backgroundColor="#5856D6"
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
  profileCard: {
    backgroundColor: '#fff',
    padding: 40,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 40,
    width: '100%',
    maxWidth: 400,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  emoji: {
    fontSize: 80,
    marginBottom: 20,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
  },
  infoContainer: {
    flexDirection: 'row',
    gap: 20,
  },
  infoItem: {
    alignItems: 'center',
    backgroundColor: '#F2F2F7',
    padding: 15,
    borderRadius: 10,
    minWidth: 120,
  },
  infoLabel: {
    fontSize: 12,
    color: '#666',
    marginBottom: 5,
  },
  infoValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
});