import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { RNCamera } from "react-native-camera";
import {Container, Header} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons'


export default class App extends Component {

  constructor(props){
    super(props)
    this.closeCamera = props.closeCamera;
    this.capture = props.capture;
  }

  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      this.capture(data.uri);
      this.closeCamera();
      //alert(data.uri);
    }
  };


  handleCameraOff = () => {
    this.closeCamera();
  }

  render() {
    return (
      <View style={styles.container}>
        <Header>
        <TouchableOpacity onPress={this.handleCameraOff}>
          <Icon name="close" size={24} color="#fff"/>
                      </TouchableOpacity>
        </Header>
        <RNCamera
          ref={camera => {
            this.camera = camera;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          autoFocus={RNCamera.Constants.AutoFocus.on}
          flashMode={RNCamera.Constants.FlashMode.off}
          permissionDialogTitle={"Permission to use camera"}
          permissionDialogMessage={
            "We need your permission to use your camera phone"
          }
        />
        <View style={styles.buttonContainer}>
          <Container>
            <TouchableOpacity onPress={this.takePicture} style={styles.capture}>
            </TouchableOpacity>

          </Container>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "black"
  },
  preview: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  buttonContainer: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "center"
  },
  capture: {
    flex: 0,
    backgroundColor: "#fff",
    borderRadius: 23,
    borderColor:"black",
    borderStyle: "solid",
    borderWidth:1,
    width:46,
    height:46,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: "center",
    margin: 20
  },
  buttonText: {
    fontSize: 1
  }
});
