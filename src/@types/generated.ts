export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type AvifOptions = {
  lossless?: InputMaybe<Scalars["Boolean"]>;
  quality?: InputMaybe<Scalars["Int"]>;
  speed?: InputMaybe<Scalars["Int"]>;
};

export type BlurredOptions = {
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  toFormat?: InputMaybe<ImageFormat>;
  /** Width of the generated low-res preview. Default is 20px */
  width?: InputMaybe<Scalars["Int"]>;
};

export type BooleanQueryOperatorInput = {
  eq?: InputMaybe<Scalars["Boolean"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]>>>;
  ne?: InputMaybe<Scalars["Boolean"]>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]>>>;
};

export type ContentfulAsset = ContentfulReference &
  Node & {
    __typename?: "ContentfulAsset";
    children: Array<Node>;
    contentful_id: Scalars["String"];
    createdAt?: Maybe<Scalars["Date"]>;
    description?: Maybe<Scalars["String"]>;
    file?: Maybe<ContentfulAssetFile>;
    gatsbyImageData?: Maybe<Scalars["JSON"]>;
    id: Scalars["ID"];
    internal: Internal;
    node_locale?: Maybe<Scalars["String"]>;
    parent?: Maybe<Node>;
    spaceId?: Maybe<Scalars["String"]>;
    sys?: Maybe<ContentfulAssetSys>;
    title?: Maybe<Scalars["String"]>;
    updatedAt?: Maybe<Scalars["Date"]>;
  };

export type ContentfulAssetCreatedAtArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type ContentfulAssetGatsbyImageDataArgs = {
  aspectRatio?: InputMaybe<Scalars["Float"]>;
  backgroundColor?: InputMaybe<Scalars["String"]>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  cornerRadius?: InputMaybe<Scalars["Int"]>;
  cropFocus?: InputMaybe<ContentfulImageCropFocus>;
  formats?: InputMaybe<Array<InputMaybe<GatsbyImageFormat>>>;
  height?: InputMaybe<Scalars["Int"]>;
  jpegProgressive?: InputMaybe<Scalars["Boolean"]>;
  layout?: InputMaybe<GatsbyImageLayout>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  placeholder?: InputMaybe<GatsbyImagePlaceholder>;
  quality?: InputMaybe<Scalars["Int"]>;
  resizingBehavior?: InputMaybe<ImageResizingBehavior>;
  sizes?: InputMaybe<Scalars["String"]>;
  width?: InputMaybe<Scalars["Int"]>;
};

export type ContentfulAssetUpdatedAtArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type ContentfulAssetConnection = {
  __typename?: "ContentfulAssetConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<ContentfulAssetEdge>;
  group: Array<ContentfulAssetGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<ContentfulAsset>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type ContentfulAssetConnectionDistinctArgs = {
  field: ContentfulAssetFieldsEnum;
};

export type ContentfulAssetConnectionGroupArgs = {
  field: ContentfulAssetFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type ContentfulAssetConnectionMaxArgs = {
  field: ContentfulAssetFieldsEnum;
};

export type ContentfulAssetConnectionMinArgs = {
  field: ContentfulAssetFieldsEnum;
};

export type ContentfulAssetConnectionSumArgs = {
  field: ContentfulAssetFieldsEnum;
};

export type ContentfulAssetEdge = {
  __typename?: "ContentfulAssetEdge";
  next?: Maybe<ContentfulAsset>;
  node: ContentfulAsset;
  previous?: Maybe<ContentfulAsset>;
};

export enum ContentfulAssetFieldsEnum {
  Children = "children",
  ChildrenChildren = "children___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenId = "children___id",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentParentId = "children___parent___parent___id",
  ContentfulId = "contentful_id",
  CreatedAt = "createdAt",
  Description = "description",
  FileContentType = "file___contentType",
  FileDetailsImageHeight = "file___details___image___height",
  FileDetailsImageWidth = "file___details___image___width",
  FileDetailsSize = "file___details___size",
  FileFileName = "file___fileName",
  FileUrl = "file___url",
  GatsbyImageData = "gatsbyImageData",
  Id = "id",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  NodeLocale = "node_locale",
  ParentChildren = "parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenId = "parent___children___id",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentId = "parent___id",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentId = "parent___parent___id",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentParentId = "parent___parent___parent___id",
  SpaceId = "spaceId",
  SysRevision = "sys___revision",
  SysType = "sys___type",
  Title = "title",
  UpdatedAt = "updatedAt",
}

export type ContentfulAssetFile = {
  __typename?: "ContentfulAssetFile";
  contentType?: Maybe<Scalars["String"]>;
  details?: Maybe<ContentfulAssetFileDetails>;
  fileName?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
};

export type ContentfulAssetFileDetails = {
  __typename?: "ContentfulAssetFileDetails";
  image?: Maybe<ContentfulAssetFileDetailsImage>;
  size?: Maybe<Scalars["Int"]>;
};

export type ContentfulAssetFileDetailsFilterInput = {
  image?: InputMaybe<ContentfulAssetFileDetailsImageFilterInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
};

export type ContentfulAssetFileDetailsImage = {
  __typename?: "ContentfulAssetFileDetailsImage";
  height?: Maybe<Scalars["Int"]>;
  width?: Maybe<Scalars["Int"]>;
};

export type ContentfulAssetFileDetailsImageFilterInput = {
  height?: InputMaybe<IntQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
};

export type ContentfulAssetFileFilterInput = {
  contentType?: InputMaybe<StringQueryOperatorInput>;
  details?: InputMaybe<ContentfulAssetFileDetailsFilterInput>;
  fileName?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulAssetFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  file?: InputMaybe<ContentfulAssetFileFilterInput>;
  gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulAssetSysFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
};

export type ContentfulAssetGroupConnection = {
  __typename?: "ContentfulAssetGroupConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<ContentfulAssetEdge>;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
  group: Array<ContentfulAssetGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<ContentfulAsset>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type ContentfulAssetGroupConnectionDistinctArgs = {
  field: ContentfulAssetFieldsEnum;
};

export type ContentfulAssetGroupConnectionGroupArgs = {
  field: ContentfulAssetFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type ContentfulAssetGroupConnectionMaxArgs = {
  field: ContentfulAssetFieldsEnum;
};

export type ContentfulAssetGroupConnectionMinArgs = {
  field: ContentfulAssetFieldsEnum;
};

export type ContentfulAssetGroupConnectionSumArgs = {
  field: ContentfulAssetFieldsEnum;
};

export type ContentfulAssetSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ContentfulAssetFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulAssetSys = {
  __typename?: "ContentfulAssetSys";
  revision?: Maybe<Scalars["Int"]>;
  type?: Maybe<Scalars["String"]>;
};

export type ContentfulAssetSysFilterInput = {
  revision?: InputMaybe<IntQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulAuthor = ContentfulEntry &
  ContentfulReference &
  Node & {
    __typename?: "ContentfulAuthor";
    children: Array<Node>;
    contentful_id: Scalars["String"];
    createdAt?: Maybe<Scalars["Date"]>;
    fullName?: Maybe<Scalars["String"]>;
    id: Scalars["ID"];
    internal: Internal;
    node_locale: Scalars["String"];
    parent?: Maybe<Node>;
    photo?: Maybe<ContentfulAsset>;
    spaceId?: Maybe<Scalars["String"]>;
    sys?: Maybe<ContentfulAuthorSys>;
    updatedAt?: Maybe<Scalars["Date"]>;
  };

export type ContentfulAuthorCreatedAtArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type ContentfulAuthorUpdatedAtArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type ContentfulAuthorConnection = {
  __typename?: "ContentfulAuthorConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<ContentfulAuthorEdge>;
  group: Array<ContentfulAuthorGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<ContentfulAuthor>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type ContentfulAuthorConnectionDistinctArgs = {
  field: ContentfulAuthorFieldsEnum;
};

export type ContentfulAuthorConnectionGroupArgs = {
  field: ContentfulAuthorFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type ContentfulAuthorConnectionMaxArgs = {
  field: ContentfulAuthorFieldsEnum;
};

export type ContentfulAuthorConnectionMinArgs = {
  field: ContentfulAuthorFieldsEnum;
};

export type ContentfulAuthorConnectionSumArgs = {
  field: ContentfulAuthorFieldsEnum;
};

export type ContentfulAuthorEdge = {
  __typename?: "ContentfulAuthorEdge";
  next?: Maybe<ContentfulAuthor>;
  node: ContentfulAuthor;
  previous?: Maybe<ContentfulAuthor>;
};

export enum ContentfulAuthorFieldsEnum {
  Children = "children",
  ChildrenChildren = "children___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenId = "children___id",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentParentId = "children___parent___parent___id",
  ContentfulId = "contentful_id",
  CreatedAt = "createdAt",
  FullName = "fullName",
  Id = "id",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  NodeLocale = "node_locale",
  ParentChildren = "parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenId = "parent___children___id",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentId = "parent___id",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentId = "parent___parent___id",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentParentId = "parent___parent___parent___id",
  PhotoChildren = "photo___children",
  PhotoChildrenChildren = "photo___children___children",
  PhotoChildrenChildrenChildren = "photo___children___children___children",
  PhotoChildrenChildrenId = "photo___children___children___id",
  PhotoChildrenId = "photo___children___id",
  PhotoChildrenInternalContent = "photo___children___internal___content",
  PhotoChildrenInternalContentDigest = "photo___children___internal___contentDigest",
  PhotoChildrenInternalDescription = "photo___children___internal___description",
  PhotoChildrenInternalFieldOwners = "photo___children___internal___fieldOwners",
  PhotoChildrenInternalIgnoreType = "photo___children___internal___ignoreType",
  PhotoChildrenInternalMediaType = "photo___children___internal___mediaType",
  PhotoChildrenInternalOwner = "photo___children___internal___owner",
  PhotoChildrenInternalType = "photo___children___internal___type",
  PhotoChildrenParentChildren = "photo___children___parent___children",
  PhotoChildrenParentId = "photo___children___parent___id",
  PhotoContentfulId = "photo___contentful_id",
  PhotoCreatedAt = "photo___createdAt",
  PhotoDescription = "photo___description",
  PhotoFileContentType = "photo___file___contentType",
  PhotoFileDetailsSize = "photo___file___details___size",
  PhotoFileFileName = "photo___file___fileName",
  PhotoFileUrl = "photo___file___url",
  PhotoGatsbyImageData = "photo___gatsbyImageData",
  PhotoId = "photo___id",
  PhotoInternalContent = "photo___internal___content",
  PhotoInternalContentDigest = "photo___internal___contentDigest",
  PhotoInternalDescription = "photo___internal___description",
  PhotoInternalFieldOwners = "photo___internal___fieldOwners",
  PhotoInternalIgnoreType = "photo___internal___ignoreType",
  PhotoInternalMediaType = "photo___internal___mediaType",
  PhotoInternalOwner = "photo___internal___owner",
  PhotoInternalType = "photo___internal___type",
  PhotoNodeLocale = "photo___node_locale",
  PhotoParentChildren = "photo___parent___children",
  PhotoParentChildrenChildren = "photo___parent___children___children",
  PhotoParentChildrenId = "photo___parent___children___id",
  PhotoParentId = "photo___parent___id",
  PhotoParentInternalContent = "photo___parent___internal___content",
  PhotoParentInternalContentDigest = "photo___parent___internal___contentDigest",
  PhotoParentInternalDescription = "photo___parent___internal___description",
  PhotoParentInternalFieldOwners = "photo___parent___internal___fieldOwners",
  PhotoParentInternalIgnoreType = "photo___parent___internal___ignoreType",
  PhotoParentInternalMediaType = "photo___parent___internal___mediaType",
  PhotoParentInternalOwner = "photo___parent___internal___owner",
  PhotoParentInternalType = "photo___parent___internal___type",
  PhotoParentParentChildren = "photo___parent___parent___children",
  PhotoParentParentId = "photo___parent___parent___id",
  PhotoSpaceId = "photo___spaceId",
  PhotoSysRevision = "photo___sys___revision",
  PhotoSysType = "photo___sys___type",
  PhotoTitle = "photo___title",
  PhotoUpdatedAt = "photo___updatedAt",
  SpaceId = "spaceId",
  SysContentTypeSysId = "sys___contentType___sys___id",
  SysContentTypeSysLinkType = "sys___contentType___sys___linkType",
  SysContentTypeSysType = "sys___contentType___sys___type",
  SysRevision = "sys___revision",
  SysType = "sys___type",
  UpdatedAt = "updatedAt",
}

export type ContentfulAuthorFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  fullName?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  photo?: InputMaybe<ContentfulAssetFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulAuthorSysFilterInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
};

export type ContentfulAuthorGroupConnection = {
  __typename?: "ContentfulAuthorGroupConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<ContentfulAuthorEdge>;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
  group: Array<ContentfulAuthorGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<ContentfulAuthor>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type ContentfulAuthorGroupConnectionDistinctArgs = {
  field: ContentfulAuthorFieldsEnum;
};

export type ContentfulAuthorGroupConnectionGroupArgs = {
  field: ContentfulAuthorFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type ContentfulAuthorGroupConnectionMaxArgs = {
  field: ContentfulAuthorFieldsEnum;
};

export type ContentfulAuthorGroupConnectionMinArgs = {
  field: ContentfulAuthorFieldsEnum;
};

export type ContentfulAuthorGroupConnectionSumArgs = {
  field: ContentfulAuthorFieldsEnum;
};

export type ContentfulAuthorSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ContentfulAuthorFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulAuthorSys = {
  __typename?: "ContentfulAuthorSys";
  contentType?: Maybe<ContentfulAuthorSysContentType>;
  revision?: Maybe<Scalars["Int"]>;
  type?: Maybe<Scalars["String"]>;
};

export type ContentfulAuthorSysContentType = {
  __typename?: "ContentfulAuthorSysContentType";
  sys?: Maybe<ContentfulAuthorSysContentTypeSys>;
};

export type ContentfulAuthorSysContentTypeFilterInput = {
  sys?: InputMaybe<ContentfulAuthorSysContentTypeSysFilterInput>;
};

export type ContentfulAuthorSysContentTypeSys = {
  __typename?: "ContentfulAuthorSysContentTypeSys";
  id?: Maybe<Scalars["String"]>;
  linkType?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
};

export type ContentfulAuthorSysContentTypeSysFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  linkType?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulAuthorSysFilterInput = {
  contentType?: InputMaybe<ContentfulAuthorSysContentTypeFilterInput>;
  revision?: InputMaybe<IntQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulBlogPost = ContentfulEntry &
  ContentfulReference &
  Node & {
    __typename?: "ContentfulBlogPost";
    body?: Maybe<ContentfulBlogPostBody>;
    children: Array<Node>;
    contentful_id: Scalars["String"];
    coverImage?: Maybe<ContentfulImageWithFocalPoint>;
    createdAt?: Maybe<Scalars["Date"]>;
    dateCreated?: Maybe<Scalars["Date"]>;
    id: Scalars["ID"];
    internal: Internal;
    node_locale: Scalars["String"];
    parent?: Maybe<Node>;
    slug?: Maybe<Scalars["String"]>;
    spaceId?: Maybe<Scalars["String"]>;
    sys?: Maybe<ContentfulBlogPostSys>;
    title?: Maybe<Scalars["String"]>;
    updatedAt?: Maybe<Scalars["Date"]>;
  };

export type ContentfulBlogPostCreatedAtArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type ContentfulBlogPostDateCreatedArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type ContentfulBlogPostUpdatedAtArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type ContentfulBlogPostBody = {
  __typename?: "ContentfulBlogPostBody";
  raw?: Maybe<Scalars["String"]>;
  references?: Maybe<Array<Maybe<ContentfulPostImage>>>;
};

export type ContentfulBlogPostBodyFilterInput = {
  raw?: InputMaybe<StringQueryOperatorInput>;
  references?: InputMaybe<ContentfulPostImageFilterListInput>;
};

export type ContentfulBlogPostConnection = {
  __typename?: "ContentfulBlogPostConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<ContentfulBlogPostEdge>;
  group: Array<ContentfulBlogPostGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<ContentfulBlogPost>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type ContentfulBlogPostConnectionDistinctArgs = {
  field: ContentfulBlogPostFieldsEnum;
};

export type ContentfulBlogPostConnectionGroupArgs = {
  field: ContentfulBlogPostFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type ContentfulBlogPostConnectionMaxArgs = {
  field: ContentfulBlogPostFieldsEnum;
};

export type ContentfulBlogPostConnectionMinArgs = {
  field: ContentfulBlogPostFieldsEnum;
};

export type ContentfulBlogPostConnectionSumArgs = {
  field: ContentfulBlogPostFieldsEnum;
};

export type ContentfulBlogPostEdge = {
  __typename?: "ContentfulBlogPostEdge";
  next?: Maybe<ContentfulBlogPost>;
  node: ContentfulBlogPost;
  previous?: Maybe<ContentfulBlogPost>;
};

export enum ContentfulBlogPostFieldsEnum {
  BodyRaw = "body___raw",
  BodyReferences = "body___references",
  BodyReferencesAlign = "body___references___align",
  BodyReferencesChildren = "body___references___children",
  BodyReferencesChildrenChildren = "body___references___children___children",
  BodyReferencesChildrenId = "body___references___children___id",
  BodyReferencesContentfulId = "body___references___contentful_id",
  BodyReferencesCreatedAt = "body___references___createdAt",
  BodyReferencesDescription = "body___references___description",
  BodyReferencesId = "body___references___id",
  BodyReferencesImageChildren = "body___references___image___children",
  BodyReferencesImageContentfulId = "body___references___image___contentful_id",
  BodyReferencesImageCreatedAt = "body___references___image___createdAt",
  BodyReferencesImageDescription = "body___references___image___description",
  BodyReferencesImageGatsbyImageData = "body___references___image___gatsbyImageData",
  BodyReferencesImageId = "body___references___image___id",
  BodyReferencesImageNodeLocale = "body___references___image___node_locale",
  BodyReferencesImageSpaceId = "body___references___image___spaceId",
  BodyReferencesImageTitle = "body___references___image___title",
  BodyReferencesImageUpdatedAt = "body___references___image___updatedAt",
  BodyReferencesInternalContent = "body___references___internal___content",
  BodyReferencesInternalContentDigest = "body___references___internal___contentDigest",
  BodyReferencesInternalDescription = "body___references___internal___description",
  BodyReferencesInternalFieldOwners = "body___references___internal___fieldOwners",
  BodyReferencesInternalIgnoreType = "body___references___internal___ignoreType",
  BodyReferencesInternalMediaType = "body___references___internal___mediaType",
  BodyReferencesInternalOwner = "body___references___internal___owner",
  BodyReferencesInternalType = "body___references___internal___type",
  BodyReferencesNodeLocale = "body___references___node_locale",
  BodyReferencesParentChildren = "body___references___parent___children",
  BodyReferencesParentId = "body___references___parent___id",
  BodyReferencesSpaceId = "body___references___spaceId",
  BodyReferencesSysRevision = "body___references___sys___revision",
  BodyReferencesSysType = "body___references___sys___type",
  BodyReferencesUpdatedAt = "body___references___updatedAt",
  Children = "children",
  ChildrenChildren = "children___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenId = "children___id",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentParentId = "children___parent___parent___id",
  ContentfulId = "contentful_id",
  CoverImageBlogPost = "coverImage___blog_post",
  CoverImageBlogPostBodyRaw = "coverImage___blog_post___body___raw",
  CoverImageBlogPostBodyReferences = "coverImage___blog_post___body___references",
  CoverImageBlogPostChildren = "coverImage___blog_post___children",
  CoverImageBlogPostChildrenChildren = "coverImage___blog_post___children___children",
  CoverImageBlogPostChildrenId = "coverImage___blog_post___children___id",
  CoverImageBlogPostContentfulId = "coverImage___blog_post___contentful_id",
  CoverImageBlogPostCoverImageBlogPost = "coverImage___blog_post___coverImage___blog_post",
  CoverImageBlogPostCoverImageChildren = "coverImage___blog_post___coverImage___children",
  CoverImageBlogPostCoverImageChildrenContentfulImageWithFocalPointFocalPointJsonNode = "coverImage___blog_post___coverImage___childrenContentfulImageWithFocalPointFocalPointJsonNode",
  CoverImageBlogPostCoverImageContentfulId = "coverImage___blog_post___coverImage___contentful_id",
  CoverImageBlogPostCoverImageCreatedAt = "coverImage___blog_post___coverImage___createdAt",
  CoverImageBlogPostCoverImageId = "coverImage___blog_post___coverImage___id",
  CoverImageBlogPostCoverImageNodeLocale = "coverImage___blog_post___coverImage___node_locale",
  CoverImageBlogPostCoverImageSpaceId = "coverImage___blog_post___coverImage___spaceId",
  CoverImageBlogPostCoverImageTitle = "coverImage___blog_post___coverImage___title",
  CoverImageBlogPostCoverImageUpdatedAt = "coverImage___blog_post___coverImage___updatedAt",
  CoverImageBlogPostCreatedAt = "coverImage___blog_post___createdAt",
  CoverImageBlogPostDateCreated = "coverImage___blog_post___dateCreated",
  CoverImageBlogPostId = "coverImage___blog_post___id",
  CoverImageBlogPostInternalContent = "coverImage___blog_post___internal___content",
  CoverImageBlogPostInternalContentDigest = "coverImage___blog_post___internal___contentDigest",
  CoverImageBlogPostInternalDescription = "coverImage___blog_post___internal___description",
  CoverImageBlogPostInternalFieldOwners = "coverImage___blog_post___internal___fieldOwners",
  CoverImageBlogPostInternalIgnoreType = "coverImage___blog_post___internal___ignoreType",
  CoverImageBlogPostInternalMediaType = "coverImage___blog_post___internal___mediaType",
  CoverImageBlogPostInternalOwner = "coverImage___blog_post___internal___owner",
  CoverImageBlogPostInternalType = "coverImage___blog_post___internal___type",
  CoverImageBlogPostNodeLocale = "coverImage___blog_post___node_locale",
  CoverImageBlogPostParentChildren = "coverImage___blog_post___parent___children",
  CoverImageBlogPostParentId = "coverImage___blog_post___parent___id",
  CoverImageBlogPostSlug = "coverImage___blog_post___slug",
  CoverImageBlogPostSpaceId = "coverImage___blog_post___spaceId",
  CoverImageBlogPostSysRevision = "coverImage___blog_post___sys___revision",
  CoverImageBlogPostSysType = "coverImage___blog_post___sys___type",
  CoverImageBlogPostTitle = "coverImage___blog_post___title",
  CoverImageBlogPostUpdatedAt = "coverImage___blog_post___updatedAt",
  CoverImageChildContentfulImageWithFocalPointFocalPointJsonNodeChildren = "coverImage___childContentfulImageWithFocalPointFocalPointJsonNode___children",
  CoverImageChildContentfulImageWithFocalPointFocalPointJsonNodeChildrenChildren = "coverImage___childContentfulImageWithFocalPointFocalPointJsonNode___children___children",
  CoverImageChildContentfulImageWithFocalPointFocalPointJsonNodeChildrenId = "coverImage___childContentfulImageWithFocalPointFocalPointJsonNode___children___id",
  CoverImageChildContentfulImageWithFocalPointFocalPointJsonNodeFocalPointX = "coverImage___childContentfulImageWithFocalPointFocalPointJsonNode___focalPoint___x",
  CoverImageChildContentfulImageWithFocalPointFocalPointJsonNodeFocalPointY = "coverImage___childContentfulImageWithFocalPointFocalPointJsonNode___focalPoint___y",
  CoverImageChildContentfulImageWithFocalPointFocalPointJsonNodeId = "coverImage___childContentfulImageWithFocalPointFocalPointJsonNode___id",
  CoverImageChildContentfulImageWithFocalPointFocalPointJsonNodeInternalContent = "coverImage___childContentfulImageWithFocalPointFocalPointJsonNode___internal___content",
  CoverImageChildContentfulImageWithFocalPointFocalPointJsonNodeInternalContentDigest = "coverImage___childContentfulImageWithFocalPointFocalPointJsonNode___internal___contentDigest",
  CoverImageChildContentfulImageWithFocalPointFocalPointJsonNodeInternalDescription = "coverImage___childContentfulImageWithFocalPointFocalPointJsonNode___internal___description",
  CoverImageChildContentfulImageWithFocalPointFocalPointJsonNodeInternalFieldOwners = "coverImage___childContentfulImageWithFocalPointFocalPointJsonNode___internal___fieldOwners",
  CoverImageChildContentfulImageWithFocalPointFocalPointJsonNodeInternalIgnoreType = "coverImage___childContentfulImageWithFocalPointFocalPointJsonNode___internal___ignoreType",
  CoverImageChildContentfulImageWithFocalPointFocalPointJsonNodeInternalMediaType = "coverImage___childContentfulImageWithFocalPointFocalPointJsonNode___internal___mediaType",
  CoverImageChildContentfulImageWithFocalPointFocalPointJsonNodeInternalOwner = "coverImage___childContentfulImageWithFocalPointFocalPointJsonNode___internal___owner",
  CoverImageChildContentfulImageWithFocalPointFocalPointJsonNodeInternalType = "coverImage___childContentfulImageWithFocalPointFocalPointJsonNode___internal___type",
  CoverImageChildContentfulImageWithFocalPointFocalPointJsonNodeParentChildren = "coverImage___childContentfulImageWithFocalPointFocalPointJsonNode___parent___children",
  CoverImageChildContentfulImageWithFocalPointFocalPointJsonNodeParentId = "coverImage___childContentfulImageWithFocalPointFocalPointJsonNode___parent___id",
  CoverImageChildContentfulImageWithFocalPointFocalPointJsonNodeSysType = "coverImage___childContentfulImageWithFocalPointFocalPointJsonNode___sys___type",
  CoverImageChildren = "coverImage___children",
  CoverImageChildrenContentfulImageWithFocalPointFocalPointJsonNode = "coverImage___childrenContentfulImageWithFocalPointFocalPointJsonNode",
  CoverImageChildrenContentfulImageWithFocalPointFocalPointJsonNodeChildren = "coverImage___childrenContentfulImageWithFocalPointFocalPointJsonNode___children",
  CoverImageChildrenContentfulImageWithFocalPointFocalPointJsonNodeChildrenChildren = "coverImage___childrenContentfulImageWithFocalPointFocalPointJsonNode___children___children",
  CoverImageChildrenContentfulImageWithFocalPointFocalPointJsonNodeChildrenId = "coverImage___childrenContentfulImageWithFocalPointFocalPointJsonNode___children___id",
  CoverImageChildrenContentfulImageWithFocalPointFocalPointJsonNodeFocalPointX = "coverImage___childrenContentfulImageWithFocalPointFocalPointJsonNode___focalPoint___x",
  CoverImageChildrenContentfulImageWithFocalPointFocalPointJsonNodeFocalPointY = "coverImage___childrenContentfulImageWithFocalPointFocalPointJsonNode___focalPoint___y",
  CoverImageChildrenContentfulImageWithFocalPointFocalPointJsonNodeId = "coverImage___childrenContentfulImageWithFocalPointFocalPointJsonNode___id",
  CoverImageChildrenContentfulImageWithFocalPointFocalPointJsonNodeInternalContent = "coverImage___childrenContentfulImageWithFocalPointFocalPointJsonNode___internal___content",
  CoverImageChildrenContentfulImageWithFocalPointFocalPointJsonNodeInternalContentDigest = "coverImage___childrenContentfulImageWithFocalPointFocalPointJsonNode___internal___contentDigest",
  CoverImageChildrenContentfulImageWithFocalPointFocalPointJsonNodeInternalDescription = "coverImage___childrenContentfulImageWithFocalPointFocalPointJsonNode___internal___description",
  CoverImageChildrenContentfulImageWithFocalPointFocalPointJsonNodeInternalFieldOwners = "coverImage___childrenContentfulImageWithFocalPointFocalPointJsonNode___internal___fieldOwners",
  CoverImageChildrenContentfulImageWithFocalPointFocalPointJsonNodeInternalIgnoreType = "coverImage___childrenContentfulImageWithFocalPointFocalPointJsonNode___internal___ignoreType",
  CoverImageChildrenContentfulImageWithFocalPointFocalPointJsonNodeInternalMediaType = "coverImage___childrenContentfulImageWithFocalPointFocalPointJsonNode___internal___mediaType",
  CoverImageChildrenContentfulImageWithFocalPointFocalPointJsonNodeInternalOwner = "coverImage___childrenContentfulImageWithFocalPointFocalPointJsonNode___internal___owner",
  CoverImageChildrenContentfulImageWithFocalPointFocalPointJsonNodeInternalType = "coverImage___childrenContentfulImageWithFocalPointFocalPointJsonNode___internal___type",
  CoverImageChildrenContentfulImageWithFocalPointFocalPointJsonNodeParentChildren = "coverImage___childrenContentfulImageWithFocalPointFocalPointJsonNode___parent___children",
  CoverImageChildrenContentfulImageWithFocalPointFocalPointJsonNodeParentId = "coverImage___childrenContentfulImageWithFocalPointFocalPointJsonNode___parent___id",
  CoverImageChildrenContentfulImageWithFocalPointFocalPointJsonNodeSysType = "coverImage___childrenContentfulImageWithFocalPointFocalPointJsonNode___sys___type",
  CoverImageChildrenChildren = "coverImage___children___children",
  CoverImageChildrenChildrenChildren = "coverImage___children___children___children",
  CoverImageChildrenChildrenId = "coverImage___children___children___id",
  CoverImageChildrenId = "coverImage___children___id",
  CoverImageChildrenInternalContent = "coverImage___children___internal___content",
  CoverImageChildrenInternalContentDigest = "coverImage___children___internal___contentDigest",
  CoverImageChildrenInternalDescription = "coverImage___children___internal___description",
  CoverImageChildrenInternalFieldOwners = "coverImage___children___internal___fieldOwners",
  CoverImageChildrenInternalIgnoreType = "coverImage___children___internal___ignoreType",
  CoverImageChildrenInternalMediaType = "coverImage___children___internal___mediaType",
  CoverImageChildrenInternalOwner = "coverImage___children___internal___owner",
  CoverImageChildrenInternalType = "coverImage___children___internal___type",
  CoverImageChildrenParentChildren = "coverImage___children___parent___children",
  CoverImageChildrenParentId = "coverImage___children___parent___id",
  CoverImageContentfulId = "coverImage___contentful_id",
  CoverImageCreatedAt = "coverImage___createdAt",
  CoverImageFocalPointChildren = "coverImage___focalPoint___children",
  CoverImageFocalPointChildrenChildren = "coverImage___focalPoint___children___children",
  CoverImageFocalPointChildrenId = "coverImage___focalPoint___children___id",
  CoverImageFocalPointFocalPointX = "coverImage___focalPoint___focalPoint___x",
  CoverImageFocalPointFocalPointY = "coverImage___focalPoint___focalPoint___y",
  CoverImageFocalPointId = "coverImage___focalPoint___id",
  CoverImageFocalPointInternalContent = "coverImage___focalPoint___internal___content",
  CoverImageFocalPointInternalContentDigest = "coverImage___focalPoint___internal___contentDigest",
  CoverImageFocalPointInternalDescription = "coverImage___focalPoint___internal___description",
  CoverImageFocalPointInternalFieldOwners = "coverImage___focalPoint___internal___fieldOwners",
  CoverImageFocalPointInternalIgnoreType = "coverImage___focalPoint___internal___ignoreType",
  CoverImageFocalPointInternalMediaType = "coverImage___focalPoint___internal___mediaType",
  CoverImageFocalPointInternalOwner = "coverImage___focalPoint___internal___owner",
  CoverImageFocalPointInternalType = "coverImage___focalPoint___internal___type",
  CoverImageFocalPointParentChildren = "coverImage___focalPoint___parent___children",
  CoverImageFocalPointParentId = "coverImage___focalPoint___parent___id",
  CoverImageFocalPointSysType = "coverImage___focalPoint___sys___type",
  CoverImageId = "coverImage___id",
  CoverImageImageChildren = "coverImage___image___children",
  CoverImageImageChildrenChildren = "coverImage___image___children___children",
  CoverImageImageChildrenId = "coverImage___image___children___id",
  CoverImageImageContentfulId = "coverImage___image___contentful_id",
  CoverImageImageCreatedAt = "coverImage___image___createdAt",
  CoverImageImageDescription = "coverImage___image___description",
  CoverImageImageFileContentType = "coverImage___image___file___contentType",
  CoverImageImageFileFileName = "coverImage___image___file___fileName",
  CoverImageImageFileUrl = "coverImage___image___file___url",
  CoverImageImageGatsbyImageData = "coverImage___image___gatsbyImageData",
  CoverImageImageId = "coverImage___image___id",
  CoverImageImageInternalContent = "coverImage___image___internal___content",
  CoverImageImageInternalContentDigest = "coverImage___image___internal___contentDigest",
  CoverImageImageInternalDescription = "coverImage___image___internal___description",
  CoverImageImageInternalFieldOwners = "coverImage___image___internal___fieldOwners",
  CoverImageImageInternalIgnoreType = "coverImage___image___internal___ignoreType",
  CoverImageImageInternalMediaType = "coverImage___image___internal___mediaType",
  CoverImageImageInternalOwner = "coverImage___image___internal___owner",
  CoverImageImageInternalType = "coverImage___image___internal___type",
  CoverImageImageNodeLocale = "coverImage___image___node_locale",
  CoverImageImageParentChildren = "coverImage___image___parent___children",
  CoverImageImageParentId = "coverImage___image___parent___id",
  CoverImageImageSpaceId = "coverImage___image___spaceId",
  CoverImageImageSysRevision = "coverImage___image___sys___revision",
  CoverImageImageSysType = "coverImage___image___sys___type",
  CoverImageImageTitle = "coverImage___image___title",
  CoverImageImageUpdatedAt = "coverImage___image___updatedAt",
  CoverImageInternalContent = "coverImage___internal___content",
  CoverImageInternalContentDigest = "coverImage___internal___contentDigest",
  CoverImageInternalDescription = "coverImage___internal___description",
  CoverImageInternalFieldOwners = "coverImage___internal___fieldOwners",
  CoverImageInternalIgnoreType = "coverImage___internal___ignoreType",
  CoverImageInternalMediaType = "coverImage___internal___mediaType",
  CoverImageInternalOwner = "coverImage___internal___owner",
  CoverImageInternalType = "coverImage___internal___type",
  CoverImageNodeLocale = "coverImage___node_locale",
  CoverImageParentChildren = "coverImage___parent___children",
  CoverImageParentChildrenChildren = "coverImage___parent___children___children",
  CoverImageParentChildrenId = "coverImage___parent___children___id",
  CoverImageParentId = "coverImage___parent___id",
  CoverImageParentInternalContent = "coverImage___parent___internal___content",
  CoverImageParentInternalContentDigest = "coverImage___parent___internal___contentDigest",
  CoverImageParentInternalDescription = "coverImage___parent___internal___description",
  CoverImageParentInternalFieldOwners = "coverImage___parent___internal___fieldOwners",
  CoverImageParentInternalIgnoreType = "coverImage___parent___internal___ignoreType",
  CoverImageParentInternalMediaType = "coverImage___parent___internal___mediaType",
  CoverImageParentInternalOwner = "coverImage___parent___internal___owner",
  CoverImageParentInternalType = "coverImage___parent___internal___type",
  CoverImageParentParentChildren = "coverImage___parent___parent___children",
  CoverImageParentParentId = "coverImage___parent___parent___id",
  CoverImageSpaceId = "coverImage___spaceId",
  CoverImageSysRevision = "coverImage___sys___revision",
  CoverImageSysType = "coverImage___sys___type",
  CoverImageTitle = "coverImage___title",
  CoverImageUpdatedAt = "coverImage___updatedAt",
  CreatedAt = "createdAt",
  DateCreated = "dateCreated",
  Id = "id",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  NodeLocale = "node_locale",
  ParentChildren = "parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenId = "parent___children___id",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentId = "parent___id",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentId = "parent___parent___id",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentParentId = "parent___parent___parent___id",
  Slug = "slug",
  SpaceId = "spaceId",
  SysContentTypeSysId = "sys___contentType___sys___id",
  SysContentTypeSysLinkType = "sys___contentType___sys___linkType",
  SysContentTypeSysType = "sys___contentType___sys___type",
  SysRevision = "sys___revision",
  SysType = "sys___type",
  Title = "title",
  UpdatedAt = "updatedAt",
}

export type ContentfulBlogPostFilterInput = {
  body?: InputMaybe<ContentfulBlogPostBodyFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  coverImage?: InputMaybe<ContentfulImageWithFocalPointFilterInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  dateCreated?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulBlogPostSysFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
};

export type ContentfulBlogPostFilterListInput = {
  elemMatch?: InputMaybe<ContentfulBlogPostFilterInput>;
};

export type ContentfulBlogPostGroupConnection = {
  __typename?: "ContentfulBlogPostGroupConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<ContentfulBlogPostEdge>;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
  group: Array<ContentfulBlogPostGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<ContentfulBlogPost>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type ContentfulBlogPostGroupConnectionDistinctArgs = {
  field: ContentfulBlogPostFieldsEnum;
};

export type ContentfulBlogPostGroupConnectionGroupArgs = {
  field: ContentfulBlogPostFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type ContentfulBlogPostGroupConnectionMaxArgs = {
  field: ContentfulBlogPostFieldsEnum;
};

export type ContentfulBlogPostGroupConnectionMinArgs = {
  field: ContentfulBlogPostFieldsEnum;
};

export type ContentfulBlogPostGroupConnectionSumArgs = {
  field: ContentfulBlogPostFieldsEnum;
};

export type ContentfulBlogPostSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ContentfulBlogPostFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulBlogPostSys = {
  __typename?: "ContentfulBlogPostSys";
  contentType?: Maybe<ContentfulBlogPostSysContentType>;
  revision?: Maybe<Scalars["Int"]>;
  type?: Maybe<Scalars["String"]>;
};

export type ContentfulBlogPostSysContentType = {
  __typename?: "ContentfulBlogPostSysContentType";
  sys?: Maybe<ContentfulBlogPostSysContentTypeSys>;
};

export type ContentfulBlogPostSysContentTypeFilterInput = {
  sys?: InputMaybe<ContentfulBlogPostSysContentTypeSysFilterInput>;
};

export type ContentfulBlogPostSysContentTypeSys = {
  __typename?: "ContentfulBlogPostSysContentTypeSys";
  id?: Maybe<Scalars["String"]>;
  linkType?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
};

export type ContentfulBlogPostSysContentTypeSysFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  linkType?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulBlogPostSysFilterInput = {
  contentType?: InputMaybe<ContentfulBlogPostSysContentTypeFilterInput>;
  revision?: InputMaybe<IntQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulContentType = Node & {
  __typename?: "ContentfulContentType";
  children: Array<Node>;
  description?: Maybe<Scalars["String"]>;
  displayField?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  internal: Internal;
  name?: Maybe<Scalars["String"]>;
  parent?: Maybe<Node>;
  sys?: Maybe<ContentfulContentTypeSys>;
};

export type ContentfulContentTypeConnection = {
  __typename?: "ContentfulContentTypeConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<ContentfulContentTypeEdge>;
  group: Array<ContentfulContentTypeGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<ContentfulContentType>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type ContentfulContentTypeConnectionDistinctArgs = {
  field: ContentfulContentTypeFieldsEnum;
};

export type ContentfulContentTypeConnectionGroupArgs = {
  field: ContentfulContentTypeFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type ContentfulContentTypeConnectionMaxArgs = {
  field: ContentfulContentTypeFieldsEnum;
};

export type ContentfulContentTypeConnectionMinArgs = {
  field: ContentfulContentTypeFieldsEnum;
};

export type ContentfulContentTypeConnectionSumArgs = {
  field: ContentfulContentTypeFieldsEnum;
};

export type ContentfulContentTypeEdge = {
  __typename?: "ContentfulContentTypeEdge";
  next?: Maybe<ContentfulContentType>;
  node: ContentfulContentType;
  previous?: Maybe<ContentfulContentType>;
};

export enum ContentfulContentTypeFieldsEnum {
  Children = "children",
  ChildrenChildren = "children___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenId = "children___id",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentParentId = "children___parent___parent___id",
  Description = "description",
  DisplayField = "displayField",
  Id = "id",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  Name = "name",
  ParentChildren = "parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenId = "parent___children___id",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentId = "parent___id",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentId = "parent___parent___id",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentParentId = "parent___parent___parent___id",
  SysType = "sys___type",
}

export type ContentfulContentTypeFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  displayField?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  sys?: InputMaybe<ContentfulContentTypeSysFilterInput>;
};

export type ContentfulContentTypeGroupConnection = {
  __typename?: "ContentfulContentTypeGroupConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<ContentfulContentTypeEdge>;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
  group: Array<ContentfulContentTypeGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<ContentfulContentType>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type ContentfulContentTypeGroupConnectionDistinctArgs = {
  field: ContentfulContentTypeFieldsEnum;
};

export type ContentfulContentTypeGroupConnectionGroupArgs = {
  field: ContentfulContentTypeFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type ContentfulContentTypeGroupConnectionMaxArgs = {
  field: ContentfulContentTypeFieldsEnum;
};

export type ContentfulContentTypeGroupConnectionMinArgs = {
  field: ContentfulContentTypeFieldsEnum;
};

export type ContentfulContentTypeGroupConnectionSumArgs = {
  field: ContentfulContentTypeFieldsEnum;
};

export type ContentfulContentTypeSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ContentfulContentTypeFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulContentTypeSys = {
  __typename?: "ContentfulContentTypeSys";
  type?: Maybe<Scalars["String"]>;
};

export type ContentfulContentTypeSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulEntry = {
  children: Array<Node>;
  contentful_id: Scalars["String"];
  id: Scalars["ID"];
  internal: Internal;
  node_locale: Scalars["String"];
  parent?: Maybe<Node>;
};

export type ContentfulEntryConnection = {
  __typename?: "ContentfulEntryConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<ContentfulEntryEdge>;
  group: Array<ContentfulEntryGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<ContentfulEntry>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type ContentfulEntryConnectionDistinctArgs = {
  field: ContentfulEntryFieldsEnum;
};

export type ContentfulEntryConnectionGroupArgs = {
  field: ContentfulEntryFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type ContentfulEntryConnectionMaxArgs = {
  field: ContentfulEntryFieldsEnum;
};

export type ContentfulEntryConnectionMinArgs = {
  field: ContentfulEntryFieldsEnum;
};

export type ContentfulEntryConnectionSumArgs = {
  field: ContentfulEntryFieldsEnum;
};

export type ContentfulEntryEdge = {
  __typename?: "ContentfulEntryEdge";
  next?: Maybe<ContentfulEntry>;
  node: ContentfulEntry;
  previous?: Maybe<ContentfulEntry>;
};

export enum ContentfulEntryFieldsEnum {
  Children = "children",
  ChildrenChildren = "children___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenId = "children___id",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentParentId = "children___parent___parent___id",
  ContentfulId = "contentful_id",
  Id = "id",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  NodeLocale = "node_locale",
  ParentChildren = "parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenId = "parent___children___id",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentId = "parent___id",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentId = "parent___parent___id",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentParentId = "parent___parent___parent___id",
}

export type ContentfulEntryFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
};

export type ContentfulEntryGroupConnection = {
  __typename?: "ContentfulEntryGroupConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<ContentfulEntryEdge>;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
  group: Array<ContentfulEntryGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<ContentfulEntry>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type ContentfulEntryGroupConnectionDistinctArgs = {
  field: ContentfulEntryFieldsEnum;
};

export type ContentfulEntryGroupConnectionGroupArgs = {
  field: ContentfulEntryFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type ContentfulEntryGroupConnectionMaxArgs = {
  field: ContentfulEntryFieldsEnum;
};

export type ContentfulEntryGroupConnectionMinArgs = {
  field: ContentfulEntryFieldsEnum;
};

export type ContentfulEntryGroupConnectionSumArgs = {
  field: ContentfulEntryFieldsEnum;
};

export type ContentfulEntrySortInput = {
  fields?: InputMaybe<Array<InputMaybe<ContentfulEntryFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export enum ContentfulImageCropFocus {
  Bottom = "BOTTOM",
  BottomLeft = "BOTTOM_LEFT",
  BottomRight = "BOTTOM_RIGHT",
  Center = "CENTER",
  Face = "FACE",
  Faces = "FACES",
  Left = "LEFT",
  Right = "RIGHT",
  Top = "TOP",
  TopLeft = "TOP_LEFT",
  TopRight = "TOP_RIGHT",
}

export type ContentfulImageWithFocalPoint = ContentfulEntry &
  ContentfulReference &
  Node & {
    __typename?: "ContentfulImageWithFocalPoint";
    blog_post?: Maybe<Array<Maybe<ContentfulBlogPost>>>;
    /** Returns the first child node of type contentfulImageWithFocalPointFocalPointJsonNode or null if there are no children of given type on this node */
    childContentfulImageWithFocalPointFocalPointJsonNode?: Maybe<ContentfulImageWithFocalPointFocalPointJsonNode>;
    children: Array<Node>;
    /** Returns all children nodes filtered by type contentfulImageWithFocalPointFocalPointJsonNode */
    childrenContentfulImageWithFocalPointFocalPointJsonNode?: Maybe<
      Array<Maybe<ContentfulImageWithFocalPointFocalPointJsonNode>>
    >;
    contentful_id: Scalars["String"];
    createdAt?: Maybe<Scalars["Date"]>;
    focalPoint?: Maybe<ContentfulImageWithFocalPointFocalPointJsonNode>;
    id: Scalars["ID"];
    image?: Maybe<ContentfulAsset>;
    internal: Internal;
    node_locale: Scalars["String"];
    parent?: Maybe<Node>;
    spaceId?: Maybe<Scalars["String"]>;
    sys?: Maybe<ContentfulImageWithFocalPointSys>;
    title?: Maybe<Scalars["String"]>;
    updatedAt?: Maybe<Scalars["Date"]>;
  };

export type ContentfulImageWithFocalPointCreatedAtArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type ContentfulImageWithFocalPointUpdatedAtArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type ContentfulImageWithFocalPointConnection = {
  __typename?: "ContentfulImageWithFocalPointConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<ContentfulImageWithFocalPointEdge>;
  group: Array<ContentfulImageWithFocalPointGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<ContentfulImageWithFocalPoint>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type ContentfulImageWithFocalPointConnectionDistinctArgs = {
  field: ContentfulImageWithFocalPointFieldsEnum;
};

export type ContentfulImageWithFocalPointConnectionGroupArgs = {
  field: ContentfulImageWithFocalPointFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type ContentfulImageWithFocalPointConnectionMaxArgs = {
  field: ContentfulImageWithFocalPointFieldsEnum;
};

export type ContentfulImageWithFocalPointConnectionMinArgs = {
  field: ContentfulImageWithFocalPointFieldsEnum;
};

export type ContentfulImageWithFocalPointConnectionSumArgs = {
  field: ContentfulImageWithFocalPointFieldsEnum;
};

export type ContentfulImageWithFocalPointEdge = {
  __typename?: "ContentfulImageWithFocalPointEdge";
  next?: Maybe<ContentfulImageWithFocalPoint>;
  node: ContentfulImageWithFocalPoint;
  previous?: Maybe<ContentfulImageWithFocalPoint>;
};

export enum ContentfulImageWithFocalPointFieldsEnum {
  BlogPost = "blog_post",
  BlogPostBodyRaw = "blog_post___body___raw",
  BlogPostBodyReferences = "blog_post___body___references",
  BlogPostBodyReferencesAlign = "blog_post___body___references___align",
  BlogPostBodyReferencesChildren = "blog_post___body___references___children",
  BlogPostBodyReferencesContentfulId = "blog_post___body___references___contentful_id",
  BlogPostBodyReferencesCreatedAt = "blog_post___body___references___createdAt",
  BlogPostBodyReferencesDescription = "blog_post___body___references___description",
  BlogPostBodyReferencesId = "blog_post___body___references___id",
  BlogPostBodyReferencesNodeLocale = "blog_post___body___references___node_locale",
  BlogPostBodyReferencesSpaceId = "blog_post___body___references___spaceId",
  BlogPostBodyReferencesUpdatedAt = "blog_post___body___references___updatedAt",
  BlogPostChildren = "blog_post___children",
  BlogPostChildrenChildren = "blog_post___children___children",
  BlogPostChildrenChildrenChildren = "blog_post___children___children___children",
  BlogPostChildrenChildrenId = "blog_post___children___children___id",
  BlogPostChildrenId = "blog_post___children___id",
  BlogPostChildrenInternalContent = "blog_post___children___internal___content",
  BlogPostChildrenInternalContentDigest = "blog_post___children___internal___contentDigest",
  BlogPostChildrenInternalDescription = "blog_post___children___internal___description",
  BlogPostChildrenInternalFieldOwners = "blog_post___children___internal___fieldOwners",
  BlogPostChildrenInternalIgnoreType = "blog_post___children___internal___ignoreType",
  BlogPostChildrenInternalMediaType = "blog_post___children___internal___mediaType",
  BlogPostChildrenInternalOwner = "blog_post___children___internal___owner",
  BlogPostChildrenInternalType = "blog_post___children___internal___type",
  BlogPostChildrenParentChildren = "blog_post___children___parent___children",
  BlogPostChildrenParentId = "blog_post___children___parent___id",
  BlogPostContentfulId = "blog_post___contentful_id",
  BlogPostCoverImageBlogPost = "blog_post___coverImage___blog_post",
  BlogPostCoverImageBlogPostChildren = "blog_post___coverImage___blog_post___children",
  BlogPostCoverImageBlogPostContentfulId = "blog_post___coverImage___blog_post___contentful_id",
  BlogPostCoverImageBlogPostCreatedAt = "blog_post___coverImage___blog_post___createdAt",
  BlogPostCoverImageBlogPostDateCreated = "blog_post___coverImage___blog_post___dateCreated",
  BlogPostCoverImageBlogPostId = "blog_post___coverImage___blog_post___id",
  BlogPostCoverImageBlogPostNodeLocale = "blog_post___coverImage___blog_post___node_locale",
  BlogPostCoverImageBlogPostSlug = "blog_post___coverImage___blog_post___slug",
  BlogPostCoverImageBlogPostSpaceId = "blog_post___coverImage___blog_post___spaceId",
  BlogPostCoverImageBlogPostTitle = "blog_post___coverImage___blog_post___title",
  BlogPostCoverImageBlogPostUpdatedAt = "blog_post___coverImage___blog_post___updatedAt",
  BlogPostCoverImageChildContentfulImageWithFocalPointFocalPointJsonNodeChildren = "blog_post___coverImage___childContentfulImageWithFocalPointFocalPointJsonNode___children",
  BlogPostCoverImageChildContentfulImageWithFocalPointFocalPointJsonNodeId = "blog_post___coverImage___childContentfulImageWithFocalPointFocalPointJsonNode___id",
  BlogPostCoverImageChildren = "blog_post___coverImage___children",
  BlogPostCoverImageChildrenContentfulImageWithFocalPointFocalPointJsonNode = "blog_post___coverImage___childrenContentfulImageWithFocalPointFocalPointJsonNode",
  BlogPostCoverImageChildrenContentfulImageWithFocalPointFocalPointJsonNodeChildren = "blog_post___coverImage___childrenContentfulImageWithFocalPointFocalPointJsonNode___children",
  BlogPostCoverImageChildrenContentfulImageWithFocalPointFocalPointJsonNodeId = "blog_post___coverImage___childrenContentfulImageWithFocalPointFocalPointJsonNode___id",
  BlogPostCoverImageChildrenChildren = "blog_post___coverImage___children___children",
  BlogPostCoverImageChildrenId = "blog_post___coverImage___children___id",
  BlogPostCoverImageContentfulId = "blog_post___coverImage___contentful_id",
  BlogPostCoverImageCreatedAt = "blog_post___coverImage___createdAt",
  BlogPostCoverImageFocalPointChildren = "blog_post___coverImage___focalPoint___children",
  BlogPostCoverImageFocalPointId = "blog_post___coverImage___focalPoint___id",
  BlogPostCoverImageId = "blog_post___coverImage___id",
  BlogPostCoverImageImageChildren = "blog_post___coverImage___image___children",
  BlogPostCoverImageImageContentfulId = "blog_post___coverImage___image___contentful_id",
  BlogPostCoverImageImageCreatedAt = "blog_post___coverImage___image___createdAt",
  BlogPostCoverImageImageDescription = "blog_post___coverImage___image___description",
  BlogPostCoverImageImageGatsbyImageData = "blog_post___coverImage___image___gatsbyImageData",
  BlogPostCoverImageImageId = "blog_post___coverImage___image___id",
  BlogPostCoverImageImageNodeLocale = "blog_post___coverImage___image___node_locale",
  BlogPostCoverImageImageSpaceId = "blog_post___coverImage___image___spaceId",
  BlogPostCoverImageImageTitle = "blog_post___coverImage___image___title",
  BlogPostCoverImageImageUpdatedAt = "blog_post___coverImage___image___updatedAt",
  BlogPostCoverImageInternalContent = "blog_post___coverImage___internal___content",
  BlogPostCoverImageInternalContentDigest = "blog_post___coverImage___internal___contentDigest",
  BlogPostCoverImageInternalDescription = "blog_post___coverImage___internal___description",
  BlogPostCoverImageInternalFieldOwners = "blog_post___coverImage___internal___fieldOwners",
  BlogPostCoverImageInternalIgnoreType = "blog_post___coverImage___internal___ignoreType",
  BlogPostCoverImageInternalMediaType = "blog_post___coverImage___internal___mediaType",
  BlogPostCoverImageInternalOwner = "blog_post___coverImage___internal___owner",
  BlogPostCoverImageInternalType = "blog_post___coverImage___internal___type",
  BlogPostCoverImageNodeLocale = "blog_post___coverImage___node_locale",
  BlogPostCoverImageParentChildren = "blog_post___coverImage___parent___children",
  BlogPostCoverImageParentId = "blog_post___coverImage___parent___id",
  BlogPostCoverImageSpaceId = "blog_post___coverImage___spaceId",
  BlogPostCoverImageSysRevision = "blog_post___coverImage___sys___revision",
  BlogPostCoverImageSysType = "blog_post___coverImage___sys___type",
  BlogPostCoverImageTitle = "blog_post___coverImage___title",
  BlogPostCoverImageUpdatedAt = "blog_post___coverImage___updatedAt",
  BlogPostCreatedAt = "blog_post___createdAt",
  BlogPostDateCreated = "blog_post___dateCreated",
  BlogPostId = "blog_post___id",
  BlogPostInternalContent = "blog_post___internal___content",
  BlogPostInternalContentDigest = "blog_post___internal___contentDigest",
  BlogPostInternalDescription = "blog_post___internal___description",
  BlogPostInternalFieldOwners = "blog_post___internal___fieldOwners",
  BlogPostInternalIgnoreType = "blog_post___internal___ignoreType",
  BlogPostInternalMediaType = "blog_post___internal___mediaType",
  BlogPostInternalOwner = "blog_post___internal___owner",
  BlogPostInternalType = "blog_post___internal___type",
  BlogPostNodeLocale = "blog_post___node_locale",
  BlogPostParentChildren = "blog_post___parent___children",
  BlogPostParentChildrenChildren = "blog_post___parent___children___children",
  BlogPostParentChildrenId = "blog_post___parent___children___id",
  BlogPostParentId = "blog_post___parent___id",
  BlogPostParentInternalContent = "blog_post___parent___internal___content",
  BlogPostParentInternalContentDigest = "blog_post___parent___internal___contentDigest",
  BlogPostParentInternalDescription = "blog_post___parent___internal___description",
  BlogPostParentInternalFieldOwners = "blog_post___parent___internal___fieldOwners",
  BlogPostParentInternalIgnoreType = "blog_post___parent___internal___ignoreType",
  BlogPostParentInternalMediaType = "blog_post___parent___internal___mediaType",
  BlogPostParentInternalOwner = "blog_post___parent___internal___owner",
  BlogPostParentInternalType = "blog_post___parent___internal___type",
  BlogPostParentParentChildren = "blog_post___parent___parent___children",
  BlogPostParentParentId = "blog_post___parent___parent___id",
  BlogPostSlug = "blog_post___slug",
  BlogPostSpaceId = "blog_post___spaceId",
  BlogPostSysRevision = "blog_post___sys___revision",
  BlogPostSysType = "blog_post___sys___type",
  BlogPostTitle = "blog_post___title",
  BlogPostUpdatedAt = "blog_post___updatedAt",
  ChildContentfulImageWithFocalPointFocalPointJsonNodeChildren = "childContentfulImageWithFocalPointFocalPointJsonNode___children",
  ChildContentfulImageWithFocalPointFocalPointJsonNodeChildrenChildren = "childContentfulImageWithFocalPointFocalPointJsonNode___children___children",
  ChildContentfulImageWithFocalPointFocalPointJsonNodeChildrenChildrenChildren = "childContentfulImageWithFocalPointFocalPointJsonNode___children___children___children",
  ChildContentfulImageWithFocalPointFocalPointJsonNodeChildrenChildrenId = "childContentfulImageWithFocalPointFocalPointJsonNode___children___children___id",
  ChildContentfulImageWithFocalPointFocalPointJsonNodeChildrenId = "childContentfulImageWithFocalPointFocalPointJsonNode___children___id",
  ChildContentfulImageWithFocalPointFocalPointJsonNodeChildrenInternalContent = "childContentfulImageWithFocalPointFocalPointJsonNode___children___internal___content",
  ChildContentfulImageWithFocalPointFocalPointJsonNodeChildrenInternalContentDigest = "childContentfulImageWithFocalPointFocalPointJsonNode___children___internal___contentDigest",
  ChildContentfulImageWithFocalPointFocalPointJsonNodeChildrenInternalDescription = "childContentfulImageWithFocalPointFocalPointJsonNode___children___internal___description",
  ChildContentfulImageWithFocalPointFocalPointJsonNodeChildrenInternalFieldOwners = "childContentfulImageWithFocalPointFocalPointJsonNode___children___internal___fieldOwners",
  ChildContentfulImageWithFocalPointFocalPointJsonNodeChildrenInternalIgnoreType = "childContentfulImageWithFocalPointFocalPointJsonNode___children___internal___ignoreType",
  ChildContentfulImageWithFocalPointFocalPointJsonNodeChildrenInternalMediaType = "childContentfulImageWithFocalPointFocalPointJsonNode___children___internal___mediaType",
  ChildContentfulImageWithFocalPointFocalPointJsonNodeChildrenInternalOwner = "childContentfulImageWithFocalPointFocalPointJsonNode___children___internal___owner",
  ChildContentfulImageWithFocalPointFocalPointJsonNodeChildrenInternalType = "childContentfulImageWithFocalPointFocalPointJsonNode___children___internal___type",
  ChildContentfulImageWithFocalPointFocalPointJsonNodeChildrenParentChildren = "childContentfulImageWithFocalPointFocalPointJsonNode___children___parent___children",
  ChildContentfulImageWithFocalPointFocalPointJsonNodeChildrenParentId = "childContentfulImageWithFocalPointFocalPointJsonNode___children___parent___id",
  ChildContentfulImageWithFocalPointFocalPointJsonNodeFocalPointX = "childContentfulImageWithFocalPointFocalPointJsonNode___focalPoint___x",
  ChildContentfulImageWithFocalPointFocalPointJsonNodeFocalPointY = "childContentfulImageWithFocalPointFocalPointJsonNode___focalPoint___y",
  ChildContentfulImageWithFocalPointFocalPointJsonNodeId = "childContentfulImageWithFocalPointFocalPointJsonNode___id",
  ChildContentfulImageWithFocalPointFocalPointJsonNodeInternalContent = "childContentfulImageWithFocalPointFocalPointJsonNode___internal___content",
  ChildContentfulImageWithFocalPointFocalPointJsonNodeInternalContentDigest = "childContentfulImageWithFocalPointFocalPointJsonNode___internal___contentDigest",
  ChildContentfulImageWithFocalPointFocalPointJsonNodeInternalDescription = "childContentfulImageWithFocalPointFocalPointJsonNode___internal___description",
  ChildContentfulImageWithFocalPointFocalPointJsonNodeInternalFieldOwners = "childContentfulImageWithFocalPointFocalPointJsonNode___internal___fieldOwners",
  ChildContentfulImageWithFocalPointFocalPointJsonNodeInternalIgnoreType = "childContentfulImageWithFocalPointFocalPointJsonNode___internal___ignoreType",
  ChildContentfulImageWithFocalPointFocalPointJsonNodeInternalMediaType = "childContentfulImageWithFocalPointFocalPointJsonNode___internal___mediaType",
  ChildContentfulImageWithFocalPointFocalPointJsonNodeInternalOwner = "childContentfulImageWithFocalPointFocalPointJsonNode___internal___owner",
  ChildContentfulImageWithFocalPointFocalPointJsonNodeInternalType = "childContentfulImageWithFocalPointFocalPointJsonNode___internal___type",
  ChildContentfulImageWithFocalPointFocalPointJsonNodeParentChildren = "childContentfulImageWithFocalPointFocalPointJsonNode___parent___children",
  ChildContentfulImageWithFocalPointFocalPointJsonNodeParentChildrenChildren = "childContentfulImageWithFocalPointFocalPointJsonNode___parent___children___children",
  ChildContentfulImageWithFocalPointFocalPointJsonNodeParentChildrenId = "childContentfulImageWithFocalPointFocalPointJsonNode___parent___children___id",
  ChildContentfulImageWithFocalPointFocalPointJsonNodeParentId = "childContentfulImageWithFocalPointFocalPointJsonNode___parent___id",
  ChildContentfulImageWithFocalPointFocalPointJsonNodeParentInternalContent = "childContentfulImageWithFocalPointFocalPointJsonNode___parent___internal___content",
  ChildContentfulImageWithFocalPointFocalPointJsonNodeParentInternalContentDigest = "childContentfulImageWithFocalPointFocalPointJsonNode___parent___internal___contentDigest",
  ChildContentfulImageWithFocalPointFocalPointJsonNodeParentInternalDescription = "childContentfulImageWithFocalPointFocalPointJsonNode___parent___internal___description",
  ChildContentfulImageWithFocalPointFocalPointJsonNodeParentInternalFieldOwners = "childContentfulImageWithFocalPointFocalPointJsonNode___parent___internal___fieldOwners",
  ChildContentfulImageWithFocalPointFocalPointJsonNodeParentInternalIgnoreType = "childContentfulImageWithFocalPointFocalPointJsonNode___parent___internal___ignoreType",
  ChildContentfulImageWithFocalPointFocalPointJsonNodeParentInternalMediaType = "childContentfulImageWithFocalPointFocalPointJsonNode___parent___internal___mediaType",
  ChildContentfulImageWithFocalPointFocalPointJsonNodeParentInternalOwner = "childContentfulImageWithFocalPointFocalPointJsonNode___parent___internal___owner",
  ChildContentfulImageWithFocalPointFocalPointJsonNodeParentInternalType = "childContentfulImageWithFocalPointFocalPointJsonNode___parent___internal___type",
  ChildContentfulImageWithFocalPointFocalPointJsonNodeParentParentChildren = "childContentfulImageWithFocalPointFocalPointJsonNode___parent___parent___children",
  ChildContentfulImageWithFocalPointFocalPointJsonNodeParentParentId = "childContentfulImageWithFocalPointFocalPointJsonNode___parent___parent___id",
  ChildContentfulImageWithFocalPointFocalPointJsonNodeSysType = "childContentfulImageWithFocalPointFocalPointJsonNode___sys___type",
  Children = "children",
  ChildrenContentfulImageWithFocalPointFocalPointJsonNode = "childrenContentfulImageWithFocalPointFocalPointJsonNode",
  ChildrenContentfulImageWithFocalPointFocalPointJsonNodeChildren = "childrenContentfulImageWithFocalPointFocalPointJsonNode___children",
  ChildrenContentfulImageWithFocalPointFocalPointJsonNodeChildrenChildren = "childrenContentfulImageWithFocalPointFocalPointJsonNode___children___children",
  ChildrenContentfulImageWithFocalPointFocalPointJsonNodeChildrenChildrenChildren = "childrenContentfulImageWithFocalPointFocalPointJsonNode___children___children___children",
  ChildrenContentfulImageWithFocalPointFocalPointJsonNodeChildrenChildrenId = "childrenContentfulImageWithFocalPointFocalPointJsonNode___children___children___id",
  ChildrenContentfulImageWithFocalPointFocalPointJsonNodeChildrenId = "childrenContentfulImageWithFocalPointFocalPointJsonNode___children___id",
  ChildrenContentfulImageWithFocalPointFocalPointJsonNodeChildrenInternalContent = "childrenContentfulImageWithFocalPointFocalPointJsonNode___children___internal___content",
  ChildrenContentfulImageWithFocalPointFocalPointJsonNodeChildrenInternalContentDigest = "childrenContentfulImageWithFocalPointFocalPointJsonNode___children___internal___contentDigest",
  ChildrenContentfulImageWithFocalPointFocalPointJsonNodeChildrenInternalDescription = "childrenContentfulImageWithFocalPointFocalPointJsonNode___children___internal___description",
  ChildrenContentfulImageWithFocalPointFocalPointJsonNodeChildrenInternalFieldOwners = "childrenContentfulImageWithFocalPointFocalPointJsonNode___children___internal___fieldOwners",
  ChildrenContentfulImageWithFocalPointFocalPointJsonNodeChildrenInternalIgnoreType = "childrenContentfulImageWithFocalPointFocalPointJsonNode___children___internal___ignoreType",
  ChildrenContentfulImageWithFocalPointFocalPointJsonNodeChildrenInternalMediaType = "childrenContentfulImageWithFocalPointFocalPointJsonNode___children___internal___mediaType",
  ChildrenContentfulImageWithFocalPointFocalPointJsonNodeChildrenInternalOwner = "childrenContentfulImageWithFocalPointFocalPointJsonNode___children___internal___owner",
  ChildrenContentfulImageWithFocalPointFocalPointJsonNodeChildrenInternalType = "childrenContentfulImageWithFocalPointFocalPointJsonNode___children___internal___type",
  ChildrenContentfulImageWithFocalPointFocalPointJsonNodeChildrenParentChildren = "childrenContentfulImageWithFocalPointFocalPointJsonNode___children___parent___children",
  ChildrenContentfulImageWithFocalPointFocalPointJsonNodeChildrenParentId = "childrenContentfulImageWithFocalPointFocalPointJsonNode___children___parent___id",
  ChildrenContentfulImageWithFocalPointFocalPointJsonNodeFocalPointX = "childrenContentfulImageWithFocalPointFocalPointJsonNode___focalPoint___x",
  ChildrenContentfulImageWithFocalPointFocalPointJsonNodeFocalPointY = "childrenContentfulImageWithFocalPointFocalPointJsonNode___focalPoint___y",
  ChildrenContentfulImageWithFocalPointFocalPointJsonNodeId = "childrenContentfulImageWithFocalPointFocalPointJsonNode___id",
  ChildrenContentfulImageWithFocalPointFocalPointJsonNodeInternalContent = "childrenContentfulImageWithFocalPointFocalPointJsonNode___internal___content",
  ChildrenContentfulImageWithFocalPointFocalPointJsonNodeInternalContentDigest = "childrenContentfulImageWithFocalPointFocalPointJsonNode___internal___contentDigest",
  ChildrenContentfulImageWithFocalPointFocalPointJsonNodeInternalDescription = "childrenContentfulImageWithFocalPointFocalPointJsonNode___internal___description",
  ChildrenContentfulImageWithFocalPointFocalPointJsonNodeInternalFieldOwners = "childrenContentfulImageWithFocalPointFocalPointJsonNode___internal___fieldOwners",
  ChildrenContentfulImageWithFocalPointFocalPointJsonNodeInternalIgnoreType = "childrenContentfulImageWithFocalPointFocalPointJsonNode___internal___ignoreType",
  ChildrenContentfulImageWithFocalPointFocalPointJsonNodeInternalMediaType = "childrenContentfulImageWithFocalPointFocalPointJsonNode___internal___mediaType",
  ChildrenContentfulImageWithFocalPointFocalPointJsonNodeInternalOwner = "childrenContentfulImageWithFocalPointFocalPointJsonNode___internal___owner",
  ChildrenContentfulImageWithFocalPointFocalPointJsonNodeInternalType = "childrenContentfulImageWithFocalPointFocalPointJsonNode___internal___type",
  ChildrenContentfulImageWithFocalPointFocalPointJsonNodeParentChildren = "childrenContentfulImageWithFocalPointFocalPointJsonNode___parent___children",
  ChildrenContentfulImageWithFocalPointFocalPointJsonNodeParentChildrenChildren = "childrenContentfulImageWithFocalPointFocalPointJsonNode___parent___children___children",
  ChildrenContentfulImageWithFocalPointFocalPointJsonNodeParentChildrenId = "childrenContentfulImageWithFocalPointFocalPointJsonNode___parent___children___id",
  ChildrenContentfulImageWithFocalPointFocalPointJsonNodeParentId = "childrenContentfulImageWithFocalPointFocalPointJsonNode___parent___id",
  ChildrenContentfulImageWithFocalPointFocalPointJsonNodeParentInternalContent = "childrenContentfulImageWithFocalPointFocalPointJsonNode___parent___internal___content",
  ChildrenContentfulImageWithFocalPointFocalPointJsonNodeParentInternalContentDigest = "childrenContentfulImageWithFocalPointFocalPointJsonNode___parent___internal___contentDigest",
  ChildrenContentfulImageWithFocalPointFocalPointJsonNodeParentInternalDescription = "childrenContentfulImageWithFocalPointFocalPointJsonNode___parent___internal___description",
  ChildrenContentfulImageWithFocalPointFocalPointJsonNodeParentInternalFieldOwners = "childrenContentfulImageWithFocalPointFocalPointJsonNode___parent___internal___fieldOwners",
  ChildrenContentfulImageWithFocalPointFocalPointJsonNodeParentInternalIgnoreType = "childrenContentfulImageWithFocalPointFocalPointJsonNode___parent___internal___ignoreType",
  ChildrenContentfulImageWithFocalPointFocalPointJsonNodeParentInternalMediaType = "childrenContentfulImageWithFocalPointFocalPointJsonNode___parent___internal___mediaType",
  ChildrenContentfulImageWithFocalPointFocalPointJsonNodeParentInternalOwner = "childrenContentfulImageWithFocalPointFocalPointJsonNode___parent___internal___owner",
  ChildrenContentfulImageWithFocalPointFocalPointJsonNodeParentInternalType = "childrenContentfulImageWithFocalPointFocalPointJsonNode___parent___internal___type",
  ChildrenContentfulImageWithFocalPointFocalPointJsonNodeParentParentChildren = "childrenContentfulImageWithFocalPointFocalPointJsonNode___parent___parent___children",
  ChildrenContentfulImageWithFocalPointFocalPointJsonNodeParentParentId = "childrenContentfulImageWithFocalPointFocalPointJsonNode___parent___parent___id",
  ChildrenContentfulImageWithFocalPointFocalPointJsonNodeSysType = "childrenContentfulImageWithFocalPointFocalPointJsonNode___sys___type",
  ChildrenChildren = "children___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenId = "children___id",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentParentId = "children___parent___parent___id",
  ContentfulId = "contentful_id",
  CreatedAt = "createdAt",
  FocalPointChildren = "focalPoint___children",
  FocalPointChildrenChildren = "focalPoint___children___children",
  FocalPointChildrenChildrenChildren = "focalPoint___children___children___children",
  FocalPointChildrenChildrenId = "focalPoint___children___children___id",
  FocalPointChildrenId = "focalPoint___children___id",
  FocalPointChildrenInternalContent = "focalPoint___children___internal___content",
  FocalPointChildrenInternalContentDigest = "focalPoint___children___internal___contentDigest",
  FocalPointChildrenInternalDescription = "focalPoint___children___internal___description",
  FocalPointChildrenInternalFieldOwners = "focalPoint___children___internal___fieldOwners",
  FocalPointChildrenInternalIgnoreType = "focalPoint___children___internal___ignoreType",
  FocalPointChildrenInternalMediaType = "focalPoint___children___internal___mediaType",
  FocalPointChildrenInternalOwner = "focalPoint___children___internal___owner",
  FocalPointChildrenInternalType = "focalPoint___children___internal___type",
  FocalPointChildrenParentChildren = "focalPoint___children___parent___children",
  FocalPointChildrenParentId = "focalPoint___children___parent___id",
  FocalPointFocalPointX = "focalPoint___focalPoint___x",
  FocalPointFocalPointY = "focalPoint___focalPoint___y",
  FocalPointId = "focalPoint___id",
  FocalPointInternalContent = "focalPoint___internal___content",
  FocalPointInternalContentDigest = "focalPoint___internal___contentDigest",
  FocalPointInternalDescription = "focalPoint___internal___description",
  FocalPointInternalFieldOwners = "focalPoint___internal___fieldOwners",
  FocalPointInternalIgnoreType = "focalPoint___internal___ignoreType",
  FocalPointInternalMediaType = "focalPoint___internal___mediaType",
  FocalPointInternalOwner = "focalPoint___internal___owner",
  FocalPointInternalType = "focalPoint___internal___type",
  FocalPointParentChildren = "focalPoint___parent___children",
  FocalPointParentChildrenChildren = "focalPoint___parent___children___children",
  FocalPointParentChildrenId = "focalPoint___parent___children___id",
  FocalPointParentId = "focalPoint___parent___id",
  FocalPointParentInternalContent = "focalPoint___parent___internal___content",
  FocalPointParentInternalContentDigest = "focalPoint___parent___internal___contentDigest",
  FocalPointParentInternalDescription = "focalPoint___parent___internal___description",
  FocalPointParentInternalFieldOwners = "focalPoint___parent___internal___fieldOwners",
  FocalPointParentInternalIgnoreType = "focalPoint___parent___internal___ignoreType",
  FocalPointParentInternalMediaType = "focalPoint___parent___internal___mediaType",
  FocalPointParentInternalOwner = "focalPoint___parent___internal___owner",
  FocalPointParentInternalType = "focalPoint___parent___internal___type",
  FocalPointParentParentChildren = "focalPoint___parent___parent___children",
  FocalPointParentParentId = "focalPoint___parent___parent___id",
  FocalPointSysType = "focalPoint___sys___type",
  Id = "id",
  ImageChildren = "image___children",
  ImageChildrenChildren = "image___children___children",
  ImageChildrenChildrenChildren = "image___children___children___children",
  ImageChildrenChildrenId = "image___children___children___id",
  ImageChildrenId = "image___children___id",
  ImageChildrenInternalContent = "image___children___internal___content",
  ImageChildrenInternalContentDigest = "image___children___internal___contentDigest",
  ImageChildrenInternalDescription = "image___children___internal___description",
  ImageChildrenInternalFieldOwners = "image___children___internal___fieldOwners",
  ImageChildrenInternalIgnoreType = "image___children___internal___ignoreType",
  ImageChildrenInternalMediaType = "image___children___internal___mediaType",
  ImageChildrenInternalOwner = "image___children___internal___owner",
  ImageChildrenInternalType = "image___children___internal___type",
  ImageChildrenParentChildren = "image___children___parent___children",
  ImageChildrenParentId = "image___children___parent___id",
  ImageContentfulId = "image___contentful_id",
  ImageCreatedAt = "image___createdAt",
  ImageDescription = "image___description",
  ImageFileContentType = "image___file___contentType",
  ImageFileDetailsSize = "image___file___details___size",
  ImageFileFileName = "image___file___fileName",
  ImageFileUrl = "image___file___url",
  ImageGatsbyImageData = "image___gatsbyImageData",
  ImageId = "image___id",
  ImageInternalContent = "image___internal___content",
  ImageInternalContentDigest = "image___internal___contentDigest",
  ImageInternalDescription = "image___internal___description",
  ImageInternalFieldOwners = "image___internal___fieldOwners",
  ImageInternalIgnoreType = "image___internal___ignoreType",
  ImageInternalMediaType = "image___internal___mediaType",
  ImageInternalOwner = "image___internal___owner",
  ImageInternalType = "image___internal___type",
  ImageNodeLocale = "image___node_locale",
  ImageParentChildren = "image___parent___children",
  ImageParentChildrenChildren = "image___parent___children___children",
  ImageParentChildrenId = "image___parent___children___id",
  ImageParentId = "image___parent___id",
  ImageParentInternalContent = "image___parent___internal___content",
  ImageParentInternalContentDigest = "image___parent___internal___contentDigest",
  ImageParentInternalDescription = "image___parent___internal___description",
  ImageParentInternalFieldOwners = "image___parent___internal___fieldOwners",
  ImageParentInternalIgnoreType = "image___parent___internal___ignoreType",
  ImageParentInternalMediaType = "image___parent___internal___mediaType",
  ImageParentInternalOwner = "image___parent___internal___owner",
  ImageParentInternalType = "image___parent___internal___type",
  ImageParentParentChildren = "image___parent___parent___children",
  ImageParentParentId = "image___parent___parent___id",
  ImageSpaceId = "image___spaceId",
  ImageSysRevision = "image___sys___revision",
  ImageSysType = "image___sys___type",
  ImageTitle = "image___title",
  ImageUpdatedAt = "image___updatedAt",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  NodeLocale = "node_locale",
  ParentChildren = "parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenId = "parent___children___id",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentId = "parent___id",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentId = "parent___parent___id",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentParentId = "parent___parent___parent___id",
  SpaceId = "spaceId",
  SysContentTypeSysId = "sys___contentType___sys___id",
  SysContentTypeSysLinkType = "sys___contentType___sys___linkType",
  SysContentTypeSysType = "sys___contentType___sys___type",
  SysRevision = "sys___revision",
  SysType = "sys___type",
  Title = "title",
  UpdatedAt = "updatedAt",
}

export type ContentfulImageWithFocalPointFilterInput = {
  blog_post?: InputMaybe<ContentfulBlogPostFilterListInput>;
  childContentfulImageWithFocalPointFocalPointJsonNode?: InputMaybe<ContentfulImageWithFocalPointFocalPointJsonNodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  childrenContentfulImageWithFocalPointFocalPointJsonNode?: InputMaybe<ContentfulImageWithFocalPointFocalPointJsonNodeFilterListInput>;
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  focalPoint?: InputMaybe<ContentfulImageWithFocalPointFocalPointJsonNodeFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  image?: InputMaybe<ContentfulAssetFilterInput>;
  internal?: InputMaybe<InternalFilterInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulImageWithFocalPointSysFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
};

export type ContentfulImageWithFocalPointGroupConnection = {
  __typename?: "ContentfulImageWithFocalPointGroupConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<ContentfulImageWithFocalPointEdge>;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
  group: Array<ContentfulImageWithFocalPointGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<ContentfulImageWithFocalPoint>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type ContentfulImageWithFocalPointGroupConnectionDistinctArgs = {
  field: ContentfulImageWithFocalPointFieldsEnum;
};

export type ContentfulImageWithFocalPointGroupConnectionGroupArgs = {
  field: ContentfulImageWithFocalPointFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type ContentfulImageWithFocalPointGroupConnectionMaxArgs = {
  field: ContentfulImageWithFocalPointFieldsEnum;
};

export type ContentfulImageWithFocalPointGroupConnectionMinArgs = {
  field: ContentfulImageWithFocalPointFieldsEnum;
};

export type ContentfulImageWithFocalPointGroupConnectionSumArgs = {
  field: ContentfulImageWithFocalPointFieldsEnum;
};

export type ContentfulImageWithFocalPointSortInput = {
  fields?: InputMaybe<
    Array<InputMaybe<ContentfulImageWithFocalPointFieldsEnum>>
  >;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulImageWithFocalPointSys = {
  __typename?: "ContentfulImageWithFocalPointSys";
  contentType?: Maybe<ContentfulImageWithFocalPointSysContentType>;
  revision?: Maybe<Scalars["Int"]>;
  type?: Maybe<Scalars["String"]>;
};

export type ContentfulImageWithFocalPointSysContentType = {
  __typename?: "ContentfulImageWithFocalPointSysContentType";
  sys?: Maybe<ContentfulImageWithFocalPointSysContentTypeSys>;
};

export type ContentfulImageWithFocalPointSysContentTypeFilterInput = {
  sys?: InputMaybe<ContentfulImageWithFocalPointSysContentTypeSysFilterInput>;
};

export type ContentfulImageWithFocalPointSysContentTypeSys = {
  __typename?: "ContentfulImageWithFocalPointSysContentTypeSys";
  id?: Maybe<Scalars["String"]>;
  linkType?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
};

export type ContentfulImageWithFocalPointSysContentTypeSysFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  linkType?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulImageWithFocalPointSysFilterInput = {
  contentType?: InputMaybe<ContentfulImageWithFocalPointSysContentTypeFilterInput>;
  revision?: InputMaybe<IntQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulPostImage = ContentfulEntry &
  ContentfulReference &
  Node & {
    __typename?: "ContentfulPostImage";
    align?: Maybe<Scalars["String"]>;
    children: Array<Node>;
    contentful_id: Scalars["String"];
    createdAt?: Maybe<Scalars["Date"]>;
    description?: Maybe<Scalars["String"]>;
    id: Scalars["ID"];
    image?: Maybe<ContentfulAsset>;
    internal: Internal;
    node_locale: Scalars["String"];
    parent?: Maybe<Node>;
    spaceId?: Maybe<Scalars["String"]>;
    sys?: Maybe<ContentfulPostImageSys>;
    updatedAt?: Maybe<Scalars["Date"]>;
  };

export type ContentfulPostImageCreatedAtArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type ContentfulPostImageUpdatedAtArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type ContentfulPostImageConnection = {
  __typename?: "ContentfulPostImageConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<ContentfulPostImageEdge>;
  group: Array<ContentfulPostImageGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<ContentfulPostImage>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type ContentfulPostImageConnectionDistinctArgs = {
  field: ContentfulPostImageFieldsEnum;
};

export type ContentfulPostImageConnectionGroupArgs = {
  field: ContentfulPostImageFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type ContentfulPostImageConnectionMaxArgs = {
  field: ContentfulPostImageFieldsEnum;
};

export type ContentfulPostImageConnectionMinArgs = {
  field: ContentfulPostImageFieldsEnum;
};

export type ContentfulPostImageConnectionSumArgs = {
  field: ContentfulPostImageFieldsEnum;
};

export type ContentfulPostImageEdge = {
  __typename?: "ContentfulPostImageEdge";
  next?: Maybe<ContentfulPostImage>;
  node: ContentfulPostImage;
  previous?: Maybe<ContentfulPostImage>;
};

export enum ContentfulPostImageFieldsEnum {
  Align = "align",
  Children = "children",
  ChildrenChildren = "children___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenId = "children___id",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentParentId = "children___parent___parent___id",
  ContentfulId = "contentful_id",
  CreatedAt = "createdAt",
  Description = "description",
  Id = "id",
  ImageChildren = "image___children",
  ImageChildrenChildren = "image___children___children",
  ImageChildrenChildrenChildren = "image___children___children___children",
  ImageChildrenChildrenId = "image___children___children___id",
  ImageChildrenId = "image___children___id",
  ImageChildrenInternalContent = "image___children___internal___content",
  ImageChildrenInternalContentDigest = "image___children___internal___contentDigest",
  ImageChildrenInternalDescription = "image___children___internal___description",
  ImageChildrenInternalFieldOwners = "image___children___internal___fieldOwners",
  ImageChildrenInternalIgnoreType = "image___children___internal___ignoreType",
  ImageChildrenInternalMediaType = "image___children___internal___mediaType",
  ImageChildrenInternalOwner = "image___children___internal___owner",
  ImageChildrenInternalType = "image___children___internal___type",
  ImageChildrenParentChildren = "image___children___parent___children",
  ImageChildrenParentId = "image___children___parent___id",
  ImageContentfulId = "image___contentful_id",
  ImageCreatedAt = "image___createdAt",
  ImageDescription = "image___description",
  ImageFileContentType = "image___file___contentType",
  ImageFileDetailsSize = "image___file___details___size",
  ImageFileFileName = "image___file___fileName",
  ImageFileUrl = "image___file___url",
  ImageGatsbyImageData = "image___gatsbyImageData",
  ImageId = "image___id",
  ImageInternalContent = "image___internal___content",
  ImageInternalContentDigest = "image___internal___contentDigest",
  ImageInternalDescription = "image___internal___description",
  ImageInternalFieldOwners = "image___internal___fieldOwners",
  ImageInternalIgnoreType = "image___internal___ignoreType",
  ImageInternalMediaType = "image___internal___mediaType",
  ImageInternalOwner = "image___internal___owner",
  ImageInternalType = "image___internal___type",
  ImageNodeLocale = "image___node_locale",
  ImageParentChildren = "image___parent___children",
  ImageParentChildrenChildren = "image___parent___children___children",
  ImageParentChildrenId = "image___parent___children___id",
  ImageParentId = "image___parent___id",
  ImageParentInternalContent = "image___parent___internal___content",
  ImageParentInternalContentDigest = "image___parent___internal___contentDigest",
  ImageParentInternalDescription = "image___parent___internal___description",
  ImageParentInternalFieldOwners = "image___parent___internal___fieldOwners",
  ImageParentInternalIgnoreType = "image___parent___internal___ignoreType",
  ImageParentInternalMediaType = "image___parent___internal___mediaType",
  ImageParentInternalOwner = "image___parent___internal___owner",
  ImageParentInternalType = "image___parent___internal___type",
  ImageParentParentChildren = "image___parent___parent___children",
  ImageParentParentId = "image___parent___parent___id",
  ImageSpaceId = "image___spaceId",
  ImageSysRevision = "image___sys___revision",
  ImageSysType = "image___sys___type",
  ImageTitle = "image___title",
  ImageUpdatedAt = "image___updatedAt",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  NodeLocale = "node_locale",
  ParentChildren = "parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenId = "parent___children___id",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentId = "parent___id",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentId = "parent___parent___id",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentParentId = "parent___parent___parent___id",
  SpaceId = "spaceId",
  SysContentTypeSysId = "sys___contentType___sys___id",
  SysContentTypeSysLinkType = "sys___contentType___sys___linkType",
  SysContentTypeSysType = "sys___contentType___sys___type",
  SysRevision = "sys___revision",
  SysType = "sys___type",
  UpdatedAt = "updatedAt",
}

export type ContentfulPostImageFilterInput = {
  align?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  image?: InputMaybe<ContentfulAssetFilterInput>;
  internal?: InputMaybe<InternalFilterInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulPostImageSysFilterInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
};

export type ContentfulPostImageFilterListInput = {
  elemMatch?: InputMaybe<ContentfulPostImageFilterInput>;
};

export type ContentfulPostImageGroupConnection = {
  __typename?: "ContentfulPostImageGroupConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<ContentfulPostImageEdge>;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
  group: Array<ContentfulPostImageGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<ContentfulPostImage>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type ContentfulPostImageGroupConnectionDistinctArgs = {
  field: ContentfulPostImageFieldsEnum;
};

export type ContentfulPostImageGroupConnectionGroupArgs = {
  field: ContentfulPostImageFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type ContentfulPostImageGroupConnectionMaxArgs = {
  field: ContentfulPostImageFieldsEnum;
};

export type ContentfulPostImageGroupConnectionMinArgs = {
  field: ContentfulPostImageFieldsEnum;
};

export type ContentfulPostImageGroupConnectionSumArgs = {
  field: ContentfulPostImageFieldsEnum;
};

export type ContentfulPostImageSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ContentfulPostImageFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulPostImageSys = {
  __typename?: "ContentfulPostImageSys";
  contentType?: Maybe<ContentfulPostImageSysContentType>;
  revision?: Maybe<Scalars["Int"]>;
  type?: Maybe<Scalars["String"]>;
};

export type ContentfulPostImageSysContentType = {
  __typename?: "ContentfulPostImageSysContentType";
  sys?: Maybe<ContentfulPostImageSysContentTypeSys>;
};

export type ContentfulPostImageSysContentTypeFilterInput = {
  sys?: InputMaybe<ContentfulPostImageSysContentTypeSysFilterInput>;
};

export type ContentfulPostImageSysContentTypeSys = {
  __typename?: "ContentfulPostImageSysContentTypeSys";
  id?: Maybe<Scalars["String"]>;
  linkType?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
};

export type ContentfulPostImageSysContentTypeSysFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  linkType?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulPostImageSysFilterInput = {
  contentType?: InputMaybe<ContentfulPostImageSysContentTypeFilterInput>;
  revision?: InputMaybe<IntQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulReference = {
  contentful_id: Scalars["String"];
  id: Scalars["ID"];
};

export type DateQueryOperatorInput = {
  eq?: InputMaybe<Scalars["Date"]>;
  gt?: InputMaybe<Scalars["Date"]>;
  gte?: InputMaybe<Scalars["Date"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["Date"]>>>;
  lt?: InputMaybe<Scalars["Date"]>;
  lte?: InputMaybe<Scalars["Date"]>;
  ne?: InputMaybe<Scalars["Date"]>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["Date"]>>>;
};

export type Directory = Node & {
  __typename?: "Directory";
  absolutePath: Scalars["String"];
  accessTime: Scalars["Date"];
  atime: Scalars["Date"];
  atimeMs: Scalars["Float"];
  base: Scalars["String"];
  birthTime: Scalars["Date"];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars["Date"]>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars["Float"]>;
  changeTime: Scalars["Date"];
  children: Array<Node>;
  ctime: Scalars["Date"];
  ctimeMs: Scalars["Float"];
  dev: Scalars["Int"];
  dir: Scalars["String"];
  ext: Scalars["String"];
  extension: Scalars["String"];
  gid: Scalars["Int"];
  id: Scalars["ID"];
  ino: Scalars["Float"];
  internal: Internal;
  mode: Scalars["Int"];
  modifiedTime: Scalars["Date"];
  mtime: Scalars["Date"];
  mtimeMs: Scalars["Float"];
  name: Scalars["String"];
  nlink: Scalars["Int"];
  parent?: Maybe<Node>;
  prettySize: Scalars["String"];
  rdev: Scalars["Int"];
  relativeDirectory: Scalars["String"];
  relativePath: Scalars["String"];
  root: Scalars["String"];
  size: Scalars["Int"];
  sourceInstanceName: Scalars["String"];
  uid: Scalars["Int"];
};

export type DirectoryAccessTimeArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type DirectoryAtimeArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type DirectoryBirthTimeArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type DirectoryChangeTimeArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type DirectoryCtimeArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type DirectoryModifiedTimeArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type DirectoryMtimeArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type DirectoryConnection = {
  __typename?: "DirectoryConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<DirectoryEdge>;
  group: Array<DirectoryGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryConnectionGroupArgs = {
  field: DirectoryFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type DirectoryConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  __typename?: "DirectoryEdge";
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export enum DirectoryFieldsEnum {
  AbsolutePath = "absolutePath",
  AccessTime = "accessTime",
  Atime = "atime",
  AtimeMs = "atimeMs",
  Base = "base",
  BirthTime = "birthTime",
  Birthtime = "birthtime",
  BirthtimeMs = "birthtimeMs",
  ChangeTime = "changeTime",
  Children = "children",
  ChildrenChildren = "children___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenId = "children___id",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentParentId = "children___parent___parent___id",
  Ctime = "ctime",
  CtimeMs = "ctimeMs",
  Dev = "dev",
  Dir = "dir",
  Ext = "ext",
  Extension = "extension",
  Gid = "gid",
  Id = "id",
  Ino = "ino",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  Mode = "mode",
  ModifiedTime = "modifiedTime",
  Mtime = "mtime",
  MtimeMs = "mtimeMs",
  Name = "name",
  Nlink = "nlink",
  ParentChildren = "parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenId = "parent___children___id",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentId = "parent___id",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentId = "parent___parent___id",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentParentId = "parent___parent___parent___id",
  PrettySize = "prettySize",
  Rdev = "rdev",
  RelativeDirectory = "relativeDirectory",
  RelativePath = "relativePath",
  Root = "root",
  Size = "size",
  SourceInstanceName = "sourceInstanceName",
  Uid = "uid",
}

export type DirectoryFilterInput = {
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
};

export type DirectoryGroupConnection = {
  __typename?: "DirectoryGroupConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<DirectoryEdge>;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
  group: Array<DirectoryGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type DirectoryGroupConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryGroupConnectionGroupArgs = {
  field: DirectoryFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type DirectoryGroupConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryGroupConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryGroupConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectorySortInput = {
  fields?: InputMaybe<Array<InputMaybe<DirectoryFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type DuotoneGradient = {
  highlight: Scalars["String"];
  opacity?: InputMaybe<Scalars["Int"]>;
  shadow: Scalars["String"];
};

export type File = Node & {
  __typename?: "File";
  absolutePath: Scalars["String"];
  accessTime: Scalars["Date"];
  atime: Scalars["Date"];
  atimeMs: Scalars["Float"];
  base: Scalars["String"];
  birthTime: Scalars["Date"];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars["Date"]>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars["Float"]>;
  changeTime: Scalars["Date"];
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp?: Maybe<ImageSharp>;
  children: Array<Node>;
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp?: Maybe<Array<Maybe<ImageSharp>>>;
  ctime: Scalars["Date"];
  ctimeMs: Scalars["Float"];
  dev: Scalars["Int"];
  dir: Scalars["String"];
  ext: Scalars["String"];
  extension: Scalars["String"];
  gid: Scalars["Int"];
  id: Scalars["ID"];
  ino: Scalars["Float"];
  internal: Internal;
  mode: Scalars["Int"];
  modifiedTime: Scalars["Date"];
  mtime: Scalars["Date"];
  mtimeMs: Scalars["Float"];
  name: Scalars["String"];
  nlink: Scalars["Int"];
  parent?: Maybe<Node>;
  prettySize: Scalars["String"];
  rdev: Scalars["Int"];
  relativeDirectory: Scalars["String"];
  relativePath: Scalars["String"];
  root: Scalars["String"];
  size: Scalars["Int"];
  sourceInstanceName: Scalars["String"];
  uid: Scalars["Int"];
};

export type FileAccessTimeArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type FileAtimeArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type FileBirthTimeArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type FileChangeTimeArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type FileCtimeArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type FileModifiedTimeArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type FileMtimeArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type FileConnection = {
  __typename?: "FileConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<FileEdge>;
  group: Array<FileGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};

export type FileConnectionGroupArgs = {
  field: FileFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type FileConnectionMaxArgs = {
  field: FileFieldsEnum;
};

export type FileConnectionMinArgs = {
  field: FileFieldsEnum;
};

export type FileConnectionSumArgs = {
  field: FileFieldsEnum;
};

export type FileEdge = {
  __typename?: "FileEdge";
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export enum FileFieldsEnum {
  AbsolutePath = "absolutePath",
  AccessTime = "accessTime",
  Atime = "atime",
  AtimeMs = "atimeMs",
  Base = "base",
  BirthTime = "birthTime",
  Birthtime = "birthtime",
  BirthtimeMs = "birthtimeMs",
  ChangeTime = "changeTime",
  ChildImageSharpChildren = "childImageSharp___children",
  ChildImageSharpChildrenChildren = "childImageSharp___children___children",
  ChildImageSharpChildrenChildrenChildren = "childImageSharp___children___children___children",
  ChildImageSharpChildrenChildrenId = "childImageSharp___children___children___id",
  ChildImageSharpChildrenId = "childImageSharp___children___id",
  ChildImageSharpChildrenInternalContent = "childImageSharp___children___internal___content",
  ChildImageSharpChildrenInternalContentDigest = "childImageSharp___children___internal___contentDigest",
  ChildImageSharpChildrenInternalDescription = "childImageSharp___children___internal___description",
  ChildImageSharpChildrenInternalFieldOwners = "childImageSharp___children___internal___fieldOwners",
  ChildImageSharpChildrenInternalIgnoreType = "childImageSharp___children___internal___ignoreType",
  ChildImageSharpChildrenInternalMediaType = "childImageSharp___children___internal___mediaType",
  ChildImageSharpChildrenInternalOwner = "childImageSharp___children___internal___owner",
  ChildImageSharpChildrenInternalType = "childImageSharp___children___internal___type",
  ChildImageSharpChildrenParentChildren = "childImageSharp___children___parent___children",
  ChildImageSharpChildrenParentId = "childImageSharp___children___parent___id",
  ChildImageSharpFixedAspectRatio = "childImageSharp___fixed___aspectRatio",
  ChildImageSharpFixedBase64 = "childImageSharp___fixed___base64",
  ChildImageSharpFixedHeight = "childImageSharp___fixed___height",
  ChildImageSharpFixedOriginalName = "childImageSharp___fixed___originalName",
  ChildImageSharpFixedSrc = "childImageSharp___fixed___src",
  ChildImageSharpFixedSrcSet = "childImageSharp___fixed___srcSet",
  ChildImageSharpFixedSrcSetWebp = "childImageSharp___fixed___srcSetWebp",
  ChildImageSharpFixedSrcWebp = "childImageSharp___fixed___srcWebp",
  ChildImageSharpFixedTracedSvg = "childImageSharp___fixed___tracedSVG",
  ChildImageSharpFixedWidth = "childImageSharp___fixed___width",
  ChildImageSharpFluidAspectRatio = "childImageSharp___fluid___aspectRatio",
  ChildImageSharpFluidBase64 = "childImageSharp___fluid___base64",
  ChildImageSharpFluidOriginalImg = "childImageSharp___fluid___originalImg",
  ChildImageSharpFluidOriginalName = "childImageSharp___fluid___originalName",
  ChildImageSharpFluidPresentationHeight = "childImageSharp___fluid___presentationHeight",
  ChildImageSharpFluidPresentationWidth = "childImageSharp___fluid___presentationWidth",
  ChildImageSharpFluidSizes = "childImageSharp___fluid___sizes",
  ChildImageSharpFluidSrc = "childImageSharp___fluid___src",
  ChildImageSharpFluidSrcSet = "childImageSharp___fluid___srcSet",
  ChildImageSharpFluidSrcSetWebp = "childImageSharp___fluid___srcSetWebp",
  ChildImageSharpFluidSrcWebp = "childImageSharp___fluid___srcWebp",
  ChildImageSharpFluidTracedSvg = "childImageSharp___fluid___tracedSVG",
  ChildImageSharpGatsbyImageData = "childImageSharp___gatsbyImageData",
  ChildImageSharpId = "childImageSharp___id",
  ChildImageSharpInternalContent = "childImageSharp___internal___content",
  ChildImageSharpInternalContentDigest = "childImageSharp___internal___contentDigest",
  ChildImageSharpInternalDescription = "childImageSharp___internal___description",
  ChildImageSharpInternalFieldOwners = "childImageSharp___internal___fieldOwners",
  ChildImageSharpInternalIgnoreType = "childImageSharp___internal___ignoreType",
  ChildImageSharpInternalMediaType = "childImageSharp___internal___mediaType",
  ChildImageSharpInternalOwner = "childImageSharp___internal___owner",
  ChildImageSharpInternalType = "childImageSharp___internal___type",
  ChildImageSharpOriginalHeight = "childImageSharp___original___height",
  ChildImageSharpOriginalSrc = "childImageSharp___original___src",
  ChildImageSharpOriginalWidth = "childImageSharp___original___width",
  ChildImageSharpParentChildren = "childImageSharp___parent___children",
  ChildImageSharpParentChildrenChildren = "childImageSharp___parent___children___children",
  ChildImageSharpParentChildrenId = "childImageSharp___parent___children___id",
  ChildImageSharpParentId = "childImageSharp___parent___id",
  ChildImageSharpParentInternalContent = "childImageSharp___parent___internal___content",
  ChildImageSharpParentInternalContentDigest = "childImageSharp___parent___internal___contentDigest",
  ChildImageSharpParentInternalDescription = "childImageSharp___parent___internal___description",
  ChildImageSharpParentInternalFieldOwners = "childImageSharp___parent___internal___fieldOwners",
  ChildImageSharpParentInternalIgnoreType = "childImageSharp___parent___internal___ignoreType",
  ChildImageSharpParentInternalMediaType = "childImageSharp___parent___internal___mediaType",
  ChildImageSharpParentInternalOwner = "childImageSharp___parent___internal___owner",
  ChildImageSharpParentInternalType = "childImageSharp___parent___internal___type",
  ChildImageSharpParentParentChildren = "childImageSharp___parent___parent___children",
  ChildImageSharpParentParentId = "childImageSharp___parent___parent___id",
  ChildImageSharpResizeAspectRatio = "childImageSharp___resize___aspectRatio",
  ChildImageSharpResizeHeight = "childImageSharp___resize___height",
  ChildImageSharpResizeOriginalName = "childImageSharp___resize___originalName",
  ChildImageSharpResizeSrc = "childImageSharp___resize___src",
  ChildImageSharpResizeTracedSvg = "childImageSharp___resize___tracedSVG",
  ChildImageSharpResizeWidth = "childImageSharp___resize___width",
  Children = "children",
  ChildrenImageSharp = "childrenImageSharp",
  ChildrenImageSharpChildren = "childrenImageSharp___children",
  ChildrenImageSharpChildrenChildren = "childrenImageSharp___children___children",
  ChildrenImageSharpChildrenChildrenChildren = "childrenImageSharp___children___children___children",
  ChildrenImageSharpChildrenChildrenId = "childrenImageSharp___children___children___id",
  ChildrenImageSharpChildrenId = "childrenImageSharp___children___id",
  ChildrenImageSharpChildrenInternalContent = "childrenImageSharp___children___internal___content",
  ChildrenImageSharpChildrenInternalContentDigest = "childrenImageSharp___children___internal___contentDigest",
  ChildrenImageSharpChildrenInternalDescription = "childrenImageSharp___children___internal___description",
  ChildrenImageSharpChildrenInternalFieldOwners = "childrenImageSharp___children___internal___fieldOwners",
  ChildrenImageSharpChildrenInternalIgnoreType = "childrenImageSharp___children___internal___ignoreType",
  ChildrenImageSharpChildrenInternalMediaType = "childrenImageSharp___children___internal___mediaType",
  ChildrenImageSharpChildrenInternalOwner = "childrenImageSharp___children___internal___owner",
  ChildrenImageSharpChildrenInternalType = "childrenImageSharp___children___internal___type",
  ChildrenImageSharpChildrenParentChildren = "childrenImageSharp___children___parent___children",
  ChildrenImageSharpChildrenParentId = "childrenImageSharp___children___parent___id",
  ChildrenImageSharpFixedAspectRatio = "childrenImageSharp___fixed___aspectRatio",
  ChildrenImageSharpFixedBase64 = "childrenImageSharp___fixed___base64",
  ChildrenImageSharpFixedHeight = "childrenImageSharp___fixed___height",
  ChildrenImageSharpFixedOriginalName = "childrenImageSharp___fixed___originalName",
  ChildrenImageSharpFixedSrc = "childrenImageSharp___fixed___src",
  ChildrenImageSharpFixedSrcSet = "childrenImageSharp___fixed___srcSet",
  ChildrenImageSharpFixedSrcSetWebp = "childrenImageSharp___fixed___srcSetWebp",
  ChildrenImageSharpFixedSrcWebp = "childrenImageSharp___fixed___srcWebp",
  ChildrenImageSharpFixedTracedSvg = "childrenImageSharp___fixed___tracedSVG",
  ChildrenImageSharpFixedWidth = "childrenImageSharp___fixed___width",
  ChildrenImageSharpFluidAspectRatio = "childrenImageSharp___fluid___aspectRatio",
  ChildrenImageSharpFluidBase64 = "childrenImageSharp___fluid___base64",
  ChildrenImageSharpFluidOriginalImg = "childrenImageSharp___fluid___originalImg",
  ChildrenImageSharpFluidOriginalName = "childrenImageSharp___fluid___originalName",
  ChildrenImageSharpFluidPresentationHeight = "childrenImageSharp___fluid___presentationHeight",
  ChildrenImageSharpFluidPresentationWidth = "childrenImageSharp___fluid___presentationWidth",
  ChildrenImageSharpFluidSizes = "childrenImageSharp___fluid___sizes",
  ChildrenImageSharpFluidSrc = "childrenImageSharp___fluid___src",
  ChildrenImageSharpFluidSrcSet = "childrenImageSharp___fluid___srcSet",
  ChildrenImageSharpFluidSrcSetWebp = "childrenImageSharp___fluid___srcSetWebp",
  ChildrenImageSharpFluidSrcWebp = "childrenImageSharp___fluid___srcWebp",
  ChildrenImageSharpFluidTracedSvg = "childrenImageSharp___fluid___tracedSVG",
  ChildrenImageSharpGatsbyImageData = "childrenImageSharp___gatsbyImageData",
  ChildrenImageSharpId = "childrenImageSharp___id",
  ChildrenImageSharpInternalContent = "childrenImageSharp___internal___content",
  ChildrenImageSharpInternalContentDigest = "childrenImageSharp___internal___contentDigest",
  ChildrenImageSharpInternalDescription = "childrenImageSharp___internal___description",
  ChildrenImageSharpInternalFieldOwners = "childrenImageSharp___internal___fieldOwners",
  ChildrenImageSharpInternalIgnoreType = "childrenImageSharp___internal___ignoreType",
  ChildrenImageSharpInternalMediaType = "childrenImageSharp___internal___mediaType",
  ChildrenImageSharpInternalOwner = "childrenImageSharp___internal___owner",
  ChildrenImageSharpInternalType = "childrenImageSharp___internal___type",
  ChildrenImageSharpOriginalHeight = "childrenImageSharp___original___height",
  ChildrenImageSharpOriginalSrc = "childrenImageSharp___original___src",
  ChildrenImageSharpOriginalWidth = "childrenImageSharp___original___width",
  ChildrenImageSharpParentChildren = "childrenImageSharp___parent___children",
  ChildrenImageSharpParentChildrenChildren = "childrenImageSharp___parent___children___children",
  ChildrenImageSharpParentChildrenId = "childrenImageSharp___parent___children___id",
  ChildrenImageSharpParentId = "childrenImageSharp___parent___id",
  ChildrenImageSharpParentInternalContent = "childrenImageSharp___parent___internal___content",
  ChildrenImageSharpParentInternalContentDigest = "childrenImageSharp___parent___internal___contentDigest",
  ChildrenImageSharpParentInternalDescription = "childrenImageSharp___parent___internal___description",
  ChildrenImageSharpParentInternalFieldOwners = "childrenImageSharp___parent___internal___fieldOwners",
  ChildrenImageSharpParentInternalIgnoreType = "childrenImageSharp___parent___internal___ignoreType",
  ChildrenImageSharpParentInternalMediaType = "childrenImageSharp___parent___internal___mediaType",
  ChildrenImageSharpParentInternalOwner = "childrenImageSharp___parent___internal___owner",
  ChildrenImageSharpParentInternalType = "childrenImageSharp___parent___internal___type",
  ChildrenImageSharpParentParentChildren = "childrenImageSharp___parent___parent___children",
  ChildrenImageSharpParentParentId = "childrenImageSharp___parent___parent___id",
  ChildrenImageSharpResizeAspectRatio = "childrenImageSharp___resize___aspectRatio",
  ChildrenImageSharpResizeHeight = "childrenImageSharp___resize___height",
  ChildrenImageSharpResizeOriginalName = "childrenImageSharp___resize___originalName",
  ChildrenImageSharpResizeSrc = "childrenImageSharp___resize___src",
  ChildrenImageSharpResizeTracedSvg = "childrenImageSharp___resize___tracedSVG",
  ChildrenImageSharpResizeWidth = "childrenImageSharp___resize___width",
  ChildrenChildren = "children___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenId = "children___id",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentParentId = "children___parent___parent___id",
  Ctime = "ctime",
  CtimeMs = "ctimeMs",
  Dev = "dev",
  Dir = "dir",
  Ext = "ext",
  Extension = "extension",
  Gid = "gid",
  Id = "id",
  Ino = "ino",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  Mode = "mode",
  ModifiedTime = "modifiedTime",
  Mtime = "mtime",
  MtimeMs = "mtimeMs",
  Name = "name",
  Nlink = "nlink",
  ParentChildren = "parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenId = "parent___children___id",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentId = "parent___id",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentId = "parent___parent___id",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentParentId = "parent___parent___parent___id",
  PrettySize = "prettySize",
  Rdev = "rdev",
  RelativeDirectory = "relativeDirectory",
  RelativePath = "relativePath",
  Root = "root",
  Size = "size",
  SourceInstanceName = "sourceInstanceName",
  Uid = "uid",
}

export type FileFilterInput = {
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  childImageSharp?: InputMaybe<ImageSharpFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  childrenImageSharp?: InputMaybe<ImageSharpFilterListInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
};

export type FileGroupConnection = {
  __typename?: "FileGroupConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<FileEdge>;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
  group: Array<FileGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type FileGroupConnectionDistinctArgs = {
  field: FileFieldsEnum;
};

export type FileGroupConnectionGroupArgs = {
  field: FileFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type FileGroupConnectionMaxArgs = {
  field: FileFieldsEnum;
};

export type FileGroupConnectionMinArgs = {
  field: FileFieldsEnum;
};

export type FileGroupConnectionSumArgs = {
  field: FileFieldsEnum;
};

export type FileSortInput = {
  fields?: InputMaybe<Array<InputMaybe<FileFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq?: InputMaybe<Scalars["Float"]>;
  gt?: InputMaybe<Scalars["Float"]>;
  gte?: InputMaybe<Scalars["Float"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  lt?: InputMaybe<Scalars["Float"]>;
  lte?: InputMaybe<Scalars["Float"]>;
  ne?: InputMaybe<Scalars["Float"]>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
};

export enum GatsbyImageFormat {
  Auto = "AUTO",
  Avif = "AVIF",
  Jpg = "JPG",
  NoChange = "NO_CHANGE",
  Png = "PNG",
  Webp = "WEBP",
}

export enum GatsbyImageLayout {
  Constrained = "CONSTRAINED",
  Fixed = "FIXED",
  FullWidth = "FULL_WIDTH",
}

export enum GatsbyImagePlaceholder {
  Blurred = "BLURRED",
  DominantColor = "DOMINANT_COLOR",
  None = "NONE",
  TracedSvg = "TRACED_SVG",
}

export enum ImageCropFocus {
  Attention = "ATTENTION",
  Center = "CENTER",
  East = "EAST",
  Entropy = "ENTROPY",
  North = "NORTH",
  Northeast = "NORTHEAST",
  Northwest = "NORTHWEST",
  South = "SOUTH",
  Southeast = "SOUTHEAST",
  Southwest = "SOUTHWEST",
  West = "WEST",
}

export enum ImageFit {
  Contain = "CONTAIN",
  Cover = "COVER",
  Fill = "FILL",
  Inside = "INSIDE",
  Outside = "OUTSIDE",
}

export enum ImageFormat {
  Auto = "AUTO",
  Avif = "AVIF",
  Jpg = "JPG",
  NoChange = "NO_CHANGE",
  Png = "PNG",
  Webp = "WEBP",
}

export enum ImageLayout {
  Constrained = "CONSTRAINED",
  Fixed = "FIXED",
  FullWidth = "FULL_WIDTH",
}

export enum ImagePlaceholder {
  Blurred = "BLURRED",
  DominantColor = "DOMINANT_COLOR",
  None = "NONE",
  TracedSvg = "TRACED_SVG",
}

export enum ImageResizingBehavior {
  /** Crop a part of the original image to match the specified size. */
  Crop = "CROP",
  /** Crop the image to the specified dimensions, if the original image is smaller than these dimensions, then the image will be upscaled. */
  Fill = "FILL",
  NoChange = "NO_CHANGE",
  /** Same as the default resizing, but adds padding so that the generated image has the specified dimensions. */
  Pad = "PAD",
  /** Scale the image regardless of the original aspect ratio. */
  Scale = "SCALE",
  /** When used in association with the f parameter below, creates a thumbnail from the image based on a focus area. */
  Thumb = "THUMB",
}

export type ImageSharp = Node & {
  __typename?: "ImageSharp";
  children: Array<Node>;
  fixed?: Maybe<ImageSharpFixed>;
  fluid?: Maybe<ImageSharpFluid>;
  gatsbyImageData: Scalars["JSON"];
  id: Scalars["ID"];
  internal: Internal;
  original?: Maybe<ImageSharpOriginal>;
  parent?: Maybe<Node>;
  resize?: Maybe<ImageSharpResize>;
};

export type ImageSharpFixedArgs = {
  background?: InputMaybe<Scalars["String"]>;
  base64Width?: InputMaybe<Scalars["Int"]>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone?: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars["Boolean"]>;
  height?: InputMaybe<Scalars["Int"]>;
  jpegProgressive?: InputMaybe<Scalars["Boolean"]>;
  jpegQuality?: InputMaybe<Scalars["Int"]>;
  pngCompressionSpeed?: InputMaybe<Scalars["Int"]>;
  pngQuality?: InputMaybe<Scalars["Int"]>;
  quality?: InputMaybe<Scalars["Int"]>;
  rotate?: InputMaybe<Scalars["Int"]>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  traceSVG?: InputMaybe<Potrace>;
  trim?: InputMaybe<Scalars["Float"]>;
  webpQuality?: InputMaybe<Scalars["Int"]>;
  width?: InputMaybe<Scalars["Int"]>;
};

export type ImageSharpFluidArgs = {
  background?: InputMaybe<Scalars["String"]>;
  base64Width?: InputMaybe<Scalars["Int"]>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone?: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars["Boolean"]>;
  jpegProgressive?: InputMaybe<Scalars["Boolean"]>;
  jpegQuality?: InputMaybe<Scalars["Int"]>;
  maxHeight?: InputMaybe<Scalars["Int"]>;
  maxWidth?: InputMaybe<Scalars["Int"]>;
  pngCompressionSpeed?: InputMaybe<Scalars["Int"]>;
  pngQuality?: InputMaybe<Scalars["Int"]>;
  quality?: InputMaybe<Scalars["Int"]>;
  rotate?: InputMaybe<Scalars["Int"]>;
  sizes?: InputMaybe<Scalars["String"]>;
  srcSetBreakpoints?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  traceSVG?: InputMaybe<Potrace>;
  trim?: InputMaybe<Scalars["Float"]>;
  webpQuality?: InputMaybe<Scalars["Int"]>;
};

export type ImageSharpGatsbyImageDataArgs = {
  aspectRatio?: InputMaybe<Scalars["Float"]>;
  avifOptions?: InputMaybe<AvifOptions>;
  backgroundColor?: InputMaybe<Scalars["String"]>;
  blurredOptions?: InputMaybe<BlurredOptions>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  formats?: InputMaybe<Array<InputMaybe<ImageFormat>>>;
  height?: InputMaybe<Scalars["Int"]>;
  jpgOptions?: InputMaybe<JpgOptions>;
  layout?: InputMaybe<ImageLayout>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  placeholder?: InputMaybe<ImagePlaceholder>;
  pngOptions?: InputMaybe<PngOptions>;
  quality?: InputMaybe<Scalars["Int"]>;
  sizes?: InputMaybe<Scalars["String"]>;
  tracedSVGOptions?: InputMaybe<Potrace>;
  transformOptions?: InputMaybe<TransformOptions>;
  webpOptions?: InputMaybe<WebPOptions>;
  width?: InputMaybe<Scalars["Int"]>;
};

export type ImageSharpResizeArgs = {
  background?: InputMaybe<Scalars["String"]>;
  base64?: InputMaybe<Scalars["Boolean"]>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone?: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars["Boolean"]>;
  height?: InputMaybe<Scalars["Int"]>;
  jpegProgressive?: InputMaybe<Scalars["Boolean"]>;
  jpegQuality?: InputMaybe<Scalars["Int"]>;
  pngCompressionLevel?: InputMaybe<Scalars["Int"]>;
  pngCompressionSpeed?: InputMaybe<Scalars["Int"]>;
  pngQuality?: InputMaybe<Scalars["Int"]>;
  quality?: InputMaybe<Scalars["Int"]>;
  rotate?: InputMaybe<Scalars["Int"]>;
  toFormat?: InputMaybe<ImageFormat>;
  traceSVG?: InputMaybe<Potrace>;
  trim?: InputMaybe<Scalars["Float"]>;
  webpQuality?: InputMaybe<Scalars["Int"]>;
  width?: InputMaybe<Scalars["Int"]>;
};

export type ImageSharpConnection = {
  __typename?: "ImageSharpConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<ImageSharpEdge>;
  group: Array<ImageSharpGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpConnectionGroupArgs = {
  field: ImageSharpFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type ImageSharpConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  __typename?: "ImageSharpEdge";
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export enum ImageSharpFieldsEnum {
  Children = "children",
  ChildrenChildren = "children___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenId = "children___id",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentParentId = "children___parent___parent___id",
  FixedAspectRatio = "fixed___aspectRatio",
  FixedBase64 = "fixed___base64",
  FixedHeight = "fixed___height",
  FixedOriginalName = "fixed___originalName",
  FixedSrc = "fixed___src",
  FixedSrcSet = "fixed___srcSet",
  FixedSrcSetWebp = "fixed___srcSetWebp",
  FixedSrcWebp = "fixed___srcWebp",
  FixedTracedSvg = "fixed___tracedSVG",
  FixedWidth = "fixed___width",
  FluidAspectRatio = "fluid___aspectRatio",
  FluidBase64 = "fluid___base64",
  FluidOriginalImg = "fluid___originalImg",
  FluidOriginalName = "fluid___originalName",
  FluidPresentationHeight = "fluid___presentationHeight",
  FluidPresentationWidth = "fluid___presentationWidth",
  FluidSizes = "fluid___sizes",
  FluidSrc = "fluid___src",
  FluidSrcSet = "fluid___srcSet",
  FluidSrcSetWebp = "fluid___srcSetWebp",
  FluidSrcWebp = "fluid___srcWebp",
  FluidTracedSvg = "fluid___tracedSVG",
  GatsbyImageData = "gatsbyImageData",
  Id = "id",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  OriginalHeight = "original___height",
  OriginalSrc = "original___src",
  OriginalWidth = "original___width",
  ParentChildren = "parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenId = "parent___children___id",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentId = "parent___id",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentId = "parent___parent___id",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentParentId = "parent___parent___parent___id",
  ResizeAspectRatio = "resize___aspectRatio",
  ResizeHeight = "resize___height",
  ResizeOriginalName = "resize___originalName",
  ResizeSrc = "resize___src",
  ResizeTracedSvg = "resize___tracedSVG",
  ResizeWidth = "resize___width",
}

export type ImageSharpFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  fixed?: InputMaybe<ImageSharpFixedFilterInput>;
  fluid?: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  original?: InputMaybe<ImageSharpOriginalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  resize?: InputMaybe<ImageSharpResizeFilterInput>;
};

export type ImageSharpFilterListInput = {
  elemMatch?: InputMaybe<ImageSharpFilterInput>;
};

export type ImageSharpFixed = {
  __typename?: "ImageSharpFixed";
  aspectRatio?: Maybe<Scalars["Float"]>;
  base64?: Maybe<Scalars["String"]>;
  height: Scalars["Float"];
  originalName?: Maybe<Scalars["String"]>;
  src: Scalars["String"];
  srcSet: Scalars["String"];
  srcSetWebp?: Maybe<Scalars["String"]>;
  srcWebp?: Maybe<Scalars["String"]>;
  tracedSVG?: Maybe<Scalars["String"]>;
  width: Scalars["Float"];
};

export type ImageSharpFixedFilterInput = {
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  base64?: InputMaybe<StringQueryOperatorInput>;
  height?: InputMaybe<FloatQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp?: InputMaybe<StringQueryOperatorInput>;
  srcWebp?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<FloatQueryOperatorInput>;
};

export type ImageSharpFluid = {
  __typename?: "ImageSharpFluid";
  aspectRatio: Scalars["Float"];
  base64?: Maybe<Scalars["String"]>;
  originalImg?: Maybe<Scalars["String"]>;
  originalName?: Maybe<Scalars["String"]>;
  presentationHeight: Scalars["Int"];
  presentationWidth: Scalars["Int"];
  sizes: Scalars["String"];
  src: Scalars["String"];
  srcSet: Scalars["String"];
  srcSetWebp?: Maybe<Scalars["String"]>;
  srcWebp?: Maybe<Scalars["String"]>;
  tracedSVG?: Maybe<Scalars["String"]>;
};

export type ImageSharpFluidFilterInput = {
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  base64?: InputMaybe<StringQueryOperatorInput>;
  originalImg?: InputMaybe<StringQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
  presentationHeight?: InputMaybe<IntQueryOperatorInput>;
  presentationWidth?: InputMaybe<IntQueryOperatorInput>;
  sizes?: InputMaybe<StringQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp?: InputMaybe<StringQueryOperatorInput>;
  srcWebp?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
};

export type ImageSharpGroupConnection = {
  __typename?: "ImageSharpGroupConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<ImageSharpEdge>;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
  group: Array<ImageSharpGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type ImageSharpGroupConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpGroupConnectionGroupArgs = {
  field: ImageSharpFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type ImageSharpGroupConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpGroupConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpGroupConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpOriginal = {
  __typename?: "ImageSharpOriginal";
  height?: Maybe<Scalars["Float"]>;
  src?: Maybe<Scalars["String"]>;
  width?: Maybe<Scalars["Float"]>;
};

export type ImageSharpOriginalFilterInput = {
  height?: InputMaybe<FloatQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<FloatQueryOperatorInput>;
};

export type ImageSharpResize = {
  __typename?: "ImageSharpResize";
  aspectRatio?: Maybe<Scalars["Float"]>;
  height?: Maybe<Scalars["Int"]>;
  originalName?: Maybe<Scalars["String"]>;
  src?: Maybe<Scalars["String"]>;
  tracedSVG?: Maybe<Scalars["String"]>;
  width?: Maybe<Scalars["Int"]>;
};

export type ImageSharpResizeFilterInput = {
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
};

export type ImageSharpSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ImageSharpFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type IntQueryOperatorInput = {
  eq?: InputMaybe<Scalars["Int"]>;
  gt?: InputMaybe<Scalars["Int"]>;
  gte?: InputMaybe<Scalars["Int"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  lt?: InputMaybe<Scalars["Int"]>;
  lte?: InputMaybe<Scalars["Int"]>;
  ne?: InputMaybe<Scalars["Int"]>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
};

export type Internal = {
  __typename?: "Internal";
  content?: Maybe<Scalars["String"]>;
  contentDigest: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  fieldOwners?: Maybe<Array<Maybe<Scalars["String"]>>>;
  ignoreType?: Maybe<Scalars["Boolean"]>;
  mediaType?: Maybe<Scalars["String"]>;
  owner: Scalars["String"];
  type: Scalars["String"];
};

export type InternalFilterInput = {
  content?: InputMaybe<StringQueryOperatorInput>;
  contentDigest?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  fieldOwners?: InputMaybe<StringQueryOperatorInput>;
  ignoreType?: InputMaybe<BooleanQueryOperatorInput>;
  mediaType?: InputMaybe<StringQueryOperatorInput>;
  owner?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type JpgOptions = {
  progressive?: InputMaybe<Scalars["Boolean"]>;
  quality?: InputMaybe<Scalars["Int"]>;
};

export type JsonQueryOperatorInput = {
  eq?: InputMaybe<Scalars["JSON"]>;
  glob?: InputMaybe<Scalars["JSON"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["JSON"]>>>;
  ne?: InputMaybe<Scalars["JSON"]>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["JSON"]>>>;
  regex?: InputMaybe<Scalars["JSON"]>;
};

/** Node Interface */
export type Node = {
  children: Array<Node>;
  id: Scalars["ID"];
  internal: Internal;
  parent?: Maybe<Node>;
};

export type NodeFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: InputMaybe<NodeFilterInput>;
};

export type PngOptions = {
  compressionSpeed?: InputMaybe<Scalars["Int"]>;
  quality?: InputMaybe<Scalars["Int"]>;
};

export type PageInfo = {
  __typename?: "PageInfo";
  currentPage: Scalars["Int"];
  hasNextPage: Scalars["Boolean"];
  hasPreviousPage: Scalars["Boolean"];
  itemCount: Scalars["Int"];
  pageCount: Scalars["Int"];
  perPage?: Maybe<Scalars["Int"]>;
  totalCount: Scalars["Int"];
};

export type Potrace = {
  alphaMax?: InputMaybe<Scalars["Float"]>;
  background?: InputMaybe<Scalars["String"]>;
  blackOnWhite?: InputMaybe<Scalars["Boolean"]>;
  color?: InputMaybe<Scalars["String"]>;
  optCurve?: InputMaybe<Scalars["Boolean"]>;
  optTolerance?: InputMaybe<Scalars["Float"]>;
  threshold?: InputMaybe<Scalars["Int"]>;
  turdSize?: InputMaybe<Scalars["Float"]>;
  turnPolicy?: InputMaybe<PotraceTurnPolicy>;
};

export enum PotraceTurnPolicy {
  TurnpolicyBlack = "TURNPOLICY_BLACK",
  TurnpolicyLeft = "TURNPOLICY_LEFT",
  TurnpolicyMajority = "TURNPOLICY_MAJORITY",
  TurnpolicyMinority = "TURNPOLICY_MINORITY",
  TurnpolicyRight = "TURNPOLICY_RIGHT",
  TurnpolicyWhite = "TURNPOLICY_WHITE",
}

export type Query = {
  __typename?: "Query";
  allContentfulAsset: ContentfulAssetConnection;
  allContentfulAuthor: ContentfulAuthorConnection;
  allContentfulBlogPost: ContentfulBlogPostConnection;
  allContentfulContentType: ContentfulContentTypeConnection;
  allContentfulEntry: ContentfulEntryConnection;
  allContentfulImageWithFocalPoint: ContentfulImageWithFocalPointConnection;
  allContentfulImageWithFocalPointFocalPointJsonNode: ContentfulImageWithFocalPointFocalPointJsonNodeConnection;
  allContentfulPostImage: ContentfulPostImageConnection;
  allDirectory: DirectoryConnection;
  allFile: FileConnection;
  allImageSharp: ImageSharpConnection;
  allSite: SiteConnection;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  allSiteFunction: SiteFunctionConnection;
  allSitePage: SitePageConnection;
  allSitePlugin: SitePluginConnection;
  allStaticImage: StaticImageConnection;
  contentfulAsset?: Maybe<ContentfulAsset>;
  contentfulAuthor?: Maybe<ContentfulAuthor>;
  contentfulBlogPost?: Maybe<ContentfulBlogPost>;
  contentfulContentType?: Maybe<ContentfulContentType>;
  contentfulEntry?: Maybe<ContentfulEntry>;
  contentfulImageWithFocalPoint?: Maybe<ContentfulImageWithFocalPoint>;
  contentfulImageWithFocalPointFocalPointJsonNode?: Maybe<ContentfulImageWithFocalPointFocalPointJsonNode>;
  contentfulPostImage?: Maybe<ContentfulPostImage>;
  directory?: Maybe<Directory>;
  file?: Maybe<File>;
  imageSharp?: Maybe<ImageSharp>;
  site?: Maybe<Site>;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  siteFunction?: Maybe<SiteFunction>;
  sitePage?: Maybe<SitePage>;
  sitePlugin?: Maybe<SitePlugin>;
  staticImage?: Maybe<StaticImage>;
};

export type QueryAllContentfulAssetArgs = {
  filter?: InputMaybe<ContentfulAssetFilterInput>;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<ContentfulAssetSortInput>;
};

export type QueryAllContentfulAuthorArgs = {
  filter?: InputMaybe<ContentfulAuthorFilterInput>;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<ContentfulAuthorSortInput>;
};

export type QueryAllContentfulBlogPostArgs = {
  filter?: InputMaybe<ContentfulBlogPostFilterInput>;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<ContentfulBlogPostSortInput>;
};

export type QueryAllContentfulContentTypeArgs = {
  filter?: InputMaybe<ContentfulContentTypeFilterInput>;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<ContentfulContentTypeSortInput>;
};

export type QueryAllContentfulEntryArgs = {
  filter?: InputMaybe<ContentfulEntryFilterInput>;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<ContentfulEntrySortInput>;
};

export type QueryAllContentfulImageWithFocalPointArgs = {
  filter?: InputMaybe<ContentfulImageWithFocalPointFilterInput>;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<ContentfulImageWithFocalPointSortInput>;
};

export type QueryAllContentfulImageWithFocalPointFocalPointJsonNodeArgs = {
  filter?: InputMaybe<ContentfulImageWithFocalPointFocalPointJsonNodeFilterInput>;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<ContentfulImageWithFocalPointFocalPointJsonNodeSortInput>;
};

export type QueryAllContentfulPostImageArgs = {
  filter?: InputMaybe<ContentfulPostImageFilterInput>;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<ContentfulPostImageSortInput>;
};

export type QueryAllDirectoryArgs = {
  filter?: InputMaybe<DirectoryFilterInput>;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<DirectorySortInput>;
};

export type QueryAllFileArgs = {
  filter?: InputMaybe<FileFilterInput>;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<FileSortInput>;
};

export type QueryAllImageSharpArgs = {
  filter?: InputMaybe<ImageSharpFilterInput>;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<ImageSharpSortInput>;
};

export type QueryAllSiteArgs = {
  filter?: InputMaybe<SiteFilterInput>;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<SiteSortInput>;
};

export type QueryAllSiteBuildMetadataArgs = {
  filter?: InputMaybe<SiteBuildMetadataFilterInput>;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<SiteBuildMetadataSortInput>;
};

export type QueryAllSiteFunctionArgs = {
  filter?: InputMaybe<SiteFunctionFilterInput>;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<SiteFunctionSortInput>;
};

export type QueryAllSitePageArgs = {
  filter?: InputMaybe<SitePageFilterInput>;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<SitePageSortInput>;
};

export type QueryAllSitePluginArgs = {
  filter?: InputMaybe<SitePluginFilterInput>;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<SitePluginSortInput>;
};

export type QueryAllStaticImageArgs = {
  filter?: InputMaybe<StaticImageFilterInput>;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<StaticImageSortInput>;
};

export type QueryContentfulAssetArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  file?: InputMaybe<ContentfulAssetFileFilterInput>;
  gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulAssetSysFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
};

export type QueryContentfulAuthorArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  fullName?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  photo?: InputMaybe<ContentfulAssetFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulAuthorSysFilterInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
};

export type QueryContentfulBlogPostArgs = {
  body?: InputMaybe<ContentfulBlogPostBodyFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  coverImage?: InputMaybe<ContentfulImageWithFocalPointFilterInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  dateCreated?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulBlogPostSysFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
};

export type QueryContentfulContentTypeArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  displayField?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  sys?: InputMaybe<ContentfulContentTypeSysFilterInput>;
};

export type QueryContentfulEntryArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
};

export type QueryContentfulImageWithFocalPointArgs = {
  blog_post?: InputMaybe<ContentfulBlogPostFilterListInput>;
  childContentfulImageWithFocalPointFocalPointJsonNode?: InputMaybe<ContentfulImageWithFocalPointFocalPointJsonNodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  childrenContentfulImageWithFocalPointFocalPointJsonNode?: InputMaybe<ContentfulImageWithFocalPointFocalPointJsonNodeFilterListInput>;
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  focalPoint?: InputMaybe<ContentfulImageWithFocalPointFocalPointJsonNodeFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  image?: InputMaybe<ContentfulAssetFilterInput>;
  internal?: InputMaybe<InternalFilterInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulImageWithFocalPointSysFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
};

export type QueryContentfulImageWithFocalPointFocalPointJsonNodeArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  focalPoint?: InputMaybe<ContentfulImageWithFocalPointFocalPointJsonNodeFocalPointFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  sys?: InputMaybe<ContentfulImageWithFocalPointFocalPointJsonNodeSysFilterInput>;
};

export type QueryContentfulPostImageArgs = {
  align?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  image?: InputMaybe<ContentfulAssetFilterInput>;
  internal?: InputMaybe<InternalFilterInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulPostImageSysFilterInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
};

export type QueryDirectoryArgs = {
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
};

export type QueryFileArgs = {
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  childImageSharp?: InputMaybe<ImageSharpFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  childrenImageSharp?: InputMaybe<ImageSharpFilterListInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
};

export type QueryImageSharpArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  fixed?: InputMaybe<ImageSharpFixedFilterInput>;
  fluid?: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  original?: InputMaybe<ImageSharpOriginalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  resize?: InputMaybe<ImageSharpResizeFilterInput>;
};

export type QuerySiteArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  host?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  port?: InputMaybe<IntQueryOperatorInput>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
};

export type QuerySiteBuildMetadataArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
};

export type QuerySiteFunctionArgs = {
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  functionRoute?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pluginName?: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
};

export type QuerySitePageArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  component?: InputMaybe<StringQueryOperatorInput>;
  componentChunkName?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  internalComponentName?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  pageContext?: InputMaybe<JsonQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  path?: InputMaybe<StringQueryOperatorInput>;
  pluginCreator?: InputMaybe<SitePluginFilterInput>;
};

export type QuerySitePluginArgs = {
  browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  packageJson?: InputMaybe<JsonQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  pluginOptions?: InputMaybe<JsonQueryOperatorInput>;
  resolve?: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
};

export type QueryStaticImageArgs = {
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  blksize?: InputMaybe<IntQueryOperatorInput>;
  blocks?: InputMaybe<IntQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
};

export type Site = Node & {
  __typename?: "Site";
  buildTime?: Maybe<Scalars["Date"]>;
  children: Array<Node>;
  host?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  internal: Internal;
  parent?: Maybe<Node>;
  port?: Maybe<Scalars["Int"]>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
};

export type SiteBuildTimeArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type SiteBuildMetadata = Node & {
  __typename?: "SiteBuildMetadata";
  buildTime?: Maybe<Scalars["Date"]>;
  children: Array<Node>;
  id: Scalars["ID"];
  internal: Internal;
  parent?: Maybe<Node>;
};

export type SiteBuildMetadataBuildTimeArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type SiteBuildMetadataConnection = {
  __typename?: "SiteBuildMetadataConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<SiteBuildMetadataEdge>;
  group: Array<SiteBuildMetadataGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataConnectionGroupArgs = {
  field: SiteBuildMetadataFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type SiteBuildMetadataConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  __typename?: "SiteBuildMetadataEdge";
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export enum SiteBuildMetadataFieldsEnum {
  BuildTime = "buildTime",
  Children = "children",
  ChildrenChildren = "children___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenId = "children___id",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentParentId = "children___parent___parent___id",
  Id = "id",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  ParentChildren = "parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenId = "parent___children___id",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentId = "parent___id",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentId = "parent___parent___id",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentParentId = "parent___parent___parent___id",
}

export type SiteBuildMetadataFilterInput = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
};

export type SiteBuildMetadataGroupConnection = {
  __typename?: "SiteBuildMetadataGroupConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<SiteBuildMetadataEdge>;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
  group: Array<SiteBuildMetadataGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type SiteBuildMetadataGroupConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataGroupConnectionGroupArgs = {
  field: SiteBuildMetadataFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type SiteBuildMetadataGroupConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataGroupConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataGroupConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteBuildMetadataFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  __typename?: "SiteConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<SiteEdge>;
  group: Array<SiteGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};

export type SiteConnectionGroupArgs = {
  field: SiteFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type SiteConnectionMaxArgs = {
  field: SiteFieldsEnum;
};

export type SiteConnectionMinArgs = {
  field: SiteFieldsEnum;
};

export type SiteConnectionSumArgs = {
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  __typename?: "SiteEdge";
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export enum SiteFieldsEnum {
  BuildTime = "buildTime",
  Children = "children",
  ChildrenChildren = "children___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenId = "children___id",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentParentId = "children___parent___parent___id",
  Host = "host",
  Id = "id",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  ParentChildren = "parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenId = "parent___children___id",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentId = "parent___id",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentId = "parent___parent___id",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentParentId = "parent___parent___parent___id",
  Port = "port",
  SiteMetadataDescription = "siteMetadata___description",
  SiteMetadataSiteUrl = "siteMetadata___siteUrl",
  SiteMetadataTitle = "siteMetadata___title",
}

export type SiteFilterInput = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  host?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  port?: InputMaybe<IntQueryOperatorInput>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
};

export type SiteFunction = Node & {
  __typename?: "SiteFunction";
  absoluteCompiledFilePath: Scalars["String"];
  children: Array<Node>;
  functionRoute: Scalars["String"];
  id: Scalars["ID"];
  internal: Internal;
  matchPath?: Maybe<Scalars["String"]>;
  originalAbsoluteFilePath: Scalars["String"];
  originalRelativeFilePath: Scalars["String"];
  parent?: Maybe<Node>;
  pluginName: Scalars["String"];
  relativeCompiledFilePath: Scalars["String"];
};

export type SiteFunctionConnection = {
  __typename?: "SiteFunctionConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<SiteFunctionEdge>;
  group: Array<SiteFunctionGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type SiteFunctionConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionConnectionGroupArgs = {
  field: SiteFunctionFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type SiteFunctionConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionEdge = {
  __typename?: "SiteFunctionEdge";
  next?: Maybe<SiteFunction>;
  node: SiteFunction;
  previous?: Maybe<SiteFunction>;
};

export enum SiteFunctionFieldsEnum {
  AbsoluteCompiledFilePath = "absoluteCompiledFilePath",
  Children = "children",
  ChildrenChildren = "children___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenId = "children___id",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentParentId = "children___parent___parent___id",
  FunctionRoute = "functionRoute",
  Id = "id",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  MatchPath = "matchPath",
  OriginalAbsoluteFilePath = "originalAbsoluteFilePath",
  OriginalRelativeFilePath = "originalRelativeFilePath",
  ParentChildren = "parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenId = "parent___children___id",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentId = "parent___id",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentId = "parent___parent___id",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentParentId = "parent___parent___parent___id",
  PluginName = "pluginName",
  RelativeCompiledFilePath = "relativeCompiledFilePath",
}

export type SiteFunctionFilterInput = {
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  functionRoute?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pluginName?: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
};

export type SiteFunctionGroupConnection = {
  __typename?: "SiteFunctionGroupConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<SiteFunctionEdge>;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
  group: Array<SiteFunctionGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type SiteFunctionGroupConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionGroupConnectionGroupArgs = {
  field: SiteFunctionFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type SiteFunctionGroupConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionGroupConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionGroupConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteFunctionFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteGroupConnection = {
  __typename?: "SiteGroupConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<SiteEdge>;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
  group: Array<SiteGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type SiteGroupConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};

export type SiteGroupConnectionGroupArgs = {
  field: SiteFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type SiteGroupConnectionMaxArgs = {
  field: SiteFieldsEnum;
};

export type SiteGroupConnectionMinArgs = {
  field: SiteFieldsEnum;
};

export type SiteGroupConnectionSumArgs = {
  field: SiteFieldsEnum;
};

export type SitePage = Node & {
  __typename?: "SitePage";
  children: Array<Node>;
  component: Scalars["String"];
  componentChunkName: Scalars["String"];
  id: Scalars["ID"];
  internal: Internal;
  internalComponentName: Scalars["String"];
  matchPath?: Maybe<Scalars["String"]>;
  pageContext?: Maybe<Scalars["JSON"]>;
  parent?: Maybe<Node>;
  path: Scalars["String"];
  pluginCreator?: Maybe<SitePlugin>;
};

export type SitePageConnection = {
  __typename?: "SitePageConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<SitePageEdge>;
  group: Array<SitePageGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageConnectionGroupArgs = {
  field: SitePageFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type SitePageConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageConnectionMinArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageConnectionSumArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageEdge = {
  __typename?: "SitePageEdge";
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export enum SitePageFieldsEnum {
  Children = "children",
  ChildrenChildren = "children___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenId = "children___id",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentParentId = "children___parent___parent___id",
  Component = "component",
  ComponentChunkName = "componentChunkName",
  Id = "id",
  InternalComponentName = "internalComponentName",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  MatchPath = "matchPath",
  PageContext = "pageContext",
  ParentChildren = "parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenId = "parent___children___id",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentId = "parent___id",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentId = "parent___parent___id",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentParentId = "parent___parent___parent___id",
  Path = "path",
  PluginCreatorBrowserApIs = "pluginCreator___browserAPIs",
  PluginCreatorChildren = "pluginCreator___children",
  PluginCreatorChildrenChildren = "pluginCreator___children___children",
  PluginCreatorChildrenChildrenChildren = "pluginCreator___children___children___children",
  PluginCreatorChildrenChildrenId = "pluginCreator___children___children___id",
  PluginCreatorChildrenId = "pluginCreator___children___id",
  PluginCreatorChildrenInternalContent = "pluginCreator___children___internal___content",
  PluginCreatorChildrenInternalContentDigest = "pluginCreator___children___internal___contentDigest",
  PluginCreatorChildrenInternalDescription = "pluginCreator___children___internal___description",
  PluginCreatorChildrenInternalFieldOwners = "pluginCreator___children___internal___fieldOwners",
  PluginCreatorChildrenInternalIgnoreType = "pluginCreator___children___internal___ignoreType",
  PluginCreatorChildrenInternalMediaType = "pluginCreator___children___internal___mediaType",
  PluginCreatorChildrenInternalOwner = "pluginCreator___children___internal___owner",
  PluginCreatorChildrenInternalType = "pluginCreator___children___internal___type",
  PluginCreatorChildrenParentChildren = "pluginCreator___children___parent___children",
  PluginCreatorChildrenParentId = "pluginCreator___children___parent___id",
  PluginCreatorId = "pluginCreator___id",
  PluginCreatorInternalContent = "pluginCreator___internal___content",
  PluginCreatorInternalContentDigest = "pluginCreator___internal___contentDigest",
  PluginCreatorInternalDescription = "pluginCreator___internal___description",
  PluginCreatorInternalFieldOwners = "pluginCreator___internal___fieldOwners",
  PluginCreatorInternalIgnoreType = "pluginCreator___internal___ignoreType",
  PluginCreatorInternalMediaType = "pluginCreator___internal___mediaType",
  PluginCreatorInternalOwner = "pluginCreator___internal___owner",
  PluginCreatorInternalType = "pluginCreator___internal___type",
  PluginCreatorName = "pluginCreator___name",
  PluginCreatorNodeApIs = "pluginCreator___nodeAPIs",
  PluginCreatorPackageJson = "pluginCreator___packageJson",
  PluginCreatorParentChildren = "pluginCreator___parent___children",
  PluginCreatorParentChildrenChildren = "pluginCreator___parent___children___children",
  PluginCreatorParentChildrenId = "pluginCreator___parent___children___id",
  PluginCreatorParentId = "pluginCreator___parent___id",
  PluginCreatorParentInternalContent = "pluginCreator___parent___internal___content",
  PluginCreatorParentInternalContentDigest = "pluginCreator___parent___internal___contentDigest",
  PluginCreatorParentInternalDescription = "pluginCreator___parent___internal___description",
  PluginCreatorParentInternalFieldOwners = "pluginCreator___parent___internal___fieldOwners",
  PluginCreatorParentInternalIgnoreType = "pluginCreator___parent___internal___ignoreType",
  PluginCreatorParentInternalMediaType = "pluginCreator___parent___internal___mediaType",
  PluginCreatorParentInternalOwner = "pluginCreator___parent___internal___owner",
  PluginCreatorParentInternalType = "pluginCreator___parent___internal___type",
  PluginCreatorParentParentChildren = "pluginCreator___parent___parent___children",
  PluginCreatorParentParentId = "pluginCreator___parent___parent___id",
  PluginCreatorPluginFilepath = "pluginCreator___pluginFilepath",
  PluginCreatorPluginOptions = "pluginCreator___pluginOptions",
  PluginCreatorResolve = "pluginCreator___resolve",
  PluginCreatorSsrApIs = "pluginCreator___ssrAPIs",
  PluginCreatorVersion = "pluginCreator___version",
}

export type SitePageFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  component?: InputMaybe<StringQueryOperatorInput>;
  componentChunkName?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  internalComponentName?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  pageContext?: InputMaybe<JsonQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  path?: InputMaybe<StringQueryOperatorInput>;
  pluginCreator?: InputMaybe<SitePluginFilterInput>;
};

export type SitePageGroupConnection = {
  __typename?: "SitePageGroupConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<SitePageEdge>;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
  group: Array<SitePageGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type SitePageGroupConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageGroupConnectionGroupArgs = {
  field: SitePageFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type SitePageGroupConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageGroupConnectionMinArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageGroupConnectionSumArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SitePageFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  __typename?: "SitePlugin";
  browserAPIs?: Maybe<Array<Maybe<Scalars["String"]>>>;
  children: Array<Node>;
  id: Scalars["ID"];
  internal: Internal;
  name?: Maybe<Scalars["String"]>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars["String"]>>>;
  packageJson?: Maybe<Scalars["JSON"]>;
  parent?: Maybe<Node>;
  pluginFilepath?: Maybe<Scalars["String"]>;
  pluginOptions?: Maybe<Scalars["JSON"]>;
  resolve?: Maybe<Scalars["String"]>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars["String"]>>>;
  version?: Maybe<Scalars["String"]>;
};

export type SitePluginConnection = {
  __typename?: "SitePluginConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<SitePluginEdge>;
  group: Array<SitePluginGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginConnectionGroupArgs = {
  field: SitePluginFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type SitePluginConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  __typename?: "SitePluginEdge";
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export enum SitePluginFieldsEnum {
  BrowserApIs = "browserAPIs",
  Children = "children",
  ChildrenChildren = "children___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenId = "children___id",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentParentId = "children___parent___parent___id",
  Id = "id",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  Name = "name",
  NodeApIs = "nodeAPIs",
  PackageJson = "packageJson",
  ParentChildren = "parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenId = "parent___children___id",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentId = "parent___id",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentId = "parent___parent___id",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentParentId = "parent___parent___parent___id",
  PluginFilepath = "pluginFilepath",
  PluginOptions = "pluginOptions",
  Resolve = "resolve",
  SsrApIs = "ssrAPIs",
  Version = "version",
}

export type SitePluginFilterInput = {
  browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  packageJson?: InputMaybe<JsonQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  pluginOptions?: InputMaybe<JsonQueryOperatorInput>;
  resolve?: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
};

export type SitePluginGroupConnection = {
  __typename?: "SitePluginGroupConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<SitePluginEdge>;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
  group: Array<SitePluginGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type SitePluginGroupConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginGroupConnectionGroupArgs = {
  field: SitePluginFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type SitePluginGroupConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginGroupConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginGroupConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SitePluginFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  __typename?: "SiteSiteMetadata";
  description?: Maybe<Scalars["String"]>;
  siteUrl?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
};

export type SiteSiteMetadataFilterInput = {
  description?: InputMaybe<StringQueryOperatorInput>;
  siteUrl?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export enum SortOrderEnum {
  Asc = "ASC",
  Desc = "DESC",
}

export type StaticImage = Node & {
  __typename?: "StaticImage";
  absolutePath?: Maybe<Scalars["String"]>;
  accessTime?: Maybe<Scalars["Date"]>;
  atime?: Maybe<Scalars["Date"]>;
  atimeMs?: Maybe<Scalars["Float"]>;
  base?: Maybe<Scalars["String"]>;
  birthTime?: Maybe<Scalars["Date"]>;
  birthtime?: Maybe<Scalars["Date"]>;
  birthtimeMs?: Maybe<Scalars["Float"]>;
  blksize?: Maybe<Scalars["Int"]>;
  blocks?: Maybe<Scalars["Int"]>;
  changeTime?: Maybe<Scalars["Date"]>;
  children: Array<Node>;
  ctime?: Maybe<Scalars["Date"]>;
  ctimeMs?: Maybe<Scalars["Float"]>;
  dev?: Maybe<Scalars["Int"]>;
  dir?: Maybe<Scalars["String"]>;
  ext?: Maybe<Scalars["String"]>;
  extension?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  ino?: Maybe<Scalars["Float"]>;
  internal: Internal;
  mode?: Maybe<Scalars["Int"]>;
  modifiedTime?: Maybe<Scalars["Date"]>;
  mtime?: Maybe<Scalars["Date"]>;
  mtimeMs?: Maybe<Scalars["Float"]>;
  name?: Maybe<Scalars["String"]>;
  nlink?: Maybe<Scalars["Int"]>;
  parent?: Maybe<Node>;
  prettySize?: Maybe<Scalars["String"]>;
  rdev?: Maybe<Scalars["Int"]>;
  relativeDirectory?: Maybe<Scalars["String"]>;
  relativePath?: Maybe<Scalars["String"]>;
  root?: Maybe<Scalars["String"]>;
  size?: Maybe<Scalars["Int"]>;
  sourceInstanceName?: Maybe<Scalars["String"]>;
  uid?: Maybe<Scalars["Int"]>;
};

export type StaticImageAccessTimeArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type StaticImageAtimeArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type StaticImageBirthTimeArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type StaticImageBirthtimeArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type StaticImageChangeTimeArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type StaticImageCtimeArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type StaticImageModifiedTimeArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type StaticImageMtimeArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type StaticImageConnection = {
  __typename?: "StaticImageConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<StaticImageEdge>;
  group: Array<StaticImageGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<StaticImage>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type StaticImageConnectionDistinctArgs = {
  field: StaticImageFieldsEnum;
};

export type StaticImageConnectionGroupArgs = {
  field: StaticImageFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type StaticImageConnectionMaxArgs = {
  field: StaticImageFieldsEnum;
};

export type StaticImageConnectionMinArgs = {
  field: StaticImageFieldsEnum;
};

export type StaticImageConnectionSumArgs = {
  field: StaticImageFieldsEnum;
};

export type StaticImageEdge = {
  __typename?: "StaticImageEdge";
  next?: Maybe<StaticImage>;
  node: StaticImage;
  previous?: Maybe<StaticImage>;
};

export enum StaticImageFieldsEnum {
  AbsolutePath = "absolutePath",
  AccessTime = "accessTime",
  Atime = "atime",
  AtimeMs = "atimeMs",
  Base = "base",
  BirthTime = "birthTime",
  Birthtime = "birthtime",
  BirthtimeMs = "birthtimeMs",
  Blksize = "blksize",
  Blocks = "blocks",
  ChangeTime = "changeTime",
  Children = "children",
  ChildrenChildren = "children___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenId = "children___id",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentParentId = "children___parent___parent___id",
  Ctime = "ctime",
  CtimeMs = "ctimeMs",
  Dev = "dev",
  Dir = "dir",
  Ext = "ext",
  Extension = "extension",
  Id = "id",
  Ino = "ino",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  Mode = "mode",
  ModifiedTime = "modifiedTime",
  Mtime = "mtime",
  MtimeMs = "mtimeMs",
  Name = "name",
  Nlink = "nlink",
  ParentChildren = "parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenId = "parent___children___id",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentId = "parent___id",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentId = "parent___parent___id",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentParentId = "parent___parent___parent___id",
  PrettySize = "prettySize",
  Rdev = "rdev",
  RelativeDirectory = "relativeDirectory",
  RelativePath = "relativePath",
  Root = "root",
  Size = "size",
  SourceInstanceName = "sourceInstanceName",
  Uid = "uid",
}

export type StaticImageFilterInput = {
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  blksize?: InputMaybe<IntQueryOperatorInput>;
  blocks?: InputMaybe<IntQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
};

export type StaticImageGroupConnection = {
  __typename?: "StaticImageGroupConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<StaticImageEdge>;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
  group: Array<StaticImageGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<StaticImage>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type StaticImageGroupConnectionDistinctArgs = {
  field: StaticImageFieldsEnum;
};

export type StaticImageGroupConnectionGroupArgs = {
  field: StaticImageFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type StaticImageGroupConnectionMaxArgs = {
  field: StaticImageFieldsEnum;
};

export type StaticImageGroupConnectionMinArgs = {
  field: StaticImageFieldsEnum;
};

export type StaticImageGroupConnectionSumArgs = {
  field: StaticImageFieldsEnum;
};

export type StaticImageSortInput = {
  fields?: InputMaybe<Array<InputMaybe<StaticImageFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type StringQueryOperatorInput = {
  eq?: InputMaybe<Scalars["String"]>;
  glob?: InputMaybe<Scalars["String"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  ne?: InputMaybe<Scalars["String"]>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  regex?: InputMaybe<Scalars["String"]>;
};

export type TransformOptions = {
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone?: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars["Boolean"]>;
  rotate?: InputMaybe<Scalars["Int"]>;
  trim?: InputMaybe<Scalars["Float"]>;
};

export type WebPOptions = {
  quality?: InputMaybe<Scalars["Int"]>;
};

export type ContentfulImageWithFocalPointFocalPointJsonNode = Node & {
  __typename?: "contentfulImageWithFocalPointFocalPointJsonNode";
  children: Array<Node>;
  focalPoint?: Maybe<ContentfulImageWithFocalPointFocalPointJsonNodeFocalPoint>;
  id: Scalars["ID"];
  internal: Internal;
  parent?: Maybe<Node>;
  sys?: Maybe<ContentfulImageWithFocalPointFocalPointJsonNodeSys>;
};

export type ContentfulImageWithFocalPointFocalPointJsonNodeConnection = {
  __typename?: "contentfulImageWithFocalPointFocalPointJsonNodeConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<ContentfulImageWithFocalPointFocalPointJsonNodeEdge>;
  group: Array<ContentfulImageWithFocalPointFocalPointJsonNodeGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<ContentfulImageWithFocalPointFocalPointJsonNode>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type ContentfulImageWithFocalPointFocalPointJsonNodeConnectionDistinctArgs =
  {
    field: ContentfulImageWithFocalPointFocalPointJsonNodeFieldsEnum;
  };

export type ContentfulImageWithFocalPointFocalPointJsonNodeConnectionGroupArgs =
  {
    field: ContentfulImageWithFocalPointFocalPointJsonNodeFieldsEnum;
    limit?: InputMaybe<Scalars["Int"]>;
    skip?: InputMaybe<Scalars["Int"]>;
  };

export type ContentfulImageWithFocalPointFocalPointJsonNodeConnectionMaxArgs = {
  field: ContentfulImageWithFocalPointFocalPointJsonNodeFieldsEnum;
};

export type ContentfulImageWithFocalPointFocalPointJsonNodeConnectionMinArgs = {
  field: ContentfulImageWithFocalPointFocalPointJsonNodeFieldsEnum;
};

export type ContentfulImageWithFocalPointFocalPointJsonNodeConnectionSumArgs = {
  field: ContentfulImageWithFocalPointFocalPointJsonNodeFieldsEnum;
};

export type ContentfulImageWithFocalPointFocalPointJsonNodeEdge = {
  __typename?: "contentfulImageWithFocalPointFocalPointJsonNodeEdge";
  next?: Maybe<ContentfulImageWithFocalPointFocalPointJsonNode>;
  node: ContentfulImageWithFocalPointFocalPointJsonNode;
  previous?: Maybe<ContentfulImageWithFocalPointFocalPointJsonNode>;
};

export enum ContentfulImageWithFocalPointFocalPointJsonNodeFieldsEnum {
  Children = "children",
  ChildrenChildren = "children___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenId = "children___id",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentParentId = "children___parent___parent___id",
  FocalPointX = "focalPoint___x",
  FocalPointY = "focalPoint___y",
  Id = "id",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  ParentChildren = "parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenId = "parent___children___id",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentId = "parent___id",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentId = "parent___parent___id",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentParentId = "parent___parent___parent___id",
  SysType = "sys___type",
}

export type ContentfulImageWithFocalPointFocalPointJsonNodeFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  focalPoint?: InputMaybe<ContentfulImageWithFocalPointFocalPointJsonNodeFocalPointFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  sys?: InputMaybe<ContentfulImageWithFocalPointFocalPointJsonNodeSysFilterInput>;
};

export type ContentfulImageWithFocalPointFocalPointJsonNodeFilterListInput = {
  elemMatch?: InputMaybe<ContentfulImageWithFocalPointFocalPointJsonNodeFilterInput>;
};

export type ContentfulImageWithFocalPointFocalPointJsonNodeFocalPoint = {
  __typename?: "contentfulImageWithFocalPointFocalPointJsonNodeFocalPoint";
  x?: Maybe<Scalars["Int"]>;
  y?: Maybe<Scalars["Int"]>;
};

export type ContentfulImageWithFocalPointFocalPointJsonNodeFocalPointFilterInput =
  {
    x?: InputMaybe<IntQueryOperatorInput>;
    y?: InputMaybe<IntQueryOperatorInput>;
  };

export type ContentfulImageWithFocalPointFocalPointJsonNodeGroupConnection = {
  __typename?: "contentfulImageWithFocalPointFocalPointJsonNodeGroupConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<ContentfulImageWithFocalPointFocalPointJsonNodeEdge>;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
  group: Array<ContentfulImageWithFocalPointFocalPointJsonNodeGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<ContentfulImageWithFocalPointFocalPointJsonNode>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type ContentfulImageWithFocalPointFocalPointJsonNodeGroupConnectionDistinctArgs =
  {
    field: ContentfulImageWithFocalPointFocalPointJsonNodeFieldsEnum;
  };

export type ContentfulImageWithFocalPointFocalPointJsonNodeGroupConnectionGroupArgs =
  {
    field: ContentfulImageWithFocalPointFocalPointJsonNodeFieldsEnum;
    limit?: InputMaybe<Scalars["Int"]>;
    skip?: InputMaybe<Scalars["Int"]>;
  };

export type ContentfulImageWithFocalPointFocalPointJsonNodeGroupConnectionMaxArgs =
  {
    field: ContentfulImageWithFocalPointFocalPointJsonNodeFieldsEnum;
  };

export type ContentfulImageWithFocalPointFocalPointJsonNodeGroupConnectionMinArgs =
  {
    field: ContentfulImageWithFocalPointFocalPointJsonNodeFieldsEnum;
  };

export type ContentfulImageWithFocalPointFocalPointJsonNodeGroupConnectionSumArgs =
  {
    field: ContentfulImageWithFocalPointFocalPointJsonNodeFieldsEnum;
  };

export type ContentfulImageWithFocalPointFocalPointJsonNodeSortInput = {
  fields?: InputMaybe<
    Array<InputMaybe<ContentfulImageWithFocalPointFocalPointJsonNodeFieldsEnum>>
  >;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulImageWithFocalPointFocalPointJsonNodeSys = {
  __typename?: "contentfulImageWithFocalPointFocalPointJsonNodeSys";
  type?: Maybe<Scalars["String"]>;
};

export type ContentfulImageWithFocalPointFocalPointJsonNodeSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type GatsbyImageSharpFixedFragment = {
  __typename?: "ImageSharpFixed";
  base64?: string | null;
  width: number;
  height: number;
  src: string;
  srcSet: string;
};

export type GatsbyImageSharpFixed_TracedSvgFragment = {
  __typename?: "ImageSharpFixed";
  tracedSVG?: string | null;
  width: number;
  height: number;
  src: string;
  srcSet: string;
};

export type GatsbyImageSharpFixed_WithWebpFragment = {
  __typename?: "ImageSharpFixed";
  base64?: string | null;
  width: number;
  height: number;
  src: string;
  srcSet: string;
  srcWebp?: string | null;
  srcSetWebp?: string | null;
};

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = {
  __typename?: "ImageSharpFixed";
  tracedSVG?: string | null;
  width: number;
  height: number;
  src: string;
  srcSet: string;
  srcWebp?: string | null;
  srcSetWebp?: string | null;
};

export type GatsbyImageSharpFixed_NoBase64Fragment = {
  __typename?: "ImageSharpFixed";
  width: number;
  height: number;
  src: string;
  srcSet: string;
};

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = {
  __typename?: "ImageSharpFixed";
  width: number;
  height: number;
  src: string;
  srcSet: string;
  srcWebp?: string | null;
  srcSetWebp?: string | null;
};

export type GatsbyImageSharpFluidFragment = {
  __typename?: "ImageSharpFluid";
  base64?: string | null;
  aspectRatio: number;
  src: string;
  srcSet: string;
  sizes: string;
};

export type GatsbyImageSharpFluidLimitPresentationSizeFragment = {
  __typename?: "ImageSharpFluid";
  maxHeight: number;
  maxWidth: number;
};

export type GatsbyImageSharpFluid_TracedSvgFragment = {
  __typename?: "ImageSharpFluid";
  tracedSVG?: string | null;
  aspectRatio: number;
  src: string;
  srcSet: string;
  sizes: string;
};

export type GatsbyImageSharpFluid_WithWebpFragment = {
  __typename?: "ImageSharpFluid";
  base64?: string | null;
  aspectRatio: number;
  src: string;
  srcSet: string;
  srcWebp?: string | null;
  srcSetWebp?: string | null;
  sizes: string;
};

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = {
  __typename?: "ImageSharpFluid";
  tracedSVG?: string | null;
  aspectRatio: number;
  src: string;
  srcSet: string;
  srcWebp?: string | null;
  srcSetWebp?: string | null;
  sizes: string;
};

export type GatsbyImageSharpFluid_NoBase64Fragment = {
  __typename?: "ImageSharpFluid";
  aspectRatio: number;
  src: string;
  srcSet: string;
  sizes: string;
};

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = {
  __typename?: "ImageSharpFluid";
  aspectRatio: number;
  src: string;
  srcSet: string;
  srcWebp?: string | null;
  srcSetWebp?: string | null;
  sizes: string;
};

export type PagesQueryQueryVariables = Exact<{ [key: string]: never }>;

export type PagesQueryQuery = {
  __typename?: "Query";
  allSiteFunction: {
    __typename?: "SiteFunctionConnection";
    nodes: Array<{ __typename?: "SiteFunction"; functionRoute: string }>;
  };
  allSitePage: {
    __typename?: "SitePageConnection";
    nodes: Array<{ __typename?: "SitePage"; path: string }>;
  };
};

export type BlogPostCoverImageFragment = {
  __typename?: "ContentfulImageWithFocalPoint";
  id: string;
  title?: string | null;
  image?: {
    __typename?: "ContentfulAsset";
    gatsbyImageData?: any | null;
  } | null;
  focalPoint?: {
    __typename?: "contentfulImageWithFocalPointFocalPointJsonNode";
    focalPoint?: {
      __typename?: "contentfulImageWithFocalPointFocalPointJsonNodeFocalPoint";
      x?: number | null;
      y?: number | null;
    } | null;
  } | null;
};

export type PostImageFragment = {
  __typename?: "ContentfulPostImage";
  align?: string | null;
  image?: {
    __typename?: "ContentfulAsset";
    gatsbyImageData?: any | null;
    description?: string | null;
  } | null;
};

export type GetAllPostsQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllPostsQuery = {
  __typename?: "Query";
  allContentfulBlogPost: {
    __typename?: "ContentfulBlogPostConnection";
    nodes: Array<{
      __typename?: "ContentfulBlogPost";
      slug?: string | null;
      id: string;
      title?: string | null;
    }>;
  };
};

export type IndexPageQueryVariables = Exact<{ [key: string]: never }>;

export type IndexPageQuery = {
  __typename?: "Query";
  site?: {
    __typename?: "Site";
    siteMetadata?: {
      __typename?: "SiteSiteMetadata";
      title?: string | null;
    } | null;
  } | null;
};

export type BlogPostQueryVariables = Exact<{
  id?: InputMaybe<Scalars["String"]>;
}>;

export type BlogPostQuery = {
  __typename?: "Query";
  contentfulBlogPost?: {
    __typename?: "ContentfulBlogPost";
    title?: string | null;
    dateCreated?: any | null;
    slug?: string | null;
    coverImage?: {
      __typename?: "ContentfulImageWithFocalPoint";
      id: string;
      title?: string | null;
      image?: {
        __typename?: "ContentfulAsset";
        gatsbyImageData?: any | null;
        imageDataForHeader?: any | null;
      } | null;
      focalPoint?: {
        __typename?: "contentfulImageWithFocalPointFocalPointJsonNode";
        focalPoint?: {
          __typename?: "contentfulImageWithFocalPointFocalPointJsonNodeFocalPoint";
          x?: number | null;
          y?: number | null;
        } | null;
      } | null;
    } | null;
    body?: {
      __typename?: "ContentfulBlogPostBody";
      raw?: string | null;
      references?: Array<{
        __typename: "ContentfulPostImage";
        contentful_id: string;
        align?: string | null;
        image?: {
          __typename?: "ContentfulAsset";
          gatsbyImageData?: any | null;
          description?: string | null;
        } | null;
      } | null> | null;
    } | null;
  } | null;
};
