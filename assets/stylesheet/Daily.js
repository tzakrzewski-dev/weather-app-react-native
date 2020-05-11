import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
  },

  list: {
    marginRight: 10,
  },

  sizeData: {
    fontSize: 16,
    margin: 5,
    textAlignVertical: 'center',
  },

  itemDiviser: {
    marginLeft: 10,
    padding: 10,
    borderRadius: 25,
    backgroundColor: '#f7f7f7',
  },

  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#20232a',
    borderWidth: 1,
  },
  imagePicto: {
    width: 100,
    height: 100,
  },
});

export default styles;
