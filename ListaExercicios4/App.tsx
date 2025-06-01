import React, { useEffect, useState, useMemo } from 'react';
import { Text, SafeAreaView, View, NativeSyntheticEvent, TextInput, TextInputSubmitEditingEventData, FlatList, _View, ViewStyle, StyleSheet } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';

import stylesHorizontal from './styleHorizontal';
import stylesVertical from './styleVertical';

export default function App() {
  const [orientation, setOrientation] = useState<number | null>(null);
  const [nomes, addNome] = useState<string[]>([]);

  const handleOrientationChange = (event: ScreenOrientation.OrientationChangeEvent) => {
    setOrientation(event.orientationInfo.orientation);
  };

  const handleSubmit = (event: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => {
    const novoNome = event.nativeEvent.text.trim();
    if(novoNome){
      addNome([...nomes, novoNome])
    }
  };

  useEffect(() => {
    async function fetchOrientation(){
      const self = await ScreenOrientation.getOrientationAsync();
      setOrientation(self);
    }
    fetchOrientation();

    ScreenOrientation.addOrientationChangeListener(handleOrientationChange);

    return() => {
      ScreenOrientation.removeOrientationChangeListeners();
    };
  }, []);
  
  const flexDirection = orientation === ScreenOrientation.Orientation.PORTRAIT_UP ? 'column' : 'row';
  const backgroundColor = orientation === ScreenOrientation.Orientation.PORTRAIT_UP ? '#f00' : '#a78';

  const containerStyle: ViewStyle = {
    margin: 4,
    padding: 8,
    flex: 1,
    backgroundColor, 
  }

  const inputStyle = {
    backgroundColor: 'white',
    width: 300,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
  }

  const currentStyle = useMemo(() => {
    return flexDirection === 'column' ? stylesVertical : stylesHorizontal;
  }, [flexDirection]);

  return (
    <SafeAreaView style={currentStyle.container}>
      <View style={currentStyle.top}>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>Lista 4</Text>
      </View>

      <View style={currentStyle.body}>
        <View style={currentStyle.middle}>
          <Text style={{color: 'white'}}>Nome</Text>
          <TextInput onSubmitEditing={handleSubmit} returnKeyType="done" style={inputStyle}/>
        </View>
        <View style={currentStyle.bottom}>
          <FlatList 
            data={nomes}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={{ padding: 10 }}
            renderItem={({item}) => (
              <View style={containerStyle}>
                <Text style={{ textAlign: 'center' }}>{item}</Text>
              </View>
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}