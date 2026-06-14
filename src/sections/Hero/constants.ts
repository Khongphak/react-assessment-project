const COUNTRIES = [
  { code: "AU", label: "Australia",      dialCode: "+61"  },
  { code: "CA", label: "Canada",         dialCode: "+1"   },
  { code: "CY", label: "Cyprus",         dialCode: "+357" },
  { code: "FR", label: "France",         dialCode: "+33"  },
  { code: "DE", label: "Germany",        dialCode: "+49"  },
  { code: "IN", label: "India",          dialCode: "+91"  },
  { code: "JP", label: "Japan",          dialCode: "+81"  },
  { code: "SG", label: "Singapore",      dialCode: "+65"  },
  { code: "TH", label: "Thailand",       dialCode: "+66"  },
  { code: "GB", label: "United Kingdom", dialCode: "+44"  },
  { code: "US", label: "United States",  dialCode: "+1"   },
];

export const COUNTRY_CODES: Record<string, string> = Object.fromEntries(
  COUNTRIES.map(({ code, dialCode }) => [code, dialCode]),
);

export const COUNTRY_OPTIONS = [
  { label: "Select country", value: "" },
  ...COUNTRIES.map(({ code, label }) => ({ label, value: code })),
];
