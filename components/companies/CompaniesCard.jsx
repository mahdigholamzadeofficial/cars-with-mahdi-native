import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const CompaniesCard = ({ imgUrl, slug }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      className="mr-3 py-3"
      onPress={() => {
        navigation.navigate("companiesDetailes", { slug });
      }}
    >
      <View className="h-[80px] w-[80px] border-2 border-[#fff] rounded-full items-center justify-center overflow-hidden">
        <Image className="h-20 w-14 " source={{ uri: imgUrl }} />
      </View>
    </TouchableOpacity>
  );
};

export default CompaniesCard;
