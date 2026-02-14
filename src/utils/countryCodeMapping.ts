/**
 * Country Code to Country Name Mapping
 *
 * Maps international calling codes to their corresponding country names.
 * Includes all 194 UN-recognized countries.
 */

export const COUNTRY_CODE_MAPPING: Record<string, string> = {
  // A
  "+93": "Afghanistan",
  "+355": "Albania",
  "+213": "Algeria",
  "+376": "Andorra",
  "+244": "Angola",
  "+1-268": "Antigua and Barbuda",
  "+54": "Argentina",
  "+374": "Armenia",
  "+61": "Australia",
  "+43": "Austria",
  "+994": "Azerbaijan",

  // B
  "+1-242": "Bahamas",
  "+973": "Bahrain",
  "+880": "Bangladesh",
  "+1-246": "Barbados",
  "+375": "Belarus",
  "+32": "Belgium",
  "+501": "Belize",
  "+229": "Benin",
  "+975": "Bhutan",
  "+591": "Bolivia",
  "+387": "Bosnia and Herzegovina",
  "+267": "Botswana",
  "+55": "Brazil",
  "+673": "Brunei",
  "+359": "Bulgaria",
  "+226": "Burkina Faso",
  "+257": "Burundi",

  // C
  "+855": "Cambodia",
  "+237": "Cameroon",
  "+1": "United States / Canada",
  "+238": "Cape Verde",
  "+236": "Central African Republic",
  "+235": "Chad",
  "+56": "Chile",
  "+86": "China",
  "+57": "Colombia",
  "+269": "Comoros",
  "+242": "Congo (Brazzaville)",
  "+243": "Congo (Kinshasa)",
  "+506": "Costa Rica",
  "+385": "Croatia",
  "+53": "Cuba",
  "+357": "Cyprus",
  "+420": "Czech Republic",

  // D
  "+45": "Denmark",
  "+253": "Djibouti",
  "+1-767": "Dominica",
  "+1-809": "Dominican Republic",
  "+1-829": "Dominican Republic",
  "+1-849": "Dominican Republic",

  // E
  "+593": "Ecuador",
  "+20": "Egypt",
  "+503": "El Salvador",
  "+240": "Equatorial Guinea",
  "+291": "Eritrea",
  "+372": "Estonia",
  "+268": "Eswatini",
  "+251": "Ethiopia",

  // F
  "+679": "Fiji",
  "+358": "Finland",
  "+33": "France",

  // G
  "+241": "Gabon",
  "+220": "Gambia",
  "+995": "Georgia",
  "+49": "Germany",
  "+233": "Ghana",
  "+30": "Greece",
  "+1-473": "Grenada",
  "+502": "Guatemala",
  "+224": "Guinea",
  "+245": "Guinea-Bissau",
  "+592": "Guyana",

  // H
  "+509": "Haiti",
  "+504": "Honduras",
  "+36": "Hungary",

  // I
  "+354": "Iceland",
  "+91": "India",
  "+62": "Indonesia",
  "+98": "Iran",
  "+964": "Iraq",
  "+353": "Ireland",
  "+972": "Israel",
  "+39": "Italy",
  "+225": "Ivory Coast",

  // J
  "+1-876": "Jamaica",
  "+81": "Japan",
  "+962": "Jordan",

  // K
  "+7": "Kazakhstan / Russia",
  "+254": "Kenya",
  "+686": "Kiribati",
  "+383": "Kosovo",
  "+965": "Kuwait",
  "+996": "Kyrgyzstan",

  // L
  "+856": "Laos",
  "+371": "Latvia",
  "+961": "Lebanon",
  "+266": "Lesotho",
  "+231": "Liberia",
  "+218": "Libya",
  "+423": "Liechtenstein",
  "+370": "Lithuania",
  "+352": "Luxembourg",

  // M
  "+261": "Madagascar",
  "+265": "Malawi",
  "+60": "Malaysia",
  "+960": "Maldives",
  "+223": "Mali",
  "+356": "Malta",
  "+692": "Marshall Islands",
  "+222": "Mauritania",
  "+230": "Mauritius",
  "+52": "Mexico",
  "+691": "Micronesia",
  "+373": "Moldova",
  "+377": "Monaco",
  "+976": "Mongolia",
  "+382": "Montenegro",
  "+212": "Morocco",
  "+258": "Mozambique",
  "+95": "Myanmar",

  // N
  "+264": "Namibia",
  "+674": "Nauru",
  "+977": "Nepal",
  "+31": "Netherlands",
  "+64": "New Zealand",
  "+505": "Nicaragua",
  "+227": "Niger",
  "+234": "Nigeria",
  "+850": "North Korea",
  "+389": "North Macedonia",
  "+47": "Norway",

  // O
  "+968": "Oman",

  // P
  "+92": "Pakistan",
  "+680": "Palau",
  "+970": "Palestine",
  "+507": "Panama",
  "+675": "Papua New Guinea",
  "+595": "Paraguay",
  "+51": "Peru",
  "+63": "Philippines",
  "+48": "Poland",
  "+351": "Portugal",

  // Q
  "+974": "Qatar",

  // R
  "+40": "Romania",
  "+250": "Rwanda",

  // S
  "+1-869": "Saint Kitts and Nevis",
  "+1-758": "Saint Lucia",
  "+1-784": "Saint Vincent and the Grenadines",
  "+685": "Samoa",
  "+378": "San Marino",
  "+239": "Sao Tome and Principe",
  "+966": "Saudi Arabia",
  "+221": "Senegal",
  "+381": "Serbia",
  "+248": "Seychelles",
  "+232": "Sierra Leone",
  "+65": "Singapore",
  "+421": "Slovakia",
  "+386": "Slovenia",
  "+677": "Solomon Islands",
  "+252": "Somalia",
  "+27": "South Africa",
  "+82": "South Korea",
  "+211": "South Sudan",
  "+34": "Spain",
  "+94": "Sri Lanka",
  "+249": "Sudan",
  "+597": "Suriname",
  "+46": "Sweden",
  "+41": "Switzerland",
  "+963": "Syria",

  // T
  "+886": "Taiwan",
  "+992": "Tajikistan",
  "+255": "Tanzania",
  "+66": "Thailand",
  "+670": "Timor-Leste",
  "+228": "Togo",
  "+676": "Tonga",
  "+1-868": "Trinidad and Tobago",
  "+216": "Tunisia",
  "+90": "Turkey",
  "+993": "Turkmenistan",
  "+688": "Tuvalu",

  // U
  "+256": "Uganda",
  "+380": "Ukraine",
  "+971": "United Arab Emirates",
  "+44": "United Kingdom",
  "+598": "Uruguay",
  "+998": "Uzbekistan",

  // V
  "+678": "Vanuatu",
  "+379": "Vatican City",
  "+58": "Venezuela",
  "+84": "Vietnam",

  // Y
  "+967": "Yemen",

  // Z
  "+260": "Zambia",
  "+263": "Zimbabwe"
};

