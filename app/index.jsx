import { StyleSheet, Text, View } from 'react-native'
import img from '../assets/img/Charles.jpg'
import React from 'react'

const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={img}/>

      <Text style={styles.title}>Home</Text>
      <Text>Home</Text>

      <View style={styles.card} >
        <Text>Hello, card</Text>
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18
  },
  card: {
    backgroundColor: '#eee',
    padding: 20,
    borderRadius: 5,
    boxShadow: '4px 4px rgba(0,0,0,0.1)' 
  }
})