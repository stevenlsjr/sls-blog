import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * The `DateTime` scalar type represents a DateTime
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  DateTime: any;
  /**
   * Allows use of a JSON String for input / output from the GraphQL schema.
   *
   * Use of this type is *not recommended* as you lose the benefits of having a defined, static
   * schema (one of the key benefits of GraphQL).
   */
  JSONString: any;
  /** GraphQL type for an integer that must be equal or greater than zero. */
  PositiveInt: any;
  /**
   * Leverages the internal Python implmeentation of UUID (uuid.UUID) to provide native UUID objects
   * in fields, resolvers and input.
   */
  UUID: any;
};

export type BlockQuoteBlock = StreamFieldInterface & {
  __typename?: 'BlockQuoteBlock';
  blockType: Scalars['String'];
  field: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  rawValue: Scalars['String'];
  value: Scalars['String'];
};

export type BlogLandingPage = PageInterface & {
  __typename?: 'BlogLandingPage';
  aliasOf?: Maybe<Page>;
  ancestors: Array<PageInterface>;
  children: Array<PageInterface>;
  contentType: Scalars['String'];
  depth?: Maybe<Scalars['Int']>;
  descendants: Array<PageInterface>;
  draftTitle: Scalars['String'];
  expireAt?: Maybe<Scalars['DateTime']>;
  expired: Scalars['Boolean'];
  firstPublishedAt?: Maybe<Scalars['DateTime']>;
  goLiveAt?: Maybe<Scalars['DateTime']>;
  hasUnpublishedChanges: Scalars['Boolean'];
  id?: Maybe<Scalars['ID']>;
  intro?: Maybe<Scalars['String']>;
  lastPublishedAt?: Maybe<Scalars['DateTime']>;
  latestRevisionCreatedAt?: Maybe<Scalars['DateTime']>;
  live: Scalars['Boolean'];
  locked?: Maybe<Scalars['Boolean']>;
  lockedAt?: Maybe<Scalars['DateTime']>;
  lockedBy?: Maybe<UserIdentityType>;
  nextSiblings: Array<PageInterface>;
  numchild: Scalars['Int'];
  owner?: Maybe<UserIdentityType>;
  pageType?: Maybe<Scalars['String']>;
  parent?: Maybe<PageInterface>;
  path: Scalars['String'];
  previousSiblings: Array<PageInterface>;
  searchDescription?: Maybe<Scalars['String']>;
  seoTitle: Scalars['String'];
  showInMenus: Scalars['Boolean'];
  siblings: Array<PageInterface>;
  slug: Scalars['String'];
  title: Scalars['String'];
  translationKey: Scalars['UUID'];
  url?: Maybe<Scalars['String']>;
  urlPath: Scalars['String'];
};


export type BlogLandingPageAncestorsArgs = {
  id?: InputMaybe<Scalars['ID']>;
  limit?: InputMaybe<Scalars['PositiveInt']>;
  offset?: InputMaybe<Scalars['PositiveInt']>;
  order?: InputMaybe<Scalars['String']>;
  searchQuery?: InputMaybe<Scalars['String']>;
};


export type BlogLandingPageChildrenArgs = {
  id?: InputMaybe<Scalars['ID']>;
  limit?: InputMaybe<Scalars['PositiveInt']>;
  offset?: InputMaybe<Scalars['PositiveInt']>;
  order?: InputMaybe<Scalars['String']>;
  searchQuery?: InputMaybe<Scalars['String']>;
};


export type BlogLandingPageDescendantsArgs = {
  id?: InputMaybe<Scalars['ID']>;
  limit?: InputMaybe<Scalars['PositiveInt']>;
  offset?: InputMaybe<Scalars['PositiveInt']>;
  order?: InputMaybe<Scalars['String']>;
  searchQuery?: InputMaybe<Scalars['String']>;
};


export type BlogLandingPageNextSiblingsArgs = {
  id?: InputMaybe<Scalars['ID']>;
  limit?: InputMaybe<Scalars['PositiveInt']>;
  offset?: InputMaybe<Scalars['PositiveInt']>;
  order?: InputMaybe<Scalars['String']>;
  searchQuery?: InputMaybe<Scalars['String']>;
};


export type BlogLandingPagePreviousSiblingsArgs = {
  id?: InputMaybe<Scalars['ID']>;
  limit?: InputMaybe<Scalars['PositiveInt']>;
  offset?: InputMaybe<Scalars['PositiveInt']>;
  order?: InputMaybe<Scalars['String']>;
  searchQuery?: InputMaybe<Scalars['String']>;
};


export type BlogLandingPageSiblingsArgs = {
  id?: InputMaybe<Scalars['ID']>;
  limit?: InputMaybe<Scalars['PositiveInt']>;
  offset?: InputMaybe<Scalars['PositiveInt']>;
  order?: InputMaybe<Scalars['String']>;
  searchQuery?: InputMaybe<Scalars['String']>;
};

