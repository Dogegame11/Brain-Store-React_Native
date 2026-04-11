import React, { Component } from 'react'
import { View, Image,} from 'react-native'
import { styles } from '../screens/Account/AccountStyle'

export class Header extends Component {
  render() {
    return (
            <View style={styles.header}>
              <Image 
                source={require('../assets/logo.png')} 
                style={{ width: 120, height: 40 }} 
                resizeMode="contain" 
              />
            </View>
    )
  }
}

export default Header
