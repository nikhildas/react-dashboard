const axios = require("axios").default

const country_name_uri = "https://restcountries.com/v3.1/name/"

async function getCountryDetails(country_name: string) {
    try {
        const response = await axios.get(country_name_uri + country_name);
        console.log(response);

        return response;
    } catch (error) {
        console.error(error);
    }
}

export default getCountryDetails