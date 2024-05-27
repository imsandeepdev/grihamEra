import * as React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import {Styles} from './styles';
import {Colors} from '../../assets';

interface CheckedDeviceType {
  onPress?: () => void;
  imageUrl?: string;
  title?: string;
  selected?: boolean;
}

const CheckedDevice = ({
  onPress,
  imageUrl,
  title,
  selected,
}: CheckedDeviceType) => {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        Styles.mainContainer,
        {
          opacity: pressed ? 0.5 : 1,
          borderColor: selected ? Colors.SecAppColor : Colors.Grey,
          backgroundColor: selected ? Colors.SecAppColor : 'transparent',
        },
      ]}>
      <View>
        <Image
          source={{
            uri: imageUrl,
          }}
          style={Styles.imageStyle}
        />
      </View>
      <Text
        style={[
          Styles.titleText,
          {
            color: selected ? Colors.Black : Colors.GreyCoffee,
          },
        ]}
        numberOfLines={1}>
        {title}
      </Text>
    </Pressable>
  );
};

export {CheckedDevice};
