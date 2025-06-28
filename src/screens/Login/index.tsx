import * as React from 'react';
import {useState} from 'react';
import {View, Text, Image, ScrollView, SafeAreaView} from 'react-native';
import {Styles} from './styles';
import {AppButton, AppTextInput} from '../../components';
import {useDispatch} from 'react-redux';
import {getHandalLoginSlice} from '../../store/slices';
import {AppDispatch} from '../../store';

const Login = ({navigation}) => {
  const dispatch = useDispatch<AppDispatch>();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handalLogin = () => {
    const data = {
      Logincode: 'Sachin',
      password: 'JSS@1234',
      deviceNo: 'samsung-SM-A207F-1472d92a302b13bb',
    };
    dispatch(getHandalLoginSlice(data)).then((result: any) => {
      console.log('RESULT==>', result);
    });
  };

  return (
    <View style={Styles.mainContainer}>
      <SafeAreaView style={Styles.mainContainer}>
        <ScrollView contentContainerStyle={Styles.scrollContainer}>
          <View style={Styles.mainContainer}>
            <View style={Styles.topIconBody}>
              <Image
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/128/2515/2515902.png',
                }}
                style={{height: 90, width: 90}}
              />
            </View>
            <View>
              <Text style={Styles.loginText}>{'Login'}</Text>
              <Text style={Styles.loginSubText}>
                {'Please login to your account'}
              </Text>
            </View>
            <View style={Styles.inputContainer}>
              <AppTextInput
                label={'Email'}
                value={name}
                onChangeText={text => {
                  setName(text);
                }}
              />
              <AppTextInput
                label={'Password'}
                value={password}
                secureTextEntry={true}
                onChangeText={text => {
                  setPassword(text);
                }}
              />
            </View>
            <View style={Styles.buttonContainer}>
              <AppButton
                onPress={() => {
                  // handalLogin();
                  navigation.navigate('HomeScreen');
                }}
                title={'Login'}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};
export default Login;
