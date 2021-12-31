import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  imageContainer: {flex: 1, paddingVertical: 20},
  title: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
    marginVertical: 10,
    marginHorizontal: 30,
  },
  bottomButtonContainer: {
    backgroundColor: '#FEFDB0',
    position: 'absolute',
    bottom: 0,
    borderColor: '#888',
    borderWidth: 3,
    shadowColor: 'black',
    shadowRadius: 10,
    shadowOpacity: 0.5,
    borderRadius: 10,
    alignSelf: 'center',
  },
});
