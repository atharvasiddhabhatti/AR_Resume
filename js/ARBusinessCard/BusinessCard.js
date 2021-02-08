'use strict';

import React, { Component } from 'react';

import {StyleSheet,Linking, StatusBar} from 'react-native';

import {
  ViroARScene,
  ViroDirectionalLight,
  ViroBox,
  ViroConstants,
  ViroARTrackingTargets,
  ViroMaterials,
  ViroText,
  ViroImage,
  ViroFlexView,
  ViroARImageMarker,
  ViroARObjectMarker,
  ViroAmbientLight,
  ViroARPlane,
  ViroAnimatedImage,
  ViroAnimations,
  ViroNode,
  Viro3DObject,
  ViroQuad
} from 'react-viro';
import { polarToCartesianActual } from 'react-viro/components/Utilities/ViroUtils';

export class BusinessCard extends Component {

  state = {
    isTracking: false,
    initialized: false,
    runAnimation: false,
    pauseUpdates: true
  }

  getNoTrackingUI(){
    const { isTracking, initialized } = this.state;
    return (
      <ViroText text={
        initialized ? 'Initializing AR...'
          : "No Tracking"
      }/>
    )
  }



  getARScene() {
    return (
      <ViroNode>
        <ViroARImageMarker target={"businessCard"}
          onAnchorFound={
            () => this.setState({
                runAnimation: true,
                pauseUpdates: true
            })}
        >
          <ViroNode key="card">
            <ViroNode
              opacity={0} position={[-80, 0, 0]}
              animation={{
                name:'animateImage',
                run: this.state.runAnimation
                }}
            >
              <ViroFlexView
                  rotation={[-90, 0, 0]}
                  height={0.03}
                  width={0.05}
                  style={styles.card}
              >
                <ViroFlexView
                >
                  
                  <ViroAnimatedImage
                    height={0.04}
                    width={0.04}
                    loop={true}
                    onClick={ ()=>{ Linking.openURL('https://linkmix.co/2699412')}}
                    source={require('./res/click.gif')}
                  />
                </ViroFlexView>
              </ViroFlexView>
            </ViroNode>
            <ViroNode
              opacity={0} position={[-80, 0, 0]}
              animation={{
                name:'click2',
                run: this.state.runAnimation
                }}
            >
              <ViroFlexView
                  rotation={[-90, 0, 0]}
                  height={0.03}
                  width={0.05}
                  style={styles.card}
              >
                <ViroFlexView
                >
                  
                  <ViroAnimatedImage
                    height={0.04}
                    width={0.04}
                    loop={true}
                    onClick={()=>{Linking.openURL('https://github.com/atharvasiddhabhatti/homeautomationiot')}}
                    source={require('./res/click.gif')}
                  />
                </ViroFlexView>
              </ViroFlexView>
            </ViroNode>
            <ViroNode
              opacity={0} position={[-80, 0, 0]}
              animation={{
                name:'redhat',
                run: this.state.runAnimation
                }}
            >
              <ViroFlexView
                  rotation={[-90, 0, 0]}
                  height={0.03}
                  width={0.05}
                  style={styles.card}
              >
                <ViroFlexView
                >
                  
                  <ViroAnimatedImage
                    height={0.05}
                    width={0.10}
                    loop={true}
                    onClick={()=>{Linking.openURL('https://drive.google.com/file/d/1uqT9qOPI9k54mNvfklr3VILrZrWCRhUG/view?usp=sharing')}}
                    source={require('./res/Redhatlogo.gif')}
                  />
                </ViroFlexView>
              </ViroFlexView>
            </ViroNode>
            <ViroNode
              opacity={0} position={[-80, 0, 0]}
              animation={{
                name:'google',
                run: this.state.runAnimation
                }}
            >
              <ViroFlexView
                  rotation={[-90, 0, 0]}
                  height={0.03}
                  width={0.05}
                  style={styles.card}
              >
                <ViroFlexView
                >
                  
                  <ViroAnimatedImage
                    height={0.05}
                    width={0.10}
                    loop={true}
                    onClick={()=>{Linking.openURL('https://drive.google.com/file/d/1hRqlXFpFSP1OlJMaQ-7oCHomnKizxFGH/view?usp=sharing')}}
                    source={require('./res/google-cloud.gif')}
                  />
                </ViroFlexView>
              </ViroFlexView>
            </ViroNode>
            <ViroNode
              opacity={0} position={[-80, 0, 0]}
              animation={{
                name:'website',
                run: this.state.runAnimation
                }}
            >
              <ViroFlexView
                  rotation={[-90, 0, 0]}
                  height={0.03}
                  width={0.05}
                  style={styles.card}
              >
                <ViroFlexView
                >
                  
                  <ViroImage
                    height={0.02}
                    width={0.04}
                    loop={true}
                    onClick={ ()=>{ Linking.openURL('https://tinyurl.com/atharvasid')}}
                    source={require('./res/website.jpg')}
                  />
                </ViroFlexView>
              </ViroFlexView>
            </ViroNode>
            <ViroNode
              opacity={0} position={[-80, 0, 0]}
              animation={{
                name:'linkedin',
                run: this.state.runAnimation
                }}
            >
              <ViroFlexView
                  rotation={[-90, 0, 0]}
                  height={0.03}
                  width={0.05}
                  style={styles.card}
              >
                <ViroFlexView
                >
                  
                  <ViroImage
                    height={0.02}
                    width={0.04}
                    loop={true}
                    onClick={ ()=>{ Linking.openURL('https://www.linkedin.com/in/atharva-siddhabhatti-b057a2191/')}}
                    source={require('./res/linkedin.jpg')}
                  />
                </ViroFlexView>
              </ViroFlexView>
            </ViroNode>
            <ViroNode
              opacity={0} position={[-80, 0, 0]}
              animation={{
                name:'phone',
                run: this.state.runAnimation
                }}
            >
              <ViroFlexView
                  rotation={[-90, 0, 0]}
                  height={0.03}
                  width={0.05}
                  style={styles.card}
              >
                <ViroFlexView
                >
                  
                  <ViroImage
                    height={0.03}
                    width={0.03}
                    loop={true}
                    onClick={()=>{Linking.openURL('tel:9420969666')}}
                    source={require('./res/phone.jpg')}
                  />
                </ViroFlexView>
              </ViroFlexView>
            </ViroNode>
            
            <ViroNode
              opacity={0} position={[-80, 0, 0]}
              animation={{
                name:'mail',
                run: this.state.runAnimation
                }}
            >
              <ViroFlexView
                  rotation={[-90, 0, 0]}
                  height={0.03}
                  width={0.05}
                  style={styles.card}
              >
                <ViroFlexView
                >
                  
                  <ViroImage
                    height={0.03}
                    width={0.03}
                    loop={true}
                    onClick={()=>{Linking.openURL('mailto:atharvasiddhabhatti@gmail.com')}}
                    source={require('./res/mail.jpg')}
                  />
                </ViroFlexView>
              </ViroFlexView>
            </ViroNode>
            <ViroNode opacity={0} position={[0, 0, 0]}
              animation={{
                name:'animateViro',
                run: this.state.runAnimation
              }}
            >
            </ViroNode>
          </ViroNode>
        </ViroARImageMarker>
      </ViroNode>
    )
  }

