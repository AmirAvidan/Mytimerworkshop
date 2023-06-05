// import React, { useState } from 'react';
// import { Modal, StyleSheet, View, ActivityIndicator } from 'react-native';

// const LoginScreen = ({ setIsAuthorized }) => {
//   const [isLoading, setIsLoading] = useState(false);

//   const onPressLogin = () => {
//     setIsLoading(true);
//     setTimeout(() => {
//       setIsAuthorized(true);
//       setIsLoading(false);
//     }, 3000);
//   };

//   return (
//     <>
//       <Modal animationType='slide' transparent={false} visible={isLoading}>
//         <View style={styles.container}>
//           <ActivityIndicator size="large" color= "#00ff00" />
//         </View>
//       </Modal>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default LoginScreen;
