import * as React from 'react';
import {View, Text} from 'react-native';
import {AppButton} from '../AppButton';
import {Styles} from './styles';

interface CustomTitleType {
  title?: string;
  buttonTitle?: string | undefined;
  buttonOnPress: () => void;
}

const CustomTitle = ({title, buttonTitle, buttonOnPress}: CustomTitleType) => {
  return (
    <View style={Styles.mainContainer}>
      <View style={Styles.leftView}>
        <Text style={Styles.leftTitle}>{title}</Text>
      </View>
      <View>
        <AppButton
          title={`${buttonTitle}`}
          onPress={buttonOnPress}
          pressableStyle={Styles.rightButton}
          titleStyle={Styles.rightButtonTitle}
        />
      </View>
    </View>
  );
};

export {CustomTitle};
