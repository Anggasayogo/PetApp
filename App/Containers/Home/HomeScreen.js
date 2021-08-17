import React, { useState, useEffect } from 'react'
import { Text, View, FlatList, SafeAreaView, Platform, UIManager, LayoutAnimation } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import FastImage from 'react-native-fast-image'
import ImageView from 'react-native-image-view'
import DogAction from '../../Redux/DogRedux'
import { connect } from 'react-redux'

// Components
import Button from '../../Components/Button'

// Styles
import styles from '../Styles/Home/HomeScreenStyle'
import { apply } from '../../Themes/OsmiProvider'

if (Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const HomeScreen = props => {
  const [selected, setSelected] = useState('')
  const [selectedImage, setSelectedImage] = useState('')
  const [visible, setVisible] = useState(false)
  const images = [
    {
        source: {
            uri: selectedImage,
        },
        width: 806,
        height: 720,
    },
  ];

  useEffect(()=>{
    props.getDogList()
  },[])

  const shownDetailButton = () => {
    return(
      <ImageView
          images={images}
          imageIndex={0}
          isVisible={visible}
          onClose={()=> setVisible(false)}
      />
    )
  }

  const SubCategory = () => {
    return(
      <View style={apply("px-2")}>
        {shownDetailButton()}
        <FlatList
          data={props.subDogList?.data}
          keyExtractor={(_, index)=> index.toString()}
          renderItem={({item, index}) =>(
            <Button style={styles.wrraperSubItem}>
              <Text style={styles.titleSub}>{item}</Text>
            </Button>  
          )}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
        <Text style={styles.titleText}>Lis All Image Sub Beerd</Text>
        <FlatList
          data={props.subDogImage?.data}
          keyExtractor={(_, index)=> index.toString()}
          renderItem={({item}) =>(
            <Button 
              onPress={()=>{ 
                setSelectedImage(item)
                setVisible(true)
              }}>
              <FastImage
                source={{
                  uri: item,
                  priority: FastImage.priority.normal,
                }}
                style={styles.image} 
                resizeMode={FastImage.resizeMode.cover}
              />
            </Button>
          )}
          horizontal={false}
          numColumns={2}
        />
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={props.dogList?.data?.message}
        keyExtractor={(_, index)=> index.toString()}
        renderItem={({item, index}) =>(
          <>
            <Button 
              onPress={()=>{ 
                LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)
                setSelected(item)
                props.getSubdogImage(item)
                props.getSubDog(item)
              }} 
              style={[styles.wrraperItem, item == selected && apply("bg-gray-200") ]}>
              <Text style={styles.textItem}>{index+1}. {item}</Text>
              <Icon name={item == selected ? "chevron-down" : "chevron-up" } size={15} color="gray" />
            </Button>
            {item === selected && SubCategory()}
          </>
        )}
      />
    </SafeAreaView>
  )
}

const mapStateToProps = state => ({
  dogList: state.dog.dogList,
  subDogList: state.dog.subDog,
  subDogImage: state.dog.subDogImage,
})

const mapDispatchToProps = dispatch => ({
  getDogList: () => dispatch(DogAction.dogListRequest()),
  getSubDog: (param) => dispatch(DogAction.subDogRequest(param)),
  getSubdogImage: (param) => dispatch(DogAction.subDogImageRequest(param))
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
