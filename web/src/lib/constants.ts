export enum AssetAction {
  ARCHIVE = 'archive',
  UNARCHIVE = 'unarchive',
  FAVORITE = 'favorite',
  UNFAVORITE = 'unfavorite',
  TRASH = 'trash',
  DELETE = 'delete',
  RESTORE = 'restore',
  ADD = 'add',
  ADD_TO_ALBUM = 'add-to-album',
  UNSTACK = 'unstack',
}

export enum AppRoute {
  ADMIN_USER_MANAGEMENT = '/admin/user-management',
  ADMIN_LIBRARY_MANAGEMENT = '/admin/library-management',
  ADMIN_SETTINGS = '/admin/system-settings',
  ADMIN_STATS = '/admin/server-status',
  ADMIN_JOBS = '/admin/jobs-status',
  ADMIN_REPAIR = '/admin/repair',

  ALBUMS = '/albums',
  LIBRARIES = '/libraries',
  ARCHIVE = '/archive',
  FAVORITES = '/favorites',
  PEOPLE = '/people',
  PLACES = '/places',
  PHOTOS = '/photos',
  EXPLORE = '/explore',
  SHARE = '/share',
  SHARING = '/sharing',
  SHARED_LINKS = '/sharing/sharedlinks',
  SEARCH = '/search',
  MAP = '/map',
  USER_SETTINGS = '/user-settings',
  MEMORY = '/memory',
  TRASH = '/trash',
  PARTNERS = '/partners',
  BUY = '/buy',

  AUTH_LOGIN = '/auth/login',
  AUTH_REGISTER = '/auth/register',
  AUTH_CHANGE_PASSWORD = '/auth/change-password',
  AUTH_ONBOARDING = '/auth/onboarding',

  UTILITIES = '/utilities',
  DUPLICATES = '/utilities/duplicates',

  FOLDERS = '/folders',
  TAGS = '/tags',
}

export enum ProjectionType {
  EQUIRECTANGULAR = 'EQUIRECTANGULAR',
  CUBEMAP = 'CUBEMAP',
  CUBESTRIP = 'CUBESTRIP',
  EQUIRECTANGULAR_STEREO = 'EQUIRECTANGULAR_STEREO',
  CUBEMAP_STEREO = 'CUBEMAP_STEREO',
  CUBESTRIP_STEREO = 'CUBESTRIP_STEREO',
  CYLINDER = 'CYLINDER',
  NONE = 'NONE',
}

export const dateFormats = {
  album: <Intl.DateTimeFormatOptions>{
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  },
};

interface Coordinates {
  x1: number;
  x2: number;
  y1: number;
  y2: number;
}

export enum AssetGridOptionsValues {
  onlyFavorites = 'onlyFavorites',
  withPartners = 'withPartners',
}

export interface AssetGridOptions {
  onlyFavorites: boolean;
  withPartners: boolean;
}

export interface IQueryParameter {
  previousRoute?: string;
  coordinates?: Coordinates;
  assetGridOptions?: AssetGridOptions;
}

export const createAssetGridOptionsFromArray = (enumArray: string[]): AssetGridOptions => {
  const defaultValues: AssetGridOptions = {} as AssetGridOptions;

  for (const key of Object.keys(AssetGridOptionsValues)) {
    defaultValues[key as keyof AssetGridOptions] = false;
  }

  for (const enumValue of Object.values(AssetGridOptionsValues)) {
    if (enumArray.includes(enumValue)) {
      defaultValues[enumValue as keyof AssetGridOptions] = true;
    }
  }

  return defaultValues;
};

export enum QueryParameter {
  ACTION = 'action',
  ASSET_INDEX = 'assetIndex',
  ASSET_GRID_OPTIONS = 'assetGridOptions',
  IS_OPEN = 'isOpen',
  IS_TIMELINE_OPENED = 'isTimelineOpened',
  MEMORY_INDEX = 'memoryIndex',
  ONBOARDING_STEP = 'step',
  OPEN_SETTING = 'openSetting',
  PREVIOUS_ROUTE = 'previousRoute',
  QUERY = 'query',
  SEARCHED_PEOPLE = 'searchedPeople',
  SMART_SEARCH = 'smartSearch',
  PAGE = 'page',
  PATH = 'path',
  COORDINATESX1 = 'coordinatesx1',
  COORDINATESX2 = 'coordinatesx2',
  COORDINATESY1 = 'coordinatesy1',
  COORDINATESY2 = 'coordinatesY2',
}

