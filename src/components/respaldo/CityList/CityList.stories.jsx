import React from 'react'
import CityList from './CityList'
import { action } from '@storybook/addon-actions'

export default{
    title: "CityList",
    component: CityList
}   
const cities = [
    {city:"Lima",country:"Peru"},
    {city:"Bogota",country:"Colombia"},
    {city:"Caracas",country:"Venezuela"},
    {city:"Buenos Aires",country:"Argentina"}

]

export const CityListExample= ()=><CityList cities={cities} onClickCity={action("Click en city")}/>