import * as React from 'react';
import {
  Provider as PaperProvider,
  DarkTheme,
  DefaultTheme,
} from 'react-native-paper';
import {connect} from 'react-redux';

import RootScreen from './pages/Root';

class RootNavigator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: DarkTheme,
    };
  }

  static getDerivedStateFromProps(props, state) {
    let theme = 'default';
    if (state.theme.dark) {
      theme = 'dark';
    }
    const {themeType} = props;
    if (themeType !== theme) {
      if (themeType === 'dark') {
        return {theme: DarkTheme};
      }
      if (themeType === 'default') {
        return {theme: DefaultTheme};
      }
      return {
        theme: DarkTheme,
      };
    }
    return null;
  }

  render() {
    const {theme} = this.state;
    return (
      <PaperProvider theme={theme}>
        <RootScreen />
      </PaperProvider>
    );
  }
}

const mapStateToProps = state => ({
  themeType: state.config.themeType,
});

export default connect(mapStateToProps)(RootNavigator);
