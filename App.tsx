import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";

export default function App() {
  const [hasCameraPermission, setHasCameraPermission] = useState(false);
  const [hasGalleryPermission, setHasGalleryPermission] = useState(false);

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraPermission.status === "granted");
      console.log("cameraPermission: ", cameraPermission);
      const galleryPermission = await MediaLibrary.requestPermissionsAsync();
      setHasGalleryPermission(galleryPermission.status == "granted");
      console.log("galleryPermission: ", galleryPermission);
    })();
  }, []);

  console.log("hasCameraPermission: ", hasCameraPermission);
  console.log("hasGalleryPermission: ", hasGalleryPermission);

  return (
    <View style={styles.container}>
      <Text>How could an Alert be displayed here?</Text>
      <Text style={styles.labels}>
        {hasCameraPermission ? "Camera : Granted" : "Camera : Denied"}
      </Text>
      <Text style={styles.labels}>
        {hasGalleryPermission ? "Gallery : Granted" : "Gallery : Denied"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "grey",
  },
  labels: {
    color: "white",
    fontSize: 24,
    padding: 10,
  },
});
