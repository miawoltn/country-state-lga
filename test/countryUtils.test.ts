import { getCountryByCode, getCountryByName } from '../src/utils/countryUtils';

test('getCountryByCode should return the correct country', () => {
    const country = getCountryByCode('NG');
    expect(country?.name).toBe('Nigeria');
});

test('getCountryByName should return the correct country', () => {
    const country = getCountryByName('Nigeria');
    expect(country?.code).toBe('NG');
});
