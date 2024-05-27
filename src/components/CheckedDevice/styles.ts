import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from '../../assets';
const screenWidth = Dimensions.get('screen').width;

const Styles = StyleSheet.create({
  mainContainer: {
    width: 110,
    alignItems: 'center',
    borderWidth: 1,
    padding: 8,
    borderRadius: 8,
    marginBottom: 30,
  },
  imageStyle: {
    height: 60,
    width: 60,
  },
  titleText: {
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 5,
  },
});

export {Styles};
