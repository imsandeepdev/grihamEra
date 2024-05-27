import * as React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import {Styles} from './styles';

interface RoomCardType {
  imageUrl?: string;
  title?: string;
  subTitle?: string;
  onPress?: () => void;
}

const RoomCard = ({imageUrl, title, subTitle, onPress}: RoomCardType) => {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        Styles.mainContainer,
        {
          opacity: pressed ? 0.5 : 1,
        },
      ]}>
      <View style={Styles.topContainer}>
        <Image
          source={{
            uri: imageUrl,
          }}
          style={Styles.imageStyle}
        />
      </View>
      <View style={Styles.bottomView}>
        <Text style={Styles.titleText} numberOfLines={1}>
          {title}
        </Text>
        <Text style={Styles.subTitleText} numberOfLines={1}>
          {subTitle}
        </Text>
      </View>
    </Pressable>
  );
};

export {RoomCard};
