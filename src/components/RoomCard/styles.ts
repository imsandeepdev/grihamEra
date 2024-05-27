import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from '../../assets';
const screenWidth = Dimensions.get('screen').width;
const cardWidth = screenWidth / 2.4;
const Styles = StyleSheet.create({
  mainContainer: {
    borderWidth: 1,
    borderColor: Colors.SecAppColor,
    borderRadius: 8,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.Light_AppColor,
    width: cardWidth,
    marginVertical: 10,
  },
  topContainer: {
    height: cardWidth - 90,
    width: cardWidth - 90,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: Colors.SecAppColor,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.Light_SecAppColor,
  },
  imageStyle: {
    height: cardWidth - 115,
    width: cardWidth - 115,
  },
  bottomView: {
    marginTop: 10,
  },
  titleText: {
    fontSize: 15,
    fontWeight: '700',
    color: Colors.White,
    textAlign: 'center',
  },
  subTitleText: {
    fontSize: 12,
    fontWeight: '500',
    color: Colors.GreyCoffee,
    textAlign: 'center',
    lineHeight: 20,
  },
});

export {Styles};
