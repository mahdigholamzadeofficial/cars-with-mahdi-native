import {View, Text, SafeAreaView,Image, TextInput, ScrollView } from 'react-native'
import React, {useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
////////Icons
import Icon from "react-native-vector-icons/AntDesign";
//////// Components
import Companies from '../components/companies/Companies';
import CarCategories from "../components/posts/CarCategories"

////////GraphQl 
import {useQuery} from "@apollo/client";
import {  GET_SLUGS } from '../graphql/queries';



const HomeScreen = () => {
  ////////using navigation for changing default header!
  const navigation = useNavigation();
  useLayoutEffect(()=>{
  navigation.setOptions({
    headerShown:false
    });
  },[]);

  ////////creating an array of slugs for sending to CarCategories component to find related cars!
  const slugs =[];
  //////// getting slugs!
  const {data,loading} = useQuery(GET_SLUGS)
  //////// pushing all the slug if received them successfully!
  data && data.companies.map(item=>slugs.push(item.slug))
    


  const [searchValue,setSearchValue] = useState("")
  const changeHandler = (e) =>{
    setSearchValue(e.target.value)
  }

  return (
    <SafeAreaView className="bg-[#1e0d5d] pt-5 ">
      
      {/***********************  Header */}
      <View className="flex-row pb-3 items-center space-x-2 px-3">

        <Image source={{uri:"https://img.freepik.com/premium-vector/automotive-modern-logo-car-service-logo-automotive-repair_492254-83.jpg?w=2000"}} className="h-7 w-7 rounded-full"/>
        
        <View className ="flex-1">
          <Text className="text-gray-400 text-xs font-bold">Cars With Mahdi</Text>
          <Text  className="text-xl font-bold text-white">
            Favorite car
            <Icon name="down" size={20}  color="#fff" />
          </Text>
        </View>

        <Icon name='user' color="#fff" size={35}/>
      </View>

      {/***********************  Search */}
      <View className="flex-row pb-2 items-center space-x-4 mx-1">
        <View className="flex-row space-x-2 flex-1 p-3 bg-gray-200 ">
          <Icon name="search1"color="grey" size={30}/>
          <TextInput 
            placeholder='Search for car ...' 
            keyboardType='default'
            value={searchValue}
            onChange={changeHandler}
          />
        </View>
        <Icon name="barschart" color="#fff" size={30}/>
      </View>

      {/***********************  Body */}
      <ScrollView
        className="bg-[#3d2b8e]"
        contentContainerStyle={{paddingBottom:10}}
        showsVerticalScrollIndicator={false}
      >
        {/***********************  Companies */}
        <Companies/>

        {/***********************  Car Categories */}
        < CarCategories slug={slugs[0]}/>
        < CarCategories slug={slugs[3]}/>
        < CarCategories slug={slugs[2]}/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen