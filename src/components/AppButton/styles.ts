import {StyleSheet} from 'react-native';
import {Colors} from '../../assets';

export const Styles = StyleSheet.create({
  mainContainer: {},
  pressableContainer: {
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Colors.SecAppColor,
    borderRadius: 8,
    paddingHorizontal: 6,
  },
  buttonTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.SecAppColor,
  },
});
