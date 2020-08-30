import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Alert, Image } from 'react-native';

import { NeuButton, NeuView, NeumorphismButton } from '@neumorphism-ui';

export default class App extends Component {
  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 50,
          paddingHorizontal: 10
        }}
      >
        <Text style={{ fontWeight: 'bold', fontSize: 30 }}>NEUMORPHISM UI</Text>

        <NeuView pressed={true} style={{ height: 100 }}>
          <Text style={{ opacity: 0.4 }}>PRESSED VIEW</Text>
        </NeuView>

        <NeuView
          pressed={false}
          containerStyle={{ marginTop: 30 }}
          style={{ height: 100 }}
        >
          <Text style={{ opacity: 0.4 }}>UNPRESSED VIEW</Text>
        </NeuView>

        <NeuButton
          style={{ height: 100 }}
          onPress={() => {
            Alert.alert('I was pressed');
          }}
        >
          <Text style={{ opacity: 0.4 }}>CLICKABLE BUTTON</Text>
        </NeuButton>

        <View style={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <NeuView
            pressed={false}
            containerStyle={{ marginTop: 30 }}
            style={{ height: 100, width: 100, borderRadius: 50 }}
          >
            <Text style={{ opacity: 0.4 }}>UNPRESSED</Text>
          </NeuView>

          <NeuView
            pressed={true}
            containerStyle={{ marginTop: 30 }}
            style={{ height: 100, width: 100, borderRadius: 50 }}
          >
            <Text style={{ opacity: 0.4 }}>PRESSED</Text>
          </NeuView>

          <NeuButton
            style={{ height: 100, width: 100, borderRadius: 50 }}
            onPress={() => {
              Alert.alert('I was pressed');
            }}
            onUnpress={() => {
              Alert.alert('I was unpressed');
            }}
          >
            <Text style={{ opacity: 0.4, textAlign: 'center' }}>
              CIRCLE BUTTON
            </Text>
          </NeuButton>

          <NeuButton
            style={{ height: 100, width: 100, borderRadius: 50 }}
            onPress={() => {
              Alert.alert('I was pressed');
            }}
            onUnpress={() => {
              Alert.alert('I was unpressed');
            }}
          >
            <Image
              resizeMode="contain"
              style={{ height: 40, width: 40 }}
              source={{
                uri:
                  'https://www.freepnglogos.com/uploads/heart-png/emoji-heart-33.png'
              }}
            />
          </NeuButton>

          <NeuButton
            style={{ height: 70, width: 120, borderRadius: 50 }}
            noPressedState={true}
            onPress={() => {
              Alert.alert('I was pressed');
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '60%'
              }}
            >
              <Image
                resizeMode="contain"
                style={{ height: 30, width: 30 }}
                source={{
                  uri:
                    'https://www.freepnglogos.com/uploads/heart-png/emoji-heart-33.png'
                }}
              />
              <Text style={{ fontWeight: 'bold', opacity: 0.4 }}>LIKE</Text>
            </View>
          </NeuButton>
        </View>

        <NeuView
          containerStyle={{ marginTop: 30 }}
          style={{ height: 40, width: '100%', borderRadius: 50 }}
          contentStyle={{
            justifyContent: 'flex-start',
            alignItems: 'flex-start'
          }}
        >
          <View
            style={{
              width: '25%',
              backgroundColor: 'rgba(0,0,0,0.3)',
              height: '100%',
              borderTopLeftRadius: 50,
              borderBottomLeftRadius: 50
            }}
          ></View>
          <View
            style={{
              position: 'absolute',
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              paddingTop: 4
            }}
          >
            <Text style={{ opacity: 0.5 }}>25% Loaded</Text>
          </View>
        </NeuView>

        <NeuView
          pressed={false}
          containerStyle={{ marginTop: 30 }}
          style={{ height: 100 }}
          contentStyle={{ alignItems: 'flex-end' }}
        >
          <Text style={{ opacity: 0.4, paddingRight: 10 }}>
            CONTENT STYLING
          </Text>
        </NeuView>

        <View style={styles.body}>
          <View style={styles.sectionContainer}>
            <NeumorphismButton size={8} style={styles.button1}>
              <Text>Hello</Text>
            </NeumorphismButton>

            <NeumorphismButton size={8} style={styles.button2}>
              <Text>Hello</Text>
            </NeumorphismButton>

            <NeumorphismButton size={8}>
              <Text>Hello2</Text>
            </NeumorphismButton>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#e0e5ec'
  },
  body: {
    backgroundColor: '#55b9f3',
    marginTop: 30
  },
  sectionContainer: {
    marginTop: 32,
    marginBottom: 32,
    paddingHorizontal: 24
  },
  button1: {
    padding: 60
  },
  button2: {
    padding: 30
  }
});
