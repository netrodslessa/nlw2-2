import React from 'react';
import { View, Image, Text } from 'react-native';

import styles from './index'

function TeacherItem() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{ uri: 'https://avatars3.githubusercontent.com/u/62668777?s=400&u=91ef0dc11a68b62d3f48212dcc857cb0d3f786a1&v=4' }}
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>Rodrigo Lessa</Text>
          <Text style={styles.subject}>Quimica</Text>
        </View>
      </View>

      <Text style={styles.bio}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        {'\n'}{'\n'}
        Phasellus finibus, dui ac sollicitudin dictum, 
        risus dolor sollicitudin purus, 
        id convallis neque justo eu sapien.
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora {'   '}
          <Text style={styles.priceValue}>R$ 20,00</Text>
        </Text>

        {/* <View style={styles.} */}
          
      </View>
    </View>
  )
}

export default TeacherItem;