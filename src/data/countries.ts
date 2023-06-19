import { ICountry } from "../interfaces";

const countries: ICountry[] = [
    {
        name: 'Afghanistan',
        code: 'AF',
        capital: 'Kabul',
    },
    {
        name: 'Albania',
        code: 'AL',
        capital: 'Tirana',
    },
    {
        name: 'Algeria',
        code: 'DZ',
        capital: 'Algiers',
    },
    {
        name: 'American Samoa',
        code: 'AS',
        capital: 'Pago Pago',
    },
    {
        name: 'Andorra',
        code: 'AD',
        capital: 'Andorra la Vella',
    },
    {
        name: 'Angola',
        code: 'AO',
        capital: 'Luanda',
    },
    {
        name: 'Antigua and Barbuda',
        code: 'AG',
        capital: "Saint John's",
    },
    {
        name: 'Anguilla',
        code: 'AI',
        capital: 'The Valley',
    },
    {
        name: 'Armenia',
        code: 'AM',
        capital: 'Yerevan',
    },
    {
        name: 'Antarctica',
        code: 'AQ',
        capital: '',
    },
    {
        name: 'Argentina',
        code: 'AR',
        capital: 'Buenos Aires',
    },
    {
        name: 'Austria',
        code: 'AT',
        capital: 'Vienna',
    },
    {
        name: 'Australia',
        code: 'AU',
        capital: 'Canberra',
    },
    {
        name: 'Aruba',
        code: 'AW',
        capital: 'Oranjestad',
    },
    {
        name: 'Åland',
        code: 'AX',
        capital: 'Mariehamn',
    },
    {
        name: 'Azerbaijan',
        code: 'AZ',
        capital: 'Baku',
    },
    {
        name: 'Bosnia and Herzegovina',
        code: 'BA',
        capital: 'Sarajevo',
    },
    {
        name: 'Barbados',
        code: 'BB',
        capital: 'Bridgetown',
    },
    {
        name: 'Bangladesh',
        code: 'BD',
        capital: 'Dhaka',
    },
    {
        name: 'Belgium',
        code: 'BE',
        capital: 'Brussels',
    },
    {
        name: 'Burkina Faso',
        code: 'BF',
        capital: 'Ouagadougou',
    },
    {
        name: 'Bulgaria',
        code: 'BG',
        capital: 'Sofia',
    },
    {
        name: 'Bahrain',
        code: 'BH',
        capital: 'Manama',
    },
    {
        name: 'Burundi',
        code: 'BI',
        capital: 'Bujumbura',
    },
    {
        name: 'Benin',
        code: 'BJ',
        capital: 'Porto-Novo',
    },
    {
        name: 'Saint Barthélemy',
        code: 'BL',
        capital: 'Gustavia',
    },
    {
        name: 'Bermuda',
        code: 'BM',
        capital: 'Hamilton',
    },
    {
        name: 'Brunei',
        code: 'BN',
        capital: 'Bandar Seri Begawan',
    },
    {
        name: 'Bolivia',
        code: 'BO',
        capital: 'Sucre',
    },
    {
        name: 'Bonaire',
        code: 'BQ',
        capital: 'Kralendijk',
    },
    {
        name: 'Brazil',
        code: 'BR',
        capital: 'Brasília',
    },
    {
        name: 'Bahamas',
        code: 'BS',
        capital: 'Nassau',
    },
    {
        name: 'Bhutan',
        code: 'BT',
        capital: 'Thimphu',
    },
    {
        name: 'Bouvet Island',
        code: 'BV',
        capital: '',
    },
    {
        name: 'Botswana',
        code: 'BW',
        capital: 'Gaborone',
    },
    {
        name: 'Belarus',
        code: 'BY',
        capital: 'Minsk',
    },
    {
        name: 'Belize',
        code: 'BZ',
        capital: 'Belmopan',
    },
    {
        name: 'Canada',
        code: 'CA',
        capital: 'Ottawa',
    },
    {
        name: 'Cocos [Keeling] Islands',
        code: 'CC',
        capital: 'West Island',
    },
    {
        name: 'Democratic Republic of the Congo',
        code: 'CD',
        capital: 'Kinshasa',
    },
    {
        name: 'Central African Republic',
        code: 'CF',
        capital: 'Bangui',
    },
    {
        name: 'Republic of the Congo',
        code: 'CG',
        capital: 'Brazzaville',
    },
    {
        name: 'Switzerland',
        code: 'CH',
        capital: 'Bern',
    },
    {
        name: 'Ivory Coast',
        code: 'CI',
        capital: 'Yamoussoukro',
    },
    {
        name: 'Cook Islands',
        code: 'CK',
        capital: 'Avarua',
    },
    {
        name: 'Chile',
        code: 'CL',
        capital: 'Santiago',
    },
    {
        name: 'Cameroon',
        code: 'CM',
        capital: 'Yaoundé',
    },
    {
        name: 'China',
        code: 'CN',
        capital: 'Beijing',
    },
    {
        name: 'Colombia',
        code: 'CO',
        capital: 'Bogotá',
    },
    {
        name: 'Costa Rica',
        code: 'CR',
        capital: 'San José',
    },
    {
        name: 'Cuba',
        code: 'CU',
        capital: 'Havana',
    },
    {
        name: 'Cape Verde',
        code: 'CV',
        capital: 'Praia',
    },
    {
        name: 'Curacao',
        code: 'CW',
        capital: 'Willemstad',
    },
    {
        name: 'Christmas Island',
        code: 'CX',
        capital: 'Flying Fish Cove',
    },
    {
        name: 'Cyprus',
        code: 'CY',
        capital: 'Nicosia',
    },
    {
        name: 'Czech Republic',
        code: 'CZ',
        capital: 'Prague',
    },
    {
        name: 'Germany',
        code: 'DE',
        capital: 'Berlin',
    },
    {
        name: 'Djibouti',
        code: 'DJ',
        capital: 'Djibouti',
    },
    {
        name: 'Denmark',
        code: 'DK',
        capital: 'Copenhagen',
    },
    {
        name: 'Dominica',
        code: 'DM',
        capital: 'Roseau',
    },
    {
        name: 'Dominican Republic',
        code: 'DO',
        capital: 'Santo Domingo',
    },
    {
        name: 'Ecuador',
        code: 'EC',
        capital: 'Quito',
    },
    {
        name: 'Estonia',
        code: 'EE',
        capital: 'Tallinn',
    },
    {
        name: 'Egypt',
        code: 'EG',
        capital: 'Cairo'
    },
    {
        name: 'Western Sahara',
        code: 'EH',
        capital: 'El Aaiún',
    },
    {
        name: 'Eritrea',
        code: 'ER',
        capital: 'Asmara',
    },
    {
        name: 'Spain',
        code: 'ES',
        capital: 'Madrid',
    },
    {
        name: 'Ethiopia',
        code: 'ET',
        capital: 'Addis Ababa',
    },
    {
        name: 'Finland',
        code: 'FI',
        capital: 'Helsinki',
    },
    {
        name: 'Fiji',
        code: 'FJ',
        capital: 'Suva',
    },
    {
        name: 'Falkland Islands',
        code: 'FK',
        capital: 'Stanley',
    },
    {
        name: 'Micronesia',
        code: 'FM',
        capital: 'Palikir',
    },
    {
        name: 'Faroe Islands',
        code: 'FO',
        capital: 'Tórshavn',
    },
    {
        name: 'France',
        code: 'FR',
        capital: 'Paris',
    },
    {
        name: 'Gabon',
        code: 'GA',
        capital: 'Libreville',
    },
    {
        name: 'United Kingdom',
        code: 'GB',
        capital: 'London',
    },
    {
        name: 'Grenada',
        code: 'GD',
        capital: "St. George's",
    },
    {
        name: 'Georgia',
        code: 'GE',
        capital: 'Tbilisi',
    },
    {
        name: 'French Guiana',
        code: 'GF',
        capital: 'Cayenne',
    },
    {
        name: 'Guernsey',
        code: 'GG',
        capital: 'St. Peter Port',
    },
    {
        name: 'Ghana',
        code: 'GH',
        capital: 'Accra',
    },
    {
        name: 'Gibraltar',
        code: 'GI',
        capital: 'Gibraltar',
    },
    {
        name: 'Greenland',
        code: 'GL',
        capital: 'Nuuk',
    },
    {
        name: 'Gambia',
        code: 'GM',
        capital: 'Banjul',
    },
    {
        name: 'Guinea',
        code: 'GN',
        capital: 'Conakry',
    },
    {
        name: 'Guadeloupe',
        code: 'GP',
        capital: 'Basse-Terre',
    },
    {
        name: 'Equatorial Guinea',
        code: 'GQ',
        capital: 'Malabo',
    },
    {
        name: 'Greece',
        code: 'GR',
        capital: 'Athens',
    },
    {
        name: 'South Georgia and the South Sandwich Islands',
        code: 'GS',
        capital: 'King Edward Point',
    },
    {
        name: 'Guatemala',
        code: 'GT',
        capital: 'Guatemala City',
    },
    {
        name: 'Guam',
        code: 'GU',
        capital: 'Hagåtña',
    },
    {
        name: 'Guinea-Bissau',
        code: 'GW',
        capital: 'Bissau',
    },
    {
        name: 'Guyana',
        code: 'GY',
        capital: 'Georgetown',
    },
    {
        name: 'Hong Kong',
        code: 'HK',
        capital: 'City of Victoria',
    },
    {
        name: 'Heard Island and McDonald Islands',
        code: 'HM',
        capital: '',
    },
    {
        name: 'Honduras',
        code: 'HN',
        capital: 'Tegucigalpa',
    },
    {
        name: 'Croatia',
        code: 'HR',
        capital: 'Zagreb',
    },
    {
        name: 'Haiti',
        code: 'HT',
        capital: 'Port-au-Prince',
    },
    {
        name: 'Hungary',
        code: 'HU',
        capital: 'Budapest',
    },
    {
        name: 'Indonesia',
        code: 'ID',
        capital: 'Jakarta',
    },
    {
        name: 'Ireland',
        code: 'IE',
        capital: 'Dublin',
    },
    {
        name: 'Israel',
        code: 'IL',
        capital: 'Jerusalem',
    },
    {
        name: 'Isle of Man',
        code: 'IM',
        capital: 'Douglas',
    },
    {
        name: 'India',
        code: 'IN',
        capital: 'New Delhi',
    },
    {
        name: 'British Indian Ocean Territory',
        code: 'IO',
        capital: 'Diego Garcia',
    },
    {
        name: 'Iraq',
        code: 'IQ',
        capital: 'Baghdad',
    },
    {
        name: 'Iran',
        code: 'IR',
        capital: 'Tehran',
    },
    {
        name: 'Iceland',
        code: 'IS',
        capital: 'Reykjavik',
    },
    {
        name: 'Italy',
        code: 'IT',
        capital: 'Rome',
    },
    {
        name: 'Jersey',
        code: 'JE',
        capital: 'Saint Helier',
    },
    {
        name: 'Jamaica',
        code: 'JM',
        capital: 'Kingston',
    },
    {
        name: 'Jordan',
        code: 'JO',
        capital: 'Amman',
    },
    {
        name: 'Japan',
        code: 'JP',
        capital: 'Tokyo',
    },
    {
        name: 'Kenya',
        code: 'KE',
        capital: 'Nairobi',
    },
    {
        name: 'Kyrgyzstan',
        code: 'KG',
        capital: 'Bishkek',
    },
    {
        name: 'Cambodia',
        code: 'KH',
        capital: 'Phnom Penh',
    },
    {
        name: 'Kiribati',
        code: 'KI',
        capital: 'South Tarawa',
    },
    {
        name: 'Comoros',
        code: 'KM',
        capital: 'Moroni',
    },
    {
        name: 'Saint Kitts and Nevis',
        code: 'KN',
        capital: 'Basseterre',
    },
    {
        name: 'North Korea',
        code: 'KP',
        capital: 'Pyongyang',
    },
    {
        name: 'South Korea',
        code: 'KR',
        capital: 'Seoul',
    },
    {
        name: 'Kuwait',
        code: 'KW',
        capital: 'Kuwait City',
    },
    {
        name: 'Cayman Islands',
        code: 'KY',
        capital: 'George Town',
    },
    {
        name: 'Kazakhstan',
        code: 'KZ',
        capital: 'Astana',
    },
    {
        name: 'Laos',
        code: 'LA',
        capital: 'Vientiane',
    },
    {
        name: 'Lebanon',
        code: 'LB',
        capital: 'Beirut',
    },
    {
        name: 'Saint Lucia',
        code: 'LC',
        capital: 'Castries',
    },
    {
        name: 'Liechtenstein',
        code: 'LI',
        capital: 'Vaduz',
    },
    {
        name: 'Sri Lanka',
        code: 'LK',
        capital: 'Colombo',
    },
    {
        name: 'Liberia',
        code: 'LR',
        capital: 'Monrovia',
    },
    {
        name: 'Lesotho',
        code: 'LS',
        capital: 'Maseru',
    },
    {
        name: 'Lithuania',
        code: 'LT',
        capital: 'Vilnius',
    },
    {
        name: 'Luxembourg',
        code: 'LU',
        capital: 'Luxembourg',
    },
    {
        name: 'Latvia',
        code: 'LV',
        capital: 'Riga',
    },
    {
        name: 'Libya',
        code: 'LY',
        capital: 'Tripoli',
    },
    {
        name: 'Morocco',
        code: 'MA',
        capital: 'Rabat',
    },
    {
        name: 'Monaco',
        code: 'MC',
        capital: 'Monaco',
    },
    {
        name: 'Moldova',
        code: 'MD',
        capital: 'Chișinău',
    },
    {
        name: 'Montenegro',
        code: 'ME',
        capital: 'Podgorica',
    },
    {
        name: 'Saint Martin',
        code: 'MF',
        capital: 'Marigot',
    },
    {
        name: 'Madagascar',
        code: 'MG',
        capital: 'Antananarivo',
    },
    {
        name: 'Marshall Islands',
        code: 'MH',
        capital: 'Majuro',
    },
    {
        name: 'North Macedonia',
        code: 'MK',
        capital: 'Skopje',
    },
    {
        name: 'Mali',
        code: 'ML',
        capital: 'Bamako',
    },
    {
        name: 'Myanmar [Burma]',
        code: 'MM',
        capital: 'Naypyidaw',
    },
    {
        name: 'Mongolia',
        code: 'MN',
        capital: 'Ulan Bator',
    },
    {
        name: 'Macao',
        code: 'MO',
        capital: '',
    },
    {
        name: 'Northern Mariana Islands',
        code: 'MP',
        capital: 'Saipan',
    },
    {
        name: 'Martinique',
        code: 'MQ',
        capital: 'Fort-de-France',
    },
    {
        name: 'Mauritania',
        code: 'MR',
        capital: 'Nouakchott',
    },
    {
        name: 'Montserrat',
        code: 'MS',
        capital: 'Plymouth',
    },
    {
        name: 'Malta',
        code: 'MT',
        capital: 'Valletta',
    },
    {
        name: 'Mauritius',
        code: 'MU',
        capital: 'Port Louis',
    },
    {
        name: 'Maldives',
        code: 'MV',
        capital: 'Malé',
    },
    {
        name: 'Malawi',
        code: 'MW',
        capital: 'Lilongwe',
    },
    {
        name: 'Mexico',
        code: 'MX',
        capital: 'Mexico City',
    },
    {
        name: 'Malaysia',
        code: 'MY',
        capital: 'Kuala Lumpur',
    },
    {
        name: 'Mozambique',
        code: 'MZ',
        capital: 'Maputo',
    },
    {
        name: 'Namibia',
        code: 'NA',
        capital: 'Windhoek',
    },
    {
        name: 'New Caledonia',
        code: 'NC',
        capital: 'Nouméa',
    },
    {
        name: 'Niger',
        code: 'NE',
        capital: 'Niamey',
    },
    {
        name: 'Norfolk Island',
        code: 'NF',
        capital: 'Kingston',
    },
    {
        name: 'Nigeria',
        code: 'NG',
        capital: 'Abuja',
    },
    {
        name: 'Nicaragua',
        code: 'NI',
        capital: 'Managua',
    },
    {
        name: 'Netherlands',
        code: 'NL',
        capital: 'Amsterdam',
    },
    {
        name: 'Norway',
        code: 'NO',
        capital: 'Oslo',
    },
    {
        name: 'Nepal',
        code: 'NP',
        capital: 'Kathmandu',
    },
    {
        name: 'Nauru',
        code: 'NR',
        capital: 'Yaren',
    },
    {
        name: 'Niue',
        code: 'NU',
        capital: 'Alofi',
    },
    {
        name: 'New Zealand',
        code: 'NZ',
        capital: 'Wellington',
    },
    {
        name: 'Oman',
        code: 'OM',
        capital: 'Muscat',
    },
    {
        name: 'Panama',
        code: 'PA',
        capital: 'Panama City',
    },
    {
        name: 'Peru',
        code: 'PE',
        capital: 'Lima',
    },
    {
        name: 'French Polynesia',
        code: 'PF',
        capital: 'Papeetē',
    },
    {
        name: 'Papua New Guinea',
        code: 'PG',
        capital: 'Port Moresby',
    },
    {
        name: 'Philippines',
        code: 'PH',
        capital: 'Manila',
    },
    {
        name: 'Pakistan',
        code: 'PK',
        capital: 'Islamabad',
    },
    {
        name: 'Poland',
        code: 'PL',
        capital: 'Warsaw',
    },
    {
        name: 'Saint Pierre and Miquelon',
        code: 'PM',
        capital: 'Saint-Pierre',
    },
    {
        name: 'Pitcairn Islands',
        code: 'PN',
        capital: 'Adamstown',
    },
    {
        name: 'Puerto Rico',
        code: 'PR',
        capital: 'San Juan',
    },
    {
        name: 'Palestine',
        code: 'PS',
        capital: 'Ramallah',
    },
    {
        name: 'Portugal',
        code: 'PT',
        capital: 'Lisbon',
    },
    {
        name: 'Palau',
        code: 'PW',
        capital: 'Ngerulmud',
    },
    {
        name: 'Paraguay',
        code: 'PY',
        capital: 'Asunción',
    },
    {
        name: 'Qatar',
        code: 'QA',
        capital: 'Doha',
    },
    {
        name: 'Réunion',
        code: 'RE',
        capital: 'Saint-Denis',
    },
    {
        name: 'Romania',
        code: 'RO',
        capital: 'Bucharest',
    },
    {
        name: 'Serbia',
        code: 'RS',
        capital: 'Belgrade',
    },
    {
        name: 'Russia',
        code: 'RU',
        capital: 'Moscow',
    },
    {
        name: 'Rwanda',
        code: 'RW',
        capital: 'Kigali',
    },
    {
        name: 'Saudi Arabia',
        code: 'SA',
        capital: 'Riyadh',
    },
    {
        name: 'Solomon Islands',
        code: 'SB',
        capital: 'Honiara',
    },
    {
        name: 'Seychelles',
        code: 'SC',
        capital: 'Victoria',
    },
    {
        name: 'Sudan',
        code: 'SD',
        capital: 'Khartoum',
    },
    {
        name: 'Sweden',
        code: 'SE',
        capital: 'Stockholm',
    },
    {
        name: 'Singapore',
        code: 'SG',
        capital: 'Singapore',
    },
    {
        name: 'Saint Helena',
        code: 'SH',
        capital: 'Jamestown',
    },
    {
        name: 'Slovenia',
        code: 'SI',
        capital: 'Ljubljana',
    },
    {
        name: 'Svalbard and Jan Mayen',
        code: 'SJ',
        capital: 'Longyearbyen',
    },
    {
        name: 'Swaziland',
        code: 'SZ',
        capital: 'Lobamba',
    },
    {
        name: 'Slovakia',
        code: 'SK',
        capital: 'Bratislava',
    },
    {
        name: 'Sierra Leone',
        code: 'SL',
        capital: 'Freetown',
    },
    {
        name: 'San Marino',
        code: 'SM',
        capital: 'City of San Marino',
    },
    {
        name: 'Senegal',
        code: 'SN',
        capital: 'Dakar',
    },
    {
        name: 'Somalia',
        code: 'SO',
        capital: 'Mogadishu',
    },
    {
        name: 'Suriname',
        code: 'SR',
        capital: 'Paramaribo',
    },
    {
        name: 'South Sudan',
        code: 'SS',
        capital: 'Juba',
    },
    {
        name: 'São Tomé and Príncipe',
        code: 'ST',
        capital: 'São Tomé',
    },
    {
        name: 'El Salvador',
        code: 'SV',
        capital: 'San Salvador',
    },
    {
        name: 'Sint Maarten',
        code: 'SX',
        capital: 'Philipsburg',
    },
    {
        name: 'Syria',
        code: 'SY',
        capital: 'Damascus',
    },
    {
        name: 'Taiwan',
        code: 'TW',
        capital: 'Taipei',
    },
    {
        name: 'Turks and Caicos Islands',
        code: 'TC',
        capital: 'Cockburn Town',
    },
    {
        name: 'Chad',
        code: 'TD',
        capital: "N'Djamena",
    },
    {
        name: 'French Southern Territories',
        code: 'TF',
        capital: 'Port-aux-Français',
    },
    {
        name: 'Togo',
        code: 'TG',
        capital: 'Lomé',
    },
    {
        name: 'Thailand',
        code: 'TH',
        capital: 'Bangkok',
    },
    {
        name: 'Tajikistan',
        code: 'TJ',
        capital: 'Dushanbe',
    },
    {
        name: 'Tokelau',
        code: 'TK',
        capital: 'Fakaofo',
    },
    {
        name: 'East Timor',
        code: 'TL',
        capital: 'Dili',
    },
    {
        name: 'Turkmenistan',
        code: 'TM',
        capital: 'Ashgabat',
    },
    {
        name: 'Tunisia',
        code: 'TN',
        capital: 'Tunis',
    },
    {
        name: 'Tonga',
        code: 'TO',
        capital: "Nuku'alofa",
    },
    {
        name: 'Turkey',
        code: 'TR',
        capital: 'Ankara',
    },
    {
        name: 'Trinidad and Tobago',
        code: 'TT',
        capital: 'Port of Spain',
    },
    {
        name: 'Tuvalu',
        code: 'TV',
        capital: 'Funafuti',
    },
    {
        name: 'Uganda',
        code: 'UG',
        capital: 'Kampala',
    },
    {
        name: 'Tanzania',
        code: 'TZ',
        capital: 'Dodoma',
    },
    {
        name: 'Ukraine',
        code: 'UA',
        capital: 'Kyiv',
    },
    {
        name: 'United Arab Emirates',
        code: 'AE',
        capital: 'Abu Dhabi',
    },
    {
        name: 'U.S. Minor Outlying Islands',
        code: 'UM',
        capital: '',
    },
    {
        name: 'United States',
        code: 'US',
        capital: 'Washington D.C.',
    },
    {
        name: 'Uruguay',
        code: 'UY',
        capital: 'Montevideo',
    },
    {
        name: 'Uzbekistan',
        code: 'UZ',
        capital: 'Tashkent',
    },
    {
        name: 'Vatican City',
        code: 'VA',
        capital: 'Vatican City',
    },
    {
        name: 'Saint Vincent and the Grenadines',
        code: 'VC',
        capital: 'Kingstown',
    },
    {
        name: 'Venezuela',
        code: 'VE',
        capital: 'Caracas',
    },
    {
        name: 'British Virgin Islands',
        code: 'VG',
        capital: 'Road Town',
    },
    {
        name: 'U.S. Virgin Islands',
        code: 'VI',
        capital: 'Charlotte Amalie',
    },
    {
        name: 'Vietnam',
        code: 'VN',
        capital: 'Hanoi',
    },
    {
        name: 'Vanuatu',
        code: 'VU',
        capital: 'Port Vila',
    },
    {
        name: 'Wallis and Futuna',
        code: 'WF',
        capital: 'Mata-Utu',
    },
    {
        name: 'Samoa',
        code: 'WS',
        capital: 'Apia',
    },
    {
        name: 'Kosovo',
        code: 'XK',
        capital: 'Pristina',
    },
    {
        name: 'Yemen',
        code: 'YE',
        capital: "Sana'a",
    },
    {
        name: 'Mayotte',
        code: 'YT',
        capital: 'Mamoudzou',
    },
    {
        name: 'South Africa',
        code: 'ZA',
        capital: 'Pretoria',
    },
    {
        name: 'Zambia',
        code: 'ZM',
        capital: 'Lusaka',
    },
    {
        name: 'Zimbabwe',
        code: 'ZW',
        capital: 'Harare',
    }
];

export default countries;
