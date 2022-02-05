import {StyleSheet, Dimensions} from 'react-native';

const {height: deviceHeight} = Dimensions.get('window');

export default StyleSheet.create({
  imageContainer: {
    flex: 1,
    paddingVertical: 20,
  },
  upperView: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
  },
  bottomView: {
    flex: 3,
    justifyContent: 'flex-end',
  },
  bottomButton: {
    paddingHorizontal: 20,
    backgroundColor: '#FEFDB0',
    borderColor: '#888',
    borderWidth: 3,
    shadowColor: 'black',
    shadowRadius: 10,
    shadowOpacity: 0.5,
    borderRadius: 10,
    alignSelf: 'center',
  },
});
