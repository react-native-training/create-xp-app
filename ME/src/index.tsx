import RX = require('reactxp');
import App = require('./App');

import { AppRegistry } from 'react-native';

RX.App.initialize(true, true);
RX.UserInterface.setMainView(<App />);
