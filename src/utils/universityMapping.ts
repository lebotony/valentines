/**
 * South African University Mapping
 *
 * Maps standardized university keys to their short and full names.
 * Includes all 26 recognized public universities in South Africa.
 */

interface UniversityInfo {
  short: string;
  full: string;
}

export const UNIVERSITY_MAPPING: Record<string, UniversityInfo> = {
  cput: {
    short: "CPUT",
    full: "Cape Peninsula University of Technology"
  },
  cut: {
    short: "CUT",
    full: "Central University of Technology"
  },
  dut: {
    short: "DUT",
    full: "Durban University of Technology"
  },
  mut: {
    short: "MUT",
    full: "Mangosuthu University of Technology"
  },
  nmu: {
    short: "NMU",
    full: "Nelson Mandela University"
  },
  nwu: {
    short: "NWU",
    full: "North-West University"
  },
  ru: {
    short: "RU",
    full: "Rhodes University"
  },
  smu: {
    short: "SMU",
    full: "Sefako Makgatho Health Sciences University"
  },
  spu: {
    short: "SPU",
    full: "Sol Plaatje University"
  },
  su: {
    short: "SU",
    full: "Stellenbosch University"
  },
  tut: {
    short: "TUT",
    full: "Tshwane University of Technology"
  },
  uct: {
    short: "UCT",
    full: "University of Cape Town"
  },
  ufh: {
    short: "UFH",
    full: "University of Fort Hare"
  },
  uj: {
    short: "UJ",
    full: "University of Johannesburg"
  },
  ukzn: {
    short: "UKZN",
    full: "University of KwaZulu-Natal"
  },
  ul: {
    short: "UL",
    full: "University of Limpopo"
  },
  ump: {
    short: "UMP",
    full: "University of Mpumalanga"
  },
  up: {
    short: "UP",
    full: "University of Pretoria"
  },
  unisa: {
    short: "UNISA",
    full: "University of South Africa"
  },
  ufs: {
    short: "UFS",
    full: "University of the Free State"
  },
  uwc: {
    short: "UWC",
    full: "University of the Western Cape"
  },
  wits: {
    short: "Wits",
    full: "University of the Witwatersrand"
  },
  univen: {
    short: "UNIVEN",
    full: "University of Venda"
  },
  unizulu: {
    short: "UNIZULU",
    full: "University of Zululand"
  },
  vut: {
    short: "VUT",
    full: "Vaal University of Technology"
  },
  wsu: {
    short: "WSU",
    full: "Walter Sisulu University"
  }
};

/**
 * Get university full name from university key
 * @param key - University key (e.g., "uct", "wits")
 * @returns Full university name or the key itself if not found
 */
export const getUniversityFullName = (key: string): string => {
  const normalizedKey = key.trim().toLowerCase();
  const university = UNIVERSITY_MAPPING[normalizedKey];
  return university ? university.full : normalizedKey;
};

/**
 * Get university short name from university key
 * @param key - University key (e.g., "uct", "wits")
 * @returns Short university name or the key itself if not found
 */
export const getUniversityShortName = (key: string): string => {
  const normalizedKey = key.trim().toLowerCase();
  const university = UNIVERSITY_MAPPING[normalizedKey];
  return university ? university.short : normalizedKey;
};

/**
 * Check if a university key exists in the mapping
 * @param key - University key
 * @returns true if key exists in mapping
 */
export const isValidUniversity = (key: string): boolean => {
  const normalizedKey = key.trim().toLowerCase();
  return normalizedKey in UNIVERSITY_MAPPING;
};

/**
 * Get all university keys
 * @returns Array of all university keys
 */
export const getAllUniversityKeys = (): string[] => {
  return Object.keys(UNIVERSITY_MAPPING);
};

/**
 * Get all universities as array of objects
 * @returns Array of {key, short, full} objects sorted alphabetically by full name
 */
export const getAllUniversities = (): Array<{
  key: string;
  short: string;
  full: string;
}> => {
  return Object.entries(UNIVERSITY_MAPPING)
    .map(([key, { short, full }]) => ({
      key,
      short,
      full
    }))
    .sort((a, b) => a.full.localeCompare(b.full));
};
