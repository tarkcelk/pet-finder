import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  petImageContainer: {
    height: Dimensions.get('window').height / 2,
  },
  petImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  petImageDarken: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    flex: 1,
  },
  petImageOnModal: {width: '100%', height: '100%', resizeMode: 'contain'},
  petDetail: {
    borderRadius: 25,
    padding: 30,
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#fff',
    width: '100%',
    height: '55%',
  },
  petDetailTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  petDetailContentHeader: {
    fontSize: 20,
    fontWeight: '900',
    color: '#000',
  },
  petDetailContent: {
    fontSize: 16,
    color: '#676767',
    fontWeight: 'bold',
    marginVertical: 10,
  },
  petDetailBottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
