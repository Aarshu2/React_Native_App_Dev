import { StyleSheet, View, useColorScheme} from 'react-native'
import { Colors } from '../constants/Colors'

const ThemedView = ({ style, ...props }) => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light

  return (
    <View style={[{backgroundColor: theme.uibackground}, styles.card, style]}
    {...props}
    />   
  )
}

export default ThemedView

const styles = StyleSheet.create({
  card: {
    borderRadius: 5,
    padding: 20
  }
})