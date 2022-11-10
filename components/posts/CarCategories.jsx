import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/AntDesign";
import { gql, useQuery } from "@apollo/client";
import { GET_COMPANY } from "../../graphql/queries";
import Posts from "./Posts";
import { useNavigation } from "@react-navigation/native";

const CarCategories = ({ slug }) => {
  const navigate = useNavigation();
  const { data, loading } = useQuery(GET_COMPANY, {
    variables: {
      slug,
    },
  });

  return (
    slug && (
      <View className="my-6">
        <TouchableOpacity
          onPress={() => navigate.navigate("companiesDetailes",{slug})}
          className="flex-row  items-center justify-between px-8"
        >
          <Text className="font-blod text-xl text-white">
            {slug.toUpperCase()}
          </Text>
          <Icon name="arrowright" size={20} color="#fff" />
        </TouchableOpacity>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 5,
          }}
          className="pt-4"
        >
          <Posts data={data} />
        </ScrollView>
      </View>
    )
  );
};

export default CarCategories;
