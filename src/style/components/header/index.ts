import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    height: 75,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
    alignItems: 'center',
    padding: 10,
  },
  pageTitle: {
    fontWeight: '900',
    fontSize: 30,
    color: '#000',
    textAlign: 'center',
  },
  left: {flex: 1},
  middle: {flex: 2},
  right: {flex: 1},
});
