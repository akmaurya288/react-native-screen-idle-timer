# react-native-screen-idle-timer

Prevent screen fron going to sleep on both iOS and Android.

## Installation

```sh
npm install react-native-screen-idle-timer
```

## Usage

```js
import ScreenIdleTimer from 'react-native-screen-idle-timer';

// Method 1
class MyComponent extends Component {
  render() {
    if (this.props.screenShouldBeAwake) {
      return (
        <View>
          <Text>Screen will be kept awake</Text>
          <ScreenIdleTimer />
        </View>
      )
    } else {
      return (
        <View>
          <Text>Screen can sleep</Text>
        </View>
      );
    }
  }
}

// Method 2
function changeKeepAwake(shouldBeAwake) {
  if (shouldBeAwake) {
    ScreenIdleTimer.activate();
  } else {
    ScreenIdleTimer.deactivate();
  }
}

```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
