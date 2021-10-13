import React from 'react'
import WeatherDetails from './WeatherDetails'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

test ("WeatherDetails render", async ()=>{
    //AAA armar, resultado, testear

    const {findByText} = render(<WeatherDetails humidity={80} wind ={10}/>)

    const wind = await findByText(/10/)
    const humidity= await findByText(/80/)

    expect(wind).toHaveTextContent("Viento: 10km/h")
    expect(humidity).toHaveTextContent("Humedad: 80%")



})