import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, StatusBar, Alert, Image, ScrollView, Dimensions } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { MaterialIcons } from '@expo/vector-icons';
import { View } from '@/components/Themed';

const { width, height } = Dimensions.get('window');

export default function TabSixScreen() {
  const [images, setImages] = useState<string[]>([]);

  const addImage = (uri: string) => {
    setImages((prev) => [...prev, uri]);
  };

  const deleteImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const openGallery = async() => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: 'images',
      quality: 1,
    });

    if(!result.canceled && result.assets && result.assets.length > 0){
      addImage(result.assets[0].uri);
    }
  };

  const openCamera = async() => {
    const permission = await ImagePicker.requestCameraPermissionsAsync();
    if(!permission.granted){
      Alert.alert("Permissão Negada", "Permita o uso da câmera para continuar");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      quality: 1,
    });

    if(!result.canceled && result.assets && result.assets.length > 0){
      addImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topRightButtons}>
        <TouchableOpacity onPress={openGallery} style={styles.iconBtn}>
          <MaterialIcons name='photo' size={28} color={"deepskyblue"}/>
        </TouchableOpacity>

        <TouchableOpacity onPress={openCamera} style={styles.iconBtn}>
          <MaterialIcons name='photo-camera' size={28} color={"deepskyblue"}/>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {images.map((uri, index) => (
          <View key={index} style={styles.imageWrapper}>
            <Image source={{ uri }} style={styles.image} resizeMode='contain' />
            <TouchableOpacity onPress={() => deleteImage(index)} style={styles.deleteBtn}>
              <MaterialIcons name='close' size={20} color={'white'} />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topRightButtons: {
    flexDirection: 'row',
    position: 'absolute',
    top: StatusBar.currentHeight,
    left: 10,
    zIndex: 1,
  },
  iconBtn: {
    marginHorizontal: 10,
  },
  imageWrapper: {
    position: 'relative',
    marginBottom: 20,
    width: width * 0.8,
    height: height * 0.4,
  },
  image: {
    width: '100%',
    height: '100%',
    marginBottom: 20,
  },
  scrollContainer: {
    alignItems: 'center',
    paddingTop: 100,
    paddingBottom: 50,
  },
  deleteBtn: {
    position: 'absolute',
    top: 5,
    left: 5,
    backgroundColor: '#F00',
    borderRadius: 15,
    marginLeft: 30,
    padding: 4,
    zIndex: 2,
  },
});
