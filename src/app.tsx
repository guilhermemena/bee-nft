import { registerRootComponent } from 'expo'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

function App() {
  return (
    <View style={styles.container}>
      <LinearGradient
        style={{
          width: 260,
          height: 56,
          borderRadius: 20,
          alignItems: 'center',
          justifyContent: 'center'
        }}
        colors={['#4138E5', '#8556EA', '#8B72EE', '#8B95F2', '#57E4FF']}
        start={{ x: 0.01, y: 1 }}
        end={{ x: 1.04, y: 0.3 }}
        locations={[0, 0.308069, 0.506479, 0.696479, 1]}
      >
        <Text style={{ color: 'white' }}> Apply </Text>
      </LinearGradient>
      <StatusBar style="auto" />
    </View>
  )
}

export default registerRootComponent(App)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
