import React from 'react';
import { render } from '@testing-library/react'
import CityInfo from './CityInfo' // SUT: subject under testing (objeto del testeo)
test("CityInfo render", async ()=>{
    //AAA
    //Arrange
    //Act
    const city = "Buenos Aires"
    const country = "Argentina"
    //Render: renderiza el componente y retorna una serie de funciones de utilidad
    //Vamos a analizar su estado con el "Assert"
    const { findAllByRole } = render(<CityInfo city={city} country={country}/>)

    //Assert
    //findAllByRole nos va a buscar en este caso los componentes que sean
    //"heading" => H1, H2, H3,H4
    //El resultado es un array de componentes
    const cityAndCountryComponents = await findAllByRole("heading")

    // ??????
    // Definicion
    // Cuando el primer elemento heading se encuentre la ciudad de buenos aires y 
    // el segundo se encuentre argentina
    expect(cityAndCountryComponents[0]).toHaveTextContent(city)
    expect(cityAndCountryComponents[1]).toHaveTextContent(country)
    //Si estas condiciones se cumplen (expect), el test esta ok
})