import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function CounterApp() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter App</Text>
      <Text style={styles.counter}>{count}</Text>
      <Button title="Increment" onPress={() => setCount(count + 1)} />
      <Button title="Decrement" onPress={() => setCount(count - 1)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 400,
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
  
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 24,
     
    
    

  },
  counter: {
    height: 100,
    fontSize: 50,
    marginBottom: 80,
    
    
    

  
  },
  Button:{
    marginBottom: 20,
  },
});