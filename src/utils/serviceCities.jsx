const cities = [
    { city: "Lima", country: " Peru", countryCode:"PE" },
    { city: "Bogota", country: " Colombia", countryCode:"CO" },
    { city: "Caracas", country: " Venezuela", countryCode:"VE" },
    { city: "Buenos Aires", country: " Argentina", countryCode:"AR" }
]

export const getCities = () => (cities)

export const getCountryNameByCountryCode = (countryCode) =>(
cities.filter (c=>c.countryCode===countryCode)[0].country
)