import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Posts = ({ data }) => {
  const navigation = useNavigation()
  return (
    data &&
    data.company.post.map((item) => {
      return (
        <TouchableOpacity onPress={()=>navigation.navigate("postsDetailes",{slug:item.slug})} key={item.id} className="mx-5">
          <View className="flex-row items-center mb-2">
            <Image
              source={{ url: data.company.avatar.url }}
              className="mr-2 w-10 h-10"
            />
            <Text className="text-white font-bold">{data.company.name}</Text>
          </View>
          <View className="relative">
            <Image
              source={{
                url: item.coverPhoto.url,
              }}
              className="w-60 h-40"
            />
            <View className="justify-end bg-black/20 absolute bottom-0 left-0 h-full w-full">
              <Text className=" italic font-bold  p-2 text-white">
                {item.carName}
              </Text>
              <Text className="py-2 text-Black bg-white font-bold text-center">
                Read more
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      );
    })
  );
};

export default Posts;
