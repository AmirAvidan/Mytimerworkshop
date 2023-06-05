import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, Dimensions, TextInput, TouchableOpacity, Modal, ActivityIndicator } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function MyCar({ setIsAuthorized }) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);



  const onPressLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsAuthorized(true);
      setIsLoading(false);
    }, 3000);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Modal animationType='slide' transparent={false} visible={isLoading}>
        <View style={styles.activitSstyle}>
          <ActivityIndicator size="large" color= "#00ff00" />
        </View>
      </Modal>
      <View style={styles.titleContainer}>
        <Image source={require('./assets/logoMyCar.png')} style={styles.myCarImage} />
      </View>
      <View style={styles.timerContainer}>
        <Text style={styles.middleTitle}>
          להתחברות לאפליקציית אמדוקס אנא הזינו את מספר הטלפון והמייל שלכם
        </Text>
        <View style={styles.inputContainer}>
          <View style={styles.textInputContainer}>
            <TextInput
              placeholder="מספר טלפון"
              style={styles.textInput}
              value={phoneNumber}
              onChangeText={setPhoneNumber}
            />
            <Image source={require('./assets/callSquare.png')} style={styles.inputIcon} />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.textInputContainer}>
            <TextInput
              placeholder="כתובת מייל"
              style={styles.textInput}
              value={email}
              onChangeText={setEmail}
            />
            <Image source={require('./assets/messageSquare.png')} style={styles.inputIcon} />
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <TouchableOpacity style={styles.bottomLeft} onPress={onPressLogin}>
            <View style={styles.bottomCircle}>
              <View style={styles.arrow} />
            </View>
          </TouchableOpacity>
          <View style={styles.bottomRight}>
            <Text style={styles.bottomText}>צריך עזרה?</Text>
            <Text style={styles.smallText}>יצירת קשר עם התמיכה</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 16,
  },
  titleContainer: {
    alignItems: 'center',
    marginTop: -20,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 16,
  },
  myCarImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginRight: 10,
    marginBottom: -10,
  },
  timerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: -80,
    paddingTop: 40,
  },
  middleTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'grey',
    marginBottom: 32,
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
    flex: 0.9,
    height: 50,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'right',
    marginLeft: 200,
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    height: height * 0.1,
    backgroundColor: 'white',
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
    fontWeight: 'bold',
    color: 'black',
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
  activitSstyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

