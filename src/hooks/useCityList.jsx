import { useState, useEffect } from 'react'
import axios from 'axios'
import { getWeatherUrl } from '../utils/urls'
import getAllWeather from '../utils/transform/getAllWeather'
import { getCityCode } from '../utils/utils'


const useCityList = (cities, AllWeather, actions) => {


    //   const [AllWeather, setAllWeather] = useState({})
    const [error, setError] = useState(null)

    useEffect(() => {
        const setWeather = async (city, countryCode) => {
            const url = getWeatherUrl({ city, countryCode })

            try {

                const propName = getCityCode(city, countryCode)
                actions({ type: 'SET_ALL_WEATHER', payload:{ [propName]: {} }})
               // actions({ [propName]: {} })
                const response = await axios.get(url)

                const allWeatherAux = getAllWeather(response, city, countryCode)

                //setAllWeather(AllWeather => ({ ...AllWeather, ...allWeatherAux }))
                actions({ type: 'SET_ALL_WEATHER', payload: allWeatherAux})
               // actions(allWeatherAux)

            } catch (error) {
                if (error.response) {
                    setError("Ha ocurrido un error en el servidor del clima")
                }
                else if (error.request) {
                    setError("Verifique la conexion a internet")
                } else {
                    setError("Error al cargar los datos")
                }
            }
        }
        cities.forEach(({ city, countryCode }) => {
            if (!AllWeather[getCityCode(city, countryCode)]) {
                setWeather(city, countryCode)
            }

        });

    }, [cities, actions, AllWeather])

    return { error, setError }

}

export default useCityList