import React from 'react'
import 'typeface-roboto'
import CityInfo from './CityInfo'

export default{
    title: "City Info",
    component: CityInfo
}

export const CityExample = ()=> <CityInfo city={"Buenos Aires"} country={"Argentina"}></CityInfo>
export const CityExample2 = ()=> <CityInfo city={"Valencia"} country={"Venezuela"}></CityInfo>