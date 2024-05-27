import {StyleSheet, Platform} from 'react-native';
import {Colors} from '../../assets';

export const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 12,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  labelContainer: {
    flexDirection: 'column',
    flex: 1,
    padding: 1,
  },
  labelFocused: {
    top: 2,
    fontSize: 12,
    color: Colors.Light_AppColor,
  },
  input: {
    fontWeight: 'bold',
    color: Colors.Light_AppColor,
    height: 25,
    ...Platform.select({
      android: {
        padding: 0,
      },
    }),
    fontSize: 16,
  },

  imgStyle: {
    height: 25,
    width: 25,
  },
  multiHeight: {height: 100},
  errorText: {
    color: Colors.Red,
  },
  errorContainer: {
    paddingBottom: 16,
  },
  errorView: {
    paddingLeft: 10,
    paddingTop: 10,
  },
  errorInput: {
    borderColor: Colors.Red,
  },
  labelView: {
    flexDirection: 'row',
  },
  outLineStyle: {
    borderWidth: 0,
    ...Platform.select({
      web: {
        outlineStyle: 'none',
      },
    }),
  },
  autoFillLabelText: {
    color: Colors.GreyCoffee,
  },
  autoFillStyle: {
    borderColor: Colors.GreyCoffee,
  },
  rightIconPressable: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightViewTextStyle: {
    marginLeft: 5,
  },
  rightTextStyle: {
    color: Colors.Red,
    lineHeight: 20,
  },
  verifyRightTextStyle: {
    color: Colors.LimeGreen,
    lineHeight: 20,
  },
});
