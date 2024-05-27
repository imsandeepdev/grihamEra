import {StyleSheet} from 'react-native';
import {Colors} from '../../assets';

const Styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  leftView: {
    flex: 1,
  },
  leftTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.White,
  },
  rightButton: {
    height: 30,
    paddingHorizontal: 20,
    borderRadius: 4,
  },
  rightButtonTitle: {fontSize: 14},
});

export {Styles};
