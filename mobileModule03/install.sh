#!/bin/sh

rm -rf node_modules
npm install expo expo-status-bar react react-native react-dom react-native-web react-native-vector-icons @react-navigation/bottom-tabs @react-navigation/material-top-tabs @react-navigation/native @react-navigation/stack
npx expo install @expo/metro-runtime
