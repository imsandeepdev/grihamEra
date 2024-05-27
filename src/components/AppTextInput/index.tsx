import React, {useRef, useEffect} from 'react';
import {
  TextInput,
  View,
  Pressable,
  Platform,
  Animated,
  Easing,
  Text,
} from 'react-native';
import type {
  AccessibilityRole,
  AccessibilityValue,
  ReturnKeyTypeOptions,
  ViewStyle,
} from 'react-native';
import {styles} from './styles';
import {Colors} from '../../assets';
interface AppInput {
  label?: string;
  value?: any;
  keyboardType?: any;
  secureTextEntry?: boolean;
  editable?: boolean;
  autoFocus?: boolean;
  multiline?: boolean;
  placeholder?: string;
  error?: any;
  onChangeText?: (args: any) => void;
  onFocus?: (args: any) => void;
  onBlur?: () => void;
  onSubmitEditing?: (args: any) => void;
  onIconPress?: (args: any) => void;
  style?: any;
  errorViewStyle?: ViewStyle;
  testID?: string;
  maxLength?: number;
  rightIcon?: any;
  rightText?: string;
  IconHeight?: number;
  IconWidth?: number;
  mandatory?: boolean;
  mandatoryIconStyle?: object;
  labelStyle?: object;
  containerStyle?: object;
  ref?: any;
  accessible?: boolean;
  accessibilityHint?: string;
  accessibilityLanguage?: string;
  accessibilityLabel?: string;
  accessibilityRole?: AccessibilityRole;
  accessibilityValue?: AccessibilityValue;
  returnKeyType?: ReturnKeyTypeOptions | undefined;
  autoFillStatus?: boolean;
  rightIconDisabled?: boolean;
  onSelectionChange?: (args: any) => void;
  titleActiveSize?: 14;
  titleInActiveSize?: 16;
  titleActiveColor?: string;
  titleInactiveColor?: string;
  isVerify?: false;
  onKeyPress?: (args: any) => void;
}
const AppTextInput = ({
  label,
  secureTextEntry,
  onChangeText,
  multiline,
  onFocus,
  onBlur,
  value,
  style,
  errorViewStyle,
  autoFocus,
  keyboardType,
  maxLength,
  onSubmitEditing,
  rightIcon,
  rightText,
  IconHeight,
  IconWidth,
  onIconPress,
  error,
  mandatory,
  mandatoryIconStyle,
  labelStyle,
  containerStyle,
  ref,
  editable,
  accessible,
  accessibilityHint,
  accessibilityLanguage,
  accessibilityLabel,
  accessibilityRole,
  accessibilityValue,
  testID,
  returnKeyType,
  autoFillStatus,
  rightIconDisabled,
  onSelectionChange,
  titleActiveSize = 14,
  titleInActiveSize = 16,
  titleActiveColor = Colors.GreyCoffee,
  titleInactiveColor = Colors.GreyCoffee,
  isVerify,
  onKeyPress,
}: AppInput) => {
  const animatedValue = useRef(new Animated.Value(0));
  const RightIcon = rightIcon;
  const [isFocused, setIsFocused] = React.useState(false);
  const [text, onChangeText2] = React.useState(value);

  useEffect(() => {
    if (value?.length > 0) {
      Animated.timing(animatedValue?.current, {
        toValue: 1,
        duration: 500,
        easing: Easing.bezier(0.4, 0.0, 0.2, 1),
        useNativeDriver: false,
      }).start();
    }
  }, [value]);

  const handleFocus = () => {
    Animated.timing(animatedValue?.current, {
      toValue: 1,
      duration: 500,
      easing: Easing.bezier(0.4, 0.0, 0.2, 1),
      useNativeDriver: false,
    }).start();
    setIsFocused(true);
    onFocus && onFocus();
  };
  const handleBlur = () => {
    if (!text) {
      Animated.timing(animatedValue?.current, {
        toValue: 0,
        duration: 500,
        easing: Easing.bezier(0.4, 0.0, 0.2, 1),
        useNativeDriver: false,
      }).start();
    }
    onBlur && onBlur();

    if (isFocused) {
      setIsFocused(false);
    }
  };

  const returnAnimatedTitleStyles = {
    transform: [
      {
        translateY: animatedValue?.current?.interpolate({
          inputRange: [0, 1],
          outputRange: [13, -4],
          extrapolate: 'clamp',
        }),
      },
    ],
    fontSize: animatedValue?.current?.interpolate({
      inputRange: [0, 1],
      outputRange: [titleInActiveSize, titleActiveSize],
      extrapolate: 'clamp',
    }),
    color: animatedValue?.current?.interpolate({
      inputRange: [0, 1],
      outputRange: [Colors.GreyCoffee, Colors.Grey],
    }),
    fontWeight: animatedValue?.current?.interpolate({
      inputRange: [0, 1],
      outputRange: ['700', '400'],
    }),
  };
  const viewStyles = {
    borderBottomColor: animatedValue?.current?.interpolate({
      inputRange: [0, 1],
      outputRange: [titleActiveColor, titleInactiveColor],
    }),
  };
  const containerViewStyles = {
    borderColor: animatedValue?.current?.interpolate({
      inputRange: [0, 1],
      outputRange: isFocused
        ? value?.length > 0
          ? [Colors.Grey, Colors.SecAppColor]
          : [Colors.GreyCoffee, Colors.SecAppColor]
        : value?.length > 0
        ? [Colors.Grey, Colors.Grey]
        : [Colors.GreyCoffee, Colors.GreyCoffee],
    }),
  };

  const onChangeText1 = (text: string) => {
    onChangeText2(text);
    onChangeText(text);
  };

  const title = () => {
    if (mandatory) {
      return (
        <Animated.View style={styles.labelView}>
          <Animated.Text
            // textType="medium14"
            style={[
              autoFillStatus && styles.autoFillLabelText,
              labelStyle,
              returnAnimatedTitleStyles,
            ]}>
            {label}
          </Animated.Text>
          <Text style={mandatoryIconStyle}>*</Text>
        </Animated.View>
      );
    }
    return (
      <Animated.Text
        style={[
          autoFillStatus && styles.autoFillLabelText,
          labelStyle,
          returnAnimatedTitleStyles,
        ]}>
        {label}
      </Animated.Text>
    );
  };
  return (
    <>
      <Animated.View
        style={[
          styles.container,
          multiline && styles.multiHeight,
          containerStyle,
          containerViewStyles,
          error && styles.errorInput,
          autoFillStatus && styles.autoFillStyle,
        ]}>
        <View style={styles.inputContainer}>
          <Animated.View style={[styles.labelContainer, viewStyles]}>
            {title()}
            <TextInput
              testID={testID}
              ref={ref}
              style={[
                styles.input,
                style,
                {color: isFocused ? titleActiveColor : titleInactiveColor},
                autoFillStatus && styles.autoFillLabelText,
              ]}
              cursorColor={Colors.Grey}
              secureTextEntry={secureTextEntry}
              onChangeText={onChangeText1}
              multiline={multiline}
              onFocus={handleFocus}
              onBlur={handleBlur}
              autoFocus={autoFocus}
              keyboardType={keyboardType}
              maxLength={maxLength}
              value={value}
              onSubmitEditing={onSubmitEditing}
              editable={editable}
              accessible={accessible}
              accessibilityLabel={accessibilityLabel}
              accessibilityHint={accessibilityHint}
              accessibilityRole={accessibilityRole}
              accessibilityValue={accessibilityValue}
              accessibilityLanguage={accessibilityLanguage}
              returnKeyType={returnKeyType}
              onSelectionChange={onSelectionChange}
              onKeyPress={onKeyPress}
            />
          </Animated.View>
          {onIconPress && (
            <Pressable
              disabled={rightIconDisabled}
              onPress={onIconPress}
              testID="onIconPress"
              style={styles.rightIconPressable}>
              {rightIcon && (
                <RightIcon
                  height={IconHeight ?? styles.imgStyle.height}
                  width={IconWidth ?? styles.imgStyle.width}
                />
              )}
              {rightText && (
                <View style={styles.rightViewTextStyle}>
                  <Text
                    style={
                      isVerify
                        ? styles.verifyRightTextStyle
                        : styles.rightTextStyle
                    }>
                    {rightText}
                  </Text>
                </View>
              )}
            </Pressable>
          )}
        </View>
      </Animated.View>
      <View style={styles.errorContainer}>
        {error ? (
          <View style={[styles.errorView, errorViewStyle]}>
            <Text style={styles.errorText}>{error}</Text>
          </View>
        ) : null}
      </View>
    </>
  );
};
export {AppTextInput};
