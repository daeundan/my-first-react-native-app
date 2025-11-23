import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
import Button from '../components/Button';
import NextButton from '../components/NextButton';

export default function Main({ navigation }: any) {

  return (
    <View style={styles.container}>
        <Text style={styles.title}>메인</Text>
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