  render() {
    return (
      
      <ViroARScene onTrackingUpdated={this._onInitialized} >
        <StatusBar hidden={true} />
        { this.state.isTracking ? this.getNoTrackingUI() : this.getARScene() }
      </ViroARScene>
    );
  }

  _onInitialized = (state, reason) => {
    if (state == ViroConstants.TRACKING_NORMAL) {
      isTracking: true
    } else if (state == ViroConstants.TRACKING_NONE) {
      isTracking: false
    }
  }
}

var styles = StyleSheet.create({
  textStyle: {
    flex: .5,
    fontFamily: 'Roboto',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'top',
    textAlign: 'left',
    fontWeight: 'bold',
  },
  card: {
    flexDirection: 'column'
  },
  cardWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 0.001,
    flex: .5
  },
  subText: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flex: .5
  }
});

ViroARTrackingTargets.createTargets({
  "businessCard" : {
    source : require('./res/business_card.png'),
    orientation : "Up",
    physicalWidth : 0.21 // real world width in meters
  }
});

ViroMaterials.createMaterials({
  imagePlaceholder: {
    diffuseColor: "rgba(255,255,255,1)"
  },
  quad: {
    diffuseColor: "rgba(0,0,0,0.5)"
  }
});

ViroAnimations.registerAnimations({
  animateImage:{
    properties:{
      positionX: 0.02,
      positionZ: 0.04,
      opacity: 1.0
    },
      easing:"Bounce",
      duration: 500
  },
  click2:{
    properties:{
      positionX: 0.02,
      positionZ: 0.09,
      opacity: 1.0
    },
      easing:"Bounce",
      duration: 500
  },
  redhat:{
    properties:{
      positionX: -0.18,
      positionZ: 0.04,
      opacity: 1.0
    },
      easing:"Bounce",
      duration: 500
  },
  google:{
    properties:{
      positionX: -0.18,
      positionZ: 0.10,
      opacity: 1.0
    },
      easing:"Bounce",
      duration: 500
  },
  website:{
    properties:{
      positionX: 0.12,
      positionZ: -0.16,
      opacity: 1.0
    },
      easing:"Bounce",
      duration: 500
  },
  linkedin:{
    properties:{
      positionX: 0.17,
      positionZ: -0.16,
      opacity: 1.0
    },
      easing:"Bounce",
      duration: 500
  },
  phone:{
    properties:{
      positionX: 0.12,
      positionZ: -0.08,
      opacity: 1.0
    },
      easing:"Bounce",
      duration: 500
  },
  mail:{
    properties:{
      positionX: 0.12,
      positionZ: -0.12,
      opacity: 1.0
    },
      easing:"Bounce",
      duration: 500
  },
  animateViro: {
    properties: {
      positionZ: 0.02,
      opacity: 1.0,
    },
    easing:"Bounce",
    duration: 500
  }
});

module.exports = BusinessCard;
