import {StyleSheet} from 'react-native';
import {Colors} from '../../assets';

const Styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.AppColor,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 20,
  },
  topBodyContainer: {
    marginTop: 10,
  },
  topTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.White,
  },
  topSubTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.GreyCoffee,
    lineHeight: 30,
  },
  roomContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  weatherContainer: {
    marginVertical: 20,
  },
});

export {Styles};
