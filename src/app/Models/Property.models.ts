export interface PropertyResponse {
  exhaustive: Exhaustive;
  exhaustiveNbHits: boolean;
  hits: Property[];
  hitsPerPage: number;
  nbHits: number;
  nbPages: number;
  page: number;
  params: string;
  processingTimeMS: number;
  processingTimingsMS: ProcessingTimingsMS;
  query: string;
  serverTimeMS: number;
}

export interface Exhaustive {
  nbHits: boolean;
}

export interface Property {
  _geoloc: Geo;
  _highlightResult: HighlightResult;
  agency: Agency;
  amenities: string[];
  amenities_l1: string[];
  amenities_l2: string[];
  amenities_l3: string[];
  area: number;
  baths: number;
  category: Category[];
  cityLevelScore: number;
  completionStatus: CompletionStatus;
  contactName: string;
  coverPhoto: Photo;
  coverVideo?: CoverVideo;
  createdAt: number;
  deal?: Deal;
  externalID: string;
  extraFields: ExtraFields;
  floorPlanID: number | null;
  furnishingStatus: FurnishingStatus | null;
  geography: Geo;
  hasDldBuildingNk: boolean;
  hasMatchingFloorPlans: boolean;
  hasTransactionHistory: boolean;
  hash: string;
  hidePrice: boolean;
  id: number;
  indyScore: number;
  indyScore_l1: number;
  indyScore_l2: number;
  indyScore_l3: number;
  isVerified: boolean;
  keywords: string[];
  location: Location[];
  locationPurposeTier: number;
  objectID: string;
  occupancyStatus?: OccupancyStatus;
  ownerAgent: OwnerAgent;
  ownerID: number;
  panoramaCount: number;
  permitNumber: null | string;
  phoneNumber: PhoneNumber;
  photoCount: number;
  photoIDs: number[];
  plotArea: null;
  price: number;
  product: Product;
  productLabel: ProductLabel;
  productScore: number;
  projectNumber: null;
  purpose: Purpose;
  randBoostScore: number;
  randBoostScore_l1: number;
  randBoostScore_l2: number;
  randBoostScore_l3: number;
  reactivatedAt: number;
  referenceNumber: string;
  rentFrequency: RentFrequency;
  rooms: number;
  score: number;
  score_l1: number;
  score_l2: number;
  score_l3: number;
  slug: string;
  slug_l1: string;
  slug_l2: string;
  slug_l3: string;
  sourceID: number;
  state: State;
  title: string;
  title_l1: string;
  title_l2: string;
  title_l3: string;
  type: HitType;
  updatedAt: number;
  userExternalID: string;
  verification: Verification;
  verifiedScore: number;
  videoCount: number;
}

export interface PropertyInfo {
  active: boolean;
  amenities: any[];
  area: number;
  baths: number;
  category: Category[];
  cityLevelScore: number;
  completionStatus: string;
  contactName: string;
  coverPhoto: Photo;
  createdAt: number;
  description: string;
  furnishingStatus: null;
  id: number;
  phoneNumber: PhoneNumber;
  photoCount: number;
  photos: Photo[];
  plotArea: number;
  price: number;
  purpose: string;
  rentFrequency: string;
  rooms: number;
  state: string;
  title: string;
  type: string;
  videos: any[];
}

export interface Geo {
  lat: number;
  lng: number;
}

export interface HighlightResult {
  agency: HighlightResultAgency;
  externalID: ExternalID;
  keywords: ExternalID[];
  referenceNumber: ExternalID;
  title: ExternalID;
  title_l1: ExternalID;
  title_l2: ExternalID;
  title_l3: ExternalID;
}

export interface HighlightResultAgency {
  name: ExternalID;
  name_l1: ExternalID;
  name_l2: ExternalID;
  name_l3: ExternalID;
}

export interface ExternalID {
  matchLevel: MatchLevel;
  matchedWords: any[];
  value: string;
}

export enum MatchLevel {
  None = 'none',
}

export interface Agency {
  active: boolean;
  commercialNumber: null;
  createdAt: Date;
  externalID: string;
  id: number;
  licenses: License[];
  logo: Logo;
  name: string;
  name_l1: string;
  name_l2: string;
  name_l3: string;
  objectID: number;
  performanceCohort: PerformanceCohort;
  product: '';
  productScore: number;
  roles: any[];
  shortNumber: null;
  slug: string;
  slug_l1: string;
  slug_l2: string;
  slug_l3: string;
  tier: number;
  tr: number;
}

