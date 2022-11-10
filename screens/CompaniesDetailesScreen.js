import { View, Text, ScrollView, Image, SafeAreaView, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useQuery } from "@apollo/client";
import { GET_COMPANY } from "../graphql/queries";
import Icon from "react-native-vector-icons/AntDesign";
import CompanyDetailDescription from "../components/companies/CompanyDetailDescription";

const CompaniesDetailesScreen = () => {
  const navigation = useNavigation();
  
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  
  const {
    params: { slug },
  } = useRoute();

  const { data, loading } = useQuery(GET_COMPANY, {
    variables: {
      slug,
    },
  });



  return (
    <SafeAreaView>
      {data && (
        <View className="relative items-center ">
            <Image
              source={{ url: data.company.avatar.url }}
              className="w-[190px] h-[190px] py-2"
            />
          <TouchableOpacity onPress={navigation.goBack} className="absolute top-3 left-3 bg-[#1e0d5d] p-3 rounded-full">
            <Icon name="left" color="#fff" size={20}/>
          </TouchableOpacity>

        </View>

      )}
      <CompanyDetailDescription data={data}/>
    </SafeAreaView>
  );
};

export default CompaniesDetailesScreen;
