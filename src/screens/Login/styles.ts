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
  topIconBody: {
    height: 250,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginText: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.White,
  },
  loginSubText: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.LightWhite,
    lineHeight: 30,
  },
  inputContainer: {
    marginTop: 30,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 10,
  },
});

export {Styles};
