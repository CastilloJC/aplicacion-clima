import React from 'react';
import Forecast from './Forecast'
import { render } from '@testing-library/react'

const forecastItemList = [
    {hour: 18, state:"clear", temperature:17, weekDay:"Jueves"},
    {hour: 6, state:"clouds", temperature:17, weekDay:"Viernes"},
    {hour: 12, state:"drizzle", temperature:17, weekDay:"Lunes"},
    {hour: 15, state:"clouds", temperature:17, weekDay:"Jueves"},
    {hour: 3, state:"rain", temperature:18, weekDay:"Domingo"},
    {hour: 14, state:"rain", temperature:12, weekDay:"Sabado"}
]


test ('Forecast render', async ()=>{
    //findAllByTestId nos permite encontrar cada item con esa marca
    const { findAllByTestId } = render(<Forecast forecastItemList={forecastItemList}/>)

    const forecastItem= await findAllByTestId("forecast-item-cointainer")
    expect(forecastItem).toHaveLength(6)

})