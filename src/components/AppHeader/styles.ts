import {StyleSheet} from 'react-native';
import {Colors} from '../../assets';

export const Styles = StyleSheet.create({
  mainContainer: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  pressableContainer: {
    height: 50,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageIcon: {
    height: 22,
    width: 22,
  },
  titleView: {
    flex: 1,
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.White,
  },
});
