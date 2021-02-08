'use strict';

import React, { Component } from 'react';

import {
  AppRegistry,
} from 'react-native';

import {
  ViroVRSceneNavigator,
  ViroARSceneNavigator,
} from 'react-viro';

var createReactClass = require('create-react-class');
var apiKey = "YOUR_API_KEY_HERE";
var arScenes = {
  'BusinessCard' : require('./js/ARBusinessCard/BusinessCard.js'),
}



var ViroCodeSamplesSceneNavigator = createReactClass({
  render() {
      return (
        <ViroARSceneNavigator
          initialScene={{
            scene: arScenes['BusinessCard'],
          }}
          apiKey={apiKey} 
          autofocus={true}
          />
        );
    } 
  }
);
module.exports = ViroCodeSamplesSceneNavigator;
