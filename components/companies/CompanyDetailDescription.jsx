import { View, Text, ScrollView } from "react-native";
import React from "react";
import sanitizeHtml from "sanitize-html";
import Posts from "../posts/Posts";
const CompanyDetailDescription = ({ data }) => {
  return (
    data && (
      <ScrollView
        vertical
        contentContainerStyle={{ paddingVertical: 20 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="items-center bg-[#3d2b8e] rounded-t-xl py-3">
          <Text className="font-bold text-white  mt-3 text-3xl">
            {data.company.name}
          </Text>
          <Text className="font-bold text-gray-300  my-3 text-xl">
            {data.company.country}
          </Text>

          <Text className="font-bold text-white text-justify px-4 text-lg">
            {data.company.description.text}
          </Text>
        </View>
        <ScrollView
          className="space-x-3 pb-[200px] bg-[#1e0d5d]"
          horizontal
          contentContainerStyle={{ paddingVertical: 20 }}
        >
          <Posts data={data} />
        </ScrollView>
      </ScrollView>
    )
  );
};

export default CompanyDetailDescription;

{
  /* <Text dangerouslySetInnerHTML={{__html:sanitizeHtml(data.company.description.html)}} className="font-bold text-white text-justify px-4 text-lg"> */
}
