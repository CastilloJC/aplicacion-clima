import React from 'react'
import ForecastItem from './ForecastItem'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

// test ('ForecastItem render', async()  =>{
//     //AAA
//     const { findByText } = render (<ForecastItem weekDay={"lunes"} hour={10} temperature={10} state={"sunny"}/>)

//     const weekDay = await findByText(/lunes/)
//     const hour = await findByText(/10/)
//     const temperature = await findByText(/10/)

//     expect(weekDay).toHaveTextContent("lunes")
//     expect(hour).toHaveTextContent("10")
//     expect(temperature).toHaveTextContent("10")



// })

// test ('ForecastItem render', async()  =>{
//     //AAA
//     const { findByText } = render (<ForecastItem weekDay={"lunes"} hour={10} temperature={10} state={"sunny"}/>)

//     const weekDay = await findByText(/lunes/)
//     const hour = await findByText(/10/)
//     const temperature = await findByText(/10/)

//     expect(weekDay).toHaveTextContent("lunes")
//     expect(hour).toHaveTextContent("10")
//     expect(temperature).toHaveTextContent("10")



// })

test("ForecastItem render", async () =>{
    var map = render(<ForecastItem hour={10} state="clear" temperature={22} weekDay="Lunes"/>)
    var hour = await map.findByText(/10/)
    var temperature = await map.findByText(/22/)
    var weekDay = await map.findByText(/Lunes/)
    
    expect(hour).toHaveTextContent("10");
    expect(temperature).toHaveTextContent("22ºC");
    expect(weekDay).toHaveTextContent("Lunes");
});