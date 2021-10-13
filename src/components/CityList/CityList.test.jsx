import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import CityList from './CityList'

const cities = [
    { city: "Lima,", country: " Peru", countryCode:"PE" },
    { city: "Bogota,", country: " Colombia", countryCode:"CO" },
    { city: "Caracas,", country: " Venezuela", countryCode:"VE" },
    { city: "Buenos Aires,", country: " Argentina", countryCode:"AR" }

]

test ("CityList render", async()=>{
    //AAA
    const { findAllByRole } = render(<CityList cities={cities} onClickCity={()=>{}}/>)
    //listitem pq son li
    const citiesArray = await findAllByRole("button")
    expect(citiesArray).toHaveLength(4)

}) 

test ("CityList click on item", async ()=>{
    //Debemos simular una accion del usuario click sobre un item usando func mock
    const fnClickOnItem = jest.fn()
    const { findAllByRole} = render(<CityList cities={cities} onClickCity={fnClickOnItem}/>)
    const items = await findAllByRole("button")

    //Ahora para simular la accion, vamos a utilizar la funcion
    //fireEvent, es parte de la libreria
    fireEvent.click(items[0])

    //Ahora que sucede?
    //Se debio la llamar la funcion fnClickonItem
    expect(fnClickOnItem).toHaveBeenCalledTimes(1)

})