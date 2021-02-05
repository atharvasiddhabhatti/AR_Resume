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
var vrScenes = {
    '360PhotoTour': require('./js/360PhotoTour/MainScene'),
}

var arScenes = {
  'BusinessCard' : require('./js/ARBusinessCard/BusinessCard.js'),
}

var showARScene = true;

var ViroCodeSamplesSceneNavigator = createReactClass({
  render: function() {

    if (showARScene) {
      return (
        <ViroARSceneNavigator
          initialScene={{
            scene: arScenes['BusinessCard'],
          }}
          apiKey={apiKey} 
          autofocus={true}
          />
        );
    } else {
      return (
        <ViroVRSceneNavigator
          initialScene={{
            scene: vrScenes['360PhotoTour'],
          }}
          apiKey={apiKey} />
      );

    }
  }
});
module.exports = ViroCodeSamplesSceneNavigator;
