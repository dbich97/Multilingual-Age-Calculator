export enum LanguageCode {
  EN = 'en',
  ES = 'es',
  FR = 'fr',
  DE = 'de',
  PT = 'pt',
  IT = 'it',
  HI = 'hi',
  RU = 'ru',
  JA = 'ja',
  ZH = 'zh',
  PL = 'pl',
  FA = 'fa',
  NL = 'nl',
  KO = 'ko',
  TH = 'th',
  TR = 'tr',
  VI = 'vi',
  AR = 'ar',
}

export interface Language {
  code: LanguageCode;
  name: string;
}

export interface SeoSection {
  heading: string;
  paragraphs: string[];
  list?: string[];
}

export interface PrivacySection {
  heading: string;
  paragraphs: string[];
}

export interface Translation {
  // Navigation
  navHome: string;
  navCalculator: string;
  navAbout: string;
  navContact: string;

  // Footer
  footerPrivacyPolicy: string;
  footerContactUs: string;
  footerRights: string;
  
  // Home Page
  homeTitle: string;
  homeDescription: string;
  homeSubtitle: string;
  homeCTAText: string;

  // About Page
  aboutTitle: string;
  aboutHeading: string;
  aboutContent: string[];

  // Privacy Policy Page
  privacyTitle: string;
  privacyHeading: string;
  privacyContent: PrivacySection[];
  
  // Contact Page
  contactTitle: string;
  contactHeading: string;
  contactIntro: string;
  contactEmail: string;

  // Age Calculator Page specific
  title: string;
  dateOfBirthLabel: string;
  calculateButton: string;
  resultPrefix: string;
  resultSuffix: string;
  years: string;
  months: string;
  days: string;
  errorFutureDate: string;
  errorInvalidDate: string;
  selectLanguage: string;
  monthsArray: string[];
  dayLabel: string;
  monthLabel: string;
  yearLabel: string;
  calendarType: string;
  gregorian: string;
  hijri: string;
  hijriMonthsArray: string[];
  ageInGregorian: string;
  
  // SEO Fields
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string;
  h1: string;
  h2: string;
  seoContent: string;
  seoSections: SeoSection[];
  
  // Share feature
  shareTitle: string;
  copyLinkButton: string;
  copiedTooltip: string;
  shareResultButton: string;
  shareResultText: string;
  shareResultTitle: string;
  copyResultButton: string;
  resultCopiedTooltip: string;

  // More info section
  moreInfoTitle: string;
  dayOfWeekLabel: string;
  seasonLabel: string;
  nextBirthdayLabel: string;
  daysOfWeekArray: string[];
  seasonsArray: string[];
}

export interface Age {
  years: number;
  months: number;
  days: number;
}

export interface AdditionalInfo {
  dayOfWeek: string;
  season: string;
  nextBirthday: number;
}