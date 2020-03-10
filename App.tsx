import React, { useEffect } from "react";
import { WebView } from "react-native-webview";
import { StatusBar, View } from "react-native";
import { SplashScreen } from "expo";

export default function App() {

  useEffect(() => {
      SplashScreen.preventAutoHide();
  }, []);

  const onLoadEnd = () => {
      SplashScreen.hide();
  };

  return (
    <View style={{ flex: 1, paddingTop: StatusBar.currentHeight, backgroundColor: 'rgb(33, 50, 31)' }}>
      <WebView source={{ uri: "https://appc.coop.br/" }} onLoadEnd={onLoadEnd} />
    </View>
  );
}