import {StyleSheet} from 'react-native';
import {Colors} from '../../assets';

const Styles = StyleSheet.create({
  mainContainer: {
    borderWidth: 1,
    borderRadius: 18,
    borderColor: Colors.GreyCoffee,
    paddingHorizontal: 8,
    backgroundColor: Colors.Light_AppColor,
    paddingVertical: 20,
  },
  topBodyView: {
    flexDirection: 'row',
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
  topBodyImageView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  topBodyImage: {
    height: 40,
    width: 40,
  },
  topBodyMidView: {
    flex: 1,
    marginHorizontal: 15,
  },
  topBodyMidTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.White,
  },
  topBodyMidSubTitle: {
    fontSize: 14,
    fontWeight: '400',
    color: Colors.GreyCoffee,
    lineHeight: 20,
  },
  topBodyRightView: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4,
  },
  topBodyRightText: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.White,
    textAlign: 'center',
  },
  bottomBodyContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  weatherListView: {
    width: 90,
    paddingVertical: 8,
  },
  weatherListTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.White,
    textAlign: 'center',
  },
  weatherListsubTitle: {
    fontSize: 14,
    fontWeight: '400',
    color: Colors.GreyCoffee,
    textAlign: 'center',
  },
});

export {Styles};
