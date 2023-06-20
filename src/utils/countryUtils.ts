import countries from '../data/countries';
import lgas from '../data/lgas';
import states from '../data/states';
import { ICountry, ILga, IState } from '../interfaces';
import { getStates } from './stateUtils';

const countryNameIndex: { [countryName: string]: ICountry[] } = {};
const countryCodeIndex: { [countryCode: string]: ICountry[] } = {};

Object.values(countries).forEach((country) => {
    const countryName = country.name;
    const countryCode = country.code;

    if (!countryNameIndex[countryName]) {
      countryNameIndex[countryName] = [];
    }
    countryNameIndex[countryName].push(country);

    if (!countryCodeIndex[countryCode]) {
        countryCodeIndex[countryCode] = [];
    }
    countryCodeIndex[countryCode].push(country);
});

export const getCountryByName = (name: string): ICountry | undefined => {
    const matchingCountries = countryNameIndex[name];
    if (matchingCountries && matchingCountries.length > 0) {
        matchingCountries[0].states = getStates(matchingCountries[0].code)
        return matchingCountries[0];
    }
    return undefined;
};

export const getCountryByCode = (code: string): ICountry | undefined => {
    const matchingCountries = countryCodeIndex[code];
    if (matchingCountries && matchingCountries.length > 0) {
        matchingCountries[0].states = getStates(matchingCountries[0].code)
        return matchingCountries[0];
    }
    return undefined;
};
