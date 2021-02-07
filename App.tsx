import * as React from 'react';

import {useEffect} from 'react';
import {Text, View} from 'react-native';
import {NativeModules, NativeEventEmitter} from 'react-native';

const MouseHandlerEventEmitter = new NativeEventEmitter(
  NativeModules.MouseHandler,
);

NativeModules.MouseHandler.Init();

const MainPage: React.FC = () => {
  const [message, setMessage] = React.useState('');
  useEffect(() => {
    console.log(NativeModules);
    MouseHandlerEventEmitter.addListener('XButton1Click', () => {
      setMessage('x1 button clicked!');
    });
    MouseHandlerEventEmitter.addListener('XButton2Click', () => {
      setMessage('x2 button clicked!');
    });
    MouseHandlerEventEmitter.addListener('RightButtonClick', () => {
      setMessage('Right button clicked!');
    });
    MouseHandlerEventEmitter.addListener('LeftButtonClick', () => {
      setMessage('Left button clicked!');
    });
    MouseHandlerEventEmitter.addListener('MiddleButtonClick', () => {
      setMessage('Middle button clicked!');
    });
    return () => {
      MouseHandlerEventEmitter.removeAllListeners('XButton1Click');
      MouseHandlerEventEmitter.removeAllListeners('XButton2Click');
      MouseHandlerEventEmitter.removeAllListeners('RightButtonClick');
      MouseHandlerEventEmitter.removeAllListeners('LeftButtonClick');
      MouseHandlerEventEmitter.removeAllListeners('MiddleButtonClick');
    };
  }, []);
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>{message}</Text>
    </View>
  );
};

export default MainPage;