export type BlogPage = PageInterface & {
  __typename?: 'BlogPage';
  aliasOf?: Maybe<Page>;
  ancestors: Array<PageInterface>;
  body?: Maybe<Array<Maybe<StreamFieldInterface>>>;
  children: Array<PageInterface>;
  contentType: Scalars['String'];
  depth?: Maybe<Scalars['Int']>;
  descendants: Array<PageInterface>;
  draftTitle: Scalars['String'];
  expireAt?: Maybe<Scalars['DateTime']>;
  expired: Scalars['Boolean'];
  firstPublishedAt?: Maybe<Scalars['DateTime']>;
  goLiveAt?: Maybe<Scalars['DateTime']>;
  hasUnpublishedChanges: Scalars['Boolean'];
  id?: Maybe<Scalars['ID']>;
  intro?: Maybe<Scalars['String']>;
  lastPublishedAt?: Maybe<Scalars['DateTime']>;
  latestRevisionCreatedAt?: Maybe<Scalars['DateTime']>;
  live: Scalars['Boolean'];
  locked?: Maybe<Scalars['Boolean']>;
  lockedAt?: Maybe<Scalars['DateTime']>;
  lockedBy?: Maybe<UserIdentityType>;
  nextSiblings: Array<PageInterface>;
  numchild: Scalars['Int'];
  owner?: Maybe<UserIdentityType>;
  pageType?: Maybe<Scalars['String']>;
  parent?: Maybe<PageInterface>;
  path: Scalars['String'];
  previousSiblings: Array<PageInterface>;
  searchDescription?: Maybe<Scalars['String']>;
  seoTitle: Scalars['String'];
  showInMenus: Scalars['Boolean'];
  siblings: Array<PageInterface>;
  slug: Scalars['String'];
  title: Scalars['String'];
  translationKey: Scalars['UUID'];
  url?: Maybe<Scalars['String']>;
  urlPath: Scalars['String'];
};


export type BlogPageAncestorsArgs = {
  id?: InputMaybe<Scalars['ID']>;
  limit?: InputMaybe<Scalars['PositiveInt']>;
  offset?: InputMaybe<Scalars['PositiveInt']>;
  order?: InputMaybe<Scalars['String']>;
  searchQuery?: InputMaybe<Scalars['String']>;
};


export type BlogPageChildrenArgs = {
  id?: InputMaybe<Scalars['ID']>;
  limit?: InputMaybe<Scalars['PositiveInt']>;
  offset?: InputMaybe<Scalars['PositiveInt']>;
  order?: InputMaybe<Scalars['String']>;
  searchQuery?: InputMaybe<Scalars['String']>;
};


export type BlogPageDescendantsArgs = {
  id?: InputMaybe<Scalars['ID']>;
  limit?: InputMaybe<Scalars['PositiveInt']>;
  offset?: InputMaybe<Scalars['PositiveInt']>;
  order?: InputMaybe<Scalars['String']>;
  searchQuery?: InputMaybe<Scalars['String']>;
};


export type BlogPageNextSiblingsArgs = {
  id?: InputMaybe<Scalars['ID']>;
  limit?: InputMaybe<Scalars['PositiveInt']>;
  offset?: InputMaybe<Scalars['PositiveInt']>;
  order?: InputMaybe<Scalars['String']>;
  searchQuery?: InputMaybe<Scalars['String']>;
};


export type BlogPagePreviousSiblingsArgs = {
  id?: InputMaybe<Scalars['ID']>;
  limit?: InputMaybe<Scalars['PositiveInt']>;
  offset?: InputMaybe<Scalars['PositiveInt']>;
  order?: InputMaybe<Scalars['String']>;
  searchQuery?: InputMaybe<Scalars['String']>;
};


export type BlogPageSiblingsArgs = {
  id?: InputMaybe<Scalars['ID']>;
  limit?: InputMaybe<Scalars['PositiveInt']>;
  offset?: InputMaybe<Scalars['PositiveInt']>;
  order?: InputMaybe<Scalars['String']>;
  searchQuery?: InputMaybe<Scalars['String']>;
};

export type BooleanBlock = StreamFieldInterface & {
  __typename?: 'BooleanBlock';
  blockType: Scalars['String'];
  field: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  rawValue: Scalars['String'];
  value: Scalars['Boolean'];
};

export type CharBlock = StreamFieldInterface & {
  __typename?: 'CharBlock';
  blockType: Scalars['String'];
  field: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  rawValue: Scalars['String'];
  value: Scalars['String'];
};

export type ChoiceBlock = StreamFieldInterface & {
  __typename?: 'ChoiceBlock';
  blockType: Scalars['String'];
  choices: Array<ChoiceOption>;
  field: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  rawValue: Scalars['String'];
  value: Scalars['String'];
};

export type ChoiceOption = {
  __typename?: 'ChoiceOption';
  key: Scalars['String'];
  value: Scalars['String'];
};

/** Collection type */
export type CollectionObjectType = {
  __typename?: 'CollectionObjectType';
  ancestors: Array<Maybe<CollectionObjectType>>;
  depth: Scalars['Int'];
  descendants: Array<Maybe<CollectionObjectType>>;
  id: Scalars['ID'];
  name: Scalars['String'];
  numchild: Scalars['Int'];
  path: Scalars['String'];
};

export type DateBlock = StreamFieldInterface & {
  __typename?: 'DateBlock';
  blockType: Scalars['String'];
  field: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  rawValue: Scalars['String'];
  value: Scalars['String'];
};


export type DateBlockValueArgs = {
  format?: InputMaybe<Scalars['String']>;
};

export type DateTimeBlock = StreamFieldInterface & {
  __typename?: 'DateTimeBlock';
  blockType: Scalars['String'];
  field: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  rawValue: Scalars['String'];
  value: Scalars['String'];
};


export type DateTimeBlockValueArgs = {
  format?: InputMaybe<Scalars['String']>;
};

export type DecimalBlock = StreamFieldInterface & {
  __typename?: 'DecimalBlock';
  blockType: Scalars['String'];
  field: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  rawValue: Scalars['String'];
  value: Scalars['Float'];
};

export type DocumentChooserBlock = StreamFieldInterface & {
  __typename?: 'DocumentChooserBlock';
  blockType: Scalars['String'];
  document: DocumentObjectType;
  field: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  rawValue: Scalars['String'];
};

