import {
  StyleSheet,
  Text,
  Image,
  Platform,
  TextInput,
  View,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView,
  Alert
} from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import React, {useEffect, useState} from "react";
import Fontisto from '@expo/vector-icons/Fontisto';

import { Theme } from '@/constants/Colors'
import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = '@toDos'

export default function TabTwoScreen() {
  const [working, setWorking] = useState(true)
  const [text, setText] = useState('')
  const [toDos, setToDos] = useState({})
  const work = () => setWorking(true)
  const travel = () => setWorking(false)

  const onChangeText = (payload) => setText(payload)

  const saveToDos = async (toSave) => {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(toSave))
  }
  const loadToDos = async () => {
    const s = await AsyncStorage.getItem(STORAGE_KEY)
    if (s) {
      setToDos(JSON.parse(s))
    }
  }
  useEffect(() => {
    loadToDos()
  }, []);
  const addToDo = async () => {
    if (text === '') {
      return ;
    }
    const newToDos = {...toDos, [Date.now()]: {text, working}}
    setToDos(newToDos)
    await saveToDos(newToDos)
    setText('')
  }
  const deleteToDo = (key) => {
    Alert.alert('Delete To Do', 'Are you sure?', [
      {text: 'Cancel'},
      {text: 'Im Sure', onPress: async () => {
        const newToDos = {...toDos}
        delete newToDos[key]
        setToDos(newToDos)
        await saveToDos(newToDos)
      }},
    ])
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={work}>
          <Text style={{...styles.btnText, color: working ? 'white' : Theme.gray }}>Work</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={travel}>
          <Text style={{...styles.btnText, color: working ? Theme.gray : 'white' }}>Travel</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TextInput onSubmitEditing={addToDo} style={styles.input} value={text} onChangeText={onChangeText} />
      </View>
      <ScrollView>
        {
          Object.keys(toDos).map(key => (
            toDos[key].working === working &&
            <View key={key} style={styles.toDo}>
              <Text style={styles.toDoText}>{toDos[key].text}</Text>
              <TouchableOpacity onPress={() => deleteToDo(key)}>
                <Fontisto name="trash" size={18} color={Theme.gray} />
              </TouchableOpacity>
            </View>
            )
          )
        }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.bg,
    paddingHorizontal: 20,
  },
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 100,
  },
  btnText: {
    fontSize: 38,
    fontWeight: 600,
  },
  input: {
    backgroundColor: 'white',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginVertical: 20,
    fontSize: 18
  },
  toDo:{
    backgroundColor: Theme.toDoBg,
    marginBottom: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  toDoText:{
    color: 'white',
    fontSize: 16,
    fontWeight: 500
  },
});
