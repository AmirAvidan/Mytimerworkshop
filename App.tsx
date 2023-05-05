import { StyleSheet, Text, View, Image, SafeAreaView, Dimensions, TextInput } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.leftContainer}>
          <Image source={require('./assets/clock.png')} style={styles.clockIcon} />
        </View>
        <View style={styles.middleContainer}>
          <Text style={styles.headerTitle}>My Timer</Text>
        </View>
        <View style={styles.rightContainer} />
      </View>
      <View style={styles.timerContainer}>
        <Text style={styles.middleTitle}>
          להתחברות לאפליקציית טיימר אנא הזינו את מספר הטלפון והמייל שלכם
        </Text>
        <TextInput placeholder="הקלד אימייל" style={styles.textInput} />
        <TextInput placeholder="הקלד מספר" style={styles.textInput} />
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.bottomLeft}>
        <View style={styles.bottomCircle}>
          <View style={styles.arrow} />
        </View>
        </View>
        <View style={styles.bottomRight}>
          <Text style={styles.bottomText}>צריך עזרה?</Text>
          <Text style={styles.smallText}>יצירת קשר עם התמיכה</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
    height: height * 0.1,
    paddingHorizontal: 16,
  },
  leftContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  middleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  clockIcon: {
    width: 32,
    height: 32,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  timerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  middleTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'grey',
    marginBottom: 16,
  },
  textInput: {
    width: '80%',
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'right',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    height: height * 0.1,
    backgroundColor: '#F5F5F5',
  },
  bottomLeft: {
    flex: 1,
    alignItems: 'flex-start',
  },
  bottomRight: {
    flex: 1,
    alignItems: 'flex-end',
  },
  bottomText: {
    fontSize: 14,
    fontWeight: 'normal',
    color: '#808080',
  },
  smallText: {
    fontSize: 12,
    fontWeight: 'normal',
    color: 'blue',
    marginBottom: 8,
  },
  bottomCircle: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: 'purple',
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrow: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightWidth: 15,
    borderTopWidth: 15,
    borderRightColor: 'transparent',
    borderTopColor: 'white',
    transform: [{ rotate: '-45deg' }],
    position: 'absolute',
  },
});
