import BottomBarIcon from 'components/BottomBarIcon';
import LottieView from 'lottie-react-native';
import * as React from 'react';
import { SafeAreaView } from 'react-native';
import { Text } from 'react-native-paper';
import { NavigationScreenOptions } from 'react-navigation';

export default class Mapa extends React.Component {
  public static navigationOptions: NavigationScreenOptions = {
    tabBarIcon: props => <BottomBarIcon name="map" {...props} />
  };
  public render() {
    return (
      <SafeAreaView style={{ flex: 1, flexDirection: "column-reverse" }}>
        <LottieView
          source={require("res/animations/soon.json")}
          autoPlay
          loop={true}
        />
        <Text
          style={{
            color: "#017d01",
            textAlign: "center",
            padding: 25,
            fontSize: 40,
            fontWeight: "bold"
          }}
        >
          Em Breve
        </Text>
      </SafeAreaView>
    );
  }
}
