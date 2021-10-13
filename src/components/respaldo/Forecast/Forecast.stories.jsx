import React from 'react'
import Forecast from './Forecast'

export default {
    title: "Forecast",
    component: Forecast
}
const forecastItemList = [
    {hour: 18, state:"clear", temperature:17, weekDay:"Jueves"},
    {hour: 6, state:"clouds", temperature:17, weekDay:"Viernes"},
    {hour: 12, state:"drizzle", temperature:17, weekDay:"Lunes"},
    {hour: 15, state:"clouds", temperature:17, weekDay:"Jueves"},
    {hour: 3, state:"rain", temperature:18, weekDay:"Domingo"},
    {hour: 14, state:"rain", temperature:12, weekDay:"Sabado"}
]
export const ForecastExample = ()=> (<Forecast forecastItemList={forecastItemList}/>)