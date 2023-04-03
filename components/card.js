import { StyleSheet, Text, View } from 'react-native';

export default function Card(props) {
  return (
    <View style={styles.container}>
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   
    backgroundColor: '#ffff',
    // position: 'relative',
    alignItems: 'center',
    justifyContent: "space-around",
    borderRadius: 20,
    padding: 15,
    marginBottom: 10,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity:  0.19,
    shadowRadius: 5.62,
    elevation: 6
  },
});
