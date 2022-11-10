import { View, Text,ScrollView,Image } from 'react-native'
import React from 'react'
import CompaniesCard from './CompaniesCard'
import { useQuery } from '@apollo/client'
import { COMPANY_CATEGORY } from '../../graphql/queries'
const Companies = () => {
  const {data ,loading} = useQuery(COMPANY_CATEGORY);
  return (
        <ScrollView 
          horizontal
          showsHorizontalScrollIndicator={false} 
          contentContainerStyle={
            {
              paddingHorizontal:15,
            }
          } 
          className="bg-black/20"
        >
          {data && data.companies.map(company=>{
            return <CompaniesCard key={company.id} slug={company.slug} imgUrl={company.avatar.url}/>
          })}



        </ScrollView>
  )
}

export default Companies