export enum OpenSettingQueryParameterValue {
  OAUTH = 'oauth',
  JOB = 'job',
  STORAGE_TEMPLATE = 'storage-template',
}

export enum ActionQueryParameterValue {
  MERGE = 'merge',
}

export const maximumLengthSearchPeople: number = 20;

// time to load the map before displaying the loading spinner
export const timeToLoadTheMap: number = 100;

export const timeBeforeShowLoadingSpinner: number = 100;

export const timeDebounceOnSearch: number = 300;

// should be the same values as the ones in the app.html
export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

export const fallbackLocale = {
  code: 'en-US',
  name: 'English (US)',
};

export const locales = [
  { code: 'af-ZA', name: 'Afrikaans (South Africa)' },
  { code: 'sq-AL', name: 'Albanian (Albania)' },
  { code: 'ar-DZ', name: 'Arabic (Algeria)' },
  { code: 'ar-BH', name: 'Arabic (Bahrain)' },
  { code: 'ar-EG', name: 'Arabic (Egypt)' },
  { code: 'ar-IQ', name: 'Arabic (Iraq)' },
  { code: 'ar-JO', name: 'Arabic (Jordan)' },
  { code: 'ar-KW', name: 'Arabic (Kuwait)' },
  { code: 'ar-LB', name: 'Arabic (Lebanon)' },
  { code: 'ar-LY', name: 'Arabic (Libya)' },
  { code: 'ar-MA', name: 'Arabic (Morocco)' },
  { code: 'ar-OM', name: 'Arabic (Oman)' },
  { code: 'ar-QA', name: 'Arabic (Qatar)' },
  { code: 'ar-SA', name: 'Arabic (Saudi Arabia)' },
  { code: 'ar-SY', name: 'Arabic (Syria)' },
  { code: 'ar-TN', name: 'Arabic (Tunisia)' },
  { code: 'ar-AE', name: 'Arabic (United Arab Emirates)' },
  { code: 'ar-YE', name: 'Arabic (Yemen)' },
  { code: 'hy-AM', name: 'Armenian (Armenia)' },
  { code: 'az-AZ', name: 'Azerbaijani (Azerbaijan)' },
  { code: 'eu-ES', name: 'Basque (Spain)' },
  { code: 'be-BY', name: 'Belarusian (Belarus)' },
  { code: 'bn-IN', name: 'Bengali (India)' },
  { code: 'bs-BA', name: 'Bosnian (Bosnia and Herzegovina)' },
  { code: 'bg-BG', name: 'Bulgarian (Bulgaria)' },
  { code: 'ca-ES', name: 'Catalan (Spain)' },
  { code: 'zh-CN', name: 'Chinese (China)' },
  { code: 'zh-HK', name: 'Chinese (Hong Kong SAR China)' },
  { code: 'zh-MO', name: 'Chinese (Macao SAR China)' },
  { code: 'zh-SG', name: 'Chinese (Singapore)' },
  { code: 'zh-TW', name: 'Chinese (Taiwan)' },
  { code: 'hr-HR', name: 'Croatian (Croatia)' },
  { code: 'cs-CZ', name: 'Czech (Czech Republic)' },
  { code: 'da-DK', name: 'Danish (Denmark)' },
  { code: 'nl-BE', name: 'Dutch (Belgium)' },
  { code: 'nl-NL', name: 'Dutch (Netherlands)' },
  { code: 'en-AU', name: 'English (Australia)' },
  { code: 'en-BZ', name: 'English (Belize)' },
  { code: 'en-CA', name: 'English (Canada)' },
  { code: 'en-IE', name: 'English (Ireland)' },
  { code: 'en-JM', name: 'English (Jamaica)' },
  { code: 'en-NZ', name: 'English (New Zealand)' },
  { code: 'en-PH', name: 'English (Philippines)' },
  { code: 'en-ZA', name: 'English (South Africa)' },
  { code: 'en-TT', name: 'English (Trinidad and Tobago)' },
  { code: 'en-VI', name: 'English (U.S. Virgin Islands)' },
  { code: 'en-GB', name: 'English (United Kingdom)' },
  { code: 'en-US', name: 'English (United States)' },
  { code: 'en-ZW', name: 'English (Zimbabwe)' },
  { code: 'et-EE', name: 'Estonian (Estonia)' },
  { code: 'fo-FO', name: 'Faroese (Faroe Islands)' },
  { code: 'fi-FI', name: 'Finnish (Finland)' },
  { code: 'fr-BE', name: 'French (Belgium)' },
  { code: 'fr-CA', name: 'French (Canada)' },
  { code: 'fr-FR', name: 'French (France)' },
  { code: 'fr-LU', name: 'French (Luxembourg)' },
  { code: 'fr-MC', name: 'French (Monaco)' },
  { code: 'fr-CH', name: 'French (Switzerland)' },
  { code: 'gl-ES', name: 'Galician (Spain)' },
  { code: 'ka-GE', name: 'Georgian (Georgia)' },
  { code: 'de-AT', name: 'German (Austria)' },
  { code: 'de-DE', name: 'German (Germany)' },
  { code: 'de-LI', name: 'German (Liechtenstein)' },
  { code: 'de-LU', name: 'German (Luxembourg)' },
  { code: 'de-CH', name: 'German (Switzerland)' },
  { code: 'el-GR', name: 'Greek (Greece)' },
  { code: 'gu-IN', name: 'Gujarati (India)' },
  { code: 'he-IL', name: 'Hebrew (Israel)' },
  { code: 'hi-IN', name: 'Hindi (India)' },
  { code: 'hu-HU', name: 'Hungarian (Hungary)' },
  { code: 'is-IS', name: 'Icelandic (Iceland)' },
  { code: 'id-ID', name: 'Indonesian (Indonesia)' },
  { code: 'it-IT', name: 'Italian (Italy)' },
  { code: 'it-CH', name: 'Italian (Switzerland)' },
  { code: 'ja-JP', name: 'Japanese (Japan)' },
  { code: 'kn-IN', name: 'Kannada (India)' },
  { code: 'kk-KZ', name: 'Kazakh (Kazakhstan)' },
  { code: 'kok-IN', name: 'Konkani (India)' },
  { code: 'ko-KR', name: 'Korean (South Korea)' },
  { code: 'lv-LV', name: 'Latvian (Latvia)' },
  { code: 'lt-LT', name: 'Lithuanian (Lithuania)' },
  { code: 'mk-MK', name: 'Macedonian (Macedonia)' },
  { code: 'ms-BN', name: 'Malay (Brunei)' },
  { code: 'ms-MY', name: 'Malay (Malaysia)' },
  { code: 'ml-IN', name: 'Malayalam (India)' },
  { code: 'mt-MT', name: 'Maltese (Malta)' },
  { code: 'mr-IN', name: 'Marathi (India)' },
  { code: 'mn-MN', name: 'Mongolian (Mongolia)' },
  { code: 'se-NO', name: 'Northern Sami (Norway)' },
  { code: 'nb-NO', name: 'Norwegian Bokmål (Norway)' },
  { code: 'nn-NO', name: 'Norwegian Nynorsk (Norway)' },
  { code: 'fa-IR', name: 'Persian (Iran)' },
  { code: 'pl-PL', name: 'Polish (Poland)' },
  { code: 'pt-BR', name: 'Portuguese (Brazil)' },
  { code: 'pt-PT', name: 'Portuguese (Portugal)' },
  { code: 'pa-IN', name: 'Punjabi (India)' },
  { code: 'ro-RO', name: 'Romanian (Romania)' },
  { code: 'ru-RU', name: 'Russian (Russia)' },
  { code: 'sr-BA', name: 'Serbian (Bosnia and Herzegovina)' },
  { code: 'sr-CS', name: 'Serbian (Serbia And Montenegro)' },
  { code: 'sk-SK', name: 'Slovak (Slovakia)' },
  { code: 'sl-SI', name: 'Slovenian (Slovenia)' },
  { code: 'es-AR', name: 'Spanish (Argentina)' },
  { code: 'es-BO', name: 'Spanish (Bolivia)' },
  { code: 'es-CL', name: 'Spanish (Chile)' },
  { code: 'es-CO', name: 'Spanish (Colombia)' },
  { code: 'es-CR', name: 'Spanish (Costa Rica)' },
  { code: 'es-DO', name: 'Spanish (Dominican Republic)' },
  { code: 'es-EC', name: 'Spanish (Ecuador)' },
  { code: 'es-SV', name: 'Spanish (El Salvador)' },
  { code: 'es-GT', name: 'Spanish (Guatemala)' },
  { code: 'es-HN', name: 'Spanish (Honduras)' },
  { code: 'es-MX', name: 'Spanish (Mexico)' },
  { code: 'es-NI', name: 'Spanish (Nicaragua)' },
  { code: 'es-PA', name: 'Spanish (Panama)' },
  { code: 'es-PY', name: 'Spanish (Paraguay)' },
  { code: 'es-PE', name: 'Spanish (Peru)' },
  { code: 'es-PR', name: 'Spanish (Puerto Rico)' },
  { code: 'es-ES', name: 'Spanish (Spain)' },
  { code: 'es-UY', name: 'Spanish (Uruguay)' },
  { code: 'es-VE', name: 'Spanish (Venezuela)' },
  { code: 'sw-KE', name: 'Swahili (Kenya)' },
  { code: 'sv-FI', name: 'Swedish (Finland)' },
  { code: 'sv-SE', name: 'Swedish (Sweden)' },
  { code: 'te-IN', name: 'Telugu (India)' },
  { code: 'th-TH', name: 'Thai (Thailand)' },
  { code: 'tn-ZA', name: 'Tswana (South Africa)' },
  { code: 'tr-TR', name: 'Turkish (Turkey)' },
  { code: 'uk-UA', name: 'Ukrainian (Ukraine)' },
  { code: 'uz-UZ', name: 'Uzbek (Uzbekistan)' },
  { code: 'vi-VN', name: 'Vietnamese (Vietnam)' },
  { code: 'cy-GB', name: 'Welsh (United Kingdom)' },
  { code: 'xh-ZA', name: 'Xhosa (South Africa)' },
  { code: 'zu-ZA', name: 'Zulu (South Africa)' },
];