/**
 * Base document type used if one isn't generated for the current model.
 * All other node types extend this.
 */
export type DocumentObjectType = {
  __typename?: 'DocumentObjectType';
  collection: CollectionObjectType;
  createdAt: Scalars['DateTime'];
  file: Scalars['String'];
  fileHash?: Maybe<Scalars['String']>;
  fileSize?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  title: Scalars['String'];
  uploadedByUser?: Maybe<UserIdentityType>;
  url: Scalars['String'];
};

export type EmailBlock = StreamFieldInterface & {
  __typename?: 'EmailBlock';
  blockType: Scalars['String'];
  field: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  rawValue: Scalars['String'];
  value: Scalars['String'];
};

export type EmbedBlock = StreamFieldInterface & {
  __typename?: 'EmbedBlock';
  blockType: Scalars['String'];
  embed?: Maybe<Scalars['String']>;
  field: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  rawEmbed?: Maybe<Scalars['JSONString']>;
  rawValue: Scalars['String'];
  url: Scalars['String'];
  value: Scalars['String'];
};

export type FloatBlock = StreamFieldInterface & {
  __typename?: 'FloatBlock';
  blockType: Scalars['String'];
  field: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  rawValue: Scalars['String'];
  value: Scalars['Float'];
};

export type ImageChooserBlock = StreamFieldInterface & {
  __typename?: 'ImageChooserBlock';
  blockType: Scalars['String'];
  field: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  image: ImageObjectType;
  rawValue: Scalars['String'];
};

export type ImageObjectType = {
  __typename?: 'ImageObjectType';
  aspectRatio: Scalars['Float'];
  collection: CollectionObjectType;
  createdAt: Scalars['DateTime'];
  file: Scalars['String'];
  fileHash: Scalars['String'];
  fileSize?: Maybe<Scalars['Int']>;
  focalPointHeight?: Maybe<Scalars['Int']>;
  focalPointWidth?: Maybe<Scalars['Int']>;
  focalPointX?: Maybe<Scalars['Int']>;
  focalPointY?: Maybe<Scalars['Int']>;
  height: Scalars['Int'];
  id: Scalars['ID'];
  rendition?: Maybe<ImageRenditionObjectType>;
  renditions: Array<ImageRenditionObjectType>;
  sizes: Scalars['String'];
  /** @deprecated Use the `url` attribute */
  src: Scalars['String'];
  srcSet?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  uploadedByUser?: Maybe<UserIdentityType>;
  url: Scalars['String'];
  width: Scalars['Int'];
};


export type ImageObjectTypeRenditionArgs = {
  bgcolor?: InputMaybe<Scalars['String']>;
  fill?: InputMaybe<Scalars['String']>;
  format?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  jpegquality?: InputMaybe<Scalars['Int']>;
  max?: InputMaybe<Scalars['String']>;
  min?: InputMaybe<Scalars['String']>;
  webpquality?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};


