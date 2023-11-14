import countries from 'world-countries';

// Unformatted countries
// console.log("Unformatted countries");
// console.log(countries);

const formattedCountries = countries.map((country) => ({
    value: country.cca2,
    label: country.name.common,
    flag: country.flag,
    latlng: country.latlng,
    region: country.region,
})).sort((a, b) => a.label.localeCompare(b.label));

// console.log(formattedCountries);

const useCountries = () => {
    const getAll = () => formattedCountries;

    const getByValue = (value: string) => {
        return formattedCountries.find((item) => item.value === value);
    }

    return {
        getAll,
        getByValue
    }
};

export default useCountries;