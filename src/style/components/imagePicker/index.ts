import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 0,
    paddingVertical: 20,
  },
  buttonTitleStyle: {
    fontSize: 20,
  },
  pickedImage: {
    width: 300,
    height: 300,
    borderRadius: 10,
    margin: 10,
    borderWidth: 0.2,
    borderColor: '#000',
    resizeMode: 'cover',
  },
});
