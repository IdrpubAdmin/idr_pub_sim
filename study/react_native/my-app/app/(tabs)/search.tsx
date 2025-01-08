import {StyleSheet, Image, Platform, TextInput, View} from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import React from "react";

export default function TabTwoScreen() {
  const [text, onChangeText] = React.useState('');

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder='검색'
      />
      <View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#ddd',
    margin: 10
  },
});
