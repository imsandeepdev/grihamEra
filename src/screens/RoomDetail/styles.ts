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
    backgroundColor: Colors.Light_AppColor,
  },
  topRowDivider: {
    flexDirection: 'row',
    flex: 1,
  },
  leftTopView: {
    paddingHorizontal: 20,
  },
  leftTopTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.White,
  },
  leftTopSubTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.GreyCoffee,
    lineHeight: 20,
  },
  leftBodyContainer: {
    marginTop: 30,
  },
  leftImageContainer: {
    height: 170,
    width: 180,
    borderRadius: 10,
    overflow: 'hidden',
  },
  leftImage: {
    height: '100%',
    width: '100%',
  },
  imageTextView: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  imageTextContainer: {
    paddingVertical: 5,
    backgroundColor: Colors.SecAppColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftImageRoomText: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.Black,
  },
  rightBodyContainer: {
    width: 150,
    height: '100%',
  },
  flexView: {
    flex: 1,
  },
  rightDeviceListView: {
    flex: 1,
    alignItems: 'center',
  },
  deviceListView: {
    marginTop: 30,
    borderBottomWidth: 1,
  },
});
export {Styles};