export type ImageObjectTypeSrcSetArgs = {
  sizes?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type ImageRenditionObjectType = {
  __typename?: 'ImageRenditionObjectType';
  aspectRatio: Scalars['Float'];
  collection: CollectionObjectType;
  file: Scalars['String'];
  filterSpec: Scalars['String'];
  focalPointKey: Scalars['String'];
  height: Scalars['Int'];
  id: Scalars['ID'];
  image: ImageObjectType;
  sizes: Scalars['String'];
  /** @deprecated Use the `url` attribute */
  src: Scalars['String'];
  url: Scalars['String'];
  width: Scalars['Int'];
};

export type IntegerBlock = StreamFieldInterface & {
  __typename?: 'IntegerBlock';
  blockType: Scalars['String'];
  field: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  rawValue: Scalars['String'];
  value: Scalars['Int'];
};

export type ListBlock = StreamFieldInterface & {
  __typename?: 'ListBlock';
  blockType: Scalars['String'];
  field: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  items: Array<StreamFieldInterface>;
  rawValue: Scalars['String'];
};

/**
 * Base Page type used if one isn't generated for the current model.
 * All other node types extend this.
 */
export type Page = PageInterface & {
  __typename?: 'Page';
  aliasOf?: Maybe<Page>;
  aliases: Array<Page>;
  ancestors: Array<PageInterface>;
  bloglandingpage?: Maybe<BlogLandingPage>;
  blogpage?: Maybe<BlogPage>;
  children: Array<PageInterface>;
  contentType: Scalars['String'];
  depth?: Maybe<Scalars['Int']>;
  descendants: Array<PageInterface>;
  draftTitle: Scalars['String'];
  expireAt?: Maybe<Scalars['DateTime']>;
  expired: Scalars['Boolean'];
  firstPublishedAt?: Maybe<Scalars['DateTime']>;
  goLiveAt?: Maybe<Scalars['DateTime']>;
  hasUnpublishedChanges: Scalars['Boolean'];
  id?: Maybe<Scalars['ID']>;
  lastPublishedAt?: Maybe<Scalars['DateTime']>;
  latestRevisionCreatedAt?: Maybe<Scalars['DateTime']>;
  live: Scalars['Boolean'];
  locked?: Maybe<Scalars['Boolean']>;
  lockedAt?: Maybe<Scalars['DateTime']>;
  lockedBy?: Maybe<UserIdentityType>;
  nextSiblings: Array<PageInterface>;
  numchild: Scalars['Int'];
  owner?: Maybe<UserIdentityType>;
  pageType?: Maybe<Scalars['String']>;
  parent?: Maybe<PageInterface>;
  path: Scalars['String'];
  previousSiblings: Array<PageInterface>;
  searchDescription?: Maybe<Scalars['String']>;
  seoTitle: Scalars['String'];
  showInMenus: Scalars['Boolean'];
  siblings: Array<PageInterface>;
  sitesRootedHere: Array<SiteObjectType>;
  slug: Scalars['String'];
  title: Scalars['String'];
  translationKey: Scalars['UUID'];
  url?: Maybe<Scalars['String']>;
  urlPath: Scalars['String'];
};


/**
 * Base Page type used if one isn't generated for the current model.
 * All other node types extend this.
 */
export type PageAncestorsArgs = {
  id?: InputMaybe<Scalars['ID']>;
  limit?: InputMaybe<Scalars['PositiveInt']>;
  offset?: InputMaybe<Scalars['PositiveInt']>;
  order?: InputMaybe<Scalars['String']>;
  searchQuery?: InputMaybe<Scalars['String']>;
};


/**
 * Base Page type used if one isn't generated for the current model.
 * All other node types extend this.
 */
export type PageChildrenArgs = {
  id?: InputMaybe<Scalars['ID']>;
  limit?: InputMaybe<Scalars['PositiveInt']>;
  offset?: InputMaybe<Scalars['PositiveInt']>;
  order?: InputMaybe<Scalars['String']>;
  searchQuery?: InputMaybe<Scalars['String']>;
};


/**
 * Base Page type used if one isn't generated for the current model.
 * All other node types extend this.
 */
export type PageDescendantsArgs = {
  id?: InputMaybe<Scalars['ID']>;
  limit?: InputMaybe<Scalars['PositiveInt']>;
  offset?: InputMaybe<Scalars['PositiveInt']>;
  order?: InputMaybe<Scalars['String']>;
  searchQuery?: InputMaybe<Scalars['String']>;
};


/**
 * Base Page type used if one isn't generated for the current model.
 * All other node types extend this.
 */
export type PageNextSiblingsArgs = {
  id?: InputMaybe<Scalars['ID']>;
  limit?: InputMaybe<Scalars['PositiveInt']>;
  offset?: InputMaybe<Scalars['PositiveInt']>;
  order?: InputMaybe<Scalars['String']>;
  searchQuery?: InputMaybe<Scalars['String']>;
};


/**
 * Base Page type used if one isn't generated for the current model.
 * All other node types extend this.
 */
export type PagePreviousSiblingsArgs = {
  id?: InputMaybe<Scalars['ID']>;
  limit?: InputMaybe<Scalars['PositiveInt']>;
  offset?: InputMaybe<Scalars['PositiveInt']>;
  order?: InputMaybe<Scalars['String']>;
  searchQuery?: InputMaybe<Scalars['String']>;
};


/**
 * Base Page type used if one isn't generated for the current model.
 * All other node types extend this.
 */
export type PageSiblingsArgs = {
  id?: InputMaybe<Scalars['ID']>;
  limit?: InputMaybe<Scalars['PositiveInt']>;
  offset?: InputMaybe<Scalars['PositiveInt']>;
  order?: InputMaybe<Scalars['String']>;
  searchQuery?: InputMaybe<Scalars['String']>;
};

export type PageChooserBlock = StreamFieldInterface & {
  __typename?: 'PageChooserBlock';
  blockType: Scalars['String'];
  field: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  page: PageInterface;
  rawValue: Scalars['String'];
};

export type PageInterface = {
  ancestors: Array<PageInterface>;
  children: Array<PageInterface>;
  contentType: Scalars['String'];
  depth?: Maybe<Scalars['Int']>;
  descendants: Array<PageInterface>;
  firstPublishedAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  lastPublishedAt?: Maybe<Scalars['DateTime']>;
  live: Scalars['Boolean'];
  locked?: Maybe<Scalars['Boolean']>;
  nextSiblings: Array<PageInterface>;
  pageType?: Maybe<Scalars['String']>;
  parent?: Maybe<PageInterface>;
  previousSiblings: Array<PageInterface>;
  searchDescription?: Maybe<Scalars['String']>;
  seoTitle: Scalars['String'];
  showInMenus: Scalars['Boolean'];
  siblings: Array<PageInterface>;
  slug: Scalars['String'];
  title: Scalars['String'];
  url?: Maybe<Scalars['String']>;
  urlPath: Scalars['String'];
};


export type PageInterfaceAncestorsArgs = {
  id?: InputMaybe<Scalars['ID']>;
  limit?: InputMaybe<Scalars['PositiveInt']>;
  offset?: InputMaybe<Scalars['PositiveInt']>;
  order?: InputMaybe<Scalars['String']>;
  searchQuery?: InputMaybe<Scalars['String']>;
};


export type PageInterfaceChildrenArgs = {
  id?: InputMaybe<Scalars['ID']>;
  limit?: InputMaybe<Scalars['PositiveInt']>;
  offset?: InputMaybe<Scalars['PositiveInt']>;
  order?: InputMaybe<Scalars['String']>;
  searchQuery?: InputMaybe<Scalars['String']>;
};


export type PageInterfaceDescendantsArgs = {
  id?: InputMaybe<Scalars['ID']>;
  limit?: InputMaybe<Scalars['PositiveInt']>;
  offset?: InputMaybe<Scalars['PositiveInt']>;
  order?: InputMaybe<Scalars['String']>;
  searchQuery?: InputMaybe<Scalars['String']>;
};


export type PageInterfaceNextSiblingsArgs = {
  id?: InputMaybe<Scalars['ID']>;
  limit?: InputMaybe<Scalars['PositiveInt']>;
  offset?: InputMaybe<Scalars['PositiveInt']>;
  order?: InputMaybe<Scalars['String']>;
  searchQuery?: InputMaybe<Scalars['String']>;
};


export type PageInterfacePreviousSiblingsArgs = {
  id?: InputMaybe<Scalars['ID']>;
  limit?: InputMaybe<Scalars['PositiveInt']>;
  offset?: InputMaybe<Scalars['PositiveInt']>;
  order?: InputMaybe<Scalars['String']>;
  searchQuery?: InputMaybe<Scalars['String']>;
};


export type PageInterfaceSiblingsArgs = {
  id?: InputMaybe<Scalars['ID']>;
  limit?: InputMaybe<Scalars['PositiveInt']>;
  offset?: InputMaybe<Scalars['PositiveInt']>;
  order?: InputMaybe<Scalars['String']>;
  searchQuery?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  collections: Array<Maybe<CollectionObjectType>>;
  document?: Maybe<DocumentObjectType>;
  documents: Array<DocumentObjectType>;
  image?: Maybe<ImageObjectType>;
  imageType: Scalars['String'];
  images: Array<ImageObjectType>;
  page?: Maybe<PageInterface>;
  pages: Array<PageInterface>;
  redirects: Array<RedirectType>;
  search: Array<Search>;
  site?: Maybe<SiteObjectType>;
  sites: Array<SiteObjectType>;
  tag?: Maybe<TagObjectType>;
  tags: Array<TagObjectType>;
  userById?: Maybe<UserType>;
  userIdentity?: Maybe<UserIdentityType>;
  users?: Maybe<Array<Maybe<UserType>>>;
};


export type QueryCollectionsArgs = {
  id?: InputMaybe<Scalars['ID']>;
  limit?: InputMaybe<Scalars['PositiveInt']>;
  offset?: InputMaybe<Scalars['PositiveInt']>;
  order?: InputMaybe<Scalars['String']>;
};


export type QueryDocumentArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryDocumentsArgs = {
  collection?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  limit?: InputMaybe<Scalars['PositiveInt']>;
  offset?: InputMaybe<Scalars['PositiveInt']>;
  order?: InputMaybe<Scalars['String']>;
  searchQuery?: InputMaybe<Scalars['String']>;
};


export type QueryImageArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryImagesArgs = {
  collection?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  limit?: InputMaybe<Scalars['PositiveInt']>;
  offset?: InputMaybe<Scalars['PositiveInt']>;
  order?: InputMaybe<Scalars['String']>;
  searchQuery?: InputMaybe<Scalars['String']>;
};


export type QueryPageArgs = {
  contentType?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  inSite?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
  urlPath?: InputMaybe<Scalars['String']>;
};


export type QueryPagesArgs = {
  contentType?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  inSite?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['PositiveInt']>;
  offset?: InputMaybe<Scalars['PositiveInt']>;
  order?: InputMaybe<Scalars['String']>;
  searchQuery?: InputMaybe<Scalars['String']>;
};


export type QuerySearchArgs = {
  query?: InputMaybe<Scalars['String']>;
};


export type QuerySiteArgs = {
  hostname?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};


export type QuerySitesArgs = {
  id?: InputMaybe<Scalars['ID']>;
  limit?: InputMaybe<Scalars['PositiveInt']>;
  offset?: InputMaybe<Scalars['PositiveInt']>;
  order?: InputMaybe<Scalars['String']>;
  searchQuery?: InputMaybe<Scalars['String']>;
};


export type QueryTagArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryTagsArgs = {
  id?: InputMaybe<Scalars['ID']>;
  limit?: InputMaybe<Scalars['PositiveInt']>;
  offset?: InputMaybe<Scalars['PositiveInt']>;
  order?: InputMaybe<Scalars['String']>;
};


export type QueryUserByIdArgs = {
  id?: InputMaybe<Scalars['Int']>;
};

export type RawHtmlBlock = StreamFieldInterface & {
  __typename?: 'RawHTMLBlock';
  blockType: Scalars['String'];
  field: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  rawValue: Scalars['String'];
  value: Scalars['String'];
};

export type RedirectType = {
  __typename?: 'RedirectType';
  isPermanent: Scalars['Boolean'];
  newUrl: Scalars['String'];
  oldPath: Scalars['String'];
  oldUrl: Scalars['String'];
  page?: Maybe<PageInterface>;
};

export type RegexBlock = StreamFieldInterface & {
  __typename?: 'RegexBlock';
  blockType: Scalars['String'];
  field: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  rawValue: Scalars['String'];
  value: Scalars['String'];
};

export type RichTextBlock = StreamFieldInterface & {
  __typename?: 'RichTextBlock';
  blockType: Scalars['String'];
  field: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  rawValue: Scalars['String'];
  value: Scalars['String'];
};

export type Search = BlogLandingPage | BlogPage | DocumentObjectType | Page;

export type SiteObjectType = {
  __typename?: 'SiteObjectType';
  hostname: Scalars['String'];
  id: Scalars['ID'];
  /** If true, this site will handle requests for all other hostnames that do not have a site entry of their own */
  isDefaultSite: Scalars['Boolean'];
  page?: Maybe<PageInterface>;
  pages: Array<PageInterface>;
  /** Set this to something other than 80 if you need a specific port number to appear in URLs (e.g. development on port 8000). Does not affect request handling (so port forwarding still works). */
  port: Scalars['Int'];
  rootPage: Page;
  /** Human-readable name for the site. */
  siteName: Scalars['String'];
};


export type SiteObjectTypePageArgs = {
  contentType?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  slug?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
};


export type SiteObjectTypePagesArgs = {
  id?: InputMaybe<Scalars['ID']>;
  limit?: InputMaybe<Scalars['PositiveInt']>;
  offset?: InputMaybe<Scalars['PositiveInt']>;
  order?: InputMaybe<Scalars['String']>;
  searchQuery?: InputMaybe<Scalars['String']>;
};

export type SnippetChooserBlock = StreamFieldInterface & {
  __typename?: 'SnippetChooserBlock';
  blockType: Scalars['String'];
  field: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  rawValue: Scalars['String'];
  snippet: Scalars['String'];
};

export type StaticBlock = StreamFieldInterface & {
  __typename?: 'StaticBlock';
  blockType: Scalars['String'];
  field: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  rawValue: Scalars['String'];
  value: Scalars['String'];
};

export type StreamBlock = StreamFieldInterface & {
  __typename?: 'StreamBlock';
  blockType: Scalars['String'];
  blocks: Array<StreamFieldInterface>;
  field: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  rawValue: Scalars['String'];
};

export type StreamFieldBlock = StreamFieldInterface & {
  __typename?: 'StreamFieldBlock';
  blockType: Scalars['String'];
  field: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  rawValue: Scalars['String'];
  value: Scalars['String'];
};

export type StreamFieldInterface = {
  blockType: Scalars['String'];
  field: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  rawValue: Scalars['String'];
};

export type StructBlock = StreamFieldInterface & {
  __typename?: 'StructBlock';
  blockType: Scalars['String'];
  blocks: Array<StreamFieldInterface>;
  field: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  rawValue: Scalars['String'];
};

export type TagObjectType = {
  __typename?: 'TagObjectType';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type TextBlock = StreamFieldInterface & {
  __typename?: 'TextBlock';
  blockType: Scalars['String'];
  field: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  rawValue: Scalars['String'];
  value: Scalars['String'];
};

export type TimeBlock = StreamFieldInterface & {
  __typename?: 'TimeBlock';
  blockType: Scalars['String'];
  field: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  rawValue: Scalars['String'];
  value: Scalars['String'];
};


export type TimeBlockValueArgs = {
  format?: InputMaybe<Scalars['String']>;
};

export type UrlBlock = StreamFieldInterface & {
  __typename?: 'URLBlock';
  blockType: Scalars['String'];
  field: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  rawValue: Scalars['String'];
  value: Scalars['String'];
};

export type UserIdentityType = {
  __typename?: 'UserIdentityType';
  bio?: Maybe<Scalars['String']>;
  dateJoined: Scalars['DateTime'];
  documentSet: Array<DocumentObjectType>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['ID'];
  imageSet: Array<ImageObjectType>;
  /** Designates whether this user should be treated as active. Unselect this instead of deleting accounts. */
  isActive: Scalars['Boolean'];
  /** Designates whether the user can log into this admin site. */
  isStaff: Scalars['Boolean'];
  /** Designates that this user has all permissions without explicitly assigning them. */
  isSuperuser: Scalars['Boolean'];
  lastLogin?: Maybe<Scalars['DateTime']>;
  lastName: Scalars['String'];
  lockedPages: Array<Page>;
  ownedPages: Array<Page>;
  password: Scalars['String'];
  /** Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only. */
  username: Scalars['String'];
};

export type UserType = {
  __typename?: 'UserType';
  id: Scalars['ID'];
  /** Designates whether this user should be treated as active. Unselect this instead of deleting accounts. */
  isActive: Scalars['Boolean'];
  /** Designates whether the user can log into this admin site. */
  isStaff: Scalars['Boolean'];
  /** Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only. */
  username: Scalars['String'];
};

export type ListPageChildrenQueryVariables = Exact<{
  pageId?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['PositiveInt']>;
  offset?: InputMaybe<Scalars['PositiveInt']>;
}>;


export type ListPageChildrenQuery = { __typename?: 'Query', page?: { __typename?: 'BlogLandingPage', id?: string | null, children: Array<{ __typename?: 'BlogLandingPage', urlPath: string, title: string, seoTitle: string } | { __typename?: 'BlogPage', intro?: string | null, urlPath: string, title: string, seoTitle: string } | { __typename?: 'Page', urlPath: string, title: string, seoTitle: string }> } | { __typename?: 'BlogPage', id?: string | null, children: Array<{ __typename?: 'BlogLandingPage', urlPath: string, title: string, seoTitle: string } | { __typename?: 'BlogPage', intro?: string | null, urlPath: string, title: string, seoTitle: string } | { __typename?: 'Page', urlPath: string, title: string, seoTitle: string }> } | { __typename?: 'Page', id?: string | null, children: Array<{ __typename?: 'BlogLandingPage', urlPath: string, title: string, seoTitle: string } | { __typename?: 'BlogPage', intro?: string | null, urlPath: string, title: string, seoTitle: string } | { __typename?: 'Page', urlPath: string, title: string, seoTitle: string }> } | null };

export type ListPagesQueryVariables = Exact<{ [key: string]: never; }>;


export type ListPagesQuery = { __typename?: 'Query', pages: Array<{ __typename?: 'BlogLandingPage', title: string, url?: string | null, seoTitle: string, slug: string } | { __typename?: 'BlogPage', intro?: string | null, title: string, url?: string | null, seoTitle: string, slug: string } | { __typename?: 'Page', title: string, url?: string | null, seoTitle: string, slug: string }> };

export type PageDetailQueryVariables = Exact<{
  url?: InputMaybe<Scalars['String']>;
}>;


export type PageDetailQuery = { __typename?: 'Query', page?: { __typename?: 'BlogLandingPage', intro?: string | null, id?: string | null, urlPath: string, url?: string | null, slug: string, title: string, seoTitle: string, contentType: string, pageType?: string | null, children: Array<{ __typename?: 'BlogLandingPage', id?: string | null, urlPath: string, title: string } | { __typename?: 'BlogPage', id?: string | null, urlPath: string, title: string } | { __typename?: 'Page', id?: string | null, urlPath: string, title: string }>, parent?: { __typename?: 'BlogLandingPage', title: string, urlPath: string } | { __typename?: 'BlogPage', title: string, urlPath: string } | { __typename?: 'Page', title: string, urlPath: string } | null } | { __typename?: 'BlogPage', intro?: string | null, id?: string | null, urlPath: string, url?: string | null, slug: string, title: string, seoTitle: string, contentType: string, pageType?: string | null, body?: Array<{ __typename?: 'BlockQuoteBlock', id?: string | null, rawValue: string, field: string, blockType: string } | { __typename?: 'BooleanBlock', id?: string | null, rawValue: string, field: string, blockType: string } | { __typename?: 'CharBlock', id?: string | null, rawValue: string, field: string, blockType: string } | { __typename?: 'ChoiceBlock', id?: string | null, rawValue: string, field: string, blockType: string } | { __typename?: 'DateBlock', id?: string | null, rawValue: string, field: string, blockType: string } | { __typename?: 'DateTimeBlock', id?: string | null, rawValue: string, field: string, blockType: string } | { __typename?: 'DecimalBlock', id?: string | null, rawValue: string, field: string, blockType: string } | { __typename?: 'DocumentChooserBlock', id?: string | null, rawValue: string, field: string, blockType: string } | { __typename?: 'EmailBlock', id?: string | null, rawValue: string, field: string, blockType: string } | { __typename?: 'EmbedBlock', id?: string | null, rawValue: string, field: string, blockType: string } | { __typename?: 'FloatBlock', id?: string | null, rawValue: string, field: string, blockType: string } | { __typename?: 'ImageChooserBlock', id?: string | null, rawValue: string, field: string, blockType: string, image: { __typename?: 'ImageObjectType', srcSet?: string | null, src?: { __typename?: 'ImageRenditionObjectType', url: string } | null } } | { __typename?: 'IntegerBlock', id?: string | null, rawValue: string, field: string, blockType: string } | { __typename?: 'ListBlock', id?: string | null, rawValue: string, field: string, blockType: string } | { __typename?: 'PageChooserBlock', id?: string | null, rawValue: string, field: string, blockType: string } | { __typename?: 'RawHTMLBlock', id?: string | null, rawValue: string, field: string, blockType: string } | { __typename?: 'RegexBlock', id?: string | null, rawValue: string, field: string, blockType: string } | { __typename?: 'RichTextBlock', value: string, id?: string | null, rawValue: string, field: string, blockType: string } | { __typename?: 'SnippetChooserBlock', id?: string | null, rawValue: string, field: string, blockType: string } | { __typename?: 'StaticBlock', id?: string | null, rawValue: string, field: string, blockType: string } | { __typename?: 'StreamBlock', id?: string | null, rawValue: string, field: string, blockType: string } | { __typename?: 'StreamFieldBlock', id?: string | null, rawValue: string, field: string, blockType: string } | { __typename?: 'StructBlock', id?: string | null, rawValue: string, field: string, blockType: string } | { __typename?: 'TextBlock', id?: string | null, rawValue: string, field: string, blockType: string } | { __typename?: 'TimeBlock', id?: string | null, rawValue: string, field: string, blockType: string } | { __typename?: 'URLBlock', id?: string | null, rawValue: string, field: string, blockType: string } | null> | null, parent?: { __typename?: 'BlogLandingPage', title: string, urlPath: string } | { __typename?: 'BlogPage', title: string, urlPath: string } | { __typename?: 'Page', title: string, urlPath: string } | null } | { __typename?: 'Page', id?: string | null, urlPath: string, url?: string | null, slug: string, title: string, seoTitle: string, contentType: string, pageType?: string | null, parent?: { __typename?: 'BlogLandingPage', title: string, urlPath: string } | { __typename?: 'BlogPage', title: string, urlPath: string } | { __typename?: 'Page', title: string, urlPath: string } | null } | null };

export type PreviewPageQueryVariables = Exact<{
  token?: InputMaybe<Scalars['String']>;
  contentType?: InputMaybe<Scalars['String']>;
}>;


export type PreviewPageQuery = { __typename?: 'Query', previewPage?: { __typename?: 'BlogLandingPage', intro?: string | null, id?: string | null, urlPath: string, url?: string | null, slug: string, title: string, seoTitle: string, contentType: string, pageType?: string | null, children: Array<{ __typename?: 'BlogLandingPage', id?: string | null, urlPath: string, title: string } | { __typename?: 'BlogPage', id?: string | null, urlPath: string, title: string } | { __typename?: 'Page', id?: string | null, urlPath: string, title: string }>, parent?: { __typename?: 'BlogLandingPage', title: string, urlPath: string } | { __typename?: 'BlogPage', title: string, urlPath: string } | { __typename?: 'Page', title: string, urlPath: string } | null } | { __typename?: 'BlogPage', intro?: string | null, id?: string | null, urlPath: string, url?: string | null, slug: string, title: string, seoTitle: string, contentType: string, pageType?: string | null, body?: Array<{ __typename?: 'BlockQuoteBlock', id?: string | null, rawValue: string, field: string, blockType: string } | { __typename?: 'BooleanBlock', id?: string | null, rawValue: string, field: string, blockType: string } | { __typename?: 'CharBlock', id?: string | null, rawValue: string, field: string, blockType: string } | { __typename?: 'ChoiceBlock', id?: string | null, rawValue: string, field: string, blockType: string } | { __typename?: 'DateBlock', id?: string | null, rawValue: string, field: string, blockType: string } | { __typename?: 'DateTimeBlock', id?: string | null, rawValue: string, field: string, blockType: string } | { __typename?: 'DecimalBlock', id?: string | null, rawValue: string, field: string, blockType: string } | { __typename?: 'DocumentChooserBlock', id?: string | null, rawValue: string, field: string, blockType: string } | { __typename?: 'EmailBlock', id?: string | null, rawValue: string, field: string, blockType: string } | { __typename?: 'EmbedBlock', id?: string | null, rawValue: string, field: string, blockType: string } | { __typename?: 'FloatBlock', id?: string | null, rawValue: string, field: string, blockType: string } | { __typename?: 'ImageChooserBlock', id?: string | null, rawValue: string, field: string, blockType: string, image: { __typename?: 'ImageObjectType', title: string, srcSet?: string | null, src?: { __typename?: 'ImageRenditionObjectType', url: string } | null } } | { __typename?: 'IntegerBlock', id?: string | null, rawValue: string, field: string, blockType: string } | { __typename?: 'ListBlock', id?: string | null, rawValue: string, field: string, blockType: string } | { __typename?: 'PageChooserBlock', id?: string | null, rawValue: string, field: string, blockType: string } | { __typename?: 'RawHTMLBlock', id?: string | null, rawValue: string, field: string, blockType: string } | { __typename?: 'RegexBlock', id?: string | null, rawValue: string, field: string, blockType: string } | { __typename?: 'RichTextBlock', value: string, id?: string | null, rawValue: string, field: string, blockType: string } | { __typename?: 'SnippetChooserBlock', id?: string | null, rawValue: string, field: string, blockType: string } | { __typename?: 'StaticBlock', id?: string | null, rawValue: string, field: string, blockType: string } | { __typename?: 'StreamBlock', id?: string | null, rawValue: string, field: string, blockType: string } | { __typename?: 'StreamFieldBlock', id?: string | null, rawValue: string, field: string, blockType: string } | { __typename?: 'StructBlock', id?: string | null, rawValue: string, field: string, blockType: string } | { __typename?: 'TextBlock', id?: string | null, rawValue: string, field: string, blockType: string } | { __typename?: 'TimeBlock', id?: string | null, rawValue: string, field: string, blockType: string } | { __typename?: 'URLBlock', id?: string | null, rawValue: string, field: string, blockType: string } | null> | null, parent?: { __typename?: 'BlogLandingPage', title: string, urlPath: string } | { __typename?: 'BlogPage', title: string, urlPath: string } | { __typename?: 'Page', title: string, urlPath: string } | null } | { __typename?: 'Page', id?: string | null, urlPath: string, url?: string | null, slug: string, title: string, seoTitle: string, contentType: string, pageType?: string | null, parent?: { __typename?: 'BlogLandingPage', title: string, urlPath: string } | { __typename?: 'BlogPage', title: string, urlPath: string } | { __typename?: 'Page', title: string, urlPath: string } | null } | null };


export const ListPageChildrenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ListPageChildren"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PositiveInt"}},"defaultValue":{"kind":"IntValue","value":"10"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PositiveInt"}},"defaultValue":{"kind":"IntValue","value":"0"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"page"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"children"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"urlPath"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"seoTitle"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BlogPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"intro"}}]}}]}}]}}]}}]} as unknown as DocumentNode<ListPageChildrenQuery, ListPageChildrenQueryVariables>;
export const ListPagesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ListPages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"seoTitle"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BlogPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"intro"}}]}}]}}]}}]} as unknown as DocumentNode<ListPagesQuery, ListPagesQueryVariables>;
export const PageDetailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PageDetail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"url"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"page"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"urlPath"},"value":{"kind":"Variable","name":{"kind":"Name","value":"url"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"urlPath"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"seoTitle"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"pageType"}},{"kind":"Field","name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"urlPath"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BlogLandingPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"intro"}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"urlPath"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BlogPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"intro"}},{"kind":"Field","name":{"kind":"Name","value":"body"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"rawValue"}},{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"blockType"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RichTextBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImageChooserBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"src"},"name":{"kind":"Name","value":"rendition"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"width"},"value":{"kind":"IntValue","value":"600"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"srcSet"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sizes"},"value":{"kind":"ListValue","values":[{"kind":"IntValue","value":"400"},{"kind":"IntValue","value":"600"},{"kind":"IntValue","value":"1000"}]}}]}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<PageDetailQuery, PageDetailQueryVariables>;
export const PreviewPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PreviewPage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"token"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"contentType"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"previewPage"},"name":{"kind":"Name","value":"page"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"token"},"value":{"kind":"Variable","name":{"kind":"Name","value":"token"}}},{"kind":"Argument","name":{"kind":"Name","value":"contentType"},"value":{"kind":"Variable","name":{"kind":"Name","value":"contentType"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"urlPath"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"seoTitle"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"pageType"}},{"kind":"Field","name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"urlPath"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BlogLandingPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"intro"}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"urlPath"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BlogPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"intro"}},{"kind":"Field","name":{"kind":"Name","value":"body"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"rawValue"}},{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"blockType"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RichTextBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImageChooserBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","alias":{"kind":"Name","value":"src"},"name":{"kind":"Name","value":"rendition"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"width"},"value":{"kind":"IntValue","value":"600"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"srcSet"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sizes"},"value":{"kind":"ListValue","values":[{"kind":"IntValue","value":"400"},{"kind":"IntValue","value":"600"},{"kind":"IntValue","value":"1000"}]}}]}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<PreviewPageQuery, PreviewPageQueryVariables>;