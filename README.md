# country-utils

country-utils is a utility library that provides information about countries, including their capitals, states, country codes, and dial codes. It is designed to be used in JavaScript and TypeScript applications.

## Installation

You can install country-utils using npm or yarn. Make sure you have Node.js installed on your machine.

``` shell
npm install country-utils
````

or 

``` shell
npm install country-utils
```

# Usage
Here's an example of how you can use country-utils in your JavaScript or TypeScript code:

```ts
import { getCountryByCode, searchCountryByName } from 'country-utils';

const country = getCountryByCode('US');
console.log(country);
// Output: { name: 'United States', capital: 'Washington, D.C.', code: 'US', dialCode: '+1' }

const countryByName = searchCountryByName('Canada');
console.log(countryByName);
// Output: { name: 'Canada', capital: 'Ottawa', code: 'CA', dialCode: '+1' }
```

## Contributing
Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue on the GitHub repository.

## License
This project is licensed under the MIT License.
