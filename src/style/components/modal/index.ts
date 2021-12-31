import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'red',
  },
  buttonCross: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.2)',
    padding: 10,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 1,
  },
});
