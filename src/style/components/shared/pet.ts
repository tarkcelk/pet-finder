import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
    marginRight: 10,
    marginVertical: 5,
  },
  imageContainer: {
    borderColor: '#000',
    flex: 1,
    padding: 5,
    width: 200,
    minHeight: 200,
  },
  containerImage: {
    flex: 1,
    resizeMode: 'stretch',
    borderRadius: 15,
  },
  text: {
    fontSize: 15,
    fontWeight: '900',
    color: '#fff',
  },
});
