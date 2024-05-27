import * as React from 'react';
import {View, SafeAreaView, ScrollView, Text, Image} from 'react-native';
import {Styles} from './styles';
import {Colors} from '../../assets';
import {AppButton, CustomTitle, RoomCard, WeatherCard} from '../../components';

const RoomCardList = [
  {
    id: 1,
    title: 'Living Room',
    subTitle: '07 Devices',
    picUrl: 'https://cdn-icons-png.flaticon.com/128/2400/2400629.png',
  },
  {
    id: 2,
    title: 'Bed Room',
    subTitle: '04 Devices',
    picUrl: 'https://cdn-icons-png.flaticon.com/128/8948/8948962.png',
  },
  {
    id: 3,
    title: 'Study Room',
    subTitle: '06 Devices',
    picUrl: 'https://cdn-icons-png.flaticon.com/128/12886/12886089.png',
  },
  {
    id: 4,
    title: 'Kitchen',
    subTitle: '04 Devices',
    picUrl: 'https://cdn-icons-png.flaticon.com/128/4490/4490492.png',
  },
  {
    id: 5,
    title: 'Drawing Room',
    subTitle: '04 Devices',
    picUrl: 'https://cdn-icons-png.flaticon.com/128/578/578008.png',
  },
  {
    id: 5,
    title: 'Wash Room',
    subTitle: '04 Devices',
    picUrl: 'https://cdn-icons-png.flaticon.com/128/5778/5778337.png',
  },
];

const weatherDetailList = [
  {
    id: 1,
    title: '27c',
    subTitle: 'Sensible',
  },
  {
    id: 2,
    title: '4%',
    subTitle: 'Preciptation',
  },
  {
    id: 1,
    title: '66%',
    subTitle: 'Humidity',
  },
  {
    id: 1,
    title: '16 km/h',
    subTitle: 'Wind',
  },
];

const Home = ({navigation}) => {
  return (
    <View style={Styles.mainContainer}>
      <SafeAreaView style={Styles.mainContainer}>
        <ScrollView contentContainerStyle={Styles.scrollContainer}>
          <View style={Styles.mainContainer}>
            <View style={Styles.topBodyContainer}>
              <Text style={Styles.topTitle}>{'Hello Prem Chandra'}</Text>
              <Text style={Styles.topSubTitle}>{'Welcome to Home'}</Text>
            </View>
            <View style={Styles.weatherContainer}>
              <WeatherCard
                weatherDetailList={weatherDetailList}
                weatherPic={
                  'https://cdn-icons-png.flaticon.com/128/3845/3845731.png'
                }
                weatherStatus={'Mostly Cloud'}
                location={'Mumbai Maharashtra'}
                weatherForecast={'22c'}
              />
            </View>
            <View>
              <CustomTitle
                title={'Your Rooms'}
                buttonTitle={'Add'}
                buttonOnPress={() => {
                  console.log('add');
                }}
              />
            </View>
            <View style={Styles.roomContainer}>
              {RoomCardList.map((item, index) => {
                return (
                  <View key={index}>
                    <RoomCard
                      onPress={() => navigation.navigate('RoomDetail')}
                      imageUrl={item.picUrl}
                      title={item?.title}
                      subTitle={item?.subTitle}
                    />
                  </View>
                );
              })}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Home;