export interface License {
  authority: Authority;
  number: string;
}

export enum Authority {
  Ded = 'DED',
  Orn = 'ORN',
}

export interface Logo {
  id: number;
  url: string;
}

export enum PerformanceCohort {
  Overachieving = 'overachieving',
}

export enum AgencyProduct {
  Premium = 'premium',
}

export interface Category {
  externalID: string;
  id: number;
  level: number;
  name: string;
  nameSingular?: string;
  nameSingular_l1?: string;
  nameSingular_l2?: string;
  nameSingular_l3?: string;
  name_l1?: string;
  name_l2?: string;
  name_l3?: string;
  slug?: string;
  slug_l1?: string;
  slug_l2?: string;
  slug_l3?: string;
}

export enum Name {
  Apartments = 'Apartments',
  Residential = 'Residential',
}

export enum NameSingular {
  Apartment = 'Apartment',
  Residential = 'Residential',
}

export enum NameSingularL1 {
  سكني = 'سكني',
  شقة = 'شقة',
}

export enum NameL2 {
  公寓 = '公寓',
  居住物业 = '居住物业',
}

export enum NameSingularL3 {
  Жилые = 'Жилые',
  Квартира = 'Квартира',
}

export enum NameL1 {
  سكني = 'سكني',
  شقق = 'شقق',
}

export enum NameL3 {
  Апартаменты = 'Апартаменты',
  Жилые = 'Жилые',
}

export enum Slug {
  Apartments = 'apartments',
  Residential = 'residential',
}

export enum CompletionStatus {
  Completed = 'completed',
}

export interface Photo {
  externalID: string;
  id: number;
  main?: boolean;
  nimaScore: number;
  orderIndex: number;
  title: null | string;
  url: string;
}

export interface CoverVideo {
  externalID: number;
  host: string;
  orderIndex: number;
  title: string;
  url: string;
}

export interface Deal {
  endTime: number;
  externalID: string;
  startTime: number;
}

export interface ExtraFields {
  dldBuildingNK: string;
  dldPropertySK: string;
  hasRentTransactions?: boolean;
  hasSaleTransactions: boolean;
}

export enum FurnishingStatus {
  Furnished = 'furnished',
}

export interface Location {
  externalID: string;
  id: number;
  level: number;
  name: string;
  name_l1: string;
  slug: string;
  slug_l1: string;
  type?: LocationType;
}

export enum LocationType {
  CondoBuilding = 'condo-building',
  Neighbourhood = 'neighbourhood',
}

export enum OccupancyStatus {
  Vacant = 'vacant',
}

export interface OwnerAgent {
  externalID: string;
  isTruBroker: boolean;
  name: string;
  name_l1: string;
  name_l2: string;
  name_l3: string;
  user_image: string;
  user_image_id: number;
}

export interface PhoneNumber {
  mobile?: string;
  mobileNumbers?: string[];
  phone?: string;
  phoneNumbers?: string[];
  proxyMobile?: string;
  proxyPhone?: string;
  whatsapp?: string;
}

export enum Product {
  Hot = 'hot',
  Superhot = 'superhot',
}

export enum ProductLabel {
  Default = 'default',
}

export enum Purpose {
  ForRent = 'for-rent',
}

export enum RentFrequency {
  Monthly = 'monthly',
}

export enum State {
  Active = 'active',
}

export enum HitType {
  Property = 'property',
}

export interface Verification {
  eligible: boolean;
  status: string;
  trucheckedAt: number;
  updatedAt: number;
  verifiedAt: number;
}

export enum Status {
  Verified = 'verified',
}

export interface ProcessingTimingsMS {
  _request: Request;
  afterFetch: AfterFetch;
  fetch: Fetch;
  getIdx: GetIdx;
  total: number;
}

export interface Request {
  roundTrip: number;
}

export interface AfterFetch {
  format: Format;
  merge: Merge;
  total: number;
}

export interface Format {
  highlighting: number;
  total: number;
}

export interface Merge {
  total: number;
}

export interface Fetch {
  scanning: number;
  total: number;
}

export interface GetIdx {
  load: Merge;
  total: number;
}
