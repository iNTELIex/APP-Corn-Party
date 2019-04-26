import FlexAreaView from 'components/FlexAreaView';
import * as React from 'react';
import { NavigationScreenOptions, ScrollView } from 'react-navigation';
import { LightTheme } from 'res/theme';

import RegisterForm from './components/RegisterForm';

export default class Registro extends React.Component {
  public static navigationOptions: NavigationScreenOptions = {
    title: "Registrar",
    headerStyle: { backgroundColor: LightTheme.colors.primary },
    headerTintColor: "#fff"
  };
  public render() {
    return (
      <React.Fragment>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <FlexAreaView>
            <RegisterForm />
          </FlexAreaView>
        </ScrollView>
      </React.Fragment>
    );
  }
}
