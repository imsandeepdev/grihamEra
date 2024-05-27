import * as React from 'react';
import {Pressable, View, Text} from 'react-native';
import {ViewStyle, TextStyle} from 'react-native';
import {Styles} from './styles';

interface AppButtonType {
  onPress: () => void;
  title: string;
  pressableStyle?: ViewStyle;
  titleStyle?: TextStyle;
}

const AppButton = ({
  onPress,
  title,
  pressableStyle,
  titleStyle,
}: AppButtonType) => {
  return (
    <View style={Styles.mainContainer}>
      <Pressable
        onPress={onPress}
        style={({pressed}) => [
          Styles.pressableContainer,
          {
            opacity: pressed ? 0.7 : 1,
          },
          pressableStyle,
        ]}>
        <Text style={[Styles.buttonTitle, titleStyle]}>{title}</Text>
      </Pressable>
    </View>
  );
};

export {AppButton};