/**
 * Get country name from country calling code
 * @param code - International calling code (e.g., "+1", "+263")
 * @returns Country name or the code itself if not found
 */
export const getCountryName = (code: string): string => {
  // Normalize code (trim whitespace, ensure it starts with +)
  const normalizedCode = code.trim().startsWith("+") ? code.trim() : `+${code.trim()}`;

  // Look up in mapping
  const countryName = COUNTRY_CODE_MAPPING[normalizedCode];

  // Return country name or fallback to code
  return countryName || normalizedCode;
};

/**
 * Check if a country code exists in the mapping
 * @param code - International calling code
 * @returns true if code exists in mapping
 */
export const isValidCountryCode = (code: string): boolean => {
  const normalizedCode = code.trim().startsWith("+") ? code.trim() : `+${code.trim()}`;
  return normalizedCode in COUNTRY_CODE_MAPPING;
};

/**
 * Get all country codes
 * @returns Array of all country calling codes
 */
export const getAllCountryCodes = (): string[] => {
  return Object.keys(COUNTRY_CODE_MAPPING);
};

/**
 * Get all countries as array of objects
 * @returns Array of {code, name} objects
 */
export const getAllCountries = (): Array<{ code: string; name: string }> => {
  return Object.entries(COUNTRY_CODE_MAPPING).map(([code, name]) => ({
    code,
    name
  }));
};
