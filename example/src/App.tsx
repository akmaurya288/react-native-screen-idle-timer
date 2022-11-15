import * as React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import ScreenIdleTimer from 'react-native-screen-idle-timer';

export default function App() {
  const [activated, setActivated] = React.useState<boolean | undefined>(false);

  return (
    <View style={styles.container}>
      <Button
        title={activated ? 'Deactivate' : 'Activate'}
        onPress={() => {
          if (activated) {
            ScreenIdleTimer.deactivate();
            setActivated(false);
          } else {
            ScreenIdleTimer.activate();
            setActivated(true);
          }
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
