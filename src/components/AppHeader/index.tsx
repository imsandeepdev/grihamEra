import * as React from 'react';
import {View, Text, Pressable, Image} from 'react-native';
import {Styles} from './styles';

interface AppHeaderType {
  onPress?: () => void;
  title?: string;
}

const AppHeader = ({onPress, title}: AppHeaderType) => {
  return (
    <View style={Styles.mainContainer}>
      <Pressable
        onPress={onPress}
        style={({pressed}) => [
          Styles.pressableContainer,
          {opacity: pressed ? 0.5 : 1},
        ]}>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/128/8213/8213500.png',
          }}
          style={Styles.imageIcon}
          resizeMode={'contain'}
        />
      </Pressable>
      <View style={Styles.titleView}>
        <Text style={Styles.titleText}>{title}</Text>
      </View>
    </View>
  );
};

export {AppHeader};
