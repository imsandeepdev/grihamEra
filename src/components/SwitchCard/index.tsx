import * as React from 'react';
import {View, Text, Image} from 'react-native';
import {Styles} from './styles';

interface RoomCardType {
  imageUrl?: string;
  title?: string;
  subTitle?: string;
}

const RoomCard = ({imageUrl, title, subTitle}: RoomCardType) => {
  return (
    <View style={Styles.mainContainer}>
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
    </View>
  );
};

export {RoomCard};
