import { View, Text, SafeAreaView,TouchableOpacity, ScrollView, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useQuery } from '@apollo/client'
import { GET_POST } from '../graphql/queries'
import Icon from "react-native-vector-icons/AntDesign";
const PostDetailScreen = () => {
  const navigation = useNavigation()
  const {params:{slug}} = useRoute()

  useLayoutEffect(()=>{
    navigation.setOptions({
      headerShown:false
    })
  },[])
  
  const {data,loading} = useQuery(GET_POST,{
    variables:{
      slug
    }
  });

  return (
    data && <SafeAreaView>
      <View className="bg-[#1e0d5d] py-3 text-white flex-row items-center justify-between px-4">
        <TouchableOpacity onPress={navigation.goBack} className="bg-white p-3 rounded-xl">
              <Icon name="left" color="#1e0d5d" size={20}/>
        </TouchableOpacity>
        <Text className="text-white font-bold text-lg ">
          {data.post.carName}
        </Text>
      </View>
      <ScrollView
        contentContainerStyle={{
          paddingVertical:30
        }}
        className="bg-[#3d2b8e] "
      >
        <Image source={{url:data.post.coverPhoto.url}} className="w-full h-[300px]"/>
        <View className="flex-row items-center mt-4 px-4 space-x-2">
          <Image source={{url:data.post.company.avatar.url}} className="mr-2 w-[60px] h-[70px]"/>
          <View>
            <Text className="text-white text-lg font-bold mb-1">{data.post.company.name}</Text>
            <Text className="text-white font-bold">{data.post.company.country}</Text>
          </View>
        </View>
        <Text className="text-white font-bold text-2xl italic px-4 my-3">{data.post.carName}</Text>
        <Text className="text-white font-bold text-justify px-4">
          {data.post.content.text}
        </Text>
      </ScrollView>
    </SafeAreaView>
  )
}

export default PostDetailScreen