export const defaultLang = { name: 'English', code: 'en', loader: () => import('$lib/i18n/en.json') };

export const langs = [
  { name: 'Afrikaans', code: 'af', loader: () => import('$lib/i18n/af.json') },
  { name: 'Arabic', code: 'ar', loader: () => import('$lib/i18n/ar.json') },
  { name: 'Azerbaijani', code: 'az', loader: () => import('$lib/i18n/az.json') },
  { name: 'Belarusian', code: 'be', loader: () => import('$lib/i18n/be.json') },
  { name: 'Bulgarian', code: 'bg', loader: () => import('$lib/i18n/bg.json') },
  { name: 'Bislama', code: 'bi', loader: () => import('$lib/i18n/bi.json') },
  { name: 'Catalan', code: 'ca', loader: () => import('$lib/i18n/ca.json') },
  { name: 'Czech', code: 'cs', loader: () => import('$lib/i18n/cs.json') },
  { name: 'Danish', code: 'da', loader: () => import('$lib/i18n/da.json') },
  { name: 'German', code: 'de', loader: () => import('$lib/i18n/de.json') },
  defaultLang,
  { name: 'Greek', code: 'el', loader: () => import('$lib/i18n/el.json') },
  { name: 'Spanish', code: 'es', loader: () => import('$lib/i18n/es.json') },
  { name: 'Estonian', code: 'et', loader: () => import('$lib/i18n/et.json') },
  { name: 'Persian', code: 'fa', loader: () => import('$lib/i18n/fa.json') },
  { name: 'Finnish', code: 'fi', loader: () => import('$lib/i18n/fi.json') },
  { name: 'French', code: 'fr', loader: () => import('$lib/i18n/fr.json') },
  { name: 'Hebrew', code: 'he', loader: () => import('$lib/i18n/he.json') },
  { name: 'Hindi', code: 'hi', loader: () => import('$lib/i18n/hi.json') },
  { name: 'Croatian', code: 'hr', loader: () => import('$lib/i18n/hr.json') },
  { name: 'Hungarian', code: 'hu', loader: () => import('$lib/i18n/hu.json') },
  { name: 'Armenian', code: 'hy', loader: () => import('$lib/i18n/hy.json') },
  { name: 'Indonesian', code: 'id', loader: () => import('$lib/i18n/id.json') },
  { name: 'Italian', code: 'it', loader: () => import('$lib/i18n/it.json') },
  { name: 'Japanese', code: 'ja', loader: () => import('$lib/i18n/ja.json') },
  { name: 'Kurdish (Northern)', code: 'kmr', loader: () => import('$lib/i18n/kmr.json') },
  { name: 'Korean', code: 'ko', loader: () => import('$lib/i18n/ko.json') },
  { name: 'Lithuanian', code: 'lt', loader: () => import('$lib/i18n/lt.json') },
  { name: 'Latvian', code: 'lv', loader: () => import('$lib/i18n/lv.json') },
  { name: 'Mongolian', code: 'mn', loader: () => import('$lib/i18n/mn.json') },
  { name: 'Malay', code: 'ms', loader: () => import('$lib/i18n/ms.json') },
  { name: 'Norwegian Bokmål', code: 'nb-NO', weblateCode: 'nb_NO', loader: () => import('$lib/i18n/nb_NO.json') },
  { name: 'Dutch', code: 'nl', loader: () => import('$lib/i18n/nl.json') },
  { name: 'Polish', code: 'pl', loader: () => import('$lib/i18n/pl.json') },
  { name: 'Portuguese', code: 'pt', loader: () => import('$lib/i18n/pt.json') },
  { name: 'Portuguese (Brazil) ', code: 'pt-BR', weblateCode: 'pt_BR', loader: () => import('$lib/i18n/pt_BR.json') },
  { name: 'Romanian', code: 'ro', loader: () => import('$lib/i18n/ro.json') },
  { name: 'Russian', code: 'ru', loader: () => import('$lib/i18n/ru.json') },
  { name: 'Slovak', code: 'sk', loader: () => import('$lib/i18n/sk.json') },
  { name: 'Slovenian', code: 'sl', loader: () => import('$lib/i18n/sl.json') },
  {
    name: 'Serbian (Cyrillic)',
    code: 'sr-Cyrl',
    weblateCode: 'sr_Cyrl',
    loader: () => import('$lib/i18n/sr_Cyrl.json'),
  },
  { name: 'Serbian (Latin)', code: 'sr-Latn', weblateCode: 'sr_Latn', loader: () => import('$lib/i18n/sr_Latn.json') },
  { name: 'Swedish', code: 'sv', loader: () => import('$lib/i18n/sv.json') },
  { name: 'Tamil', code: 'ta', loader: () => import('$lib/i18n/ta.json') },
  { name: 'Telugu', code: 'te', loader: () => import('$lib/i18n/te.json') },
  { name: 'Thai', code: 'th', loader: () => import('$lib/i18n/th.json') },
  { name: 'Turkish', code: 'tr', loader: () => import('$lib/i18n/tr.json') },
  { name: 'Ukrainian', code: 'uk', loader: () => import('$lib/i18n/uk.json') },
  { name: 'Vietnamese', code: 'vi', loader: () => import('$lib/i18n/vi.json') },
  {
    name: 'Chinese (Traditional)',
    code: 'zh-Hant',
    weblateCode: 'zh_Hant',
    loader: () => import('$lib/i18n/zh_Hant.json'),
  },
  {
    name: 'Chinese (Simplified)',
    code: 'zh-Hans',
    weblateCode: 'zh_SIMPLIFIED',
    loader: () => import('$lib/i18n/zh_SIMPLIFIED.json'),
  },
  { name: 'Development (keys only)', code: 'dev', loader: () => Promise.resolve({}) },
];

export enum ImmichProduct {
  Client = 'immich-client',
  Server = 'immich-server',
}
