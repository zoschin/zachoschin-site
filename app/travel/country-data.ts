// ISO 3166-1 numeric codes used by world-atlas topojson

// Countries where Zach has lived
export const livedInIds = new Set([
  "840", // USA
  "710", // South Africa
  "484", // Mexico
  "170", // Colombia
  "528", // Netherlands
]);

// Sovereign nations / observer states visited (80 total, includes lived-in)
export const visitedIds = new Set([
  // Lived-in
  "840", // USA
  "484", // Mexico
  "170", // Colombia
  "710", // South Africa
  "528", // Netherlands
  // Americas
  "320", // Guatemala
  "558", // Nicaragua
  "591", // Panama
  "188", // Costa Rica
  "192", // Cuba
  "388", // Jamaica
  "044", // Bahamas
  "214", // Dominican Republic
  "052", // Barbados
  "659", // St. Kitts and Nevis
  "212", // Dominica
  "152", // Chile
  "032", // Argentina
  "858", // Uruguay
  "218", // Ecuador
  "328", // Guyana
  "740", // Suriname
  "604", // Peru
  "076", // Brazil
  "124", // Canada
  // Europe
  "276", // Germany
  "724", // Spain
  "826", // United Kingdom
  "056", // Belgium
  "442", // Luxembourg
  "250", // France
  "620", // Portugal
  "352", // Iceland
  "040", // Austria
  "804", // Ukraine
  "498", // Moldova
  "348", // Hungary
  "380", // Italy
  "300", // Greece
  "756", // Switzerland
  "336", // Holy See
  "208", // Denmark (visited Greenland)
  // Middle East
  "376", // Israel
  "275", // Palestine
  "400", // Jordan
  "784", // UAE
  "634", // Qatar
  "682", // Saudi Arabia
  // Africa
  "818", // Egypt
  "231", // Ethiopia
  "404", // Kenya
  "834", // Tanzania
  "504", // Morocco
  "516", // Namibia
  "716", // Zimbabwe
  "894", // Zambia
  "072", // Botswana
  "748", // Eswatini
  "426", // Lesotho
  "800", // Uganda
  "646", // Rwanda
  "788", // Tunisia
  "012", // Algeria
  // Asia
  "156", // China
  "356", // India
  "792", // Turkey
  "764", // Thailand
  "702", // Singapore
  "418", // Laos
  "704", // Vietnam
  "116", // Cambodia
  "104", // Myanmar
  "392", // Japan
  "144", // Sri Lanka
  // Central Asia
  "795", // Turkmenistan
  "860", // Uzbekistan
  "762", // Tajikistan
  "398", // Kazakhstan
  "417", // Kyrgyzstan
  // Oceania
  "554", // New Zealand
]);

// Map territory ISO codes → parent sovereign nation ISO code
// Used to highlight territories on the globe when the parent is visited
export const territoryToParent: Record<string, string> = {
  "304": "208", // Greenland → Denmark
  "254": "250", // French Guiana → France
  "540": "250", // New Caledonia → France
  "260": "250", // French Southern Territories → France
  "630": "840", // Puerto Rico → USA
  "238": "826", // Falkland Islands → UK
  "533": "528", // Aruba → Netherlands
  "531": "528", // Curacao → Netherlands
  "534": "528", // St. Maarten (Dutch) → Netherlands
  "663": "250", // St. Martin (French) → France
  "850": "840", // U.S. Virgin Islands → USA
  "092": "826", // British Virgin Islands → UK
  "732": "504", // Western Sahara → Morocco
};

// Display names (alphabetical)
export const livedInCountries = [
  "Colombia",
  "Mexico",
  "Netherlands",
  "South Africa",
  "USA",
];

export const visitedCountries = [
  "Algeria",
  "Argentina",
  "Austria",
  "Bahamas",
  "Barbados",
  "Belgium",
  "Botswana",
  "Brazil",
  "Cambodia",
  "Canada",
  "Chile",
  "China",
  "Colombia",
  "Costa Rica",
  "Cuba",
  "Denmark",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "Eswatini",
  "Ethiopia",
  "France",
  "Germany",
  "Greece",
  "Guatemala",
  "Guyana",
  "Holy See",
  "Hungary",
  "Iceland",
  "India",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kyrgyzstan",
  "Laos",
  "Lesotho",
  "Luxembourg",
  "Mexico",
  "Moldova",
  "Morocco",
  "Myanmar",
  "Namibia",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Palestine",
  "Panama",
  "Peru",
  "Portugal",
  "Qatar",
  "Rwanda",
  "Saudi Arabia",
  "Singapore",
  "South Africa",
  "Spain",
  "Sri Lanka",
  "St. Kitts and Nevis",
  "Suriname",
  "Switzerland",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "UAE",
  "Uganda",
  "Ukraine",
  "United Kingdom",
  "Uruguay",
  "USA",
  "Uzbekistan",
  "Vietnam",
  "Zambia",
  "Zimbabwe",
];

// 193 UN member states + 2 observer states (Holy See, Palestine)
export const totalCountries = 195;
export const visitedCount = 80;
