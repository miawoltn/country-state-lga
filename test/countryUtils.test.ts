import { getLgas, getStates } from '../dist/utils';
import { COUNTRY_CODES } from '../src/data/countries';
import { getCountryByCode, getCountryByName } from '../src/utils/countryUtils';

test('getCountryByCode should return the correct country', () => {
    const country = getCountryByCode(COUNTRY_CODES.Nigeria);
    expect(country?.name).toBe('Nigeria');
    expect(country?.states?.length).toBeGreaterThan(0);
});

test('getCountryByName should return the correct country', () => {
    const country = getCountryByName('Nigeria');
    expect(country?.code).toBe(COUNTRY_CODES.Nigeria);
});

test('getStates should return the correct states for a country', () => {
    const states = getStates(COUNTRY_CODES.Nigeria);
    expect(typeof states).toBe("object");
    expect(states?.at(0)?.countryCode).toEqual(COUNTRY_CODES.Nigeria);
});

test('getLgas should return the correct lgas for a state', () => {
    const lgas = getLgas('AB');
    expect(typeof lgas).toBe("object");
    expect(lgas?.at(0)?.stateCode).toEqual('AB');
});
