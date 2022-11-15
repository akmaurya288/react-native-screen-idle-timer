import { Component, ReactNode } from 'react';
import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-screen-idle-timer' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const ScreenIdleTimerPackage = NativeModules.ScreenIdleTimer
  ? NativeModules.ScreenIdleTimer
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

let mounted = 0;

export default class ScreenIdleTimer extends Component<{}> {
  static activate() {
    ScreenIdleTimerPackage.activate();
  }

  static deactivate() {
    ScreenIdleTimerPackage.deactivate();
  }

  componentDidMount() {
    mounted++;
    ScreenIdleTimer.activate();
  }

  componentWillUnmount() {
    mounted--;
    if (!mounted) {
      ScreenIdleTimer.deactivate();
    }
  }

  render(): ReactNode {
    return null;
  }
}
