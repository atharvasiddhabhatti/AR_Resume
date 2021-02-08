AR Resume App Based on React native and ViroMedia ViroReact

**Instructions for running Project:-
**1. Follow directions on our Quick start guide to setup dependencies for trying these sample projects with the Viro Media App.
1. Clone the repo into your workspace with git: git clone 
1. Go into the code-samples directory.
1. Run npm install from the root of this project.

**For Android**, make sure you have downloaded and installed Android Studio from here to get required SDK and platform-tools for building android apps Make sure you have the required environment variables set - $ANDROID_HOME, and added platform-tools to $PATH variable. If not,
export ANDROID_HOME=/YOUR_PATH_TO/Android/sdk
export PATH=$ANDROID_HOME/platform-tools:$PATH
export PATH=$ANDROID_HOME/tools:$PATH
Build and launch android app by executing the following from the root of the project
react-native run-android --variant=gvrDebug

**To generate APK:- **

To build android release tests:
$ cd test/android
$ ./gradlew assembleGvrRelease
Install app-gvr-release.apk from test/android/app/build/output/gvr/app-gvr-release.apk onto your plugged in Android device.

Screenshoots:-
![Screenshoot1](https://lh5.googleusercontent.com/5LQIbeXsFT6gNDTDC1ovmyeygdID4Nfjrs-TeRAzxU2LSXnng4lspYE8HjJwwIvDRK-b8zttyuSiYWSuJklv=w967-h902-rw "Screenshoot1")

![Screenshoot2](https://lh4.googleusercontent.com/l3WvRwAMqgAXfuPi7FVNlQrWnbHUSreiiCx8tzIeQPxmNBV0xYY4LGy04gwJXG5J6REFVsMYMSL4pj9uivAe=w967-h902-rw "Screenshoot2")