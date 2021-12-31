import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginBottom: 30,
  },
  title: {
    fontWeight: '900',
    fontSize: 30,
    color: 'black',
  },
  searchInputContainer: {
    width: '100%',
    elevation: 10,
    shadowColor: '#000',
  },
  categories: {
    marginVertical: 20,
  },
  categoriesButtonContainer: {
    height: 75,
    minWidth: 150,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CCCCCC',
    borderRadius: 10,
    marginTop: 10,
  },
  selectedCategoryButtonContainer: {
    backgroundColor: '#85B850',
  },
  categoriesButtonTitle: {
    fontSize: 20,
    fontWeight: '900',
    color: '#555555',
  },
  publishButtonContainer: {
    backgroundColor: '#9ED9FA',
  },
});
