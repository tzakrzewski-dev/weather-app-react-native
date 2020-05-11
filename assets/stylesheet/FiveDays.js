import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
  },

  soleil: {
    paddingLeft: 8,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#d3d3d3',
    height: 50,
  },

  title: {
    textAlignVertical: 'center',
    color: '#000',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  temperature: {
    marginTop: 40,
    fontSize: 20,
    textAlign: 'center',
    color: '#000000',
  },
  temperatureMin: {
    marginTop: 60,
    fontSize: 40,
    textAlign: 'center',
    color: '#000000',
  },
  temperatureMax: {
    marginTop: 60,
    fontSize: 20,
    textAlign: 'center',
    color: '#000000',
  },

  center: {
    paddingLeft: 8,
    width: 100,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  sizeData: {
    fontSize: 20,
    textAlignVertical: 'center',
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
