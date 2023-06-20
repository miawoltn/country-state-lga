# country-state-lga

country-state-lga is a utility library that provides information about countries, including their capitals, states, lgas, country codes, and dial codes. It is designed to be used in JavaScript and TypeScript applications.

## Installation

You can install country-state-lga using npm or yarn. Make sure you have Node.js installed on your machine.

``` shell
npm install country-state-lga
````

or 

``` shell
npm install country-state-lga
```

# Usage
Here's an example of how you can use country-state-lga in your JavaScript or TypeScript code:

```ts
import { COUNTRY_CODES, getCountryByCode, searchCountryByName } from 'country-state-lga';

const country = getCountryByCode('NGA');
console.log(country);
// Output: { name: 'Nigeria', capital: 'Abuja', code: 'NGN' }

const countryByName = searchCountryByName('Canada');
console.log(countryByName);
// Output: { name: 'Canada', capital: 'Ottawa', code: 'CA' }
```

## Contributing
Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue on the GitHub repository.

## License
This project is licensed under the MIT License.
