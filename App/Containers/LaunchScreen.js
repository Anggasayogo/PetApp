import React, { useCallback, useEffect} from 'react'
import { connect } from 'react-redux'
import { StatusBar, Image, View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Images from '../Images'
import i18n from '../i18n'

// Components
import Button from '../Components/Button'

// Styles
import styles from './Styles/LaunchScreenStyle'
import { apply } from '../Themes/OsmiProvider'

const LaunchScreen = props => {
  const _navigateExplore = useCallback(() => props.navigation.navigate("MainApp"), [])

  useEffect(()=>{
    setTimeout(()=>{
      _navigateExplore()
    },3000)
  },[])

  return (
    <SafeAreaView style={styles.container}>
      <Image source={Images.appLogo} style={styles.appLogo} />
      <Text style={styles.title}>{i18n.t('app')}</Text>
    </SafeAreaView>
  )
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(LaunchScreen)
