import * as React from 'react';
import {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  Switch,
} from 'react-native';
import {Styles} from './styles';
import {Colors} from '../../assets';
import {CheckedDevice} from '../../components';

const DeviceList = [
  {
    id: 1,
    title: ' Light',
    url: 'https://cdn-icons-png.flaticon.com/128/12332/12332484.png',
    activeUrl: 'https://cdn-icons-png.flaticon.com/128/3606/3606860.png',
    selected: false,
  },
  {
    id: 2,
    title: ' Air Condition',
    url: 'https://cdn-icons-png.flaticon.com/128/10656/10656775.png',
    activeUrl: 'https://cdn-icons-png.flaticon.com/128/911/911409.png',
    selected: true,
  },

  {
    id: 3,
    title: 'Fan',
    url: 'https://cdn-icons-png.flaticon.com/128/10454/10454268.png',
    activeUrl: 'https://cdn-icons-png.flaticon.com/128/10454/10454268.png',
    selected: false,
  },
];

const RoomDetail = () => {
  const [deviceList, setDeviceList] = useState(DeviceList);
  const [selectedDevice, setSelectedDevice] = useState(DeviceList[0]);
  const [switchOn, setSwitchOn] = useState(false);

  const handalOnSelected = (item: any, selectedIndex: number) => {
    const tempList = deviceList;
    const tempSelected = tempList.map((item, index) => {
      if (selectedIndex === index) {
        item.selected = !item.selected;
      } else {
        item.selected = false;
      }
      return {...item};
    });
    setDeviceList(tempSelected);
    setSelectedDevice(item);
  };
  return (
    <View style={Styles.mainContainer}>
      <SafeAreaView style={Styles.mainContainer}>
        <View style={Styles.mainContainer}>
          <View style={Styles.topRowDivider}>
            <View style={{flex: 1}}>
              <View style={Styles.leftTopView}>
                <View>
                  <Text style={Styles.leftTopTitle}>{'Bed Room'}</Text>
                  <Text style={Styles.leftTopSubTitle}>
                    {'7 Active Devices'}
                  </Text>
                </View>
                <View style={Styles.leftBodyContainer}>
                  <View style={Styles.leftImageContainer}>
                    <Image
                      source={{
                        uri: 'https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsb2ZmaWNlOF9waG90b2dyYXBoeV9vZl9zY2FuZGluYXZpYW5fc3R5bGVfY296eV9tb2Rlcm5fYl9kYmM1NDA2Yy0zZTA0LTQzNzMtYWVhYi1iNjhkOTVkZjc5MTJfMS5qcGc.jpg',
                      }}
                      style={Styles.leftImage}
                    />
                    <View style={Styles.imageTextView}>
                      <View style={Styles.imageTextContainer}>
                        <Text style={Styles.leftImageRoomText}>
                          {'Bed Room'}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              {/* LeftBody */}
              <View style={{marginTop: 40, flex: 1}}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginHorizontal: 20,
                    height: 90,
                    borderTopWidth: 1,
                    borderColor: Colors.SecAppColor,
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: '700',
                      color: Colors.LightWhite,
                    }}>
                    {selectedDevice.title}
                  </Text>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'flex-end',
                      alignItems: 'flex-end',
                    }}>
                    <Switch
                      value={switchOn}
                      onChange={() => setSwitchOn(!switchOn)}
                      thumbColor={Colors.SecAppColor}
                      trackColor={Colors.LightWhite}
                      ios_backgroundColor={Colors.LightWhite}
                      aria-selected={Colors.LightWhite}
                    />
                  </View>
                </View>
                <View
                  style={{
                    alignItems: 'center',
                    flex: 1,
                  }}>
                  <View style={{marginTop: 30}}>
                    <Image
                      source={{uri: selectedDevice.activeUrl}}
                      style={{height: 150, width: 150}}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={Styles.rightBodyContainer}>
              <View style={Styles.flexView}>
                <ScrollView contentContainerStyle={Styles.scrollContainer}>
                  <View style={Styles.rightDeviceListView}>
                    {deviceList.map((item, index) => {
                      return (
                        <View
                          key={index}
                          style={[
                            Styles.deviceListView,
                            {
                              borderColor: item.selected
                                ? Colors.SecAppColor
                                : Colors.GreyCoffee,
                            },
                          ]}>
                          <CheckedDevice
                            onPress={() => {
                              handalOnSelected(item, index);
                            }}
                            imageUrl={item.url}
                            title={item.title}
                            selected={item.selected}
                          />
                        </View>
                      );
                    })}
                  </View>
                </ScrollView>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default RoomDetail;
