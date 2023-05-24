import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, Dimensions, TextInput } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Image source={require('./assets/logoMyCar.png')} style={styles.myCatImage} />
      </View>
      <View style={styles.timerContainer}>
        <Text style={styles.middleTitle}>
          להתחברות לאפליקציית אמדוקס אנא הזינו את מספר הטלפון והמייל שלכם
        </Text>
        <View style={styles.inputContainer}>
          <View style={styles.textInputContainer}>
            <TextInput placeholder="מספר טלפון" style={styles.textInput} />
            <Image source={require('./assets/callSquare.png')} style={styles.inputIcon} />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.textInputContainer}>
            <TextInput placeholder="כתובת מייל" style={styles.textInput} />
            <Image source={require('./assets/messageSquare.png')} style={styles.inputIcon} />
          </View>
        </View>
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
    paddingTop: 16,
  },
  titleContainer: {
    alignItems: 'center',
    marginTop: -20, // Adjust the marginTop to move the container down
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 16,
  },
  myCatImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginRight: 10,
    marginBottom: -10, // Adjust the negative marginBottom to move the image up
  },
  timerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: -80, // Adjust the marginTop to move the container down
    paddingTop: 40,
  },
  middleTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'grey',
    marginBottom: 32, // Increase the marginBottom to add more space below the text
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
  },
  inputIcon: {
    width: 25,
    height: 25,
    marginLeft: 10,
  },
  textInput: {
    flex: 1,
    height: 50,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    height: height * 0.1,
    backgroundColor: '#F5F5F5',
    marginTop: -40, // Adjust the marginTop to move the footer up
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
