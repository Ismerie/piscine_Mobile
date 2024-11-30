#!/bin/sh

rm -rf node_modules
npm install expo expo-status-bar react react-native react-dom react-native-web react-native-vector-icons @fortawesome/free-brands-svg-icons @fortawesome/free-regular-svg-icons @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome @react-navigation/bottom-tabs @react-navigation/material-top-tabs @react-navigation/native @react-navigation/stack
npx expo install @expo/metro-runtime
