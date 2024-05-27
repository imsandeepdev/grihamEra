import * as React from 'react';
import {View, Text, Image} from 'react-native';
import {Styles} from './styles';

interface WeatherCardType {
  weatherDetailList: Array<{}>;
  weatherPic?: string;
  weatherStatus?: string;
  location?: string;
  weatherForecast?: string;
}

const WeatherCard = ({
  weatherDetailList,
  weatherPic,
  weatherStatus,
  location,
  weatherForecast,
}: WeatherCardType) => {
  return (
    <View style={Styles.mainContainer}>
      <View style={Styles.topBodyView}>
        <View style={Styles.topBodyImageView}>
          <Image
            source={{
              uri: weatherPic,
            }}
            style={Styles.topBodyImage}
          />
        </View>
        <View style={Styles.topBodyMidView}>
          <Text style={Styles.topBodyMidTitle} numberOfLines={1}>
            {weatherStatus}
          </Text>
          <Text style={Styles.topBodyMidSubTitle}>{location}</Text>
        </View>
        <View style={Styles.topBodyRightView}>
          <Text style={Styles.topBodyRightText}>{weatherForecast}</Text>
        </View>
      </View>
      <View style={Styles.topBodyView}>
        <View style={Styles.bottomBodyContainer}>
          {weatherDetailList?.map((item, index) => {
            return (
              <View key={index} style={Styles.weatherListView}>
                <Text style={Styles.weatherListTitle}>{item?.title}</Text>
                <Text style={Styles.weatherListsubTitle}>{item?.subTitle}</Text>
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
};

export {WeatherCard};
