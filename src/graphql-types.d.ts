/* tslint:disable */
export type Maybe<T> = T | null;

export interface SitePluginConnectionSort {
  fields: (Maybe<SitePluginConnectionSortByFieldsEnum>)[];

  order?: (Maybe<SitePluginConnectionSortOrderValues>)[];
}
/** Filter connection on its fields */
export interface FilterSitePlugin {
  resolve?: Maybe<SitePluginConnectionResolveQueryString_2>;

  id?: Maybe<SitePluginConnectionIdQueryString_2>;

  name?: Maybe<SitePluginConnectionNameQueryString_2>;

  version?: Maybe<SitePluginConnectionVersionQueryString_2>;

  pluginOptions?: Maybe<SitePluginConnectionPluginOptionsInputObject_2>;

  nodeAPIs?: Maybe<SitePluginConnectionNodeApIsQueryList_2>;

  browserAPIs?: Maybe<SitePluginConnectionBrowserApIsQueryList_2>;

  ssrAPIs?: Maybe<SitePluginConnectionSsrApIsQueryList_2>;

  pluginFilepath?: Maybe<SitePluginConnectionPluginFilepathQueryString_2>;

  packageJson?: Maybe<SitePluginConnectionPackageJsonInputObject_2>;

  internal?: Maybe<SitePluginConnectionInternalInputObject_2>;
}

export interface SitePluginConnectionResolveQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionVersionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPluginOptionsInputObject_2 {
  plugins?: Maybe<SitePluginConnectionPluginOptionsPluginsQueryList_2>;

  name?: Maybe<SitePluginConnectionPluginOptionsNameQueryString_2>;

  path?: Maybe<SitePluginConnectionPluginOptionsPathQueryString_2>;

  maxWidth?: Maybe<SitePluginConnectionPluginOptionsMaxWidthQueryInteger_2>;

  backgroundColor?: Maybe<
    SitePluginConnectionPluginOptionsBackgroundColorQueryString_3
  >;

  pathToConfigModule?: Maybe<
    SitePluginConnectionPluginOptionsPathToConfigModuleQueryString_2
  >;

  includePaths?: Maybe<
    SitePluginConnectionPluginOptionsIncludePathsQueryList_2
  >;

  src?: Maybe<SitePluginConnectionPluginOptionsSrcQueryString_2>;

  assets?: Maybe<SitePluginConnectionPluginOptionsAssetsQueryString_2>;

  components?: Maybe<SitePluginConnectionPluginOptionsComponentsQueryString_2>;

  pages?: Maybe<SitePluginConnectionPluginOptionsPagesQueryString_2>;

  styles?: Maybe<SitePluginConnectionPluginOptionsStylesQueryString_2>;

  templates?: Maybe<SitePluginConnectionPluginOptionsTemplatesQueryString_2>;

  utils?: Maybe<SitePluginConnectionPluginOptionsUtilsQueryString_2>;

  spaceId?: Maybe<SitePluginConnectionPluginOptionsSpaceIdQueryString_2>;

  accessToken?: Maybe<
    SitePluginConnectionPluginOptionsAccessTokenQueryString_2
  >;

  host?: Maybe<SitePluginConnectionPluginOptionsHostQueryString_2>;

  environment?: Maybe<
    SitePluginConnectionPluginOptionsEnvironmentQueryString_2
  >;

  short_name?: Maybe<SitePluginConnectionPluginOptionsShortNameQueryString_2>;

  start_url?: Maybe<SitePluginConnectionPluginOptionsStartUrlQueryString_2>;

  background_color?: Maybe<
    SitePluginConnectionPluginOptionsBackgroundColorQueryString_4
  >;

  theme_color?: Maybe<SitePluginConnectionPluginOptionsThemeColorQueryString_2>;

  display?: Maybe<SitePluginConnectionPluginOptionsDisplayQueryString_2>;

  icon?: Maybe<SitePluginConnectionPluginOptionsIconQueryString_2>;

  include_favicon?: Maybe<
    SitePluginConnectionPluginOptionsIncludeFaviconQueryBoolean_2
  >;

  sitemap?: Maybe<SitePluginConnectionPluginOptionsSitemapQueryString_2>;

  policy?: Maybe<SitePluginConnectionPluginOptionsPolicyQueryList_2>;

  output?: Maybe<SitePluginConnectionPluginOptionsOutputQueryString_2>;

  exclude?: Maybe<SitePluginConnectionPluginOptionsExcludeQueryList_2>;

  query?: Maybe<SitePluginConnectionPluginOptionsQueryQueryString_2>;

  headers?: Maybe<SitePluginConnectionPluginOptionsHeadersInputObject_2>;

  pathCheck?: Maybe<SitePluginConnectionPluginOptionsPathCheckQueryBoolean_2>;
}

export interface SitePluginConnectionPluginOptionsPluginsQueryList_2 {
  elemMatch?: Maybe<SitePluginConnectionPluginOptionsPluginsInputObject_2>;
}

export interface SitePluginConnectionPluginOptionsPluginsInputObject_2 {
  resolve?: Maybe<SitePluginConnectionPluginOptionsPluginsResolveQueryString_2>;

  id?: Maybe<SitePluginConnectionPluginOptionsPluginsIdQueryString_2>;

  name?: Maybe<SitePluginConnectionPluginOptionsPluginsNameQueryString_2>;

  version?: Maybe<SitePluginConnectionPluginOptionsPluginsVersionQueryString_2>;

  pluginOptions?: Maybe<
    SitePluginConnectionPluginOptionsPluginsPluginOptionsInputObject_2
  >;

  browserAPIs?: Maybe<
    SitePluginConnectionPluginOptionsPluginsBrowserApIsQueryList_2
  >;

  ssrAPIs?: Maybe<SitePluginConnectionPluginOptionsPluginsSsrApIsQueryList_2>;

  pluginFilepath?: Maybe<
    SitePluginConnectionPluginOptionsPluginsPluginFilepathQueryString_2
  >;
}

export interface SitePluginConnectionPluginOptionsPluginsResolveQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPluginOptionsPluginsIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPluginOptionsPluginsNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPluginOptionsPluginsVersionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPluginOptionsPluginsPluginOptionsInputObject_2 {
  maxWidth?: Maybe<
    SitePluginConnectionPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger_2
  >;

  backgroundColor?: Maybe<
    SitePluginConnectionPluginOptionsPluginsPluginOptionsBackgroundColorQueryString_2
  >;
}

export interface SitePluginConnectionPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SitePluginConnectionPluginOptionsPluginsPluginOptionsBackgroundColorQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPluginOptionsPluginsBrowserApIsQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPluginOptionsPluginsSsrApIsQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPluginOptionsPluginsPluginFilepathQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPluginOptionsNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPluginOptionsPathQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPluginOptionsMaxWidthQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SitePluginConnectionPluginOptionsBackgroundColorQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPluginOptionsPathToConfigModuleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPluginOptionsIncludePathsQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPluginOptionsSrcQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPluginOptionsAssetsQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPluginOptionsComponentsQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPluginOptionsPagesQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPluginOptionsStylesQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPluginOptionsTemplatesQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPluginOptionsUtilsQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPluginOptionsSpaceIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPluginOptionsAccessTokenQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPluginOptionsHostQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPluginOptionsEnvironmentQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPluginOptionsShortNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPluginOptionsStartUrlQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPluginOptionsBackgroundColorQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPluginOptionsThemeColorQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPluginOptionsDisplayQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPluginOptionsIconQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPluginOptionsIncludeFaviconQueryBoolean_2 {
  eq?: Maybe<boolean>;

  ne?: Maybe<boolean>;

  in?: Maybe<(Maybe<boolean>)[]>;

  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface SitePluginConnectionPluginOptionsSitemapQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPluginOptionsPolicyQueryList_2 {
  elemMatch?: Maybe<SitePluginConnectionPluginOptionsPolicyInputObject_2>;
}

export interface SitePluginConnectionPluginOptionsPolicyInputObject_2 {
  userAgent?: Maybe<
    SitePluginConnectionPluginOptionsPolicyUserAgentQueryString_2
  >;

  allow?: Maybe<SitePluginConnectionPluginOptionsPolicyAllowQueryString_2>;
}

export interface SitePluginConnectionPluginOptionsPolicyUserAgentQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPluginOptionsPolicyAllowQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPluginOptionsOutputQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPluginOptionsExcludeQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPluginOptionsQueryQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPluginOptionsHeadersInputObject_2 {
  _sw_js?: Maybe<SitePluginConnectionPluginOptionsHeadersSwJsQueryList_2>;
}

export interface SitePluginConnectionPluginOptionsHeadersSwJsQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPluginOptionsPathCheckQueryBoolean_2 {
  eq?: Maybe<boolean>;

  ne?: Maybe<boolean>;

  in?: Maybe<(Maybe<boolean>)[]>;

  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface SitePluginConnectionNodeApIsQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionBrowserApIsQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionSsrApIsQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPluginFilepathQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPackageJsonInputObject_2 {
  name?: Maybe<SitePluginConnectionPackageJsonNameQueryString_2>;

  description?: Maybe<SitePluginConnectionPackageJsonDescriptionQueryString_2>;

  version?: Maybe<SitePluginConnectionPackageJsonVersionQueryString_2>;

  main?: Maybe<SitePluginConnectionPackageJsonMainQueryString_2>;

  author?: Maybe<SitePluginConnectionPackageJsonAuthorQueryString_2>;

  license?: Maybe<SitePluginConnectionPackageJsonLicenseQueryString_2>;

  dependencies?: Maybe<SitePluginConnectionPackageJsonDependenciesQueryList_2>;

  devDependencies?: Maybe<
    SitePluginConnectionPackageJsonDevDependenciesQueryList_2
  >;

  peerDependencies?: Maybe<
    SitePluginConnectionPackageJsonPeerDependenciesQueryList_2
  >;

  keywords?: Maybe<SitePluginConnectionPackageJsonKeywordsQueryList_2>;
}

export interface SitePluginConnectionPackageJsonNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPackageJsonDescriptionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPackageJsonVersionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPackageJsonMainQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPackageJsonAuthorQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPackageJsonLicenseQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPackageJsonDependenciesQueryList_2 {
  elemMatch?: Maybe<SitePluginConnectionPackageJsonDependenciesInputObject_2>;
}

export interface SitePluginConnectionPackageJsonDependenciesInputObject_2 {
  name?: Maybe<SitePluginConnectionPackageJsonDependenciesNameQueryString_2>;

  version?: Maybe<
    SitePluginConnectionPackageJsonDependenciesVersionQueryString_2
  >;
}

export interface SitePluginConnectionPackageJsonDependenciesNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPackageJsonDependenciesVersionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPackageJsonDevDependenciesQueryList_2 {
  elemMatch?: Maybe<
    SitePluginConnectionPackageJsonDevDependenciesInputObject_2
  >;
}

export interface SitePluginConnectionPackageJsonDevDependenciesInputObject_2 {
  name?: Maybe<SitePluginConnectionPackageJsonDevDependenciesNameQueryString_2>;

  version?: Maybe<
    SitePluginConnectionPackageJsonDevDependenciesVersionQueryString_2
  >;
}

export interface SitePluginConnectionPackageJsonDevDependenciesNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPackageJsonDevDependenciesVersionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPackageJsonPeerDependenciesQueryList_2 {
  elemMatch?: Maybe<
    SitePluginConnectionPackageJsonPeerDependenciesInputObject_2
  >;
}

export interface SitePluginConnectionPackageJsonPeerDependenciesInputObject_2 {
  name?: Maybe<
    SitePluginConnectionPackageJsonPeerDependenciesNameQueryString_2
  >;

  version?: Maybe<
    SitePluginConnectionPackageJsonPeerDependenciesVersionQueryString_2
  >;
}

export interface SitePluginConnectionPackageJsonPeerDependenciesNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPackageJsonPeerDependenciesVersionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPackageJsonKeywordsQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionInternalInputObject_2 {
  contentDigest?: Maybe<SitePluginConnectionInternalContentDigestQueryString_2>;

  type?: Maybe<SitePluginConnectionInternalTypeQueryString_2>;

  owner?: Maybe<SitePluginConnectionInternalOwnerQueryString_2>;
}

export interface SitePluginConnectionInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryConnectionSort {
  fields: (Maybe<DirectoryConnectionSortByFieldsEnum>)[];

  order?: (Maybe<DirectoryConnectionSortOrderValues>)[];
}
/** Filter connection on its fields */
export interface FilterDirectory {
  id?: Maybe<DirectoryConnectionIdQueryString_2>;

  internal?: Maybe<DirectoryConnectionInternalInputObject_2>;

  sourceInstanceName?: Maybe<
    DirectoryConnectionSourceInstanceNameQueryString_2
  >;

  absolutePath?: Maybe<DirectoryConnectionAbsolutePathQueryString_2>;

  relativePath?: Maybe<DirectoryConnectionRelativePathQueryString_2>;

  extension?: Maybe<DirectoryConnectionExtensionQueryString_2>;

  size?: Maybe<DirectoryConnectionSizeQueryInteger_2>;

  prettySize?: Maybe<DirectoryConnectionPrettySizeQueryString_2>;

  modifiedTime?: Maybe<DirectoryConnectionModifiedTimeQueryString_2>;

  accessTime?: Maybe<DirectoryConnectionAccessTimeQueryString_2>;

  changeTime?: Maybe<DirectoryConnectionChangeTimeQueryString_2>;

  birthTime?: Maybe<DirectoryConnectionBirthTimeQueryString_2>;

  root?: Maybe<DirectoryConnectionRootQueryString_2>;

  dir?: Maybe<DirectoryConnectionDirQueryString_2>;

  base?: Maybe<DirectoryConnectionBaseQueryString_2>;

  ext?: Maybe<DirectoryConnectionExtQueryString_2>;

  name?: Maybe<DirectoryConnectionNameQueryString_2>;

  relativeDirectory?: Maybe<DirectoryConnectionRelativeDirectoryQueryString_2>;

  dev?: Maybe<DirectoryConnectionDevQueryInteger_2>;

  mode?: Maybe<DirectoryConnectionModeQueryInteger_2>;

  nlink?: Maybe<DirectoryConnectionNlinkQueryInteger_2>;

  uid?: Maybe<DirectoryConnectionUidQueryInteger_2>;

  gid?: Maybe<DirectoryConnectionGidQueryInteger_2>;

  rdev?: Maybe<DirectoryConnectionRdevQueryInteger_2>;

  blksize?: Maybe<DirectoryConnectionBlksizeQueryInteger_2>;

  ino?: Maybe<DirectoryConnectionInoQueryInteger_2>;

  blocks?: Maybe<DirectoryConnectionBlocksQueryInteger_2>;

  atimeMs?: Maybe<DirectoryConnectionAtimeMsQueryFloat_2>;

  mtimeMs?: Maybe<DirectoryConnectionMtimeMsQueryFloat_2>;

  ctimeMs?: Maybe<DirectoryConnectionCtimeMsQueryFloat_2>;

  birthtimeMs?: Maybe<DirectoryConnectionBirthtimeMsQueryFloat_2>;

  atime?: Maybe<DirectoryConnectionAtimeQueryString_2>;

  mtime?: Maybe<DirectoryConnectionMtimeQueryString_2>;

  ctime?: Maybe<DirectoryConnectionCtimeQueryString_2>;

  birthtime?: Maybe<DirectoryConnectionBirthtimeQueryString_2>;
}

export interface DirectoryConnectionIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryConnectionInternalInputObject_2 {
  contentDigest?: Maybe<DirectoryConnectionInternalContentDigestQueryString_2>;

  type?: Maybe<DirectoryConnectionInternalTypeQueryString_2>;

  description?: Maybe<DirectoryConnectionInternalDescriptionQueryString_2>;

  owner?: Maybe<DirectoryConnectionInternalOwnerQueryString_2>;
}

export interface DirectoryConnectionInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryConnectionInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryConnectionInternalDescriptionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryConnectionInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryConnectionSourceInstanceNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryConnectionAbsolutePathQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryConnectionRelativePathQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryConnectionExtensionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryConnectionSizeQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DirectoryConnectionPrettySizeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryConnectionModifiedTimeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryConnectionAccessTimeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryConnectionChangeTimeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryConnectionBirthTimeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryConnectionRootQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryConnectionDirQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryConnectionBaseQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryConnectionExtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryConnectionNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryConnectionRelativeDirectoryQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryConnectionDevQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DirectoryConnectionModeQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DirectoryConnectionNlinkQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DirectoryConnectionUidQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DirectoryConnectionGidQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DirectoryConnectionRdevQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DirectoryConnectionBlksizeQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DirectoryConnectionInoQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DirectoryConnectionBlocksQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DirectoryConnectionAtimeMsQueryFloat_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DirectoryConnectionMtimeMsQueryFloat_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DirectoryConnectionCtimeMsQueryFloat_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DirectoryConnectionBirthtimeMsQueryFloat_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DirectoryConnectionAtimeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryConnectionMtimeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryConnectionCtimeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryConnectionBirthtimeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileConnectionSort {
  fields: (Maybe<FileConnectionSortByFieldsEnum>)[];

  order?: (Maybe<FileConnectionSortOrderValues>)[];
}
/** Filter connection on its fields */
export interface FilterFile {
  id?: Maybe<FileConnectionIdQueryString_2>;

  internal?: Maybe<FileConnectionInternalInputObject_2>;

  sourceInstanceName?: Maybe<FileConnectionSourceInstanceNameQueryString_2>;

  absolutePath?: Maybe<FileConnectionAbsolutePathQueryString_2>;

  relativePath?: Maybe<FileConnectionRelativePathQueryString_2>;

  extension?: Maybe<FileConnectionExtensionQueryString_2>;

  size?: Maybe<FileConnectionSizeQueryInteger_2>;

  prettySize?: Maybe<FileConnectionPrettySizeQueryString_2>;

  modifiedTime?: Maybe<FileConnectionModifiedTimeQueryString_2>;

  accessTime?: Maybe<FileConnectionAccessTimeQueryString_2>;

  changeTime?: Maybe<FileConnectionChangeTimeQueryString_2>;

  birthTime?: Maybe<FileConnectionBirthTimeQueryString_2>;

  root?: Maybe<FileConnectionRootQueryString_2>;

  dir?: Maybe<FileConnectionDirQueryString_2>;

  base?: Maybe<FileConnectionBaseQueryString_2>;

  ext?: Maybe<FileConnectionExtQueryString_2>;

  name?: Maybe<FileConnectionNameQueryString_2>;

  relativeDirectory?: Maybe<FileConnectionRelativeDirectoryQueryString_2>;

  dev?: Maybe<FileConnectionDevQueryInteger_2>;

  mode?: Maybe<FileConnectionModeQueryInteger_2>;

  nlink?: Maybe<FileConnectionNlinkQueryInteger_2>;

  uid?: Maybe<FileConnectionUidQueryInteger_2>;

  gid?: Maybe<FileConnectionGidQueryInteger_2>;

  rdev?: Maybe<FileConnectionRdevQueryInteger_2>;

  blksize?: Maybe<FileConnectionBlksizeQueryInteger_2>;

  ino?: Maybe<FileConnectionInoQueryInteger_2>;

  blocks?: Maybe<FileConnectionBlocksQueryInteger_2>;

  atimeMs?: Maybe<FileConnectionAtimeMsQueryFloat_2>;

  mtimeMs?: Maybe<FileConnectionMtimeMsQueryFloat_2>;

  ctimeMs?: Maybe<FileConnectionCtimeMsQueryFloat_2>;

  birthtimeMs?: Maybe<FileConnectionBirthtimeMsQueryFloat_2>;

  atime?: Maybe<FileConnectionAtimeQueryString_2>;

  mtime?: Maybe<FileConnectionMtimeQueryString_2>;

  ctime?: Maybe<FileConnectionCtimeQueryString_2>;

  birthtime?: Maybe<FileConnectionBirthtimeQueryString_2>;

  publicURL?: Maybe<PublicUrlQueryString_4>;
}

export interface FileConnectionIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileConnectionInternalInputObject_2 {
  contentDigest?: Maybe<FileConnectionInternalContentDigestQueryString_2>;

  type?: Maybe<FileConnectionInternalTypeQueryString_2>;

  mediaType?: Maybe<FileConnectionInternalMediaTypeQueryString_2>;

  description?: Maybe<FileConnectionInternalDescriptionQueryString_2>;

  owner?: Maybe<FileConnectionInternalOwnerQueryString_2>;
}

export interface FileConnectionInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileConnectionInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileConnectionInternalMediaTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileConnectionInternalDescriptionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileConnectionInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileConnectionSourceInstanceNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileConnectionAbsolutePathQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileConnectionRelativePathQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileConnectionExtensionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileConnectionSizeQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FileConnectionPrettySizeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileConnectionModifiedTimeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileConnectionAccessTimeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileConnectionChangeTimeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileConnectionBirthTimeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileConnectionRootQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileConnectionDirQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileConnectionBaseQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileConnectionExtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileConnectionNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileConnectionRelativeDirectoryQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileConnectionDevQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FileConnectionModeQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FileConnectionNlinkQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FileConnectionUidQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FileConnectionGidQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FileConnectionRdevQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FileConnectionBlksizeQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FileConnectionInoQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FileConnectionBlocksQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FileConnectionAtimeMsQueryFloat_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FileConnectionMtimeMsQueryFloat_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FileConnectionCtimeMsQueryFloat_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FileConnectionBirthtimeMsQueryFloat_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FileConnectionAtimeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileConnectionMtimeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileConnectionCtimeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileConnectionBirthtimeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface PublicUrlQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DataJsonConnectionSort {
  fields: (Maybe<DataJsonConnectionSortByFieldsEnum>)[];

  order?: (Maybe<DataJsonConnectionSortOrderValues>)[];
}
/** Filter connection on its fields */
export interface FilterDataJson {
  id?: Maybe<DataJsonConnectionIdQueryString_2>;

  internal?: Maybe<DataJsonConnectionInternalInputObject_2>;
}

export interface DataJsonConnectionIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DataJsonConnectionInternalInputObject_2 {
  contentDigest?: Maybe<DataJsonConnectionInternalContentDigestQueryString_2>;

  type?: Maybe<DataJsonConnectionInternalTypeQueryString_2>;

  owner?: Maybe<DataJsonConnectionInternalOwnerQueryString_2>;
}

export interface DataJsonConnectionInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DataJsonConnectionInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DataJsonConnectionInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulContentTypeConnectionSort {
  fields: (Maybe<ContentfulContentTypeConnectionSortByFieldsEnum>)[];

  order?: (Maybe<ContentfulContentTypeConnectionSortOrderValues>)[];
}
/** Filter connection on its fields */
export interface FilterContentfulContentType {
  id?: Maybe<ContentfulContentTypeConnectionIdQueryString_2>;

  name?: Maybe<ContentfulContentTypeConnectionNameQueryString_2>;

  displayField?: Maybe<
    ContentfulContentTypeConnectionDisplayFieldQueryString_2
  >;

  description?: Maybe<ContentfulContentTypeConnectionDescriptionQueryString_2>;

  internal?: Maybe<ContentfulContentTypeConnectionInternalInputObject_2>;
}

export interface ContentfulContentTypeConnectionIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulContentTypeConnectionNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulContentTypeConnectionDisplayFieldQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulContentTypeConnectionDescriptionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulContentTypeConnectionInternalInputObject_2 {
  type?: Maybe<ContentfulContentTypeConnectionInternalTypeQueryString_2>;

  contentDigest?: Maybe<
    ContentfulContentTypeConnectionInternalContentDigestQueryString_2
  >;

  owner?: Maybe<ContentfulContentTypeConnectionInternalOwnerQueryString_2>;
}

export interface ContentfulContentTypeConnectionInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulContentTypeConnectionInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulContentTypeConnectionInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceConnectionSort {
  fields: (Maybe<ContentfulServiceConnectionSortByFieldsEnum>)[];

  order?: (Maybe<ContentfulServiceConnectionSortOrderValues>)[];
}
/** Filter connection on its fields */
export interface FilterContentfulService {
  title?: Maybe<ContentfulServiceConnectionTitleQueryString_2>;

  slug?: Maybe<ContentfulServiceConnectionSlugQueryString_2>;

  order?: Maybe<ContentfulServiceConnectionOrderQueryInteger_2>;

  image?: Maybe<ContentfulServiceConnectionImageInputObject_2>;

  sections?: Maybe<ContentfulServiceConnectionSectionsQueryList_2>;

  description?: Maybe<ContentfulServiceConnectionDescriptionInputObject_2>;

  id?: Maybe<ContentfulServiceConnectionIdQueryString_2>;

  contentful_id?: Maybe<ContentfulServiceConnectionContentfulIdQueryString_2>;

  createdAt?: Maybe<ContentfulServiceConnectionCreatedAtQueryString_2>;

  updatedAt?: Maybe<ContentfulServiceConnectionUpdatedAtQueryString_2>;

  internal?: Maybe<ContentfulServiceConnectionInternalInputObject_2>;

  node_locale?: Maybe<ContentfulServiceConnectionNodeLocaleQueryString_2>;

  plugins?: Maybe<ContentfulServiceConnectionPluginsQueryList_2>;
}

export interface ContentfulServiceConnectionTitleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceConnectionSlugQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceConnectionOrderQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ContentfulServiceConnectionImageInputObject_2 {
  contentful_id?: Maybe<
    ContentfulServiceConnectionImageContentfulIdQueryString_2
  >;

  id?: Maybe<ContentfulServiceConnectionImageIdQueryString_2>;

  file?: Maybe<ContentfulServiceConnectionImageFileInputObject_2>;

  title?: Maybe<ContentfulServiceConnectionImageTitleQueryString_2>;

  description?: Maybe<ContentfulServiceConnectionImageDescriptionQueryString_2>;

  node_locale?: Maybe<ContentfulServiceConnectionImageNodeLocaleQueryString_2>;

  internal?: Maybe<ContentfulServiceConnectionImageInternalInputObject_2>;
}

export interface ContentfulServiceConnectionImageContentfulIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceConnectionImageIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceConnectionImageFileInputObject_2 {
  url?: Maybe<ContentfulServiceConnectionImageFileUrlQueryString_2>;

  details?: Maybe<ContentfulServiceConnectionImageFileDetailsInputObject_2>;

  fileName?: Maybe<ContentfulServiceConnectionImageFileFileNameQueryString_2>;

  contentType?: Maybe<
    ContentfulServiceConnectionImageFileContentTypeQueryString_2
  >;
}

export interface ContentfulServiceConnectionImageFileUrlQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceConnectionImageFileDetailsInputObject_2 {
  size?: Maybe<ContentfulServiceConnectionImageFileDetailsSizeQueryInteger_2>;

  image?: Maybe<ContentfulServiceConnectionImageFileDetailsImageInputObject_2>;
}

export interface ContentfulServiceConnectionImageFileDetailsSizeQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ContentfulServiceConnectionImageFileDetailsImageInputObject_2 {
  width?: Maybe<
    ContentfulServiceConnectionImageFileDetailsImageWidthQueryInteger_2
  >;

  height?: Maybe<
    ContentfulServiceConnectionImageFileDetailsImageHeightQueryInteger_2
  >;
}

export interface ContentfulServiceConnectionImageFileDetailsImageWidthQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ContentfulServiceConnectionImageFileDetailsImageHeightQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ContentfulServiceConnectionImageFileFileNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceConnectionImageFileContentTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceConnectionImageTitleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceConnectionImageDescriptionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceConnectionImageNodeLocaleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceConnectionImageInternalInputObject_2 {
  type?: Maybe<ContentfulServiceConnectionImageInternalTypeQueryString_2>;

  contentDigest?: Maybe<
    ContentfulServiceConnectionImageInternalContentDigestQueryString_2
  >;

  owner?: Maybe<ContentfulServiceConnectionImageInternalOwnerQueryString_2>;
}

export interface ContentfulServiceConnectionImageInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceConnectionImageInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceConnectionImageInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceConnectionSectionsQueryList_2 {
  elemMatch?: Maybe<ContentfulServiceConnectionSectionsInputObject_2>;
}

export interface ContentfulServiceConnectionSectionsInputObject_2 {
  title?: Maybe<ContentfulServiceConnectionSectionsTitleQueryString_2>;

  subtitle?: Maybe<ContentfulServiceConnectionSectionsSubtitleQueryString_2>;

  list?: Maybe<ContentfulServiceConnectionSectionsListQueryList_2>;

  order?: Maybe<ContentfulServiceConnectionSectionsOrderQueryInteger_2>;

  id?: Maybe<ContentfulServiceConnectionSectionsIdQueryString_2>;

  contentful_id?: Maybe<
    ContentfulServiceConnectionSectionsContentfulIdQueryString_2
  >;

  createdAt?: Maybe<ContentfulServiceConnectionSectionsCreatedAtQueryString_2>;

  updatedAt?: Maybe<ContentfulServiceConnectionSectionsUpdatedAtQueryString_2>;

  parent?: Maybe<ContentfulServiceConnectionSectionsParentQueryString_2>;

  children?: Maybe<ContentfulServiceConnectionSectionsChildrenQueryList_2>;

  internal?: Maybe<ContentfulServiceConnectionSectionsInternalInputObject_2>;

  node_locale?: Maybe<
    ContentfulServiceConnectionSectionsNodeLocaleQueryString_2
  >;
}

export interface ContentfulServiceConnectionSectionsTitleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceConnectionSectionsSubtitleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceConnectionSectionsListQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceConnectionSectionsOrderQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ContentfulServiceConnectionSectionsIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceConnectionSectionsContentfulIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceConnectionSectionsCreatedAtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceConnectionSectionsUpdatedAtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceConnectionSectionsParentQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceConnectionSectionsChildrenQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceConnectionSectionsInternalInputObject_2 {
  type?: Maybe<ContentfulServiceConnectionSectionsInternalTypeQueryString_2>;

  contentDigest?: Maybe<
    ContentfulServiceConnectionSectionsInternalContentDigestQueryString_2
  >;

  owner?: Maybe<ContentfulServiceConnectionSectionsInternalOwnerQueryString_2>;
}

export interface ContentfulServiceConnectionSectionsInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceConnectionSectionsInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceConnectionSectionsInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceConnectionSectionsNodeLocaleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceConnectionDescriptionInputObject_2 {
  id?: Maybe<ContentfulServiceConnectionDescriptionIdQueryString_2>;

  parent?: Maybe<ContentfulServiceConnectionDescriptionParentQueryString_2>;

  children?: Maybe<ContentfulServiceConnectionDescriptionChildrenQueryList_2>;

  description?: Maybe<
    ContentfulServiceConnectionDescriptionDescriptionQueryString_2
  >;

  internal?: Maybe<ContentfulServiceConnectionDescriptionInternalInputObject_2>;
}

export interface ContentfulServiceConnectionDescriptionIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceConnectionDescriptionParentQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceConnectionDescriptionChildrenQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceConnectionDescriptionDescriptionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceConnectionDescriptionInternalInputObject_2 {
  type?: Maybe<ContentfulServiceConnectionDescriptionInternalTypeQueryString_2>;

  mediaType?: Maybe<
    ContentfulServiceConnectionDescriptionInternalMediaTypeQueryString_2
  >;

  content?: Maybe<
    ContentfulServiceConnectionDescriptionInternalContentQueryString_2
  >;

  contentDigest?: Maybe<
    ContentfulServiceConnectionDescriptionInternalContentDigestQueryString_2
  >;

  owner?: Maybe<
    ContentfulServiceConnectionDescriptionInternalOwnerQueryString_2
  >;
}

export interface ContentfulServiceConnectionDescriptionInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceConnectionDescriptionInternalMediaTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceConnectionDescriptionInternalContentQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceConnectionDescriptionInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceConnectionDescriptionInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceConnectionIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceConnectionContentfulIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceConnectionCreatedAtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceConnectionUpdatedAtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceConnectionInternalInputObject_2 {
  type?: Maybe<ContentfulServiceConnectionInternalTypeQueryString_2>;

  contentDigest?: Maybe<
    ContentfulServiceConnectionInternalContentDigestQueryString_2
  >;

  owner?: Maybe<ContentfulServiceConnectionInternalOwnerQueryString_2>;
}

export interface ContentfulServiceConnectionInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceConnectionInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceConnectionInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceConnectionNodeLocaleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceConnectionPluginsQueryList_2 {
  elemMatch?: Maybe<ContentfulServiceConnectionPluginsInputObject_2>;
}

export interface ContentfulServiceConnectionPluginsInputObject_2 {
  title?: Maybe<ContentfulServiceConnectionPluginsTitleQueryString_2>;

  type?: Maybe<ContentfulServiceConnectionPluginsTypeQueryList_2>;

  id?: Maybe<ContentfulServiceConnectionPluginsIdQueryString_2>;

  contentful_id?: Maybe<
    ContentfulServiceConnectionPluginsContentfulIdQueryString_2
  >;

  createdAt?: Maybe<ContentfulServiceConnectionPluginsCreatedAtQueryString_2>;

  updatedAt?: Maybe<ContentfulServiceConnectionPluginsUpdatedAtQueryString_2>;

  parent?: Maybe<ContentfulServiceConnectionPluginsParentQueryString_2>;

  internal?: Maybe<ContentfulServiceConnectionPluginsInternalInputObject_2>;

  node_locale?: Maybe<
    ContentfulServiceConnectionPluginsNodeLocaleQueryString_2
  >;
}

export interface ContentfulServiceConnectionPluginsTitleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceConnectionPluginsTypeQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceConnectionPluginsIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceConnectionPluginsContentfulIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceConnectionPluginsCreatedAtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceConnectionPluginsUpdatedAtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceConnectionPluginsParentQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceConnectionPluginsInternalInputObject_2 {
  type?: Maybe<ContentfulServiceConnectionPluginsInternalTypeQueryString_2>;

  contentDigest?: Maybe<
    ContentfulServiceConnectionPluginsInternalContentDigestQueryString_2
  >;

  owner?: Maybe<ContentfulServiceConnectionPluginsInternalOwnerQueryString_2>;
}

export interface ContentfulServiceConnectionPluginsInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceConnectionPluginsInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceConnectionPluginsInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceConnectionPluginsNodeLocaleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceDescriptionTextNodeConnectionSort {
  fields: (Maybe<
    ContentfulServiceDescriptionTextNodeConnectionSortByFieldsEnum
  >)[];

  order?: (Maybe<
    ContentfulServiceDescriptionTextNodeConnectionSortOrderValues
  >)[];
}
/** Filter connection on its fields */
export interface FilterContentfulServiceDescriptionTextNode {
  id?: Maybe<ContentfulServiceDescriptionTextNodeConnectionIdQueryString_2>;

  description?: Maybe<
    ContentfulServiceDescriptionTextNodeConnectionDescriptionQueryString_2
  >;

  internal?: Maybe<
    ContentfulServiceDescriptionTextNodeConnectionInternalInputObject_2
  >;
}

export interface ContentfulServiceDescriptionTextNodeConnectionIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceDescriptionTextNodeConnectionDescriptionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceDescriptionTextNodeConnectionInternalInputObject_2 {
  type?: Maybe<
    ContentfulServiceDescriptionTextNodeConnectionInternalTypeQueryString_2
  >;

  mediaType?: Maybe<
    ContentfulServiceDescriptionTextNodeConnectionInternalMediaTypeQueryString_2
  >;

  content?: Maybe<
    ContentfulServiceDescriptionTextNodeConnectionInternalContentQueryString_2
  >;

  contentDigest?: Maybe<
    ContentfulServiceDescriptionTextNodeConnectionInternalContentDigestQueryString_2
  >;

  owner?: Maybe<
    ContentfulServiceDescriptionTextNodeConnectionInternalOwnerQueryString_2
  >;
}

export interface ContentfulServiceDescriptionTextNodeConnectionInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceDescriptionTextNodeConnectionInternalMediaTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceDescriptionTextNodeConnectionInternalContentQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceDescriptionTextNodeConnectionInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceDescriptionTextNodeConnectionInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulNavigationConnectionSort {
  fields: (Maybe<ContentfulNavigationConnectionSortByFieldsEnum>)[];

  order?: (Maybe<ContentfulNavigationConnectionSortOrderValues>)[];
}
/** Filter connection on its fields */
export interface FilterContentfulNavigation {
  title?: Maybe<ContentfulNavigationConnectionTitleQueryString_2>;

  slug?: Maybe<ContentfulNavigationConnectionSlugQueryString_2>;

  order?: Maybe<ContentfulNavigationConnectionOrderQueryInteger_2>;

  header?: Maybe<ContentfulNavigationConnectionHeaderQueryBoolean_2>;

  footer?: Maybe<ContentfulNavigationConnectionFooterQueryBoolean_2>;

  id?: Maybe<ContentfulNavigationConnectionIdQueryString_2>;

  contentful_id?: Maybe<
    ContentfulNavigationConnectionContentfulIdQueryString_2
  >;

  createdAt?: Maybe<ContentfulNavigationConnectionCreatedAtQueryString_2>;

  updatedAt?: Maybe<ContentfulNavigationConnectionUpdatedAtQueryString_2>;

  internal?: Maybe<ContentfulNavigationConnectionInternalInputObject_2>;

  node_locale?: Maybe<ContentfulNavigationConnectionNodeLocaleQueryString_2>;
}

export interface ContentfulNavigationConnectionTitleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulNavigationConnectionSlugQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulNavigationConnectionOrderQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ContentfulNavigationConnectionHeaderQueryBoolean_2 {
  eq?: Maybe<boolean>;

  ne?: Maybe<boolean>;

  in?: Maybe<(Maybe<boolean>)[]>;

  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface ContentfulNavigationConnectionFooterQueryBoolean_2 {
  eq?: Maybe<boolean>;

  ne?: Maybe<boolean>;

  in?: Maybe<(Maybe<boolean>)[]>;

  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface ContentfulNavigationConnectionIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulNavigationConnectionContentfulIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulNavigationConnectionCreatedAtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulNavigationConnectionUpdatedAtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulNavigationConnectionInternalInputObject_2 {
  type?: Maybe<ContentfulNavigationConnectionInternalTypeQueryString_2>;

  contentDigest?: Maybe<
    ContentfulNavigationConnectionInternalContentDigestQueryString_2
  >;

  owner?: Maybe<ContentfulNavigationConnectionInternalOwnerQueryString_2>;
}

export interface ContentfulNavigationConnectionInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulNavigationConnectionInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulNavigationConnectionInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulNavigationConnectionNodeLocaleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulOfficeConnectionSort {
  fields: (Maybe<ContentfulOfficeConnectionSortByFieldsEnum>)[];

  order?: (Maybe<ContentfulOfficeConnectionSortOrderValues>)[];
}
/** Filter connection on its fields */
export interface FilterContentfulOffice {
  title?: Maybe<ContentfulOfficeConnectionTitleQueryString_2>;

  slug?: Maybe<ContentfulOfficeConnectionSlugQueryString_2>;

  order?: Maybe<ContentfulOfficeConnectionOrderQueryInteger_2>;

  map?: Maybe<ContentfulOfficeConnectionMapInputObject_2>;

  id?: Maybe<ContentfulOfficeConnectionIdQueryString_2>;

  contentful_id?: Maybe<ContentfulOfficeConnectionContentfulIdQueryString_2>;

  createdAt?: Maybe<ContentfulOfficeConnectionCreatedAtQueryString_2>;

  updatedAt?: Maybe<ContentfulOfficeConnectionUpdatedAtQueryString_2>;

  internal?: Maybe<ContentfulOfficeConnectionInternalInputObject_2>;

  node_locale?: Maybe<ContentfulOfficeConnectionNodeLocaleQueryString_2>;
}

export interface ContentfulOfficeConnectionTitleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulOfficeConnectionSlugQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulOfficeConnectionOrderQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ContentfulOfficeConnectionMapInputObject_2 {
  lon?: Maybe<ContentfulOfficeConnectionMapLonQueryFloat_2>;

  lat?: Maybe<ContentfulOfficeConnectionMapLatQueryFloat_2>;
}

export interface ContentfulOfficeConnectionMapLonQueryFloat_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ContentfulOfficeConnectionMapLatQueryFloat_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ContentfulOfficeConnectionIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulOfficeConnectionContentfulIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulOfficeConnectionCreatedAtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulOfficeConnectionUpdatedAtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulOfficeConnectionInternalInputObject_2 {
  type?: Maybe<ContentfulOfficeConnectionInternalTypeQueryString_2>;

  contentDigest?: Maybe<
    ContentfulOfficeConnectionInternalContentDigestQueryString_2
  >;

  owner?: Maybe<ContentfulOfficeConnectionInternalOwnerQueryString_2>;
}

export interface ContentfulOfficeConnectionInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulOfficeConnectionInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulOfficeConnectionInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulOfficeConnectionNodeLocaleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulCaseConnectionSort {
  fields: (Maybe<ContentfulCaseConnectionSortByFieldsEnum>)[];

  order?: (Maybe<ContentfulCaseConnectionSortOrderValues>)[];
}
/** Filter connection on its fields */
export interface FilterContentfulCase {
  title?: Maybe<ContentfulCaseConnectionTitleQueryString_2>;

  slug?: Maybe<ContentfulCaseConnectionSlugQueryString_2>;

  order?: Maybe<ContentfulCaseConnectionOrderQueryInteger_2>;

  description?: Maybe<ContentfulCaseConnectionDescriptionQueryString_2>;

  thumbnail?: Maybe<ContentfulCaseConnectionThumbnailInputObject_2>;

  id?: Maybe<ContentfulCaseConnectionIdQueryString_2>;

  contentful_id?: Maybe<ContentfulCaseConnectionContentfulIdQueryString_2>;

  createdAt?: Maybe<ContentfulCaseConnectionCreatedAtQueryString_2>;

  updatedAt?: Maybe<ContentfulCaseConnectionUpdatedAtQueryString_2>;

  internal?: Maybe<ContentfulCaseConnectionInternalInputObject_2>;

  node_locale?: Maybe<ContentfulCaseConnectionNodeLocaleQueryString_2>;
}

export interface ContentfulCaseConnectionTitleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulCaseConnectionSlugQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulCaseConnectionOrderQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ContentfulCaseConnectionDescriptionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulCaseConnectionThumbnailInputObject_2 {
  contentful_id?: Maybe<
    ContentfulCaseConnectionThumbnailContentfulIdQueryString_2
  >;

  id?: Maybe<ContentfulCaseConnectionThumbnailIdQueryString_2>;

  file?: Maybe<ContentfulCaseConnectionThumbnailFileInputObject_2>;

  title?: Maybe<ContentfulCaseConnectionThumbnailTitleQueryString_2>;

  description?: Maybe<
    ContentfulCaseConnectionThumbnailDescriptionQueryString_2
  >;

  node_locale?: Maybe<ContentfulCaseConnectionThumbnailNodeLocaleQueryString_2>;

  internal?: Maybe<ContentfulCaseConnectionThumbnailInternalInputObject_2>;
}

export interface ContentfulCaseConnectionThumbnailContentfulIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulCaseConnectionThumbnailIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulCaseConnectionThumbnailFileInputObject_2 {
  url?: Maybe<ContentfulCaseConnectionThumbnailFileUrlQueryString_2>;

  details?: Maybe<ContentfulCaseConnectionThumbnailFileDetailsInputObject_2>;

  fileName?: Maybe<ContentfulCaseConnectionThumbnailFileFileNameQueryString_2>;

  contentType?: Maybe<
    ContentfulCaseConnectionThumbnailFileContentTypeQueryString_2
  >;
}

export interface ContentfulCaseConnectionThumbnailFileUrlQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulCaseConnectionThumbnailFileDetailsInputObject_2 {
  size?: Maybe<ContentfulCaseConnectionThumbnailFileDetailsSizeQueryInteger_2>;

  image?: Maybe<ContentfulCaseConnectionThumbnailFileDetailsImageInputObject_2>;
}

export interface ContentfulCaseConnectionThumbnailFileDetailsSizeQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ContentfulCaseConnectionThumbnailFileDetailsImageInputObject_2 {
  width?: Maybe<
    ContentfulCaseConnectionThumbnailFileDetailsImageWidthQueryInteger_2
  >;

  height?: Maybe<
    ContentfulCaseConnectionThumbnailFileDetailsImageHeightQueryInteger_2
  >;
}

export interface ContentfulCaseConnectionThumbnailFileDetailsImageWidthQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ContentfulCaseConnectionThumbnailFileDetailsImageHeightQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ContentfulCaseConnectionThumbnailFileFileNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulCaseConnectionThumbnailFileContentTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulCaseConnectionThumbnailTitleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulCaseConnectionThumbnailDescriptionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulCaseConnectionThumbnailNodeLocaleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulCaseConnectionThumbnailInternalInputObject_2 {
  type?: Maybe<ContentfulCaseConnectionThumbnailInternalTypeQueryString_2>;

  contentDigest?: Maybe<
    ContentfulCaseConnectionThumbnailInternalContentDigestQueryString_2
  >;

  owner?: Maybe<ContentfulCaseConnectionThumbnailInternalOwnerQueryString_2>;
}

export interface ContentfulCaseConnectionThumbnailInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulCaseConnectionThumbnailInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulCaseConnectionThumbnailInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulCaseConnectionIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulCaseConnectionContentfulIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulCaseConnectionCreatedAtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulCaseConnectionUpdatedAtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulCaseConnectionInternalInputObject_2 {
  type?: Maybe<ContentfulCaseConnectionInternalTypeQueryString_2>;

  contentDigest?: Maybe<
    ContentfulCaseConnectionInternalContentDigestQueryString_2
  >;

  owner?: Maybe<ContentfulCaseConnectionInternalOwnerQueryString_2>;
}

export interface ContentfulCaseConnectionInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulCaseConnectionInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulCaseConnectionInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulCaseConnectionNodeLocaleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulExpertConnectionSort {
  fields: (Maybe<ContentfulExpertConnectionSortByFieldsEnum>)[];

  order?: (Maybe<ContentfulExpertConnectionSortOrderValues>)[];
}
/** Filter connection on its fields */
export interface FilterContentfulExpert {
  title?: Maybe<ContentfulExpertConnectionTitleQueryString_2>;

  position?: Maybe<ContentfulExpertConnectionPositionQueryString_2>;

  order?: Maybe<ContentfulExpertConnectionOrderQueryInteger_2>;

  photo?: Maybe<ContentfulExpertConnectionPhotoInputObject_2>;

  id?: Maybe<ContentfulExpertConnectionIdQueryString_2>;

  contentful_id?: Maybe<ContentfulExpertConnectionContentfulIdQueryString_2>;

  createdAt?: Maybe<ContentfulExpertConnectionCreatedAtQueryString_2>;

  updatedAt?: Maybe<ContentfulExpertConnectionUpdatedAtQueryString_2>;

  internal?: Maybe<ContentfulExpertConnectionInternalInputObject_2>;

  node_locale?: Maybe<ContentfulExpertConnectionNodeLocaleQueryString_2>;
}

export interface ContentfulExpertConnectionTitleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulExpertConnectionPositionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulExpertConnectionOrderQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ContentfulExpertConnectionPhotoInputObject_2 {
  contentful_id?: Maybe<
    ContentfulExpertConnectionPhotoContentfulIdQueryString_2
  >;

  id?: Maybe<ContentfulExpertConnectionPhotoIdQueryString_2>;

  file?: Maybe<ContentfulExpertConnectionPhotoFileInputObject_2>;

  title?: Maybe<ContentfulExpertConnectionPhotoTitleQueryString_2>;

  description?: Maybe<ContentfulExpertConnectionPhotoDescriptionQueryString_2>;

  node_locale?: Maybe<ContentfulExpertConnectionPhotoNodeLocaleQueryString_2>;

  internal?: Maybe<ContentfulExpertConnectionPhotoInternalInputObject_2>;
}

export interface ContentfulExpertConnectionPhotoContentfulIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulExpertConnectionPhotoIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulExpertConnectionPhotoFileInputObject_2 {
  url?: Maybe<ContentfulExpertConnectionPhotoFileUrlQueryString_2>;

  details?: Maybe<ContentfulExpertConnectionPhotoFileDetailsInputObject_2>;

  fileName?: Maybe<ContentfulExpertConnectionPhotoFileFileNameQueryString_2>;

  contentType?: Maybe<
    ContentfulExpertConnectionPhotoFileContentTypeQueryString_2
  >;
}

export interface ContentfulExpertConnectionPhotoFileUrlQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulExpertConnectionPhotoFileDetailsInputObject_2 {
  size?: Maybe<ContentfulExpertConnectionPhotoFileDetailsSizeQueryInteger_2>;

  image?: Maybe<ContentfulExpertConnectionPhotoFileDetailsImageInputObject_2>;
}

export interface ContentfulExpertConnectionPhotoFileDetailsSizeQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ContentfulExpertConnectionPhotoFileDetailsImageInputObject_2 {
  width?: Maybe<
    ContentfulExpertConnectionPhotoFileDetailsImageWidthQueryInteger_2
  >;

  height?: Maybe<
    ContentfulExpertConnectionPhotoFileDetailsImageHeightQueryInteger_2
  >;
}

export interface ContentfulExpertConnectionPhotoFileDetailsImageWidthQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ContentfulExpertConnectionPhotoFileDetailsImageHeightQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ContentfulExpertConnectionPhotoFileFileNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulExpertConnectionPhotoFileContentTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulExpertConnectionPhotoTitleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulExpertConnectionPhotoDescriptionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulExpertConnectionPhotoNodeLocaleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulExpertConnectionPhotoInternalInputObject_2 {
  type?: Maybe<ContentfulExpertConnectionPhotoInternalTypeQueryString_2>;

  contentDigest?: Maybe<
    ContentfulExpertConnectionPhotoInternalContentDigestQueryString_2
  >;

  owner?: Maybe<ContentfulExpertConnectionPhotoInternalOwnerQueryString_2>;
}

export interface ContentfulExpertConnectionPhotoInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulExpertConnectionPhotoInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulExpertConnectionPhotoInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulExpertConnectionIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulExpertConnectionContentfulIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulExpertConnectionCreatedAtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulExpertConnectionUpdatedAtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulExpertConnectionInternalInputObject_2 {
  type?: Maybe<ContentfulExpertConnectionInternalTypeQueryString_2>;

  contentDigest?: Maybe<
    ContentfulExpertConnectionInternalContentDigestQueryString_2
  >;

  owner?: Maybe<ContentfulExpertConnectionInternalOwnerQueryString_2>;
}

export interface ContentfulExpertConnectionInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulExpertConnectionInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulExpertConnectionInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulExpertConnectionNodeLocaleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPageConnectionSort {
  fields: (Maybe<ContentfulPageConnectionSortByFieldsEnum>)[];

  order?: (Maybe<ContentfulPageConnectionSortOrderValues>)[];
}
/** Filter connection on its fields */
export interface FilterContentfulPage {
  slug?: Maybe<ContentfulPageConnectionSlugQueryString_2>;

  pageTitle?: Maybe<ContentfulPageConnectionPageTitleQueryString_2>;

  headerTitle?: Maybe<ContentfulPageConnectionHeaderTitleQueryString_2>;

  headerDescription?: Maybe<
    ContentfulPageConnectionHeaderDescriptionInputObject_2
  >;

  id?: Maybe<ContentfulPageConnectionIdQueryString_2>;

  contentful_id?: Maybe<ContentfulPageConnectionContentfulIdQueryString_2>;

  createdAt?: Maybe<ContentfulPageConnectionCreatedAtQueryString_2>;

  updatedAt?: Maybe<ContentfulPageConnectionUpdatedAtQueryString_2>;

  internal?: Maybe<ContentfulPageConnectionInternalInputObject_2>;

  node_locale?: Maybe<ContentfulPageConnectionNodeLocaleQueryString_2>;

  pageDescription?: Maybe<ContentfulPageConnectionPageDescriptionQueryString_2>;

  pageKeywords?: Maybe<ContentfulPageConnectionPageKeywordsQueryList_2>;
}

export interface ContentfulPageConnectionSlugQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPageConnectionPageTitleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPageConnectionHeaderTitleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPageConnectionHeaderDescriptionInputObject_2 {
  id?: Maybe<ContentfulPageConnectionHeaderDescriptionIdQueryString_2>;

  parent?: Maybe<ContentfulPageConnectionHeaderDescriptionParentQueryString_2>;

  children?: Maybe<
    ContentfulPageConnectionHeaderDescriptionChildrenQueryList_2
  >;

  headerDescription?: Maybe<
    ContentfulPageConnectionHeaderDescriptionHeaderDescriptionQueryString_2
  >;

  internal?: Maybe<
    ContentfulPageConnectionHeaderDescriptionInternalInputObject_2
  >;
}

export interface ContentfulPageConnectionHeaderDescriptionIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPageConnectionHeaderDescriptionParentQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPageConnectionHeaderDescriptionChildrenQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPageConnectionHeaderDescriptionHeaderDescriptionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPageConnectionHeaderDescriptionInternalInputObject_2 {
  type?: Maybe<
    ContentfulPageConnectionHeaderDescriptionInternalTypeQueryString_2
  >;

  mediaType?: Maybe<
    ContentfulPageConnectionHeaderDescriptionInternalMediaTypeQueryString_2
  >;

  content?: Maybe<
    ContentfulPageConnectionHeaderDescriptionInternalContentQueryString_2
  >;

  contentDigest?: Maybe<
    ContentfulPageConnectionHeaderDescriptionInternalContentDigestQueryString_2
  >;

  owner?: Maybe<
    ContentfulPageConnectionHeaderDescriptionInternalOwnerQueryString_2
  >;
}

export interface ContentfulPageConnectionHeaderDescriptionInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPageConnectionHeaderDescriptionInternalMediaTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPageConnectionHeaderDescriptionInternalContentQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPageConnectionHeaderDescriptionInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPageConnectionHeaderDescriptionInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPageConnectionIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPageConnectionContentfulIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPageConnectionCreatedAtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPageConnectionUpdatedAtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPageConnectionInternalInputObject_2 {
  type?: Maybe<ContentfulPageConnectionInternalTypeQueryString_2>;

  contentDigest?: Maybe<
    ContentfulPageConnectionInternalContentDigestQueryString_2
  >;

  owner?: Maybe<ContentfulPageConnectionInternalOwnerQueryString_2>;
}

export interface ContentfulPageConnectionInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPageConnectionInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPageConnectionInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPageConnectionNodeLocaleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPageConnectionPageDescriptionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPageConnectionPageKeywordsQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPageHeaderDescriptionTextNodeConnectionSort {
  fields: (Maybe<
    ContentfulPageHeaderDescriptionTextNodeConnectionSortByFieldsEnum
  >)[];

  order?: (Maybe<
    ContentfulPageHeaderDescriptionTextNodeConnectionSortOrderValues
  >)[];
}
/** Filter connection on its fields */
export interface FilterContentfulPageHeaderDescriptionTextNode {
  id?: Maybe<ContentfulPageHeaderDescriptionTextNodeConnectionIdQueryString_2>;

  headerDescription?: Maybe<
    ContentfulPageHeaderDescriptionTextNodeConnectionHeaderDescriptionQueryString_2
  >;

  internal?: Maybe<
    ContentfulPageHeaderDescriptionTextNodeConnectionInternalInputObject_2
  >;
}

export interface ContentfulPageHeaderDescriptionTextNodeConnectionIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPageHeaderDescriptionTextNodeConnectionHeaderDescriptionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPageHeaderDescriptionTextNodeConnectionInternalInputObject_2 {
  type?: Maybe<
    ContentfulPageHeaderDescriptionTextNodeConnectionInternalTypeQueryString_2
  >;

  mediaType?: Maybe<
    ContentfulPageHeaderDescriptionTextNodeConnectionInternalMediaTypeQueryString_2
  >;

  content?: Maybe<
    ContentfulPageHeaderDescriptionTextNodeConnectionInternalContentQueryString_2
  >;

  contentDigest?: Maybe<
    ContentfulPageHeaderDescriptionTextNodeConnectionInternalContentDigestQueryString_2
  >;

  owner?: Maybe<
    ContentfulPageHeaderDescriptionTextNodeConnectionInternalOwnerQueryString_2
  >;
}

export interface ContentfulPageHeaderDescriptionTextNodeConnectionInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPageHeaderDescriptionTextNodeConnectionInternalMediaTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPageHeaderDescriptionTextNodeConnectionInternalContentQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPageHeaderDescriptionTextNodeConnectionInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPageHeaderDescriptionTextNodeConnectionInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulDictionaryConnectionSort {
  fields: (Maybe<ContentfulDictionaryConnectionSortByFieldsEnum>)[];

  order?: (Maybe<ContentfulDictionaryConnectionSortOrderValues>)[];
}
/** Filter connection on its fields */
export interface FilterContentfulDictionary {
  slug?: Maybe<ContentfulDictionaryConnectionSlugQueryString_2>;

  title?: Maybe<ContentfulDictionaryConnectionTitleQueryString_2>;

  id?: Maybe<ContentfulDictionaryConnectionIdQueryString_2>;

  contentful_id?: Maybe<
    ContentfulDictionaryConnectionContentfulIdQueryString_2
  >;

  createdAt?: Maybe<ContentfulDictionaryConnectionCreatedAtQueryString_2>;

  updatedAt?: Maybe<ContentfulDictionaryConnectionUpdatedAtQueryString_2>;

  internal?: Maybe<ContentfulDictionaryConnectionInternalInputObject_2>;

  node_locale?: Maybe<ContentfulDictionaryConnectionNodeLocaleQueryString_2>;

  category?: Maybe<ContentfulDictionaryConnectionCategoryQueryString_2>;
}

export interface ContentfulDictionaryConnectionSlugQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulDictionaryConnectionTitleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulDictionaryConnectionIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulDictionaryConnectionContentfulIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulDictionaryConnectionCreatedAtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulDictionaryConnectionUpdatedAtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulDictionaryConnectionInternalInputObject_2 {
  type?: Maybe<ContentfulDictionaryConnectionInternalTypeQueryString_2>;

  contentDigest?: Maybe<
    ContentfulDictionaryConnectionInternalContentDigestQueryString_2
  >;

  owner?: Maybe<ContentfulDictionaryConnectionInternalOwnerQueryString_2>;
}

export interface ContentfulDictionaryConnectionInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulDictionaryConnectionInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulDictionaryConnectionInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulDictionaryConnectionNodeLocaleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulDictionaryConnectionCategoryQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionConnectionSort {
  fields: (Maybe<ContentfulServiceSectionConnectionSortByFieldsEnum>)[];

  order?: (Maybe<ContentfulServiceSectionConnectionSortOrderValues>)[];
}
/** Filter connection on its fields */
export interface FilterContentfulServiceSection {
  title?: Maybe<ContentfulServiceSectionConnectionTitleQueryString_2>;

  subtitle?: Maybe<ContentfulServiceSectionConnectionSubtitleQueryString_2>;

  list?: Maybe<ContentfulServiceSectionConnectionListQueryList_2>;

  order?: Maybe<ContentfulServiceSectionConnectionOrderQueryInteger_2>;

  thumbnail?: Maybe<ContentfulServiceSectionConnectionThumbnailInputObject_2>;

  service?: Maybe<ContentfulServiceSectionConnectionServiceQueryList_2>;

  description?: Maybe<
    ContentfulServiceSectionConnectionDescriptionInputObject_2
  >;

  id?: Maybe<ContentfulServiceSectionConnectionIdQueryString_2>;

  contentful_id?: Maybe<
    ContentfulServiceSectionConnectionContentfulIdQueryString_2
  >;

  createdAt?: Maybe<ContentfulServiceSectionConnectionCreatedAtQueryString_2>;

  updatedAt?: Maybe<ContentfulServiceSectionConnectionUpdatedAtQueryString_2>;

  internal?: Maybe<ContentfulServiceSectionConnectionInternalInputObject_2>;

  node_locale?: Maybe<
    ContentfulServiceSectionConnectionNodeLocaleQueryString_2
  >;
}

export interface ContentfulServiceSectionConnectionTitleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionConnectionSubtitleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionConnectionListQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionConnectionOrderQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ContentfulServiceSectionConnectionThumbnailInputObject_2 {
  contentful_id?: Maybe<
    ContentfulServiceSectionConnectionThumbnailContentfulIdQueryString_2
  >;

  id?: Maybe<ContentfulServiceSectionConnectionThumbnailIdQueryString_2>;

  file?: Maybe<ContentfulServiceSectionConnectionThumbnailFileInputObject_2>;

  title?: Maybe<ContentfulServiceSectionConnectionThumbnailTitleQueryString_2>;

  description?: Maybe<
    ContentfulServiceSectionConnectionThumbnailDescriptionQueryString_2
  >;

  node_locale?: Maybe<
    ContentfulServiceSectionConnectionThumbnailNodeLocaleQueryString_2
  >;

  internal?: Maybe<
    ContentfulServiceSectionConnectionThumbnailInternalInputObject_2
  >;
}

export interface ContentfulServiceSectionConnectionThumbnailContentfulIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionConnectionThumbnailIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionConnectionThumbnailFileInputObject_2 {
  url?: Maybe<ContentfulServiceSectionConnectionThumbnailFileUrlQueryString_2>;

  details?: Maybe<
    ContentfulServiceSectionConnectionThumbnailFileDetailsInputObject_2
  >;

  fileName?: Maybe<
    ContentfulServiceSectionConnectionThumbnailFileFileNameQueryString_2
  >;

  contentType?: Maybe<
    ContentfulServiceSectionConnectionThumbnailFileContentTypeQueryString_2
  >;
}

export interface ContentfulServiceSectionConnectionThumbnailFileUrlQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionConnectionThumbnailFileDetailsInputObject_2 {
  size?: Maybe<
    ContentfulServiceSectionConnectionThumbnailFileDetailsSizeQueryInteger_2
  >;

  image?: Maybe<
    ContentfulServiceSectionConnectionThumbnailFileDetailsImageInputObject_2
  >;
}

export interface ContentfulServiceSectionConnectionThumbnailFileDetailsSizeQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ContentfulServiceSectionConnectionThumbnailFileDetailsImageInputObject_2 {
  width?: Maybe<
    ContentfulServiceSectionConnectionThumbnailFileDetailsImageWidthQueryInteger_2
  >;

  height?: Maybe<
    ContentfulServiceSectionConnectionThumbnailFileDetailsImageHeightQueryInteger_2
  >;
}

export interface ContentfulServiceSectionConnectionThumbnailFileDetailsImageWidthQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ContentfulServiceSectionConnectionThumbnailFileDetailsImageHeightQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ContentfulServiceSectionConnectionThumbnailFileFileNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionConnectionThumbnailFileContentTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionConnectionThumbnailTitleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionConnectionThumbnailDescriptionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionConnectionThumbnailNodeLocaleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionConnectionThumbnailInternalInputObject_2 {
  type?: Maybe<
    ContentfulServiceSectionConnectionThumbnailInternalTypeQueryString_2
  >;

  contentDigest?: Maybe<
    ContentfulServiceSectionConnectionThumbnailInternalContentDigestQueryString_2
  >;

  owner?: Maybe<
    ContentfulServiceSectionConnectionThumbnailInternalOwnerQueryString_2
  >;
}

export interface ContentfulServiceSectionConnectionThumbnailInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionConnectionThumbnailInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionConnectionThumbnailInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionConnectionServiceQueryList_2 {
  elemMatch?: Maybe<ContentfulServiceSectionConnectionServiceInputObject_2>;
}

export interface ContentfulServiceSectionConnectionServiceInputObject_2 {
  title?: Maybe<ContentfulServiceSectionConnectionServiceTitleQueryString_2>;

  slug?: Maybe<ContentfulServiceSectionConnectionServiceSlugQueryString_2>;

  order?: Maybe<ContentfulServiceSectionConnectionServiceOrderQueryInteger_2>;

  id?: Maybe<ContentfulServiceSectionConnectionServiceIdQueryString_2>;

  contentful_id?: Maybe<
    ContentfulServiceSectionConnectionServiceContentfulIdQueryString_2
  >;

  createdAt?: Maybe<
    ContentfulServiceSectionConnectionServiceCreatedAtQueryString_2
  >;

  updatedAt?: Maybe<
    ContentfulServiceSectionConnectionServiceUpdatedAtQueryString_2
  >;

  parent?: Maybe<ContentfulServiceSectionConnectionServiceParentQueryString_2>;

  children?: Maybe<
    ContentfulServiceSectionConnectionServiceChildrenQueryList_2
  >;

  internal?: Maybe<
    ContentfulServiceSectionConnectionServiceInternalInputObject_2
  >;

  node_locale?: Maybe<
    ContentfulServiceSectionConnectionServiceNodeLocaleQueryString_2
  >;
}

export interface ContentfulServiceSectionConnectionServiceTitleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionConnectionServiceSlugQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionConnectionServiceOrderQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ContentfulServiceSectionConnectionServiceIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionConnectionServiceContentfulIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionConnectionServiceCreatedAtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionConnectionServiceUpdatedAtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionConnectionServiceParentQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionConnectionServiceChildrenQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionConnectionServiceInternalInputObject_2 {
  type?: Maybe<
    ContentfulServiceSectionConnectionServiceInternalTypeQueryString_2
  >;

  contentDigest?: Maybe<
    ContentfulServiceSectionConnectionServiceInternalContentDigestQueryString_2
  >;

  owner?: Maybe<
    ContentfulServiceSectionConnectionServiceInternalOwnerQueryString_2
  >;
}

export interface ContentfulServiceSectionConnectionServiceInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionConnectionServiceInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionConnectionServiceInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionConnectionServiceNodeLocaleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionConnectionDescriptionInputObject_2 {
  id?: Maybe<ContentfulServiceSectionConnectionDescriptionIdQueryString_2>;

  parent?: Maybe<
    ContentfulServiceSectionConnectionDescriptionParentQueryString_2
  >;

  children?: Maybe<
    ContentfulServiceSectionConnectionDescriptionChildrenQueryList_2
  >;

  description?: Maybe<
    ContentfulServiceSectionConnectionDescriptionDescriptionQueryString_2
  >;

  internal?: Maybe<
    ContentfulServiceSectionConnectionDescriptionInternalInputObject_2
  >;
}

export interface ContentfulServiceSectionConnectionDescriptionIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionConnectionDescriptionParentQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionConnectionDescriptionChildrenQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionConnectionDescriptionDescriptionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionConnectionDescriptionInternalInputObject_2 {
  type?: Maybe<
    ContentfulServiceSectionConnectionDescriptionInternalTypeQueryString_2
  >;

  mediaType?: Maybe<
    ContentfulServiceSectionConnectionDescriptionInternalMediaTypeQueryString_2
  >;

  content?: Maybe<
    ContentfulServiceSectionConnectionDescriptionInternalContentQueryString_2
  >;

  contentDigest?: Maybe<
    ContentfulServiceSectionConnectionDescriptionInternalContentDigestQueryString_2
  >;

  owner?: Maybe<
    ContentfulServiceSectionConnectionDescriptionInternalOwnerQueryString_2
  >;
}

export interface ContentfulServiceSectionConnectionDescriptionInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionConnectionDescriptionInternalMediaTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionConnectionDescriptionInternalContentQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionConnectionDescriptionInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionConnectionDescriptionInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionConnectionIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionConnectionContentfulIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionConnectionCreatedAtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionConnectionUpdatedAtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionConnectionInternalInputObject_2 {
  type?: Maybe<ContentfulServiceSectionConnectionInternalTypeQueryString_2>;

  contentDigest?: Maybe<
    ContentfulServiceSectionConnectionInternalContentDigestQueryString_2
  >;

  owner?: Maybe<ContentfulServiceSectionConnectionInternalOwnerQueryString_2>;
}

export interface ContentfulServiceSectionConnectionInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionConnectionInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionConnectionInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionConnectionNodeLocaleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionDescriptionTextNodeConnectionSort {
  fields: (Maybe<
    ContentfulServiceSectionDescriptionTextNodeConnectionSortByFieldsEnum
  >)[];

  order?: (Maybe<
    ContentfulServiceSectionDescriptionTextNodeConnectionSortOrderValues
  >)[];
}
/** Filter connection on its fields */
export interface FilterContentfulServiceSectionDescriptionTextNode {
  id?: Maybe<
    ContentfulServiceSectionDescriptionTextNodeConnectionIdQueryString_2
  >;

  description?: Maybe<
    ContentfulServiceSectionDescriptionTextNodeConnectionDescriptionQueryString_2
  >;

  internal?: Maybe<
    ContentfulServiceSectionDescriptionTextNodeConnectionInternalInputObject_2
  >;
}

export interface ContentfulServiceSectionDescriptionTextNodeConnectionIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionDescriptionTextNodeConnectionDescriptionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionDescriptionTextNodeConnectionInternalInputObject_2 {
  type?: Maybe<
    ContentfulServiceSectionDescriptionTextNodeConnectionInternalTypeQueryString_2
  >;

  mediaType?: Maybe<
    ContentfulServiceSectionDescriptionTextNodeConnectionInternalMediaTypeQueryString_2
  >;

  content?: Maybe<
    ContentfulServiceSectionDescriptionTextNodeConnectionInternalContentQueryString_2
  >;

  contentDigest?: Maybe<
    ContentfulServiceSectionDescriptionTextNodeConnectionInternalContentDigestQueryString_2
  >;

  owner?: Maybe<
    ContentfulServiceSectionDescriptionTextNodeConnectionInternalOwnerQueryString_2
  >;
}

export interface ContentfulServiceSectionDescriptionTextNodeConnectionInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionDescriptionTextNodeConnectionInternalMediaTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionDescriptionTextNodeConnectionInternalContentQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionDescriptionTextNodeConnectionInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionDescriptionTextNodeConnectionInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulStatisticsConnectionSort {
  fields: (Maybe<ContentfulStatisticsConnectionSortByFieldsEnum>)[];

  order?: (Maybe<ContentfulStatisticsConnectionSortOrderValues>)[];
}
/** Filter connection on its fields */
export interface FilterContentfulStatistics {
  title?: Maybe<ContentfulStatisticsConnectionTitleQueryString_2>;

  description?: Maybe<ContentfulStatisticsConnectionDescriptionQueryString_2>;

  order?: Maybe<ContentfulStatisticsConnectionOrderQueryInteger_2>;

  id?: Maybe<ContentfulStatisticsConnectionIdQueryString_2>;

  contentful_id?: Maybe<
    ContentfulStatisticsConnectionContentfulIdQueryString_2
  >;

  createdAt?: Maybe<ContentfulStatisticsConnectionCreatedAtQueryString_2>;

  updatedAt?: Maybe<ContentfulStatisticsConnectionUpdatedAtQueryString_2>;

  internal?: Maybe<ContentfulStatisticsConnectionInternalInputObject_2>;

  node_locale?: Maybe<ContentfulStatisticsConnectionNodeLocaleQueryString_2>;
}

export interface ContentfulStatisticsConnectionTitleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulStatisticsConnectionDescriptionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulStatisticsConnectionOrderQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ContentfulStatisticsConnectionIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulStatisticsConnectionContentfulIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulStatisticsConnectionCreatedAtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulStatisticsConnectionUpdatedAtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulStatisticsConnectionInternalInputObject_2 {
  type?: Maybe<ContentfulStatisticsConnectionInternalTypeQueryString_2>;

  contentDigest?: Maybe<
    ContentfulStatisticsConnectionInternalContentDigestQueryString_2
  >;

  owner?: Maybe<ContentfulStatisticsConnectionInternalOwnerQueryString_2>;
}

export interface ContentfulStatisticsConnectionInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulStatisticsConnectionInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulStatisticsConnectionInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulStatisticsConnectionNodeLocaleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulListConnectionSort {
  fields: (Maybe<ContentfulListConnectionSortByFieldsEnum>)[];

  order?: (Maybe<ContentfulListConnectionSortOrderValues>)[];
}
/** Filter connection on its fields */
export interface FilterContentfulList {
  title?: Maybe<ContentfulListConnectionTitleQueryString_2>;

  items?: Maybe<ContentfulListConnectionItemsQueryList_2>;

  order?: Maybe<ContentfulListConnectionOrderQueryInteger_2>;

  category?: Maybe<ContentfulListConnectionCategoryQueryList_2>;

  id?: Maybe<ContentfulListConnectionIdQueryString_2>;

  contentful_id?: Maybe<ContentfulListConnectionContentfulIdQueryString_2>;

  createdAt?: Maybe<ContentfulListConnectionCreatedAtQueryString_2>;

  updatedAt?: Maybe<ContentfulListConnectionUpdatedAtQueryString_2>;

  internal?: Maybe<ContentfulListConnectionInternalInputObject_2>;

  node_locale?: Maybe<ContentfulListConnectionNodeLocaleQueryString_2>;

  plugin?: Maybe<ContentfulListConnectionPluginQueryList_2>;
}

export interface ContentfulListConnectionTitleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulListConnectionItemsQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulListConnectionOrderQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ContentfulListConnectionCategoryQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulListConnectionIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulListConnectionContentfulIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulListConnectionCreatedAtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulListConnectionUpdatedAtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulListConnectionInternalInputObject_2 {
  type?: Maybe<ContentfulListConnectionInternalTypeQueryString_2>;

  contentDigest?: Maybe<
    ContentfulListConnectionInternalContentDigestQueryString_2
  >;

  owner?: Maybe<ContentfulListConnectionInternalOwnerQueryString_2>;
}

export interface ContentfulListConnectionInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulListConnectionInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulListConnectionInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulListConnectionNodeLocaleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulListConnectionPluginQueryList_2 {
  elemMatch?: Maybe<ContentfulListConnectionPluginInputObject_2>;
}

export interface ContentfulListConnectionPluginInputObject_2 {
  title?: Maybe<ContentfulListConnectionPluginTitleQueryString_2>;

  type?: Maybe<ContentfulListConnectionPluginTypeQueryList_2>;

  id?: Maybe<ContentfulListConnectionPluginIdQueryString_2>;

  contentful_id?: Maybe<
    ContentfulListConnectionPluginContentfulIdQueryString_2
  >;

  createdAt?: Maybe<ContentfulListConnectionPluginCreatedAtQueryString_2>;

  updatedAt?: Maybe<ContentfulListConnectionPluginUpdatedAtQueryString_2>;

  parent?: Maybe<ContentfulListConnectionPluginParentQueryString_2>;

  internal?: Maybe<ContentfulListConnectionPluginInternalInputObject_2>;

  node_locale?: Maybe<ContentfulListConnectionPluginNodeLocaleQueryString_2>;
}

export interface ContentfulListConnectionPluginTitleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulListConnectionPluginTypeQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulListConnectionPluginIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulListConnectionPluginContentfulIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulListConnectionPluginCreatedAtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulListConnectionPluginUpdatedAtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulListConnectionPluginParentQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulListConnectionPluginInternalInputObject_2 {
  type?: Maybe<ContentfulListConnectionPluginInternalTypeQueryString_2>;

  contentDigest?: Maybe<
    ContentfulListConnectionPluginInternalContentDigestQueryString_2
  >;

  owner?: Maybe<ContentfulListConnectionPluginInternalOwnerQueryString_2>;
}

export interface ContentfulListConnectionPluginInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulListConnectionPluginInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulListConnectionPluginInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulListConnectionPluginNodeLocaleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulAssetConnectionSort {
  fields: (Maybe<ContentfulAssetConnectionSortByFieldsEnum>)[];

  order?: (Maybe<ContentfulAssetConnectionSortOrderValues>)[];
}
/** Filter connection on its fields */
export interface FilterContentfulAsset {
  contentful_id?: Maybe<ContentfulAssetConnectionContentfulIdQueryString_2>;

  id?: Maybe<ContentfulAssetConnectionIdQueryString_2>;

  file?: Maybe<ContentfulAssetConnectionFileInputObject_2>;

  title?: Maybe<ContentfulAssetConnectionTitleQueryString_2>;

  description?: Maybe<ContentfulAssetConnectionDescriptionQueryString_2>;

  node_locale?: Maybe<ContentfulAssetConnectionNodeLocaleQueryString_2>;

  internal?: Maybe<ContentfulAssetConnectionInternalInputObject_2>;

  fixed?: Maybe<FixedTypeName_4>;

  resolutions?: Maybe<ResolutionsTypeName_4>;

  fluid?: Maybe<FluidTypeName_4>;

  sizes?: Maybe<SizesTypeName_4>;

  resize?: Maybe<ResizeTypeName_4>;
}

export interface ContentfulAssetConnectionContentfulIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulAssetConnectionIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulAssetConnectionFileInputObject_2 {
  url?: Maybe<ContentfulAssetConnectionFileUrlQueryString_2>;

  details?: Maybe<ContentfulAssetConnectionFileDetailsInputObject_2>;

  fileName?: Maybe<ContentfulAssetConnectionFileFileNameQueryString_2>;

  contentType?: Maybe<ContentfulAssetConnectionFileContentTypeQueryString_2>;
}

export interface ContentfulAssetConnectionFileUrlQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulAssetConnectionFileDetailsInputObject_2 {
  size?: Maybe<ContentfulAssetConnectionFileDetailsSizeQueryInteger_2>;

  image?: Maybe<ContentfulAssetConnectionFileDetailsImageInputObject_2>;
}

export interface ContentfulAssetConnectionFileDetailsSizeQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ContentfulAssetConnectionFileDetailsImageInputObject_2 {
  width?: Maybe<ContentfulAssetConnectionFileDetailsImageWidthQueryInteger_2>;

  height?: Maybe<ContentfulAssetConnectionFileDetailsImageHeightQueryInteger_2>;
}

export interface ContentfulAssetConnectionFileDetailsImageWidthQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ContentfulAssetConnectionFileDetailsImageHeightQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ContentfulAssetConnectionFileFileNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulAssetConnectionFileContentTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulAssetConnectionTitleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulAssetConnectionDescriptionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulAssetConnectionNodeLocaleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulAssetConnectionInternalInputObject_2 {
  type?: Maybe<ContentfulAssetConnectionInternalTypeQueryString_2>;

  contentDigest?: Maybe<
    ContentfulAssetConnectionInternalContentDigestQueryString_2
  >;

  owner?: Maybe<ContentfulAssetConnectionInternalOwnerQueryString_2>;
}

export interface ContentfulAssetConnectionInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulAssetConnectionInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulAssetConnectionInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FixedTypeName_4 {
  base64?: Maybe<FixedBase64QueryString_4>;

  tracedSVG?: Maybe<FixedTracedSvgQueryString_4>;

  aspectRatio?: Maybe<FixedAspectRatioQueryFloat_4>;

  width?: Maybe<FixedWidthQueryFloat_4>;

  height?: Maybe<FixedHeightQueryFloat_4>;

  src?: Maybe<FixedSrcQueryString_4>;

  srcSet?: Maybe<FixedSrcSetQueryString_4>;

  srcWebp?: Maybe<FixedSrcWebpQueryString_4>;

  srcSetWebp?: Maybe<FixedSrcSetWebpQueryString_4>;
}

export interface FixedBase64QueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FixedTracedSvgQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FixedAspectRatioQueryFloat_4 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FixedWidthQueryFloat_4 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FixedHeightQueryFloat_4 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FixedSrcQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FixedSrcSetQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FixedSrcWebpQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FixedSrcSetWebpQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ResolutionsTypeName_4 {
  base64?: Maybe<ResolutionsBase64QueryString_4>;

  tracedSVG?: Maybe<ResolutionsTracedSvgQueryString_4>;

  aspectRatio?: Maybe<ResolutionsAspectRatioQueryFloat_4>;

  width?: Maybe<ResolutionsWidthQueryFloat_4>;

  height?: Maybe<ResolutionsHeightQueryFloat_4>;

  src?: Maybe<ResolutionsSrcQueryString_4>;

  srcSet?: Maybe<ResolutionsSrcSetQueryString_4>;

  srcWebp?: Maybe<ResolutionsSrcWebpQueryString_4>;

  srcSetWebp?: Maybe<ResolutionsSrcSetWebpQueryString_4>;
}

export interface ResolutionsBase64QueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ResolutionsTracedSvgQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ResolutionsAspectRatioQueryFloat_4 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ResolutionsWidthQueryFloat_4 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ResolutionsHeightQueryFloat_4 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ResolutionsSrcQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ResolutionsSrcSetQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ResolutionsSrcWebpQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ResolutionsSrcSetWebpQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FluidTypeName_4 {
  base64?: Maybe<FluidBase64QueryString_4>;

  tracedSVG?: Maybe<FluidTracedSvgQueryString_4>;

  aspectRatio?: Maybe<FluidAspectRatioQueryFloat_4>;

  src?: Maybe<FluidSrcQueryString_4>;

  srcSet?: Maybe<FluidSrcSetQueryString_4>;

  srcWebp?: Maybe<FluidSrcWebpQueryString_4>;

  srcSetWebp?: Maybe<FluidSrcSetWebpQueryString_4>;

  sizes?: Maybe<FluidSizesQueryString_4>;
}

export interface FluidBase64QueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FluidTracedSvgQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FluidAspectRatioQueryFloat_4 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FluidSrcQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FluidSrcSetQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FluidSrcWebpQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FluidSrcSetWebpQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FluidSizesQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SizesTypeName_4 {
  base64?: Maybe<SizesBase64QueryString_4>;

  tracedSVG?: Maybe<SizesTracedSvgQueryString_4>;

  aspectRatio?: Maybe<SizesAspectRatioQueryFloat_4>;

  src?: Maybe<SizesSrcQueryString_4>;

  srcSet?: Maybe<SizesSrcSetQueryString_4>;

  srcWebp?: Maybe<SizesSrcWebpQueryString_4>;

  srcSetWebp?: Maybe<SizesSrcSetWebpQueryString_4>;

  sizes?: Maybe<SizesSizesQueryString_4>;
}

export interface SizesBase64QueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SizesTracedSvgQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SizesAspectRatioQueryFloat_4 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SizesSrcQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SizesSrcSetQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SizesSrcWebpQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SizesSrcSetWebpQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SizesSizesQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ResizeTypeName_4 {
  base64?: Maybe<ResizeBase64QueryString_4>;

  tracedSVG?: Maybe<ResizeTracedSvgQueryString_4>;

  src?: Maybe<ResizeSrcQueryString_4>;

  width?: Maybe<ResizeWidthQueryInt_4>;

  height?: Maybe<ResizeHeightQueryInt_4>;

  aspectRatio?: Maybe<ResizeAspectRatioQueryFloat_4>;
}

export interface ResizeBase64QueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ResizeTracedSvgQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ResizeSrcQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ResizeWidthQueryInt_4 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ResizeHeightQueryInt_4 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ResizeAspectRatioQueryFloat_4 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface MarkdownRemarkConnectionSort {
  fields: (Maybe<MarkdownRemarkConnectionSortByFieldsEnum>)[];

  order?: (Maybe<MarkdownRemarkConnectionSortOrderValues>)[];
}
/** Filter connection on its fields */
export interface FilterMarkdownRemark {
  id?: Maybe<MarkdownRemarkConnectionIdQueryString_2>;

  internal?: Maybe<MarkdownRemarkConnectionInternalInputObject_2>;

  frontmatter?: Maybe<MarkdownRemarkConnectionFrontmatterInputObject_2>;

  rawMarkdownBody?: Maybe<MarkdownRemarkConnectionRawMarkdownBodyQueryString_2>;

  html?: Maybe<HtmlQueryString_4>;

  excerpt?: Maybe<ExcerptQueryString_4>;

  headings?: Maybe<HeadingsQueryList_4>;

  timeToRead?: Maybe<TimeToReadQueryInt_4>;

  tableOfContents?: Maybe<TableOfContentsQueryString_4>;

  wordCount?: Maybe<WordCountTypeName_4>;
}

export interface MarkdownRemarkConnectionIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface MarkdownRemarkConnectionInternalInputObject_2 {
  content?: Maybe<MarkdownRemarkConnectionInternalContentQueryString_2>;

  type?: Maybe<MarkdownRemarkConnectionInternalTypeQueryString_2>;

  contentDigest?: Maybe<
    MarkdownRemarkConnectionInternalContentDigestQueryString_2
  >;

  owner?: Maybe<MarkdownRemarkConnectionInternalOwnerQueryString_2>;
}

export interface MarkdownRemarkConnectionInternalContentQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface MarkdownRemarkConnectionInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface MarkdownRemarkConnectionInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface MarkdownRemarkConnectionInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface MarkdownRemarkConnectionFrontmatterInputObject_2 {
  title?: Maybe<MarkdownRemarkConnectionFrontmatterTitleQueryString_2>;
}

export interface MarkdownRemarkConnectionFrontmatterTitleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface MarkdownRemarkConnectionRawMarkdownBodyQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface HtmlQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ExcerptQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface HeadingsQueryList_4 {
  elemMatch?: Maybe<HeadingsListElemTypeName_4>;
}

export interface HeadingsListElemTypeName_4 {
  value?: Maybe<HeadingsListElemValueQueryString_4>;

  depth?: Maybe<HeadingsListElemDepthQueryInt_4>;
}

export interface HeadingsListElemValueQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface HeadingsListElemDepthQueryInt_4 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface TimeToReadQueryInt_4 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface TableOfContentsQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface WordCountTypeName_4 {
  paragraphs?: Maybe<WordCountParagraphsQueryInt_4>;

  sentences?: Maybe<WordCountSentencesQueryInt_4>;

  words?: Maybe<WordCountWordsQueryInt_4>;
}

export interface WordCountParagraphsQueryInt_4 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface WordCountSentencesQueryInt_4 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface WordCountWordsQueryInt_4 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ContentfulPluginConnectionSort {
  fields: (Maybe<ContentfulPluginConnectionSortByFieldsEnum>)[];

  order?: (Maybe<ContentfulPluginConnectionSortOrderValues>)[];
}
/** Filter connection on its fields */
export interface FilterContentfulPlugin {
  title?: Maybe<ContentfulPluginConnectionTitleQueryString_2>;

  type?: Maybe<ContentfulPluginConnectionTypeQueryList_2>;

  items?: Maybe<ContentfulPluginConnectionItemsQueryList_2>;

  service?: Maybe<ContentfulPluginConnectionServiceQueryList_2>;

  id?: Maybe<ContentfulPluginConnectionIdQueryString_2>;

  contentful_id?: Maybe<ContentfulPluginConnectionContentfulIdQueryString_2>;

  createdAt?: Maybe<ContentfulPluginConnectionCreatedAtQueryString_2>;

  updatedAt?: Maybe<ContentfulPluginConnectionUpdatedAtQueryString_2>;

  internal?: Maybe<ContentfulPluginConnectionInternalInputObject_2>;

  node_locale?: Maybe<ContentfulPluginConnectionNodeLocaleQueryString_2>;
}

export interface ContentfulPluginConnectionTitleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPluginConnectionTypeQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPluginConnectionItemsQueryList_2 {
  elemMatch?: Maybe<ContentfulPluginConnectionItemsInputObject_2>;
}

export interface ContentfulPluginConnectionItemsInputObject_2 {
  title?: Maybe<ContentfulPluginConnectionItemsTitleQueryString_2>;

  items?: Maybe<ContentfulPluginConnectionItemsItemsQueryList_2>;

  order?: Maybe<ContentfulPluginConnectionItemsOrderQueryInteger_2>;

  category?: Maybe<ContentfulPluginConnectionItemsCategoryQueryList_2>;

  id?: Maybe<ContentfulPluginConnectionItemsIdQueryString_2>;

  contentful_id?: Maybe<
    ContentfulPluginConnectionItemsContentfulIdQueryString_2
  >;

  createdAt?: Maybe<ContentfulPluginConnectionItemsCreatedAtQueryString_2>;

  updatedAt?: Maybe<ContentfulPluginConnectionItemsUpdatedAtQueryString_2>;

  parent?: Maybe<ContentfulPluginConnectionItemsParentQueryString_2>;

  internal?: Maybe<ContentfulPluginConnectionItemsInternalInputObject_2>;

  node_locale?: Maybe<ContentfulPluginConnectionItemsNodeLocaleQueryString_2>;
}

export interface ContentfulPluginConnectionItemsTitleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPluginConnectionItemsItemsQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPluginConnectionItemsOrderQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ContentfulPluginConnectionItemsCategoryQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPluginConnectionItemsIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPluginConnectionItemsContentfulIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPluginConnectionItemsCreatedAtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPluginConnectionItemsUpdatedAtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPluginConnectionItemsParentQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPluginConnectionItemsInternalInputObject_2 {
  type?: Maybe<ContentfulPluginConnectionItemsInternalTypeQueryString_2>;

  contentDigest?: Maybe<
    ContentfulPluginConnectionItemsInternalContentDigestQueryString_2
  >;

  owner?: Maybe<ContentfulPluginConnectionItemsInternalOwnerQueryString_2>;
}

export interface ContentfulPluginConnectionItemsInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPluginConnectionItemsInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPluginConnectionItemsInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPluginConnectionItemsNodeLocaleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPluginConnectionServiceQueryList_2 {
  elemMatch?: Maybe<ContentfulPluginConnectionServiceInputObject_2>;
}

export interface ContentfulPluginConnectionServiceInputObject_2 {
  title?: Maybe<ContentfulPluginConnectionServiceTitleQueryString_2>;

  slug?: Maybe<ContentfulPluginConnectionServiceSlugQueryString_2>;

  order?: Maybe<ContentfulPluginConnectionServiceOrderQueryInteger_2>;

  id?: Maybe<ContentfulPluginConnectionServiceIdQueryString_2>;

  contentful_id?: Maybe<
    ContentfulPluginConnectionServiceContentfulIdQueryString_2
  >;

  createdAt?: Maybe<ContentfulPluginConnectionServiceCreatedAtQueryString_2>;

  updatedAt?: Maybe<ContentfulPluginConnectionServiceUpdatedAtQueryString_2>;

  parent?: Maybe<ContentfulPluginConnectionServiceParentQueryString_2>;

  children?: Maybe<ContentfulPluginConnectionServiceChildrenQueryList_2>;

  internal?: Maybe<ContentfulPluginConnectionServiceInternalInputObject_2>;

  node_locale?: Maybe<ContentfulPluginConnectionServiceNodeLocaleQueryString_2>;
}

export interface ContentfulPluginConnectionServiceTitleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPluginConnectionServiceSlugQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPluginConnectionServiceOrderQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ContentfulPluginConnectionServiceIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPluginConnectionServiceContentfulIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPluginConnectionServiceCreatedAtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPluginConnectionServiceUpdatedAtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPluginConnectionServiceParentQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPluginConnectionServiceChildrenQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPluginConnectionServiceInternalInputObject_2 {
  type?: Maybe<ContentfulPluginConnectionServiceInternalTypeQueryString_2>;

  contentDigest?: Maybe<
    ContentfulPluginConnectionServiceInternalContentDigestQueryString_2
  >;

  owner?: Maybe<ContentfulPluginConnectionServiceInternalOwnerQueryString_2>;
}

export interface ContentfulPluginConnectionServiceInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPluginConnectionServiceInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPluginConnectionServiceInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPluginConnectionServiceNodeLocaleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPluginConnectionIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPluginConnectionContentfulIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPluginConnectionCreatedAtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPluginConnectionUpdatedAtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPluginConnectionInternalInputObject_2 {
  type?: Maybe<ContentfulPluginConnectionInternalTypeQueryString_2>;

  contentDigest?: Maybe<
    ContentfulPluginConnectionInternalContentDigestQueryString_2
  >;

  owner?: Maybe<ContentfulPluginConnectionInternalOwnerQueryString_2>;
}

export interface ContentfulPluginConnectionInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPluginConnectionInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPluginConnectionInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPluginConnectionNodeLocaleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionSort {
  fields: (Maybe<SitePageConnectionSortByFieldsEnum>)[];

  order?: (Maybe<SitePageConnectionSortOrderValues>)[];
}
/** Filter connection on its fields */
export interface FilterSitePage {
  jsonName?: Maybe<SitePageConnectionJsonNameQueryString>;

  internalComponentName?: Maybe<
    SitePageConnectionInternalComponentNameQueryString
  >;

  path?: Maybe<SitePageConnectionPathQueryString_2>;

  component?: Maybe<SitePageConnectionComponentQueryString>;

  componentChunkName?: Maybe<SitePageConnectionComponentChunkNameQueryString>;

  context?: Maybe<SitePageConnectionContextInputObject>;

  pluginCreator?: Maybe<SitePageConnectionPluginCreatorInputObject>;

  pluginCreatorId?: Maybe<SitePageConnectionPluginCreatorIdQueryString_2>;

  componentPath?: Maybe<SitePageConnectionComponentPathQueryString>;

  id?: Maybe<SitePageConnectionIdQueryString_2>;

  internal?: Maybe<SitePageConnectionInternalInputObject_2>;
}

export interface SitePageConnectionJsonNameQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionInternalComponentNameQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPathQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionComponentQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionComponentChunkNameQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextInputObject {
  slug?: Maybe<SitePageConnectionContextSlugQueryString>;

  lang?: Maybe<SitePageConnectionContextLangQueryString>;
}

export interface SitePageConnectionContextSlugQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextLangQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorInputObject {
  resolve?: Maybe<SitePageConnectionPluginCreatorResolveQueryString>;

  id?: Maybe<SitePageConnectionPluginCreatorIdQueryString>;

  name?: Maybe<SitePageConnectionPluginCreatorNameQueryString>;

  version?: Maybe<SitePageConnectionPluginCreatorVersionQueryString>;

  pluginOptions?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsInputObject
  >;

  nodeAPIs?: Maybe<SitePageConnectionPluginCreatorNodeApIsQueryList>;

  browserAPIs?: Maybe<SitePageConnectionPluginCreatorBrowserApIsQueryList>;

  ssrAPIs?: Maybe<SitePageConnectionPluginCreatorSsrApIsQueryList>;

  pluginFilepath?: Maybe<
    SitePageConnectionPluginCreatorPluginFilepathQueryString
  >;

  packageJson?: Maybe<SitePageConnectionPluginCreatorPackageJsonInputObject>;

  internal?: Maybe<SitePageConnectionPluginCreatorInternalInputObject>;
}

export interface SitePageConnectionPluginCreatorResolveQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorIdQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorNameQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorVersionQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsInputObject {
  plugins?: Maybe<SitePageConnectionPluginCreatorPluginOptionsPluginsQueryList>;

  name?: Maybe<SitePageConnectionPluginCreatorPluginOptionsNameQueryString>;

  path?: Maybe<SitePageConnectionPluginCreatorPluginOptionsPathQueryString>;

  maxWidth?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsMaxWidthQueryInteger
  >;

  backgroundColor?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsBackgroundColorQueryString
  >;

  pathToConfigModule?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsPathToConfigModuleQueryString
  >;

  includePaths?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsIncludePathsQueryList
  >;

  src?: Maybe<SitePageConnectionPluginCreatorPluginOptionsSrcQueryString>;

  assets?: Maybe<SitePageConnectionPluginCreatorPluginOptionsAssetsQueryString>;

  components?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsComponentsQueryString
  >;

  pages?: Maybe<SitePageConnectionPluginCreatorPluginOptionsPagesQueryString>;

  styles?: Maybe<SitePageConnectionPluginCreatorPluginOptionsStylesQueryString>;

  templates?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsTemplatesQueryString
  >;

  utils?: Maybe<SitePageConnectionPluginCreatorPluginOptionsUtilsQueryString>;

  spaceId?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsSpaceIdQueryString
  >;

  accessToken?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsAccessTokenQueryString
  >;

  host?: Maybe<SitePageConnectionPluginCreatorPluginOptionsHostQueryString>;

  environment?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsEnvironmentQueryString
  >;

  short_name?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsShortNameQueryString
  >;

  start_url?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsStartUrlQueryString
  >;

  background_color?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsBackgroundColorQueryString_2
  >;

  theme_color?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsThemeColorQueryString
  >;

  display?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsDisplayQueryString
  >;

  icon?: Maybe<SitePageConnectionPluginCreatorPluginOptionsIconQueryString>;

  include_favicon?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsIncludeFaviconQueryBoolean
  >;

  sitemap?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsSitemapQueryString
  >;

  policy?: Maybe<SitePageConnectionPluginCreatorPluginOptionsPolicyQueryList>;

  output?: Maybe<SitePageConnectionPluginCreatorPluginOptionsOutputQueryString>;

  exclude?: Maybe<SitePageConnectionPluginCreatorPluginOptionsExcludeQueryList>;

  query?: Maybe<SitePageConnectionPluginCreatorPluginOptionsQueryQueryString>;

  headers?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsHeadersInputObject
  >;

  pathCheck?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsPathCheckQueryBoolean
  >;
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsQueryList {
  elemMatch?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsPluginsInputObject
  >;
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsInputObject {
  resolve?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsPluginsResolveQueryString
  >;

  id?: Maybe<SitePageConnectionPluginCreatorPluginOptionsPluginsIdQueryString>;

  name?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsPluginsNameQueryString
  >;

  version?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsPluginsVersionQueryString
  >;

  pluginOptions?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsInputObject
  >;

  browserAPIs?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsPluginsBrowserApIsQueryList
  >;

  ssrAPIs?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsPluginsSsrApIsQueryList
  >;

  pluginFilepath?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsPluginsPluginFilepathQueryString
  >;
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsResolveQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsIdQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsNameQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsVersionQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsInputObject {
  maxWidth?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger
  >;

  backgroundColor?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsBackgroundColorQueryString
  >;
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsBackgroundColorQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsBrowserApIsQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsSsrApIsQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsPluginFilepathQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsNameQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsPathQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsMaxWidthQueryInteger {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsBackgroundColorQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsPathToConfigModuleQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsIncludePathsQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsSrcQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsAssetsQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsComponentsQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsPagesQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsStylesQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsTemplatesQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsUtilsQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsSpaceIdQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsAccessTokenQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsHostQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsEnvironmentQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsShortNameQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsStartUrlQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsBackgroundColorQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsThemeColorQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsDisplayQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsIconQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsIncludeFaviconQueryBoolean {
  eq?: Maybe<boolean>;

  ne?: Maybe<boolean>;

  in?: Maybe<(Maybe<boolean>)[]>;

  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsSitemapQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsPolicyQueryList {
  elemMatch?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsPolicyInputObject
  >;
}

export interface SitePageConnectionPluginCreatorPluginOptionsPolicyInputObject {
  userAgent?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsPolicyUserAgentQueryString
  >;

  allow?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsPolicyAllowQueryString
  >;
}

export interface SitePageConnectionPluginCreatorPluginOptionsPolicyUserAgentQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsPolicyAllowQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsOutputQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsExcludeQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsQueryQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsHeadersInputObject {
  _sw_js?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsHeadersSwJsQueryList
  >;
}

export interface SitePageConnectionPluginCreatorPluginOptionsHeadersSwJsQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsPathCheckQueryBoolean {
  eq?: Maybe<boolean>;

  ne?: Maybe<boolean>;

  in?: Maybe<(Maybe<boolean>)[]>;

  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface SitePageConnectionPluginCreatorNodeApIsQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorBrowserApIsQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorSsrApIsQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginFilepathQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPackageJsonInputObject {
  name?: Maybe<SitePageConnectionPluginCreatorPackageJsonNameQueryString>;

  description?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonDescriptionQueryString
  >;

  version?: Maybe<SitePageConnectionPluginCreatorPackageJsonVersionQueryString>;

  main?: Maybe<SitePageConnectionPluginCreatorPackageJsonMainQueryString>;

  author?: Maybe<SitePageConnectionPluginCreatorPackageJsonAuthorQueryString>;

  license?: Maybe<SitePageConnectionPluginCreatorPackageJsonLicenseQueryString>;

  dependencies?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonDependenciesQueryList
  >;

  devDependencies?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonDevDependenciesQueryList
  >;

  peerDependencies?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonPeerDependenciesQueryList
  >;

  keywords?: Maybe<SitePageConnectionPluginCreatorPackageJsonKeywordsQueryList>;
}

export interface SitePageConnectionPluginCreatorPackageJsonNameQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPackageJsonDescriptionQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPackageJsonVersionQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPackageJsonMainQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPackageJsonAuthorQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPackageJsonLicenseQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPackageJsonDependenciesQueryList {
  elemMatch?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonDependenciesInputObject
  >;
}

export interface SitePageConnectionPluginCreatorPackageJsonDependenciesInputObject {
  name?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonDependenciesNameQueryString
  >;

  version?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonDependenciesVersionQueryString
  >;
}

export interface SitePageConnectionPluginCreatorPackageJsonDependenciesNameQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPackageJsonDependenciesVersionQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPackageJsonDevDependenciesQueryList {
  elemMatch?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonDevDependenciesInputObject
  >;
}

export interface SitePageConnectionPluginCreatorPackageJsonDevDependenciesInputObject {
  name?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonDevDependenciesNameQueryString
  >;

  version?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonDevDependenciesVersionQueryString
  >;
}

export interface SitePageConnectionPluginCreatorPackageJsonDevDependenciesNameQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPackageJsonDevDependenciesVersionQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPackageJsonPeerDependenciesQueryList {
  elemMatch?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonPeerDependenciesInputObject
  >;
}

export interface SitePageConnectionPluginCreatorPackageJsonPeerDependenciesInputObject {
  name?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonPeerDependenciesNameQueryString
  >;

  version?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonPeerDependenciesVersionQueryString
  >;
}

export interface SitePageConnectionPluginCreatorPackageJsonPeerDependenciesNameQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPackageJsonPeerDependenciesVersionQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPackageJsonKeywordsQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorInternalInputObject {
  contentDigest?: Maybe<
    SitePageConnectionPluginCreatorInternalContentDigestQueryString
  >;

  type?: Maybe<SitePageConnectionPluginCreatorInternalTypeQueryString>;

  owner?: Maybe<SitePageConnectionPluginCreatorInternalOwnerQueryString>;
}

export interface SitePageConnectionPluginCreatorInternalContentDigestQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorInternalTypeQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorInternalOwnerQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionComponentPathQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionInternalInputObject_2 {
  type?: Maybe<SitePageConnectionInternalTypeQueryString_2>;

  contentDigest?: Maybe<SitePageConnectionInternalContentDigestQueryString_2>;

  description?: Maybe<SitePageConnectionInternalDescriptionQueryString>;

  owner?: Maybe<SitePageConnectionInternalOwnerQueryString_2>;
}

export interface SitePageConnectionInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionInternalDescriptionQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginResolveQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginVersionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPluginOptionsInputObject_2 {
  plugins?: Maybe<SitePluginPluginOptionsPluginsQueryList_2>;

  name?: Maybe<SitePluginPluginOptionsNameQueryString_2>;

  path?: Maybe<SitePluginPluginOptionsPathQueryString_2>;

  maxWidth?: Maybe<SitePluginPluginOptionsMaxWidthQueryInteger_2>;

  backgroundColor?: Maybe<SitePluginPluginOptionsBackgroundColorQueryString_3>;

  pathToConfigModule?: Maybe<
    SitePluginPluginOptionsPathToConfigModuleQueryString_2
  >;

  includePaths?: Maybe<SitePluginPluginOptionsIncludePathsQueryList_2>;

  src?: Maybe<SitePluginPluginOptionsSrcQueryString_2>;

  assets?: Maybe<SitePluginPluginOptionsAssetsQueryString_2>;

  components?: Maybe<SitePluginPluginOptionsComponentsQueryString_2>;

  pages?: Maybe<SitePluginPluginOptionsPagesQueryString_2>;

  styles?: Maybe<SitePluginPluginOptionsStylesQueryString_2>;

  templates?: Maybe<SitePluginPluginOptionsTemplatesQueryString_2>;

  utils?: Maybe<SitePluginPluginOptionsUtilsQueryString_2>;

  spaceId?: Maybe<SitePluginPluginOptionsSpaceIdQueryString_2>;

  accessToken?: Maybe<SitePluginPluginOptionsAccessTokenQueryString_2>;

  host?: Maybe<SitePluginPluginOptionsHostQueryString_2>;

  environment?: Maybe<SitePluginPluginOptionsEnvironmentQueryString_2>;

  short_name?: Maybe<SitePluginPluginOptionsShortNameQueryString_2>;

  start_url?: Maybe<SitePluginPluginOptionsStartUrlQueryString_2>;

  background_color?: Maybe<SitePluginPluginOptionsBackgroundColorQueryString_4>;

  theme_color?: Maybe<SitePluginPluginOptionsThemeColorQueryString_2>;

  display?: Maybe<SitePluginPluginOptionsDisplayQueryString_2>;

  icon?: Maybe<SitePluginPluginOptionsIconQueryString_2>;

  include_favicon?: Maybe<SitePluginPluginOptionsIncludeFaviconQueryBoolean_2>;

  sitemap?: Maybe<SitePluginPluginOptionsSitemapQueryString_2>;

  policy?: Maybe<SitePluginPluginOptionsPolicyQueryList_2>;

  output?: Maybe<SitePluginPluginOptionsOutputQueryString_2>;

  exclude?: Maybe<SitePluginPluginOptionsExcludeQueryList_2>;

  query?: Maybe<SitePluginPluginOptionsQueryQueryString_2>;

  headers?: Maybe<SitePluginPluginOptionsHeadersInputObject_2>;

  pathCheck?: Maybe<SitePluginPluginOptionsPathCheckQueryBoolean_2>;
}

export interface SitePluginPluginOptionsPluginsQueryList_2 {
  elemMatch?: Maybe<SitePluginPluginOptionsPluginsInputObject_2>;
}

export interface SitePluginPluginOptionsPluginsInputObject_2 {
  resolve?: Maybe<SitePluginPluginOptionsPluginsResolveQueryString_2>;

  id?: Maybe<SitePluginPluginOptionsPluginsIdQueryString_2>;

  name?: Maybe<SitePluginPluginOptionsPluginsNameQueryString_2>;

  version?: Maybe<SitePluginPluginOptionsPluginsVersionQueryString_2>;

  pluginOptions?: Maybe<
    SitePluginPluginOptionsPluginsPluginOptionsInputObject_2
  >;

  browserAPIs?: Maybe<SitePluginPluginOptionsPluginsBrowserApIsQueryList_2>;

  ssrAPIs?: Maybe<SitePluginPluginOptionsPluginsSsrApIsQueryList_2>;

  pluginFilepath?: Maybe<
    SitePluginPluginOptionsPluginsPluginFilepathQueryString_2
  >;
}

export interface SitePluginPluginOptionsPluginsResolveQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPluginOptionsPluginsIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPluginOptionsPluginsNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPluginOptionsPluginsVersionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPluginOptionsPluginsPluginOptionsInputObject_2 {
  maxWidth?: Maybe<
    SitePluginPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger_2
  >;

  backgroundColor?: Maybe<
    SitePluginPluginOptionsPluginsPluginOptionsBackgroundColorQueryString_2
  >;
}

export interface SitePluginPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SitePluginPluginOptionsPluginsPluginOptionsBackgroundColorQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPluginOptionsPluginsBrowserApIsQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPluginOptionsPluginsSsrApIsQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPluginOptionsPluginsPluginFilepathQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPluginOptionsNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPluginOptionsPathQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPluginOptionsMaxWidthQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SitePluginPluginOptionsBackgroundColorQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPluginOptionsPathToConfigModuleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPluginOptionsIncludePathsQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPluginOptionsSrcQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPluginOptionsAssetsQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPluginOptionsComponentsQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPluginOptionsPagesQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPluginOptionsStylesQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPluginOptionsTemplatesQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPluginOptionsUtilsQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPluginOptionsSpaceIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPluginOptionsAccessTokenQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPluginOptionsHostQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPluginOptionsEnvironmentQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPluginOptionsShortNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPluginOptionsStartUrlQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPluginOptionsBackgroundColorQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPluginOptionsThemeColorQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPluginOptionsDisplayQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPluginOptionsIconQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPluginOptionsIncludeFaviconQueryBoolean_2 {
  eq?: Maybe<boolean>;

  ne?: Maybe<boolean>;

  in?: Maybe<(Maybe<boolean>)[]>;

  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface SitePluginPluginOptionsSitemapQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPluginOptionsPolicyQueryList_2 {
  elemMatch?: Maybe<SitePluginPluginOptionsPolicyInputObject_2>;
}

export interface SitePluginPluginOptionsPolicyInputObject_2 {
  userAgent?: Maybe<SitePluginPluginOptionsPolicyUserAgentQueryString_2>;

  allow?: Maybe<SitePluginPluginOptionsPolicyAllowQueryString_2>;
}

export interface SitePluginPluginOptionsPolicyUserAgentQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPluginOptionsPolicyAllowQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPluginOptionsOutputQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPluginOptionsExcludeQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPluginOptionsQueryQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPluginOptionsHeadersInputObject_2 {
  _sw_js?: Maybe<SitePluginPluginOptionsHeadersSwJsQueryList_2>;
}

export interface SitePluginPluginOptionsHeadersSwJsQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPluginOptionsPathCheckQueryBoolean_2 {
  eq?: Maybe<boolean>;

  ne?: Maybe<boolean>;

  in?: Maybe<(Maybe<boolean>)[]>;

  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface SitePluginNodeApIsQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginBrowserApIsQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginSsrApIsQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPluginFilepathQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPackageJsonInputObject_2 {
  name?: Maybe<SitePluginPackageJsonNameQueryString_2>;

  description?: Maybe<SitePluginPackageJsonDescriptionQueryString_2>;

  version?: Maybe<SitePluginPackageJsonVersionQueryString_2>;

  main?: Maybe<SitePluginPackageJsonMainQueryString_2>;

  author?: Maybe<SitePluginPackageJsonAuthorQueryString_2>;

  license?: Maybe<SitePluginPackageJsonLicenseQueryString_2>;

  dependencies?: Maybe<SitePluginPackageJsonDependenciesQueryList_2>;

  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesQueryList_2>;

  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesQueryList_2>;

  keywords?: Maybe<SitePluginPackageJsonKeywordsQueryList_2>;
}

export interface SitePluginPackageJsonNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPackageJsonDescriptionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPackageJsonVersionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPackageJsonMainQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPackageJsonAuthorQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPackageJsonLicenseQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPackageJsonDependenciesQueryList_2 {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesInputObject_2>;
}

export interface SitePluginPackageJsonDependenciesInputObject_2 {
  name?: Maybe<SitePluginPackageJsonDependenciesNameQueryString_2>;

  version?: Maybe<SitePluginPackageJsonDependenciesVersionQueryString_2>;
}

export interface SitePluginPackageJsonDependenciesNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPackageJsonDependenciesVersionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPackageJsonDevDependenciesQueryList_2 {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesInputObject_2>;
}

export interface SitePluginPackageJsonDevDependenciesInputObject_2 {
  name?: Maybe<SitePluginPackageJsonDevDependenciesNameQueryString_2>;

  version?: Maybe<SitePluginPackageJsonDevDependenciesVersionQueryString_2>;
}

export interface SitePluginPackageJsonDevDependenciesNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPackageJsonDevDependenciesVersionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPackageJsonPeerDependenciesQueryList_2 {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesInputObject_2>;
}

export interface SitePluginPackageJsonPeerDependenciesInputObject_2 {
  name?: Maybe<SitePluginPackageJsonPeerDependenciesNameQueryString_2>;

  version?: Maybe<SitePluginPackageJsonPeerDependenciesVersionQueryString_2>;
}

export interface SitePluginPackageJsonPeerDependenciesNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPackageJsonPeerDependenciesVersionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPackageJsonKeywordsQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginInternalInputObject_2 {
  contentDigest?: Maybe<SitePluginInternalContentDigestQueryString_2>;

  type?: Maybe<SitePluginInternalTypeQueryString_2>;

  owner?: Maybe<SitePluginInternalOwnerQueryString_2>;
}

export interface SitePluginInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SiteSiteMetadataInputObject_2 {
  title?: Maybe<SiteSiteMetadataTitleQueryString_2>;

  description?: Maybe<SiteSiteMetadataDescriptionQueryString_2>;

  siteUrl?: Maybe<SiteSiteMetadataSiteUrlQueryString_2>;

  socialLinks?: Maybe<SiteSiteMetadataSocialLinksQueryList_2>;

  languages?: Maybe<SiteSiteMetadataLanguagesInputObject_2>;
}

export interface SiteSiteMetadataTitleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SiteSiteMetadataDescriptionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SiteSiteMetadataSiteUrlQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SiteSiteMetadataSocialLinksQueryList_2 {
  elemMatch?: Maybe<SiteSiteMetadataSocialLinksInputObject_2>;
}

export interface SiteSiteMetadataSocialLinksInputObject_2 {
  url?: Maybe<SiteSiteMetadataSocialLinksUrlQueryString_2>;

  name?: Maybe<SiteSiteMetadataSocialLinksNameQueryString_2>;
}

export interface SiteSiteMetadataSocialLinksUrlQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SiteSiteMetadataSocialLinksNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SiteSiteMetadataLanguagesInputObject_2 {
  defaultLangKey?: Maybe<SiteSiteMetadataLanguagesDefaultLangKeyQueryString_2>;

  langs?: Maybe<SiteSiteMetadataLanguagesLangsQueryList_2>;
}

export interface SiteSiteMetadataLanguagesDefaultLangKeyQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SiteSiteMetadataLanguagesLangsQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePortQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SiteHostQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePathPrefixQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePolyfillQueryBoolean_2 {
  eq?: Maybe<boolean>;

  ne?: Maybe<boolean>;

  in?: Maybe<(Maybe<boolean>)[]>;

  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface SiteBuildTimeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SiteIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SiteInternalInputObject_2 {
  contentDigest?: Maybe<SiteInternalContentDigestQueryString_2>;

  type?: Maybe<SiteInternalTypeQueryString_2>;

  owner?: Maybe<SiteInternalOwnerQueryString_2>;
}

export interface SiteInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SiteInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SiteInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryInternalInputObject_2 {
  contentDigest?: Maybe<DirectoryInternalContentDigestQueryString_2>;

  type?: Maybe<DirectoryInternalTypeQueryString_2>;

  description?: Maybe<DirectoryInternalDescriptionQueryString_2>;

  owner?: Maybe<DirectoryInternalOwnerQueryString_2>;
}

export interface DirectoryInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryInternalDescriptionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectorySourceInstanceNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryAbsolutePathQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryRelativePathQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryExtensionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectorySizeQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DirectoryPrettySizeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryModifiedTimeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryAccessTimeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryChangeTimeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryBirthTimeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryRootQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryDirQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryBaseQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryExtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryRelativeDirectoryQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryDevQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DirectoryModeQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DirectoryNlinkQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DirectoryUidQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DirectoryGidQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DirectoryRdevQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DirectoryBlksizeQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DirectoryInoQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DirectoryBlocksQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DirectoryAtimeMsQueryFloat_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DirectoryMtimeMsQueryFloat_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DirectoryCtimeMsQueryFloat_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DirectoryBirthtimeMsQueryFloat_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DirectoryAtimeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryMtimeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryCtimeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryBirthtimeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileInternalInputObject_2 {
  contentDigest?: Maybe<FileInternalContentDigestQueryString_2>;

  type?: Maybe<FileInternalTypeQueryString_2>;

  mediaType?: Maybe<FileInternalMediaTypeQueryString_2>;

  description?: Maybe<FileInternalDescriptionQueryString_2>;

  owner?: Maybe<FileInternalOwnerQueryString_2>;
}

export interface FileInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileInternalMediaTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileInternalDescriptionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileSourceInstanceNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileAbsolutePathQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileRelativePathQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileExtensionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileSizeQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FilePrettySizeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileModifiedTimeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileAccessTimeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileChangeTimeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileBirthTimeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileRootQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileDirQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileBaseQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileExtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileRelativeDirectoryQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileDevQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FileModeQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FileNlinkQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FileUidQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FileGidQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FileRdevQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FileBlksizeQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FileInoQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FileBlocksQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FileAtimeMsQueryFloat_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FileMtimeMsQueryFloat_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FileCtimeMsQueryFloat_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FileBirthtimeMsQueryFloat_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FileAtimeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileMtimeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileCtimeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileBirthtimeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface PublicUrlQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DataJsonIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DataJsonInternalInputObject_2 {
  contentDigest?: Maybe<DataJsonInternalContentDigestQueryString_2>;

  type?: Maybe<DataJsonInternalTypeQueryString_2>;

  owner?: Maybe<DataJsonInternalOwnerQueryString_2>;
}

export interface DataJsonInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DataJsonInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DataJsonInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulContentTypeIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulContentTypeNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulContentTypeDisplayFieldQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulContentTypeDescriptionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulContentTypeInternalInputObject_2 {
  type?: Maybe<ContentfulContentTypeInternalTypeQueryString_2>;

  contentDigest?: Maybe<
    ContentfulContentTypeInternalContentDigestQueryString_2
  >;

  owner?: Maybe<ContentfulContentTypeInternalOwnerQueryString_2>;
}

export interface ContentfulContentTypeInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulContentTypeInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulContentTypeInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceTitleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSlugQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceOrderQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ContentfulServiceImageInputObject_2 {
  contentful_id?: Maybe<ContentfulServiceImageContentfulIdQueryString_2>;

  id?: Maybe<ContentfulServiceImageIdQueryString_2>;

  file?: Maybe<ContentfulServiceImageFileInputObject_2>;

  title?: Maybe<ContentfulServiceImageTitleQueryString_2>;

  description?: Maybe<ContentfulServiceImageDescriptionQueryString_2>;

  node_locale?: Maybe<ContentfulServiceImageNodeLocaleQueryString_2>;

  internal?: Maybe<ContentfulServiceImageInternalInputObject_2>;
}

export interface ContentfulServiceImageContentfulIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceImageIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceImageFileInputObject_2 {
  url?: Maybe<ContentfulServiceImageFileUrlQueryString_2>;

  details?: Maybe<ContentfulServiceImageFileDetailsInputObject_2>;

  fileName?: Maybe<ContentfulServiceImageFileFileNameQueryString_2>;

  contentType?: Maybe<ContentfulServiceImageFileContentTypeQueryString_2>;
}

export interface ContentfulServiceImageFileUrlQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceImageFileDetailsInputObject_2 {
  size?: Maybe<ContentfulServiceImageFileDetailsSizeQueryInteger_2>;

  image?: Maybe<ContentfulServiceImageFileDetailsImageInputObject_2>;
}

export interface ContentfulServiceImageFileDetailsSizeQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ContentfulServiceImageFileDetailsImageInputObject_2 {
  width?: Maybe<ContentfulServiceImageFileDetailsImageWidthQueryInteger_2>;

  height?: Maybe<ContentfulServiceImageFileDetailsImageHeightQueryInteger_2>;
}

export interface ContentfulServiceImageFileDetailsImageWidthQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ContentfulServiceImageFileDetailsImageHeightQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ContentfulServiceImageFileFileNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceImageFileContentTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceImageTitleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceImageDescriptionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceImageNodeLocaleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceImageInternalInputObject_2 {
  type?: Maybe<ContentfulServiceImageInternalTypeQueryString_2>;

  contentDigest?: Maybe<
    ContentfulServiceImageInternalContentDigestQueryString_2
  >;

  owner?: Maybe<ContentfulServiceImageInternalOwnerQueryString_2>;
}

export interface ContentfulServiceImageInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceImageInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceImageInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionsQueryList_2 {
  elemMatch?: Maybe<ContentfulServiceSectionsInputObject_2>;
}

export interface ContentfulServiceSectionsInputObject_2 {
  title?: Maybe<ContentfulServiceSectionsTitleQueryString_2>;

  subtitle?: Maybe<ContentfulServiceSectionsSubtitleQueryString_2>;

  list?: Maybe<ContentfulServiceSectionsListQueryList_2>;

  order?: Maybe<ContentfulServiceSectionsOrderQueryInteger_2>;

  id?: Maybe<ContentfulServiceSectionsIdQueryString_2>;

  contentful_id?: Maybe<ContentfulServiceSectionsContentfulIdQueryString_2>;

  createdAt?: Maybe<ContentfulServiceSectionsCreatedAtQueryString_2>;

  updatedAt?: Maybe<ContentfulServiceSectionsUpdatedAtQueryString_2>;

  parent?: Maybe<ContentfulServiceSectionsParentQueryString_2>;

  children?: Maybe<ContentfulServiceSectionsChildrenQueryList_2>;

  internal?: Maybe<ContentfulServiceSectionsInternalInputObject_2>;

  node_locale?: Maybe<ContentfulServiceSectionsNodeLocaleQueryString_2>;
}

export interface ContentfulServiceSectionsTitleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionsSubtitleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionsListQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionsOrderQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ContentfulServiceSectionsIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionsContentfulIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionsCreatedAtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionsUpdatedAtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionsParentQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionsChildrenQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionsInternalInputObject_2 {
  type?: Maybe<ContentfulServiceSectionsInternalTypeQueryString_2>;

  contentDigest?: Maybe<
    ContentfulServiceSectionsInternalContentDigestQueryString_2
  >;

  owner?: Maybe<ContentfulServiceSectionsInternalOwnerQueryString_2>;
}

export interface ContentfulServiceSectionsInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionsInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionsInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionsNodeLocaleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceDescriptionInputObject_2 {
  id?: Maybe<ContentfulServiceDescriptionIdQueryString_2>;

  parent?: Maybe<ContentfulServiceDescriptionParentQueryString_2>;

  children?: Maybe<ContentfulServiceDescriptionChildrenQueryList_2>;

  description?: Maybe<ContentfulServiceDescriptionDescriptionQueryString_2>;

  internal?: Maybe<ContentfulServiceDescriptionInternalInputObject_2>;
}

export interface ContentfulServiceDescriptionIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceDescriptionParentQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceDescriptionChildrenQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceDescriptionDescriptionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceDescriptionInternalInputObject_2 {
  type?: Maybe<ContentfulServiceDescriptionInternalTypeQueryString_2>;

  mediaType?: Maybe<ContentfulServiceDescriptionInternalMediaTypeQueryString_2>;

  content?: Maybe<ContentfulServiceDescriptionInternalContentQueryString_2>;

  contentDigest?: Maybe<
    ContentfulServiceDescriptionInternalContentDigestQueryString_2
  >;

  owner?: Maybe<ContentfulServiceDescriptionInternalOwnerQueryString_2>;
}

export interface ContentfulServiceDescriptionInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceDescriptionInternalMediaTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceDescriptionInternalContentQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceDescriptionInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceDescriptionInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceContentfulIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceCreatedAtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceUpdatedAtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceInternalInputObject_2 {
  type?: Maybe<ContentfulServiceInternalTypeQueryString_2>;

  contentDigest?: Maybe<ContentfulServiceInternalContentDigestQueryString_2>;

  owner?: Maybe<ContentfulServiceInternalOwnerQueryString_2>;
}

export interface ContentfulServiceInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceNodeLocaleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServicePluginsQueryList_2 {
  elemMatch?: Maybe<ContentfulServicePluginsInputObject_2>;
}

export interface ContentfulServicePluginsInputObject_2 {
  title?: Maybe<ContentfulServicePluginsTitleQueryString_2>;

  type?: Maybe<ContentfulServicePluginsTypeQueryList_2>;

  id?: Maybe<ContentfulServicePluginsIdQueryString_2>;

  contentful_id?: Maybe<ContentfulServicePluginsContentfulIdQueryString_2>;

  createdAt?: Maybe<ContentfulServicePluginsCreatedAtQueryString_2>;

  updatedAt?: Maybe<ContentfulServicePluginsUpdatedAtQueryString_2>;

  parent?: Maybe<ContentfulServicePluginsParentQueryString_2>;

  internal?: Maybe<ContentfulServicePluginsInternalInputObject_2>;

  node_locale?: Maybe<ContentfulServicePluginsNodeLocaleQueryString_2>;
}

export interface ContentfulServicePluginsTitleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServicePluginsTypeQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServicePluginsIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServicePluginsContentfulIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServicePluginsCreatedAtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServicePluginsUpdatedAtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServicePluginsParentQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServicePluginsInternalInputObject_2 {
  type?: Maybe<ContentfulServicePluginsInternalTypeQueryString_2>;

  contentDigest?: Maybe<
    ContentfulServicePluginsInternalContentDigestQueryString_2
  >;

  owner?: Maybe<ContentfulServicePluginsInternalOwnerQueryString_2>;
}

export interface ContentfulServicePluginsInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServicePluginsInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServicePluginsInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServicePluginsNodeLocaleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceDescriptionTextNodeIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceDescriptionTextNodeDescriptionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceDescriptionTextNodeInternalInputObject_2 {
  type?: Maybe<ContentfulServiceDescriptionTextNodeInternalTypeQueryString_2>;

  mediaType?: Maybe<
    ContentfulServiceDescriptionTextNodeInternalMediaTypeQueryString_2
  >;

  content?: Maybe<
    ContentfulServiceDescriptionTextNodeInternalContentQueryString_2
  >;

  contentDigest?: Maybe<
    ContentfulServiceDescriptionTextNodeInternalContentDigestQueryString_2
  >;

  owner?: Maybe<ContentfulServiceDescriptionTextNodeInternalOwnerQueryString_2>;
}

export interface ContentfulServiceDescriptionTextNodeInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceDescriptionTextNodeInternalMediaTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceDescriptionTextNodeInternalContentQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceDescriptionTextNodeInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceDescriptionTextNodeInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulNavigationTitleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulNavigationSlugQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulNavigationOrderQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ContentfulNavigationHeaderQueryBoolean_2 {
  eq?: Maybe<boolean>;

  ne?: Maybe<boolean>;

  in?: Maybe<(Maybe<boolean>)[]>;

  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface ContentfulNavigationFooterQueryBoolean_2 {
  eq?: Maybe<boolean>;

  ne?: Maybe<boolean>;

  in?: Maybe<(Maybe<boolean>)[]>;

  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface ContentfulNavigationIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulNavigationContentfulIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulNavigationCreatedAtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulNavigationUpdatedAtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulNavigationInternalInputObject_2 {
  type?: Maybe<ContentfulNavigationInternalTypeQueryString_2>;

  contentDigest?: Maybe<ContentfulNavigationInternalContentDigestQueryString_2>;

  owner?: Maybe<ContentfulNavigationInternalOwnerQueryString_2>;
}

export interface ContentfulNavigationInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulNavigationInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulNavigationInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulNavigationNodeLocaleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulOfficeTitleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulOfficeSlugQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulOfficeOrderQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ContentfulOfficeMapInputObject_2 {
  lon?: Maybe<ContentfulOfficeMapLonQueryFloat_2>;

  lat?: Maybe<ContentfulOfficeMapLatQueryFloat_2>;
}

export interface ContentfulOfficeMapLonQueryFloat_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ContentfulOfficeMapLatQueryFloat_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ContentfulOfficeIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulOfficeContentfulIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulOfficeCreatedAtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulOfficeUpdatedAtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulOfficeInternalInputObject_2 {
  type?: Maybe<ContentfulOfficeInternalTypeQueryString_2>;

  contentDigest?: Maybe<ContentfulOfficeInternalContentDigestQueryString_2>;

  owner?: Maybe<ContentfulOfficeInternalOwnerQueryString_2>;
}

export interface ContentfulOfficeInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulOfficeInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulOfficeInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulOfficeNodeLocaleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulCaseTitleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulCaseSlugQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulCaseOrderQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ContentfulCaseDescriptionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulCaseThumbnailInputObject_2 {
  contentful_id?: Maybe<ContentfulCaseThumbnailContentfulIdQueryString_2>;

  id?: Maybe<ContentfulCaseThumbnailIdQueryString_2>;

  file?: Maybe<ContentfulCaseThumbnailFileInputObject_2>;

  title?: Maybe<ContentfulCaseThumbnailTitleQueryString_2>;

  description?: Maybe<ContentfulCaseThumbnailDescriptionQueryString_2>;

  node_locale?: Maybe<ContentfulCaseThumbnailNodeLocaleQueryString_2>;

  internal?: Maybe<ContentfulCaseThumbnailInternalInputObject_2>;
}

export interface ContentfulCaseThumbnailContentfulIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulCaseThumbnailIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulCaseThumbnailFileInputObject_2 {
  url?: Maybe<ContentfulCaseThumbnailFileUrlQueryString_2>;

  details?: Maybe<ContentfulCaseThumbnailFileDetailsInputObject_2>;

  fileName?: Maybe<ContentfulCaseThumbnailFileFileNameQueryString_2>;

  contentType?: Maybe<ContentfulCaseThumbnailFileContentTypeQueryString_2>;
}

export interface ContentfulCaseThumbnailFileUrlQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulCaseThumbnailFileDetailsInputObject_2 {
  size?: Maybe<ContentfulCaseThumbnailFileDetailsSizeQueryInteger_2>;

  image?: Maybe<ContentfulCaseThumbnailFileDetailsImageInputObject_2>;
}

export interface ContentfulCaseThumbnailFileDetailsSizeQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ContentfulCaseThumbnailFileDetailsImageInputObject_2 {
  width?: Maybe<ContentfulCaseThumbnailFileDetailsImageWidthQueryInteger_2>;

  height?: Maybe<ContentfulCaseThumbnailFileDetailsImageHeightQueryInteger_2>;
}

export interface ContentfulCaseThumbnailFileDetailsImageWidthQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ContentfulCaseThumbnailFileDetailsImageHeightQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ContentfulCaseThumbnailFileFileNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulCaseThumbnailFileContentTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulCaseThumbnailTitleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulCaseThumbnailDescriptionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulCaseThumbnailNodeLocaleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulCaseThumbnailInternalInputObject_2 {
  type?: Maybe<ContentfulCaseThumbnailInternalTypeQueryString_2>;

  contentDigest?: Maybe<
    ContentfulCaseThumbnailInternalContentDigestQueryString_2
  >;

  owner?: Maybe<ContentfulCaseThumbnailInternalOwnerQueryString_2>;
}

export interface ContentfulCaseThumbnailInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulCaseThumbnailInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulCaseThumbnailInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulCaseIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulCaseContentfulIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulCaseCreatedAtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulCaseUpdatedAtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulCaseInternalInputObject_2 {
  type?: Maybe<ContentfulCaseInternalTypeQueryString_2>;

  contentDigest?: Maybe<ContentfulCaseInternalContentDigestQueryString_2>;

  owner?: Maybe<ContentfulCaseInternalOwnerQueryString_2>;
}

export interface ContentfulCaseInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulCaseInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulCaseInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulCaseNodeLocaleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulExpertTitleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulExpertPositionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulExpertOrderQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ContentfulExpertPhotoInputObject_2 {
  contentful_id?: Maybe<ContentfulExpertPhotoContentfulIdQueryString_2>;

  id?: Maybe<ContentfulExpertPhotoIdQueryString_2>;

  file?: Maybe<ContentfulExpertPhotoFileInputObject_2>;

  title?: Maybe<ContentfulExpertPhotoTitleQueryString_2>;

  description?: Maybe<ContentfulExpertPhotoDescriptionQueryString_2>;

  node_locale?: Maybe<ContentfulExpertPhotoNodeLocaleQueryString_2>;

  internal?: Maybe<ContentfulExpertPhotoInternalInputObject_2>;
}

export interface ContentfulExpertPhotoContentfulIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulExpertPhotoIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulExpertPhotoFileInputObject_2 {
  url?: Maybe<ContentfulExpertPhotoFileUrlQueryString_2>;

  details?: Maybe<ContentfulExpertPhotoFileDetailsInputObject_2>;

  fileName?: Maybe<ContentfulExpertPhotoFileFileNameQueryString_2>;

  contentType?: Maybe<ContentfulExpertPhotoFileContentTypeQueryString_2>;
}

export interface ContentfulExpertPhotoFileUrlQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulExpertPhotoFileDetailsInputObject_2 {
  size?: Maybe<ContentfulExpertPhotoFileDetailsSizeQueryInteger_2>;

  image?: Maybe<ContentfulExpertPhotoFileDetailsImageInputObject_2>;
}

export interface ContentfulExpertPhotoFileDetailsSizeQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ContentfulExpertPhotoFileDetailsImageInputObject_2 {
  width?: Maybe<ContentfulExpertPhotoFileDetailsImageWidthQueryInteger_2>;

  height?: Maybe<ContentfulExpertPhotoFileDetailsImageHeightQueryInteger_2>;
}

export interface ContentfulExpertPhotoFileDetailsImageWidthQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ContentfulExpertPhotoFileDetailsImageHeightQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ContentfulExpertPhotoFileFileNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulExpertPhotoFileContentTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulExpertPhotoTitleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulExpertPhotoDescriptionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulExpertPhotoNodeLocaleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulExpertPhotoInternalInputObject_2 {
  type?: Maybe<ContentfulExpertPhotoInternalTypeQueryString_2>;

  contentDigest?: Maybe<
    ContentfulExpertPhotoInternalContentDigestQueryString_2
  >;

  owner?: Maybe<ContentfulExpertPhotoInternalOwnerQueryString_2>;
}

export interface ContentfulExpertPhotoInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulExpertPhotoInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulExpertPhotoInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulExpertIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulExpertContentfulIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulExpertCreatedAtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulExpertUpdatedAtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulExpertInternalInputObject_2 {
  type?: Maybe<ContentfulExpertInternalTypeQueryString_2>;

  contentDigest?: Maybe<ContentfulExpertInternalContentDigestQueryString_2>;

  owner?: Maybe<ContentfulExpertInternalOwnerQueryString_2>;
}

export interface ContentfulExpertInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulExpertInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulExpertInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulExpertNodeLocaleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPageSlugQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPagePageTitleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPageHeaderTitleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPageHeaderDescriptionInputObject_2 {
  id?: Maybe<ContentfulPageHeaderDescriptionIdQueryString_2>;

  parent?: Maybe<ContentfulPageHeaderDescriptionParentQueryString_2>;

  children?: Maybe<ContentfulPageHeaderDescriptionChildrenQueryList_2>;

  headerDescription?: Maybe<
    ContentfulPageHeaderDescriptionHeaderDescriptionQueryString_2
  >;

  internal?: Maybe<ContentfulPageHeaderDescriptionInternalInputObject_2>;
}

export interface ContentfulPageHeaderDescriptionIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPageHeaderDescriptionParentQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPageHeaderDescriptionChildrenQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPageHeaderDescriptionHeaderDescriptionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPageHeaderDescriptionInternalInputObject_2 {
  type?: Maybe<ContentfulPageHeaderDescriptionInternalTypeQueryString_2>;

  mediaType?: Maybe<
    ContentfulPageHeaderDescriptionInternalMediaTypeQueryString_2
  >;

  content?: Maybe<ContentfulPageHeaderDescriptionInternalContentQueryString_2>;

  contentDigest?: Maybe<
    ContentfulPageHeaderDescriptionInternalContentDigestQueryString_2
  >;

  owner?: Maybe<ContentfulPageHeaderDescriptionInternalOwnerQueryString_2>;
}

export interface ContentfulPageHeaderDescriptionInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPageHeaderDescriptionInternalMediaTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPageHeaderDescriptionInternalContentQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPageHeaderDescriptionInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPageHeaderDescriptionInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPageIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPageContentfulIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPageCreatedAtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPageUpdatedAtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPageInternalInputObject_2 {
  type?: Maybe<ContentfulPageInternalTypeQueryString_2>;

  contentDigest?: Maybe<ContentfulPageInternalContentDigestQueryString_2>;

  owner?: Maybe<ContentfulPageInternalOwnerQueryString_2>;
}

export interface ContentfulPageInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPageInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPageInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPageNodeLocaleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPagePageDescriptionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPagePageKeywordsQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPageHeaderDescriptionTextNodeIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPageHeaderDescriptionTextNodeHeaderDescriptionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPageHeaderDescriptionTextNodeInternalInputObject_2 {
  type?: Maybe<
    ContentfulPageHeaderDescriptionTextNodeInternalTypeQueryString_2
  >;

  mediaType?: Maybe<
    ContentfulPageHeaderDescriptionTextNodeInternalMediaTypeQueryString_2
  >;

  content?: Maybe<
    ContentfulPageHeaderDescriptionTextNodeInternalContentQueryString_2
  >;

  contentDigest?: Maybe<
    ContentfulPageHeaderDescriptionTextNodeInternalContentDigestQueryString_2
  >;

  owner?: Maybe<
    ContentfulPageHeaderDescriptionTextNodeInternalOwnerQueryString_2
  >;
}

export interface ContentfulPageHeaderDescriptionTextNodeInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPageHeaderDescriptionTextNodeInternalMediaTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPageHeaderDescriptionTextNodeInternalContentQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPageHeaderDescriptionTextNodeInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPageHeaderDescriptionTextNodeInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulDictionarySlugQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulDictionaryTitleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulDictionaryIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulDictionaryContentfulIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulDictionaryCreatedAtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulDictionaryUpdatedAtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulDictionaryInternalInputObject_2 {
  type?: Maybe<ContentfulDictionaryInternalTypeQueryString_2>;

  contentDigest?: Maybe<ContentfulDictionaryInternalContentDigestQueryString_2>;

  owner?: Maybe<ContentfulDictionaryInternalOwnerQueryString_2>;
}

export interface ContentfulDictionaryInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulDictionaryInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulDictionaryInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulDictionaryNodeLocaleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulDictionaryCategoryQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionTitleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionSubtitleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionListQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionOrderQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ContentfulServiceSectionThumbnailInputObject_2 {
  contentful_id?: Maybe<
    ContentfulServiceSectionThumbnailContentfulIdQueryString_2
  >;

  id?: Maybe<ContentfulServiceSectionThumbnailIdQueryString_2>;

  file?: Maybe<ContentfulServiceSectionThumbnailFileInputObject_2>;

  title?: Maybe<ContentfulServiceSectionThumbnailTitleQueryString_2>;

  description?: Maybe<
    ContentfulServiceSectionThumbnailDescriptionQueryString_2
  >;

  node_locale?: Maybe<ContentfulServiceSectionThumbnailNodeLocaleQueryString_2>;

  internal?: Maybe<ContentfulServiceSectionThumbnailInternalInputObject_2>;
}

export interface ContentfulServiceSectionThumbnailContentfulIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionThumbnailIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionThumbnailFileInputObject_2 {
  url?: Maybe<ContentfulServiceSectionThumbnailFileUrlQueryString_2>;

  details?: Maybe<ContentfulServiceSectionThumbnailFileDetailsInputObject_2>;

  fileName?: Maybe<ContentfulServiceSectionThumbnailFileFileNameQueryString_2>;

  contentType?: Maybe<
    ContentfulServiceSectionThumbnailFileContentTypeQueryString_2
  >;
}

export interface ContentfulServiceSectionThumbnailFileUrlQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionThumbnailFileDetailsInputObject_2 {
  size?: Maybe<ContentfulServiceSectionThumbnailFileDetailsSizeQueryInteger_2>;

  image?: Maybe<ContentfulServiceSectionThumbnailFileDetailsImageInputObject_2>;
}

export interface ContentfulServiceSectionThumbnailFileDetailsSizeQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ContentfulServiceSectionThumbnailFileDetailsImageInputObject_2 {
  width?: Maybe<
    ContentfulServiceSectionThumbnailFileDetailsImageWidthQueryInteger_2
  >;

  height?: Maybe<
    ContentfulServiceSectionThumbnailFileDetailsImageHeightQueryInteger_2
  >;
}

export interface ContentfulServiceSectionThumbnailFileDetailsImageWidthQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ContentfulServiceSectionThumbnailFileDetailsImageHeightQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ContentfulServiceSectionThumbnailFileFileNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionThumbnailFileContentTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionThumbnailTitleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionThumbnailDescriptionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionThumbnailNodeLocaleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionThumbnailInternalInputObject_2 {
  type?: Maybe<ContentfulServiceSectionThumbnailInternalTypeQueryString_2>;

  contentDigest?: Maybe<
    ContentfulServiceSectionThumbnailInternalContentDigestQueryString_2
  >;

  owner?: Maybe<ContentfulServiceSectionThumbnailInternalOwnerQueryString_2>;
}

export interface ContentfulServiceSectionThumbnailInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionThumbnailInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionThumbnailInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionServiceQueryList_2 {
  elemMatch?: Maybe<ContentfulServiceSectionServiceInputObject_2>;
}

export interface ContentfulServiceSectionServiceInputObject_2 {
  title?: Maybe<ContentfulServiceSectionServiceTitleQueryString_2>;

  slug?: Maybe<ContentfulServiceSectionServiceSlugQueryString_2>;

  order?: Maybe<ContentfulServiceSectionServiceOrderQueryInteger_2>;

  id?: Maybe<ContentfulServiceSectionServiceIdQueryString_2>;

  contentful_id?: Maybe<
    ContentfulServiceSectionServiceContentfulIdQueryString_2
  >;

  createdAt?: Maybe<ContentfulServiceSectionServiceCreatedAtQueryString_2>;

  updatedAt?: Maybe<ContentfulServiceSectionServiceUpdatedAtQueryString_2>;

  parent?: Maybe<ContentfulServiceSectionServiceParentQueryString_2>;

  children?: Maybe<ContentfulServiceSectionServiceChildrenQueryList_2>;

  internal?: Maybe<ContentfulServiceSectionServiceInternalInputObject_2>;

  node_locale?: Maybe<ContentfulServiceSectionServiceNodeLocaleQueryString_2>;
}

export interface ContentfulServiceSectionServiceTitleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionServiceSlugQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionServiceOrderQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ContentfulServiceSectionServiceIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionServiceContentfulIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionServiceCreatedAtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionServiceUpdatedAtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionServiceParentQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionServiceChildrenQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionServiceInternalInputObject_2 {
  type?: Maybe<ContentfulServiceSectionServiceInternalTypeQueryString_2>;

  contentDigest?: Maybe<
    ContentfulServiceSectionServiceInternalContentDigestQueryString_2
  >;

  owner?: Maybe<ContentfulServiceSectionServiceInternalOwnerQueryString_2>;
}

export interface ContentfulServiceSectionServiceInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionServiceInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionServiceInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionServiceNodeLocaleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionDescriptionInputObject_2 {
  id?: Maybe<ContentfulServiceSectionDescriptionIdQueryString_2>;

  parent?: Maybe<ContentfulServiceSectionDescriptionParentQueryString_2>;

  children?: Maybe<ContentfulServiceSectionDescriptionChildrenQueryList_2>;

  description?: Maybe<
    ContentfulServiceSectionDescriptionDescriptionQueryString_2
  >;

  internal?: Maybe<ContentfulServiceSectionDescriptionInternalInputObject_2>;
}

export interface ContentfulServiceSectionDescriptionIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionDescriptionParentQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionDescriptionChildrenQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionDescriptionDescriptionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionDescriptionInternalInputObject_2 {
  type?: Maybe<ContentfulServiceSectionDescriptionInternalTypeQueryString_2>;

  mediaType?: Maybe<
    ContentfulServiceSectionDescriptionInternalMediaTypeQueryString_2
  >;

  content?: Maybe<
    ContentfulServiceSectionDescriptionInternalContentQueryString_2
  >;

  contentDigest?: Maybe<
    ContentfulServiceSectionDescriptionInternalContentDigestQueryString_2
  >;

  owner?: Maybe<ContentfulServiceSectionDescriptionInternalOwnerQueryString_2>;
}

export interface ContentfulServiceSectionDescriptionInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionDescriptionInternalMediaTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionDescriptionInternalContentQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionDescriptionInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionDescriptionInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionContentfulIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionCreatedAtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionUpdatedAtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionInternalInputObject_2 {
  type?: Maybe<ContentfulServiceSectionInternalTypeQueryString_2>;

  contentDigest?: Maybe<
    ContentfulServiceSectionInternalContentDigestQueryString_2
  >;

  owner?: Maybe<ContentfulServiceSectionInternalOwnerQueryString_2>;
}

export interface ContentfulServiceSectionInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionNodeLocaleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionDescriptionTextNodeIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionDescriptionTextNodeDescriptionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionDescriptionTextNodeInternalInputObject_2 {
  type?: Maybe<
    ContentfulServiceSectionDescriptionTextNodeInternalTypeQueryString_2
  >;

  mediaType?: Maybe<
    ContentfulServiceSectionDescriptionTextNodeInternalMediaTypeQueryString_2
  >;

  content?: Maybe<
    ContentfulServiceSectionDescriptionTextNodeInternalContentQueryString_2
  >;

  contentDigest?: Maybe<
    ContentfulServiceSectionDescriptionTextNodeInternalContentDigestQueryString_2
  >;

  owner?: Maybe<
    ContentfulServiceSectionDescriptionTextNodeInternalOwnerQueryString_2
  >;
}

export interface ContentfulServiceSectionDescriptionTextNodeInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionDescriptionTextNodeInternalMediaTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionDescriptionTextNodeInternalContentQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionDescriptionTextNodeInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulServiceSectionDescriptionTextNodeInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulStatisticsTitleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulStatisticsDescriptionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulStatisticsOrderQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ContentfulStatisticsIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulStatisticsContentfulIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulStatisticsCreatedAtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulStatisticsUpdatedAtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulStatisticsInternalInputObject_2 {
  type?: Maybe<ContentfulStatisticsInternalTypeQueryString_2>;

  contentDigest?: Maybe<ContentfulStatisticsInternalContentDigestQueryString_2>;

  owner?: Maybe<ContentfulStatisticsInternalOwnerQueryString_2>;
}

export interface ContentfulStatisticsInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulStatisticsInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulStatisticsInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulStatisticsNodeLocaleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulListTitleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulListItemsQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulListOrderQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ContentfulListCategoryQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulListIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulListContentfulIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulListCreatedAtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulListUpdatedAtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulListInternalInputObject_2 {
  type?: Maybe<ContentfulListInternalTypeQueryString_2>;

  contentDigest?: Maybe<ContentfulListInternalContentDigestQueryString_2>;

  owner?: Maybe<ContentfulListInternalOwnerQueryString_2>;
}

export interface ContentfulListInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulListInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulListInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulListNodeLocaleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulListPluginQueryList_2 {
  elemMatch?: Maybe<ContentfulListPluginInputObject_2>;
}

export interface ContentfulListPluginInputObject_2 {
  title?: Maybe<ContentfulListPluginTitleQueryString_2>;

  type?: Maybe<ContentfulListPluginTypeQueryList_2>;

  id?: Maybe<ContentfulListPluginIdQueryString_2>;

  contentful_id?: Maybe<ContentfulListPluginContentfulIdQueryString_2>;

  createdAt?: Maybe<ContentfulListPluginCreatedAtQueryString_2>;

  updatedAt?: Maybe<ContentfulListPluginUpdatedAtQueryString_2>;

  parent?: Maybe<ContentfulListPluginParentQueryString_2>;

  internal?: Maybe<ContentfulListPluginInternalInputObject_2>;

  node_locale?: Maybe<ContentfulListPluginNodeLocaleQueryString_2>;
}

export interface ContentfulListPluginTitleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulListPluginTypeQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulListPluginIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulListPluginContentfulIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulListPluginCreatedAtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulListPluginUpdatedAtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulListPluginParentQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulListPluginInternalInputObject_2 {
  type?: Maybe<ContentfulListPluginInternalTypeQueryString_2>;

  contentDigest?: Maybe<ContentfulListPluginInternalContentDigestQueryString_2>;

  owner?: Maybe<ContentfulListPluginInternalOwnerQueryString_2>;
}

export interface ContentfulListPluginInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulListPluginInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulListPluginInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulListPluginNodeLocaleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulAssetContentfulIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulAssetIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulAssetFileInputObject_2 {
  url?: Maybe<ContentfulAssetFileUrlQueryString_2>;

  details?: Maybe<ContentfulAssetFileDetailsInputObject_2>;

  fileName?: Maybe<ContentfulAssetFileFileNameQueryString_2>;

  contentType?: Maybe<ContentfulAssetFileContentTypeQueryString_2>;
}

export interface ContentfulAssetFileUrlQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulAssetFileDetailsInputObject_2 {
  size?: Maybe<ContentfulAssetFileDetailsSizeQueryInteger_2>;

  image?: Maybe<ContentfulAssetFileDetailsImageInputObject_2>;
}

export interface ContentfulAssetFileDetailsSizeQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ContentfulAssetFileDetailsImageInputObject_2 {
  width?: Maybe<ContentfulAssetFileDetailsImageWidthQueryInteger_2>;

  height?: Maybe<ContentfulAssetFileDetailsImageHeightQueryInteger_2>;
}

export interface ContentfulAssetFileDetailsImageWidthQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ContentfulAssetFileDetailsImageHeightQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ContentfulAssetFileFileNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulAssetFileContentTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulAssetTitleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulAssetDescriptionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulAssetNodeLocaleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulAssetInternalInputObject_2 {
  type?: Maybe<ContentfulAssetInternalTypeQueryString_2>;

  contentDigest?: Maybe<ContentfulAssetInternalContentDigestQueryString_2>;

  owner?: Maybe<ContentfulAssetInternalOwnerQueryString_2>;
}

export interface ContentfulAssetInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulAssetInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulAssetInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FixedTypeName_3 {
  base64?: Maybe<FixedBase64QueryString_3>;

  tracedSVG?: Maybe<FixedTracedSvgQueryString_3>;

  aspectRatio?: Maybe<FixedAspectRatioQueryFloat_3>;

  width?: Maybe<FixedWidthQueryFloat_3>;

  height?: Maybe<FixedHeightQueryFloat_3>;

  src?: Maybe<FixedSrcQueryString_3>;

  srcSet?: Maybe<FixedSrcSetQueryString_3>;

  srcWebp?: Maybe<FixedSrcWebpQueryString_3>;

  srcSetWebp?: Maybe<FixedSrcSetWebpQueryString_3>;
}

export interface FixedBase64QueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FixedTracedSvgQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FixedAspectRatioQueryFloat_3 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FixedWidthQueryFloat_3 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FixedHeightQueryFloat_3 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FixedSrcQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FixedSrcSetQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FixedSrcWebpQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FixedSrcSetWebpQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ResolutionsTypeName_3 {
  base64?: Maybe<ResolutionsBase64QueryString_3>;

  tracedSVG?: Maybe<ResolutionsTracedSvgQueryString_3>;

  aspectRatio?: Maybe<ResolutionsAspectRatioQueryFloat_3>;

  width?: Maybe<ResolutionsWidthQueryFloat_3>;

  height?: Maybe<ResolutionsHeightQueryFloat_3>;

  src?: Maybe<ResolutionsSrcQueryString_3>;

  srcSet?: Maybe<ResolutionsSrcSetQueryString_3>;

  srcWebp?: Maybe<ResolutionsSrcWebpQueryString_3>;

  srcSetWebp?: Maybe<ResolutionsSrcSetWebpQueryString_3>;
}

export interface ResolutionsBase64QueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ResolutionsTracedSvgQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ResolutionsAspectRatioQueryFloat_3 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ResolutionsWidthQueryFloat_3 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ResolutionsHeightQueryFloat_3 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ResolutionsSrcQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ResolutionsSrcSetQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ResolutionsSrcWebpQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ResolutionsSrcSetWebpQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FluidTypeName_3 {
  base64?: Maybe<FluidBase64QueryString_3>;

  tracedSVG?: Maybe<FluidTracedSvgQueryString_3>;

  aspectRatio?: Maybe<FluidAspectRatioQueryFloat_3>;

  src?: Maybe<FluidSrcQueryString_3>;

  srcSet?: Maybe<FluidSrcSetQueryString_3>;

  srcWebp?: Maybe<FluidSrcWebpQueryString_3>;

  srcSetWebp?: Maybe<FluidSrcSetWebpQueryString_3>;

  sizes?: Maybe<FluidSizesQueryString_3>;
}

export interface FluidBase64QueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FluidTracedSvgQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FluidAspectRatioQueryFloat_3 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FluidSrcQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FluidSrcSetQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FluidSrcWebpQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FluidSrcSetWebpQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FluidSizesQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SizesTypeName_3 {
  base64?: Maybe<SizesBase64QueryString_3>;

  tracedSVG?: Maybe<SizesTracedSvgQueryString_3>;

  aspectRatio?: Maybe<SizesAspectRatioQueryFloat_3>;

  src?: Maybe<SizesSrcQueryString_3>;

  srcSet?: Maybe<SizesSrcSetQueryString_3>;

  srcWebp?: Maybe<SizesSrcWebpQueryString_3>;

  srcSetWebp?: Maybe<SizesSrcSetWebpQueryString_3>;

  sizes?: Maybe<SizesSizesQueryString_3>;
}

export interface SizesBase64QueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SizesTracedSvgQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SizesAspectRatioQueryFloat_3 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SizesSrcQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SizesSrcSetQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SizesSrcWebpQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SizesSrcSetWebpQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SizesSizesQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ResizeTypeName_3 {
  base64?: Maybe<ResizeBase64QueryString_3>;

  tracedSVG?: Maybe<ResizeTracedSvgQueryString_3>;

  src?: Maybe<ResizeSrcQueryString_3>;

  width?: Maybe<ResizeWidthQueryInt_3>;

  height?: Maybe<ResizeHeightQueryInt_3>;

  aspectRatio?: Maybe<ResizeAspectRatioQueryFloat_3>;
}

export interface ResizeBase64QueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ResizeTracedSvgQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ResizeSrcQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ResizeWidthQueryInt_3 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ResizeHeightQueryInt_3 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ResizeAspectRatioQueryFloat_3 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface MarkdownRemarkIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface MarkdownRemarkInternalInputObject_2 {
  content?: Maybe<MarkdownRemarkInternalContentQueryString_2>;

  type?: Maybe<MarkdownRemarkInternalTypeQueryString_2>;

  contentDigest?: Maybe<MarkdownRemarkInternalContentDigestQueryString_2>;

  owner?: Maybe<MarkdownRemarkInternalOwnerQueryString_2>;
}

export interface MarkdownRemarkInternalContentQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface MarkdownRemarkInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface MarkdownRemarkInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface MarkdownRemarkInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface MarkdownRemarkFrontmatterInputObject_2 {
  title?: Maybe<MarkdownRemarkFrontmatterTitleQueryString_2>;
}

export interface MarkdownRemarkFrontmatterTitleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface MarkdownRemarkRawMarkdownBodyQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface HtmlQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ExcerptQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface HeadingsQueryList_3 {
  elemMatch?: Maybe<HeadingsListElemTypeName_3>;
}

export interface HeadingsListElemTypeName_3 {
  value?: Maybe<HeadingsListElemValueQueryString_3>;

  depth?: Maybe<HeadingsListElemDepthQueryInt_3>;
}

export interface HeadingsListElemValueQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface HeadingsListElemDepthQueryInt_3 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface TimeToReadQueryInt_3 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface TableOfContentsQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface WordCountTypeName_3 {
  paragraphs?: Maybe<WordCountParagraphsQueryInt_3>;

  sentences?: Maybe<WordCountSentencesQueryInt_3>;

  words?: Maybe<WordCountWordsQueryInt_3>;
}

export interface WordCountParagraphsQueryInt_3 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface WordCountSentencesQueryInt_3 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface WordCountWordsQueryInt_3 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ContentfulPluginTitleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPluginTypeQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPluginItemsQueryList_2 {
  elemMatch?: Maybe<ContentfulPluginItemsInputObject_2>;
}

export interface ContentfulPluginItemsInputObject_2 {
  title?: Maybe<ContentfulPluginItemsTitleQueryString_2>;

  items?: Maybe<ContentfulPluginItemsItemsQueryList_2>;

  order?: Maybe<ContentfulPluginItemsOrderQueryInteger_2>;

  category?: Maybe<ContentfulPluginItemsCategoryQueryList_2>;

  id?: Maybe<ContentfulPluginItemsIdQueryString_2>;

  contentful_id?: Maybe<ContentfulPluginItemsContentfulIdQueryString_2>;

  createdAt?: Maybe<ContentfulPluginItemsCreatedAtQueryString_2>;

  updatedAt?: Maybe<ContentfulPluginItemsUpdatedAtQueryString_2>;

  parent?: Maybe<ContentfulPluginItemsParentQueryString_2>;

  internal?: Maybe<ContentfulPluginItemsInternalInputObject_2>;

  node_locale?: Maybe<ContentfulPluginItemsNodeLocaleQueryString_2>;
}

export interface ContentfulPluginItemsTitleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPluginItemsItemsQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPluginItemsOrderQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ContentfulPluginItemsCategoryQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPluginItemsIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPluginItemsContentfulIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPluginItemsCreatedAtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPluginItemsUpdatedAtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPluginItemsParentQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPluginItemsInternalInputObject_2 {
  type?: Maybe<ContentfulPluginItemsInternalTypeQueryString_2>;

  contentDigest?: Maybe<
    ContentfulPluginItemsInternalContentDigestQueryString_2
  >;

  owner?: Maybe<ContentfulPluginItemsInternalOwnerQueryString_2>;
}

export interface ContentfulPluginItemsInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPluginItemsInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPluginItemsInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPluginItemsNodeLocaleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPluginServiceQueryList_2 {
  elemMatch?: Maybe<ContentfulPluginServiceInputObject_2>;
}

export interface ContentfulPluginServiceInputObject_2 {
  title?: Maybe<ContentfulPluginServiceTitleQueryString_2>;

  slug?: Maybe<ContentfulPluginServiceSlugQueryString_2>;

  order?: Maybe<ContentfulPluginServiceOrderQueryInteger_2>;

  id?: Maybe<ContentfulPluginServiceIdQueryString_2>;

  contentful_id?: Maybe<ContentfulPluginServiceContentfulIdQueryString_2>;

  createdAt?: Maybe<ContentfulPluginServiceCreatedAtQueryString_2>;

  updatedAt?: Maybe<ContentfulPluginServiceUpdatedAtQueryString_2>;

  parent?: Maybe<ContentfulPluginServiceParentQueryString_2>;

  children?: Maybe<ContentfulPluginServiceChildrenQueryList_2>;

  internal?: Maybe<ContentfulPluginServiceInternalInputObject_2>;

  node_locale?: Maybe<ContentfulPluginServiceNodeLocaleQueryString_2>;
}

export interface ContentfulPluginServiceTitleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPluginServiceSlugQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPluginServiceOrderQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ContentfulPluginServiceIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPluginServiceContentfulIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPluginServiceCreatedAtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPluginServiceUpdatedAtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPluginServiceParentQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPluginServiceChildrenQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPluginServiceInternalInputObject_2 {
  type?: Maybe<ContentfulPluginServiceInternalTypeQueryString_2>;

  contentDigest?: Maybe<
    ContentfulPluginServiceInternalContentDigestQueryString_2
  >;

  owner?: Maybe<ContentfulPluginServiceInternalOwnerQueryString_2>;
}

export interface ContentfulPluginServiceInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPluginServiceInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPluginServiceInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPluginServiceNodeLocaleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPluginIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPluginContentfulIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPluginCreatedAtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPluginUpdatedAtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPluginInternalInputObject_2 {
  type?: Maybe<ContentfulPluginInternalTypeQueryString_2>;

  contentDigest?: Maybe<ContentfulPluginInternalContentDigestQueryString_2>;

  owner?: Maybe<ContentfulPluginInternalOwnerQueryString_2>;
}

export interface ContentfulPluginInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPluginInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPluginInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ContentfulPluginNodeLocaleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageJsonNameQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageInternalComponentNameQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePathQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageComponentQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageComponentChunkNameQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextInputObject {
  slug?: Maybe<SitePageContextSlugQueryString>;

  lang?: Maybe<SitePageContextLangQueryString>;
}

export interface SitePageContextSlugQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextLangQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorInputObject {
  resolve?: Maybe<SitePagePluginCreatorResolveQueryString>;

  id?: Maybe<SitePagePluginCreatorIdQueryString>;

  name?: Maybe<SitePagePluginCreatorNameQueryString>;

  version?: Maybe<SitePagePluginCreatorVersionQueryString>;

  pluginOptions?: Maybe<SitePagePluginCreatorPluginOptionsInputObject>;

  nodeAPIs?: Maybe<SitePagePluginCreatorNodeApIsQueryList>;

  browserAPIs?: Maybe<SitePagePluginCreatorBrowserApIsQueryList>;

  ssrAPIs?: Maybe<SitePagePluginCreatorSsrApIsQueryList>;

  pluginFilepath?: Maybe<SitePagePluginCreatorPluginFilepathQueryString>;

  packageJson?: Maybe<SitePagePluginCreatorPackageJsonInputObject>;

  internal?: Maybe<SitePagePluginCreatorInternalInputObject>;
}

export interface SitePagePluginCreatorResolveQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorIdQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorNameQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorVersionQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsInputObject {
  plugins?: Maybe<SitePagePluginCreatorPluginOptionsPluginsQueryList>;

  name?: Maybe<SitePagePluginCreatorPluginOptionsNameQueryString>;

  path?: Maybe<SitePagePluginCreatorPluginOptionsPathQueryString>;

  maxWidth?: Maybe<SitePagePluginCreatorPluginOptionsMaxWidthQueryInteger>;

  backgroundColor?: Maybe<
    SitePagePluginCreatorPluginOptionsBackgroundColorQueryString
  >;

  pathToConfigModule?: Maybe<
    SitePagePluginCreatorPluginOptionsPathToConfigModuleQueryString
  >;

  includePaths?: Maybe<SitePagePluginCreatorPluginOptionsIncludePathsQueryList>;

  src?: Maybe<SitePagePluginCreatorPluginOptionsSrcQueryString>;

  assets?: Maybe<SitePagePluginCreatorPluginOptionsAssetsQueryString>;

  components?: Maybe<SitePagePluginCreatorPluginOptionsComponentsQueryString>;

  pages?: Maybe<SitePagePluginCreatorPluginOptionsPagesQueryString>;

  styles?: Maybe<SitePagePluginCreatorPluginOptionsStylesQueryString>;

  templates?: Maybe<SitePagePluginCreatorPluginOptionsTemplatesQueryString>;

  utils?: Maybe<SitePagePluginCreatorPluginOptionsUtilsQueryString>;

  spaceId?: Maybe<SitePagePluginCreatorPluginOptionsSpaceIdQueryString>;

  accessToken?: Maybe<SitePagePluginCreatorPluginOptionsAccessTokenQueryString>;

  host?: Maybe<SitePagePluginCreatorPluginOptionsHostQueryString>;

  environment?: Maybe<SitePagePluginCreatorPluginOptionsEnvironmentQueryString>;

  short_name?: Maybe<SitePagePluginCreatorPluginOptionsShortNameQueryString>;

  start_url?: Maybe<SitePagePluginCreatorPluginOptionsStartUrlQueryString>;

  background_color?: Maybe<
    SitePagePluginCreatorPluginOptionsBackgroundColorQueryString_2
  >;

  theme_color?: Maybe<SitePagePluginCreatorPluginOptionsThemeColorQueryString>;

  display?: Maybe<SitePagePluginCreatorPluginOptionsDisplayQueryString>;

  icon?: Maybe<SitePagePluginCreatorPluginOptionsIconQueryString>;

  include_favicon?: Maybe<
    SitePagePluginCreatorPluginOptionsIncludeFaviconQueryBoolean
  >;

  sitemap?: Maybe<SitePagePluginCreatorPluginOptionsSitemapQueryString>;

  policy?: Maybe<SitePagePluginCreatorPluginOptionsPolicyQueryList>;

  output?: Maybe<SitePagePluginCreatorPluginOptionsOutputQueryString>;

  exclude?: Maybe<SitePagePluginCreatorPluginOptionsExcludeQueryList>;

  query?: Maybe<SitePagePluginCreatorPluginOptionsQueryQueryString>;

  headers?: Maybe<SitePagePluginCreatorPluginOptionsHeadersInputObject>;

  pathCheck?: Maybe<SitePagePluginCreatorPluginOptionsPathCheckQueryBoolean>;
}

export interface SitePagePluginCreatorPluginOptionsPluginsQueryList {
  elemMatch?: Maybe<SitePagePluginCreatorPluginOptionsPluginsInputObject>;
}

export interface SitePagePluginCreatorPluginOptionsPluginsInputObject {
  resolve?: Maybe<SitePagePluginCreatorPluginOptionsPluginsResolveQueryString>;

  id?: Maybe<SitePagePluginCreatorPluginOptionsPluginsIdQueryString>;

  name?: Maybe<SitePagePluginCreatorPluginOptionsPluginsNameQueryString>;

  version?: Maybe<SitePagePluginCreatorPluginOptionsPluginsVersionQueryString>;

  pluginOptions?: Maybe<
    SitePagePluginCreatorPluginOptionsPluginsPluginOptionsInputObject
  >;

  browserAPIs?: Maybe<
    SitePagePluginCreatorPluginOptionsPluginsBrowserApIsQueryList
  >;

  ssrAPIs?: Maybe<SitePagePluginCreatorPluginOptionsPluginsSsrApIsQueryList>;

  pluginFilepath?: Maybe<
    SitePagePluginCreatorPluginOptionsPluginsPluginFilepathQueryString
  >;
}

export interface SitePagePluginCreatorPluginOptionsPluginsResolveQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsPluginsIdQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsPluginsNameQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsPluginsVersionQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsPluginsPluginOptionsInputObject {
  maxWidth?: Maybe<
    SitePagePluginCreatorPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger
  >;

  backgroundColor?: Maybe<
    SitePagePluginCreatorPluginOptionsPluginsPluginOptionsBackgroundColorQueryString
  >;
}

export interface SitePagePluginCreatorPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsPluginsPluginOptionsBackgroundColorQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsPluginsBrowserApIsQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsPluginsSsrApIsQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsPluginsPluginFilepathQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsNameQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsPathQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsMaxWidthQueryInteger {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsBackgroundColorQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsPathToConfigModuleQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsIncludePathsQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsSrcQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsAssetsQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsComponentsQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsPagesQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsStylesQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsTemplatesQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsUtilsQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsSpaceIdQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsAccessTokenQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsHostQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsEnvironmentQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsShortNameQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsStartUrlQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsBackgroundColorQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsThemeColorQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsDisplayQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsIconQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsIncludeFaviconQueryBoolean {
  eq?: Maybe<boolean>;

  ne?: Maybe<boolean>;

  in?: Maybe<(Maybe<boolean>)[]>;

  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsSitemapQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsPolicyQueryList {
  elemMatch?: Maybe<SitePagePluginCreatorPluginOptionsPolicyInputObject>;
}

export interface SitePagePluginCreatorPluginOptionsPolicyInputObject {
  userAgent?: Maybe<
    SitePagePluginCreatorPluginOptionsPolicyUserAgentQueryString
  >;

  allow?: Maybe<SitePagePluginCreatorPluginOptionsPolicyAllowQueryString>;
}

export interface SitePagePluginCreatorPluginOptionsPolicyUserAgentQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsPolicyAllowQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsOutputQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsExcludeQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsQueryQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsHeadersInputObject {
  _sw_js?: Maybe<SitePagePluginCreatorPluginOptionsHeadersSwJsQueryList>;
}

export interface SitePagePluginCreatorPluginOptionsHeadersSwJsQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsPathCheckQueryBoolean {
  eq?: Maybe<boolean>;

  ne?: Maybe<boolean>;

  in?: Maybe<(Maybe<boolean>)[]>;

  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface SitePagePluginCreatorNodeApIsQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorBrowserApIsQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorSsrApIsQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPluginFilepathQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPackageJsonInputObject {
  name?: Maybe<SitePagePluginCreatorPackageJsonNameQueryString>;

  description?: Maybe<SitePagePluginCreatorPackageJsonDescriptionQueryString>;

  version?: Maybe<SitePagePluginCreatorPackageJsonVersionQueryString>;

  main?: Maybe<SitePagePluginCreatorPackageJsonMainQueryString>;

  author?: Maybe<SitePagePluginCreatorPackageJsonAuthorQueryString>;

  license?: Maybe<SitePagePluginCreatorPackageJsonLicenseQueryString>;

  dependencies?: Maybe<SitePagePluginCreatorPackageJsonDependenciesQueryList>;

  devDependencies?: Maybe<
    SitePagePluginCreatorPackageJsonDevDependenciesQueryList
  >;

  peerDependencies?: Maybe<
    SitePagePluginCreatorPackageJsonPeerDependenciesQueryList
  >;

  keywords?: Maybe<SitePagePluginCreatorPackageJsonKeywordsQueryList>;
}

export interface SitePagePluginCreatorPackageJsonNameQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPackageJsonDescriptionQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPackageJsonVersionQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPackageJsonMainQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPackageJsonAuthorQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPackageJsonLicenseQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPackageJsonDependenciesQueryList {
  elemMatch?: Maybe<SitePagePluginCreatorPackageJsonDependenciesInputObject>;
}

export interface SitePagePluginCreatorPackageJsonDependenciesInputObject {
  name?: Maybe<SitePagePluginCreatorPackageJsonDependenciesNameQueryString>;

  version?: Maybe<
    SitePagePluginCreatorPackageJsonDependenciesVersionQueryString
  >;
}

export interface SitePagePluginCreatorPackageJsonDependenciesNameQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPackageJsonDependenciesVersionQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPackageJsonDevDependenciesQueryList {
  elemMatch?: Maybe<SitePagePluginCreatorPackageJsonDevDependenciesInputObject>;
}

export interface SitePagePluginCreatorPackageJsonDevDependenciesInputObject {
  name?: Maybe<SitePagePluginCreatorPackageJsonDevDependenciesNameQueryString>;

  version?: Maybe<
    SitePagePluginCreatorPackageJsonDevDependenciesVersionQueryString
  >;
}

export interface SitePagePluginCreatorPackageJsonDevDependenciesNameQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPackageJsonDevDependenciesVersionQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPackageJsonPeerDependenciesQueryList {
  elemMatch?: Maybe<
    SitePagePluginCreatorPackageJsonPeerDependenciesInputObject
  >;
}

export interface SitePagePluginCreatorPackageJsonPeerDependenciesInputObject {
  name?: Maybe<SitePagePluginCreatorPackageJsonPeerDependenciesNameQueryString>;

  version?: Maybe<
    SitePagePluginCreatorPackageJsonPeerDependenciesVersionQueryString
  >;
}

export interface SitePagePluginCreatorPackageJsonPeerDependenciesNameQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPackageJsonPeerDependenciesVersionQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPackageJsonKeywordsQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorInternalInputObject {
  contentDigest?: Maybe<SitePagePluginCreatorInternalContentDigestQueryString>;

  type?: Maybe<SitePagePluginCreatorInternalTypeQueryString>;

  owner?: Maybe<SitePagePluginCreatorInternalOwnerQueryString>;
}

export interface SitePagePluginCreatorInternalContentDigestQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorInternalTypeQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorInternalOwnerQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageComponentPathQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageInternalInputObject_2 {
  type?: Maybe<SitePageInternalTypeQueryString_2>;

  contentDigest?: Maybe<SitePageInternalContentDigestQueryString_2>;

  description?: Maybe<SitePageInternalDescriptionQueryString>;

  owner?: Maybe<SitePageInternalOwnerQueryString_2>;
}

export interface SitePageInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageInternalDescriptionQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export enum SitePluginConnectionSortByFieldsEnum {
  Resolve = 'resolve',
  Id = 'id',
  Name = 'name',
  Version = 'version',
  PluginOptionsPlugins = 'pluginOptions___plugins',
  PluginOptionsName = 'pluginOptions___name',
  PluginOptionsPath = 'pluginOptions___path',
  PluginOptionsMaxWidth = 'pluginOptions___maxWidth',
  PluginOptionsPathToConfigModule = 'pluginOptions___pathToConfigModule',
  PluginOptionsIncludePaths = 'pluginOptions___includePaths',
  PluginOptionsSrc = 'pluginOptions___src',
  PluginOptionsAssets = 'pluginOptions___assets',
  PluginOptionsComponents = 'pluginOptions___components',
  PluginOptionsPages = 'pluginOptions___pages',
  PluginOptionsStyles = 'pluginOptions___styles',
  PluginOptionsTemplates = 'pluginOptions___templates',
  PluginOptionsUtils = 'pluginOptions___utils',
  PluginOptionsSpaceId = 'pluginOptions___spaceId',
  PluginOptionsAccessToken = 'pluginOptions___accessToken',
  PluginOptionsHost = 'pluginOptions___host',
  PluginOptionsEnvironment = 'pluginOptions___environment',
  PluginOptionsShortName = 'pluginOptions___short_name',
  PluginOptionsStartUrl = 'pluginOptions___start_url',
  PluginOptionsBackgroundColor = 'pluginOptions___background_color',
  PluginOptionsThemeColor = 'pluginOptions___theme_color',
  PluginOptionsDisplay = 'pluginOptions___display',
  PluginOptionsIcon = 'pluginOptions___icon',
  PluginOptionsIncludeFavicon = 'pluginOptions___include_favicon',
  PluginOptionsSitemap = 'pluginOptions___sitemap',
  PluginOptionsPolicy = 'pluginOptions___policy',
  PluginOptionsOutput = 'pluginOptions___output',
  PluginOptionsExclude = 'pluginOptions___exclude',
  PluginOptionsQuery = 'pluginOptions___query',
  PluginOptionsHeadersSwJs = 'pluginOptions___headers____sw_js',
  PluginOptionsPathCheck = 'pluginOptions___pathCheck',
  NodeApIs = 'nodeAPIs',
  BrowserApIs = 'browserAPIs',
  SsrApIs = 'ssrAPIs',
  PluginFilepath = 'pluginFilepath',
  PackageJsonName = 'packageJson___name',
  PackageJsonDescription = 'packageJson___description',
  PackageJsonVersion = 'packageJson___version',
  PackageJsonMain = 'packageJson___main',
  PackageJsonAuthor = 'packageJson___author',
  PackageJsonLicense = 'packageJson___license',
  PackageJsonDependencies = 'packageJson___dependencies',
  PackageJsonDevDependencies = 'packageJson___devDependencies',
  PackageJsonPeerDependencies = 'packageJson___peerDependencies',
  PackageJsonKeywords = 'packageJson___keywords',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalOwner = 'internal___owner',
}

export enum SitePluginConnectionSortOrderValues {
  Asc = 'ASC',
  Desc = 'DESC',
}

export enum SitePluginDistinctEnum {
  Resolve = 'resolve',
  Id = 'id',
  Name = 'name',
  Version = 'version',
  PluginOptionsPlugins = 'pluginOptions___plugins',
  PluginOptionsName = 'pluginOptions___name',
  PluginOptionsPath = 'pluginOptions___path',
  PluginOptionsMaxWidth = 'pluginOptions___maxWidth',
  PluginOptionsPathToConfigModule = 'pluginOptions___pathToConfigModule',
  PluginOptionsIncludePaths = 'pluginOptions___includePaths',
  PluginOptionsSrc = 'pluginOptions___src',
  PluginOptionsAssets = 'pluginOptions___assets',
  PluginOptionsComponents = 'pluginOptions___components',
  PluginOptionsPages = 'pluginOptions___pages',
  PluginOptionsStyles = 'pluginOptions___styles',
  PluginOptionsTemplates = 'pluginOptions___templates',
  PluginOptionsUtils = 'pluginOptions___utils',
  PluginOptionsSpaceId = 'pluginOptions___spaceId',
  PluginOptionsAccessToken = 'pluginOptions___accessToken',
  PluginOptionsHost = 'pluginOptions___host',
  PluginOptionsEnvironment = 'pluginOptions___environment',
  PluginOptionsShortName = 'pluginOptions___short_name',
  PluginOptionsStartUrl = 'pluginOptions___start_url',
  PluginOptionsBackgroundColor = 'pluginOptions___background_color',
  PluginOptionsThemeColor = 'pluginOptions___theme_color',
  PluginOptionsDisplay = 'pluginOptions___display',
  PluginOptionsIcon = 'pluginOptions___icon',
  PluginOptionsIncludeFavicon = 'pluginOptions___include_favicon',
  PluginOptionsSitemap = 'pluginOptions___sitemap',
  PluginOptionsPolicy = 'pluginOptions___policy',
  PluginOptionsOutput = 'pluginOptions___output',
  PluginOptionsExclude = 'pluginOptions___exclude',
  PluginOptionsQuery = 'pluginOptions___query',
  PluginOptionsHeadersSwJs = 'pluginOptions___headers____sw_js',
  PluginOptionsPathCheck = 'pluginOptions___pathCheck',
  NodeApIs = 'nodeAPIs',
  BrowserApIs = 'browserAPIs',
  SsrApIs = 'ssrAPIs',
  PluginFilepath = 'pluginFilepath',
  PackageJsonName = 'packageJson___name',
  PackageJsonDescription = 'packageJson___description',
  PackageJsonVersion = 'packageJson___version',
  PackageJsonMain = 'packageJson___main',
  PackageJsonAuthor = 'packageJson___author',
  PackageJsonLicense = 'packageJson___license',
  PackageJsonDependencies = 'packageJson___dependencies',
  PackageJsonDevDependencies = 'packageJson___devDependencies',
  PackageJsonPeerDependencies = 'packageJson___peerDependencies',
  PackageJsonKeywords = 'packageJson___keywords',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalOwner = 'internal___owner',
}

export enum SitePluginGroupEnum {
  Resolve = 'resolve',
  Id = 'id',
  Name = 'name',
  Version = 'version',
  PluginOptionsPlugins = 'pluginOptions___plugins',
  PluginOptionsName = 'pluginOptions___name',
  PluginOptionsPath = 'pluginOptions___path',
  PluginOptionsMaxWidth = 'pluginOptions___maxWidth',
  PluginOptionsPathToConfigModule = 'pluginOptions___pathToConfigModule',
  PluginOptionsIncludePaths = 'pluginOptions___includePaths',
  PluginOptionsSrc = 'pluginOptions___src',
  PluginOptionsAssets = 'pluginOptions___assets',
  PluginOptionsComponents = 'pluginOptions___components',
  PluginOptionsPages = 'pluginOptions___pages',
  PluginOptionsStyles = 'pluginOptions___styles',
  PluginOptionsTemplates = 'pluginOptions___templates',
  PluginOptionsUtils = 'pluginOptions___utils',
  PluginOptionsSpaceId = 'pluginOptions___spaceId',
  PluginOptionsAccessToken = 'pluginOptions___accessToken',
  PluginOptionsHost = 'pluginOptions___host',
  PluginOptionsEnvironment = 'pluginOptions___environment',
  PluginOptionsShortName = 'pluginOptions___short_name',
  PluginOptionsStartUrl = 'pluginOptions___start_url',
  PluginOptionsBackgroundColor = 'pluginOptions___background_color',
  PluginOptionsThemeColor = 'pluginOptions___theme_color',
  PluginOptionsDisplay = 'pluginOptions___display',
  PluginOptionsIcon = 'pluginOptions___icon',
  PluginOptionsIncludeFavicon = 'pluginOptions___include_favicon',
  PluginOptionsSitemap = 'pluginOptions___sitemap',
  PluginOptionsPolicy = 'pluginOptions___policy',
  PluginOptionsOutput = 'pluginOptions___output',
  PluginOptionsExclude = 'pluginOptions___exclude',
  PluginOptionsQuery = 'pluginOptions___query',
  PluginOptionsHeadersSwJs = 'pluginOptions___headers____sw_js',
  PluginOptionsPathCheck = 'pluginOptions___pathCheck',
  NodeApIs = 'nodeAPIs',
  BrowserApIs = 'browserAPIs',
  SsrApIs = 'ssrAPIs',
  PluginFilepath = 'pluginFilepath',
  PackageJsonName = 'packageJson___name',
  PackageJsonDescription = 'packageJson___description',
  PackageJsonVersion = 'packageJson___version',
  PackageJsonMain = 'packageJson___main',
  PackageJsonAuthor = 'packageJson___author',
  PackageJsonLicense = 'packageJson___license',
  PackageJsonDependencies = 'packageJson___dependencies',
  PackageJsonDevDependencies = 'packageJson___devDependencies',
  PackageJsonPeerDependencies = 'packageJson___peerDependencies',
  PackageJsonKeywords = 'packageJson___keywords',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalOwner = 'internal___owner',
}

export enum DirectoryConnectionSortByFieldsEnum {
  Id = 'id',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalDescription = 'internal___description',
  InternalOwner = 'internal___owner',
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Blksize = 'blksize',
  Ino = 'ino',
  Blocks = 'blocks',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  BirthtimeMs = 'birthtimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
}

export enum DirectoryConnectionSortOrderValues {
  Asc = 'ASC',
  Desc = 'DESC',
}

export enum DirectoryDistinctEnum {
  Id = 'id',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalDescription = 'internal___description',
  InternalOwner = 'internal___owner',
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Blksize = 'blksize',
  Ino = 'ino',
  Blocks = 'blocks',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  BirthtimeMs = 'birthtimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
}

export enum DirectoryGroupEnum {
  Id = 'id',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalDescription = 'internal___description',
  InternalOwner = 'internal___owner',
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Blksize = 'blksize',
  Ino = 'ino',
  Blocks = 'blocks',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  BirthtimeMs = 'birthtimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
}

export enum FileConnectionSortByFieldsEnum {
  Id = 'id',
  Children = 'children',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalMediaType = 'internal___mediaType',
  InternalDescription = 'internal___description',
  InternalOwner = 'internal___owner',
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Blksize = 'blksize',
  Ino = 'ino',
  Blocks = 'blocks',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  BirthtimeMs = 'birthtimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
  PublicUrl = 'publicURL',
}

export enum FileConnectionSortOrderValues {
  Asc = 'ASC',
  Desc = 'DESC',
}

export enum FileDistinctEnum {
  Id = 'id',
  Children = 'children',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalMediaType = 'internal___mediaType',
  InternalDescription = 'internal___description',
  InternalOwner = 'internal___owner',
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Blksize = 'blksize',
  Ino = 'ino',
  Blocks = 'blocks',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  BirthtimeMs = 'birthtimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
}

export enum FileGroupEnum {
  Id = 'id',
  Children = 'children',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalMediaType = 'internal___mediaType',
  InternalDescription = 'internal___description',
  InternalOwner = 'internal___owner',
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Blksize = 'blksize',
  Ino = 'ino',
  Blocks = 'blocks',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  BirthtimeMs = 'birthtimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
}

export enum DataJsonConnectionSortByFieldsEnum {
  Id = 'id',
  Parent = 'parent',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalOwner = 'internal___owner',
}

export enum DataJsonConnectionSortOrderValues {
  Asc = 'ASC',
  Desc = 'DESC',
}

export enum DataJsonDistinctEnum {
  Id = 'id',
  Parent = 'parent',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalOwner = 'internal___owner',
}

export enum DataJsonGroupEnum {
  Id = 'id',
  Parent = 'parent',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalOwner = 'internal___owner',
}

export enum ContentfulContentTypeConnectionSortByFieldsEnum {
  Id = 'id',
  Name = 'name',
  DisplayField = 'displayField',
  Description = 'description',
  InternalType = 'internal___type',
  InternalContentDigest = 'internal___contentDigest',
  InternalOwner = 'internal___owner',
}

export enum ContentfulContentTypeConnectionSortOrderValues {
  Asc = 'ASC',
  Desc = 'DESC',
}

export enum ContentfulContentTypeDistinctEnum {
  Id = 'id',
  Name = 'name',
  DisplayField = 'displayField',
  Description = 'description',
  InternalType = 'internal___type',
  InternalContentDigest = 'internal___contentDigest',
  InternalOwner = 'internal___owner',
}

export enum ContentfulContentTypeGroupEnum {
  Id = 'id',
  Name = 'name',
  DisplayField = 'displayField',
  Description = 'description',
  InternalType = 'internal___type',
  InternalContentDigest = 'internal___contentDigest',
  InternalOwner = 'internal___owner',
}

export enum ContentfulServiceConnectionSortByFieldsEnum {
  Title = 'title',
  Slug = 'slug',
  Order = 'order',
  ImageNode = 'image___NODE',
  SectionsNode = 'sections___NODE',
  DescriptionNode = 'description___NODE',
  Id = 'id',
  ContentfulId = 'contentful_id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  Parent = 'parent',
  Children = 'children',
  InternalType = 'internal___type',
  InternalContentDigest = 'internal___contentDigest',
  InternalOwner = 'internal___owner',
  NodeLocale = 'node_locale',
  PluginsNode = 'plugins___NODE',
}

export enum ContentfulServiceConnectionSortOrderValues {
  Asc = 'ASC',
  Desc = 'DESC',
}

export enum ExcerptFormats {
  Plain = 'PLAIN',
  Html = 'HTML',
}

export enum HeadingLevels {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6',
}

export enum ContentfulImageFormat {
  NoChange = 'NO_CHANGE',
  Jpg = 'JPG',
  Png = 'PNG',
  Webp = 'WEBP',
}

export enum ImageResizingBehavior {
  NoChange = 'NO_CHANGE',
  Pad = 'PAD',
  Crop = 'CROP',
  Fill = 'FILL',
  Thumb = 'THUMB',
  Scale = 'SCALE',
}

export enum ContentfulImageCropFocus {
  Top = 'TOP',
  TopLeft = 'TOP_LEFT',
  TopRight = 'TOP_RIGHT',
  Bottom = 'BOTTOM',
  BottomRight = 'BOTTOM_RIGHT',
  BottomLeft = 'BOTTOM_LEFT',
  Right = 'RIGHT',
  Left = 'LEFT',
  Faces = 'FACES',
  Center = 'CENTER',
}

export enum ContentfulServiceDistinctEnum {
  Title = 'title',
  Slug = 'slug',
  Order = 'order',
  ImageNode = 'image___NODE',
  SectionsNode = 'sections___NODE',
  DescriptionNode = 'description___NODE',
  Id = 'id',
  ContentfulId = 'contentful_id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  Parent = 'parent',
  Children = 'children',
  InternalType = 'internal___type',
  InternalContentDigest = 'internal___contentDigest',
  InternalOwner = 'internal___owner',
  NodeLocale = 'node_locale',
  PluginsNode = 'plugins___NODE',
}

export enum ContentfulServiceGroupEnum {
  Title = 'title',
  Slug = 'slug',
  Order = 'order',
  ImageNode = 'image___NODE',
  SectionsNode = 'sections___NODE',
  DescriptionNode = 'description___NODE',
  Id = 'id',
  ContentfulId = 'contentful_id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  Parent = 'parent',
  Children = 'children',
  InternalType = 'internal___type',
  InternalContentDigest = 'internal___contentDigest',
  InternalOwner = 'internal___owner',
  NodeLocale = 'node_locale',
  PluginsNode = 'plugins___NODE',
}

export enum ContentfulServiceDescriptionTextNodeConnectionSortByFieldsEnum {
  Id = 'id',
  Parent = 'parent',
  Children = 'children',
  Description = 'description',
  InternalType = 'internal___type',
  InternalMediaType = 'internal___mediaType',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalOwner = 'internal___owner',
}

export enum ContentfulServiceDescriptionTextNodeConnectionSortOrderValues {
  Asc = 'ASC',
  Desc = 'DESC',
}

export enum ContentfulServiceDescriptionTextNodeDistinctEnum {
  Id = 'id',
  Parent = 'parent',
  Children = 'children',
  Description = 'description',
  InternalType = 'internal___type',
  InternalMediaType = 'internal___mediaType',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalOwner = 'internal___owner',
}

export enum ContentfulServiceDescriptionTextNodeGroupEnum {
  Id = 'id',
  Parent = 'parent',
  Children = 'children',
  Description = 'description',
  InternalType = 'internal___type',
  InternalMediaType = 'internal___mediaType',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalOwner = 'internal___owner',
}

export enum ContentfulNavigationConnectionSortByFieldsEnum {
  Title = 'title',
  Slug = 'slug',
  Order = 'order',
  Header = 'header',
  Footer = 'footer',
  Id = 'id',
  ContentfulId = 'contentful_id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  Parent = 'parent',
  InternalType = 'internal___type',
  InternalContentDigest = 'internal___contentDigest',
  InternalOwner = 'internal___owner',
  NodeLocale = 'node_locale',
}

export enum ContentfulNavigationConnectionSortOrderValues {
  Asc = 'ASC',
  Desc = 'DESC',
}

export enum ContentfulNavigationDistinctEnum {
  Title = 'title',
  Slug = 'slug',
  Order = 'order',
  Header = 'header',
  Footer = 'footer',
  Id = 'id',
  ContentfulId = 'contentful_id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  Parent = 'parent',
  InternalType = 'internal___type',
  InternalContentDigest = 'internal___contentDigest',
  InternalOwner = 'internal___owner',
  NodeLocale = 'node_locale',
}

export enum ContentfulNavigationGroupEnum {
  Title = 'title',
  Slug = 'slug',
  Order = 'order',
  Header = 'header',
  Footer = 'footer',
  Id = 'id',
  ContentfulId = 'contentful_id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  Parent = 'parent',
  InternalType = 'internal___type',
  InternalContentDigest = 'internal___contentDigest',
  InternalOwner = 'internal___owner',
  NodeLocale = 'node_locale',
}

export enum ContentfulOfficeConnectionSortByFieldsEnum {
  Title = 'title',
  Slug = 'slug',
  Order = 'order',
  MapLon = 'map___lon',
  MapLat = 'map___lat',
  Id = 'id',
  ContentfulId = 'contentful_id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  Parent = 'parent',
  InternalType = 'internal___type',
  InternalContentDigest = 'internal___contentDigest',
  InternalOwner = 'internal___owner',
  NodeLocale = 'node_locale',
}

export enum ContentfulOfficeConnectionSortOrderValues {
  Asc = 'ASC',
  Desc = 'DESC',
}

export enum ContentfulOfficeDistinctEnum {
  Title = 'title',
  Slug = 'slug',
  Order = 'order',
  MapLon = 'map___lon',
  MapLat = 'map___lat',
  Id = 'id',
  ContentfulId = 'contentful_id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  Parent = 'parent',
  InternalType = 'internal___type',
  InternalContentDigest = 'internal___contentDigest',
  InternalOwner = 'internal___owner',
  NodeLocale = 'node_locale',
}

export enum ContentfulOfficeGroupEnum {
  Title = 'title',
  Slug = 'slug',
  Order = 'order',
  MapLon = 'map___lon',
  MapLat = 'map___lat',
  Id = 'id',
  ContentfulId = 'contentful_id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  Parent = 'parent',
  InternalType = 'internal___type',
  InternalContentDigest = 'internal___contentDigest',
  InternalOwner = 'internal___owner',
  NodeLocale = 'node_locale',
}

export enum ContentfulCaseConnectionSortByFieldsEnum {
  Title = 'title',
  Slug = 'slug',
  Order = 'order',
  Description = 'description',
  ThumbnailNode = 'thumbnail___NODE',
  Id = 'id',
  ContentfulId = 'contentful_id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  Parent = 'parent',
  InternalType = 'internal___type',
  InternalContentDigest = 'internal___contentDigest',
  InternalOwner = 'internal___owner',
  NodeLocale = 'node_locale',
}

export enum ContentfulCaseConnectionSortOrderValues {
  Asc = 'ASC',
  Desc = 'DESC',
}

export enum ContentfulCaseDistinctEnum {
  Title = 'title',
  Slug = 'slug',
  Order = 'order',
  Description = 'description',
  ThumbnailNode = 'thumbnail___NODE',
  Id = 'id',
  ContentfulId = 'contentful_id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  Parent = 'parent',
  InternalType = 'internal___type',
  InternalContentDigest = 'internal___contentDigest',
  InternalOwner = 'internal___owner',
  NodeLocale = 'node_locale',
}

export enum ContentfulCaseGroupEnum {
  Title = 'title',
  Slug = 'slug',
  Order = 'order',
  Description = 'description',
  ThumbnailNode = 'thumbnail___NODE',
  Id = 'id',
  ContentfulId = 'contentful_id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  Parent = 'parent',
  InternalType = 'internal___type',
  InternalContentDigest = 'internal___contentDigest',
  InternalOwner = 'internal___owner',
  NodeLocale = 'node_locale',
}

export enum ContentfulExpertConnectionSortByFieldsEnum {
  Title = 'title',
  Position = 'position',
  Order = 'order',
  PhotoNode = 'photo___NODE',
  Id = 'id',
  ContentfulId = 'contentful_id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  Parent = 'parent',
  InternalType = 'internal___type',
  InternalContentDigest = 'internal___contentDigest',
  InternalOwner = 'internal___owner',
  NodeLocale = 'node_locale',
}

export enum ContentfulExpertConnectionSortOrderValues {
  Asc = 'ASC',
  Desc = 'DESC',
}

export enum ContentfulExpertDistinctEnum {
  Title = 'title',
  Position = 'position',
  Order = 'order',
  PhotoNode = 'photo___NODE',
  Id = 'id',
  ContentfulId = 'contentful_id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  Parent = 'parent',
  InternalType = 'internal___type',
  InternalContentDigest = 'internal___contentDigest',
  InternalOwner = 'internal___owner',
  NodeLocale = 'node_locale',
}

export enum ContentfulExpertGroupEnum {
  Title = 'title',
  Position = 'position',
  Order = 'order',
  PhotoNode = 'photo___NODE',
  Id = 'id',
  ContentfulId = 'contentful_id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  Parent = 'parent',
  InternalType = 'internal___type',
  InternalContentDigest = 'internal___contentDigest',
  InternalOwner = 'internal___owner',
  NodeLocale = 'node_locale',
}

export enum ContentfulPageConnectionSortByFieldsEnum {
  Slug = 'slug',
  PageTitle = 'pageTitle',
  HeaderTitle = 'headerTitle',
  HeaderDescriptionNode = 'headerDescription___NODE',
  Id = 'id',
  ContentfulId = 'contentful_id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  Parent = 'parent',
  Children = 'children',
  InternalType = 'internal___type',
  InternalContentDigest = 'internal___contentDigest',
  InternalOwner = 'internal___owner',
  NodeLocale = 'node_locale',
  PageDescription = 'pageDescription',
  PageKeywords = 'pageKeywords',
}

export enum ContentfulPageConnectionSortOrderValues {
  Asc = 'ASC',
  Desc = 'DESC',
}

export enum ContentfulPageDistinctEnum {
  Slug = 'slug',
  PageTitle = 'pageTitle',
  HeaderTitle = 'headerTitle',
  HeaderDescriptionNode = 'headerDescription___NODE',
  Id = 'id',
  ContentfulId = 'contentful_id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  Parent = 'parent',
  Children = 'children',
  InternalType = 'internal___type',
  InternalContentDigest = 'internal___contentDigest',
  InternalOwner = 'internal___owner',
  NodeLocale = 'node_locale',
  PageDescription = 'pageDescription',
  PageKeywords = 'pageKeywords',
}

export enum ContentfulPageGroupEnum {
  Slug = 'slug',
  PageTitle = 'pageTitle',
  HeaderTitle = 'headerTitle',
  HeaderDescriptionNode = 'headerDescription___NODE',
  Id = 'id',
  ContentfulId = 'contentful_id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  Parent = 'parent',
  Children = 'children',
  InternalType = 'internal___type',
  InternalContentDigest = 'internal___contentDigest',
  InternalOwner = 'internal___owner',
  NodeLocale = 'node_locale',
  PageDescription = 'pageDescription',
  PageKeywords = 'pageKeywords',
}

export enum ContentfulPageHeaderDescriptionTextNodeConnectionSortByFieldsEnum {
  Id = 'id',
  Parent = 'parent',
  Children = 'children',
  HeaderDescription = 'headerDescription',
  InternalType = 'internal___type',
  InternalMediaType = 'internal___mediaType',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalOwner = 'internal___owner',
}

export enum ContentfulPageHeaderDescriptionTextNodeConnectionSortOrderValues {
  Asc = 'ASC',
  Desc = 'DESC',
}

export enum ContentfulPageHeaderDescriptionTextNodeDistinctEnum {
  Id = 'id',
  Parent = 'parent',
  Children = 'children',
  HeaderDescription = 'headerDescription',
  InternalType = 'internal___type',
  InternalMediaType = 'internal___mediaType',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalOwner = 'internal___owner',
}

export enum ContentfulPageHeaderDescriptionTextNodeGroupEnum {
  Id = 'id',
  Parent = 'parent',
  Children = 'children',
  HeaderDescription = 'headerDescription',
  InternalType = 'internal___type',
  InternalMediaType = 'internal___mediaType',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalOwner = 'internal___owner',
}

export enum ContentfulDictionaryConnectionSortByFieldsEnum {
  Slug = 'slug',
  Title = 'title',
  Id = 'id',
  ContentfulId = 'contentful_id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  Parent = 'parent',
  InternalType = 'internal___type',
  InternalContentDigest = 'internal___contentDigest',
  InternalOwner = 'internal___owner',
  NodeLocale = 'node_locale',
  Category = 'category',
}

export enum ContentfulDictionaryConnectionSortOrderValues {
  Asc = 'ASC',
  Desc = 'DESC',
}

export enum ContentfulDictionaryDistinctEnum {
  Slug = 'slug',
  Title = 'title',
  Id = 'id',
  ContentfulId = 'contentful_id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  Parent = 'parent',
  InternalType = 'internal___type',
  InternalContentDigest = 'internal___contentDigest',
  InternalOwner = 'internal___owner',
  NodeLocale = 'node_locale',
  Category = 'category',
}

export enum ContentfulDictionaryGroupEnum {
  Slug = 'slug',
  Title = 'title',
  Id = 'id',
  ContentfulId = 'contentful_id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  Parent = 'parent',
  InternalType = 'internal___type',
  InternalContentDigest = 'internal___contentDigest',
  InternalOwner = 'internal___owner',
  NodeLocale = 'node_locale',
  Category = 'category',
}

export enum ContentfulServiceSectionConnectionSortByFieldsEnum {
  Title = 'title',
  Subtitle = 'subtitle',
  List = 'list',
  Order = 'order',
  ThumbnailNode = 'thumbnail___NODE',
  ServiceNode = 'service___NODE',
  DescriptionNode = 'description___NODE',
  Id = 'id',
  ContentfulId = 'contentful_id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  Parent = 'parent',
  Children = 'children',
  InternalType = 'internal___type',
  InternalContentDigest = 'internal___contentDigest',
  InternalOwner = 'internal___owner',
  NodeLocale = 'node_locale',
}

export enum ContentfulServiceSectionConnectionSortOrderValues {
  Asc = 'ASC',
  Desc = 'DESC',
}

export enum ContentfulServiceSectionDistinctEnum {
  Title = 'title',
  Subtitle = 'subtitle',
  List = 'list',
  Order = 'order',
  ThumbnailNode = 'thumbnail___NODE',
  ServiceNode = 'service___NODE',
  DescriptionNode = 'description___NODE',
  Id = 'id',
  ContentfulId = 'contentful_id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  Parent = 'parent',
  Children = 'children',
  InternalType = 'internal___type',
  InternalContentDigest = 'internal___contentDigest',
  InternalOwner = 'internal___owner',
  NodeLocale = 'node_locale',
}

export enum ContentfulServiceSectionGroupEnum {
  Title = 'title',
  Subtitle = 'subtitle',
  List = 'list',
  Order = 'order',
  ThumbnailNode = 'thumbnail___NODE',
  ServiceNode = 'service___NODE',
  DescriptionNode = 'description___NODE',
  Id = 'id',
  ContentfulId = 'contentful_id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  Parent = 'parent',
  Children = 'children',
  InternalType = 'internal___type',
  InternalContentDigest = 'internal___contentDigest',
  InternalOwner = 'internal___owner',
  NodeLocale = 'node_locale',
}

export enum ContentfulServiceSectionDescriptionTextNodeConnectionSortByFieldsEnum {
  Id = 'id',
  Parent = 'parent',
  Children = 'children',
  Description = 'description',
  InternalType = 'internal___type',
  InternalMediaType = 'internal___mediaType',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalOwner = 'internal___owner',
}

export enum ContentfulServiceSectionDescriptionTextNodeConnectionSortOrderValues {
  Asc = 'ASC',
  Desc = 'DESC',
}

export enum ContentfulServiceSectionDescriptionTextNodeDistinctEnum {
  Id = 'id',
  Parent = 'parent',
  Children = 'children',
  Description = 'description',
  InternalType = 'internal___type',
  InternalMediaType = 'internal___mediaType',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalOwner = 'internal___owner',
}

export enum ContentfulServiceSectionDescriptionTextNodeGroupEnum {
  Id = 'id',
  Parent = 'parent',
  Children = 'children',
  Description = 'description',
  InternalType = 'internal___type',
  InternalMediaType = 'internal___mediaType',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalOwner = 'internal___owner',
}

export enum ContentfulStatisticsConnectionSortByFieldsEnum {
  Title = 'title',
  Description = 'description',
  Order = 'order',
  Id = 'id',
  ContentfulId = 'contentful_id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  Parent = 'parent',
  InternalType = 'internal___type',
  InternalContentDigest = 'internal___contentDigest',
  InternalOwner = 'internal___owner',
  NodeLocale = 'node_locale',
}

export enum ContentfulStatisticsConnectionSortOrderValues {
  Asc = 'ASC',
  Desc = 'DESC',
}

export enum ContentfulStatisticsDistinctEnum {
  Title = 'title',
  Description = 'description',
  Order = 'order',
  Id = 'id',
  ContentfulId = 'contentful_id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  Parent = 'parent',
  InternalType = 'internal___type',
  InternalContentDigest = 'internal___contentDigest',
  InternalOwner = 'internal___owner',
  NodeLocale = 'node_locale',
}

export enum ContentfulStatisticsGroupEnum {
  Title = 'title',
  Description = 'description',
  Order = 'order',
  Id = 'id',
  ContentfulId = 'contentful_id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  Parent = 'parent',
  InternalType = 'internal___type',
  InternalContentDigest = 'internal___contentDigest',
  InternalOwner = 'internal___owner',
  NodeLocale = 'node_locale',
}

export enum ContentfulListConnectionSortByFieldsEnum {
  Title = 'title',
  Items = 'items',
  Order = 'order',
  Category = 'category',
  Id = 'id',
  ContentfulId = 'contentful_id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  Parent = 'parent',
  InternalType = 'internal___type',
  InternalContentDigest = 'internal___contentDigest',
  InternalOwner = 'internal___owner',
  NodeLocale = 'node_locale',
  PluginNode = 'plugin___NODE',
}

export enum ContentfulListConnectionSortOrderValues {
  Asc = 'ASC',
  Desc = 'DESC',
}

export enum ContentfulListDistinctEnum {
  Title = 'title',
  Items = 'items',
  Order = 'order',
  Category = 'category',
  Id = 'id',
  ContentfulId = 'contentful_id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  Parent = 'parent',
  InternalType = 'internal___type',
  InternalContentDigest = 'internal___contentDigest',
  InternalOwner = 'internal___owner',
  NodeLocale = 'node_locale',
  PluginNode = 'plugin___NODE',
}

export enum ContentfulListGroupEnum {
  Title = 'title',
  Items = 'items',
  Order = 'order',
  Category = 'category',
  Id = 'id',
  ContentfulId = 'contentful_id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  Parent = 'parent',
  InternalType = 'internal___type',
  InternalContentDigest = 'internal___contentDigest',
  InternalOwner = 'internal___owner',
  NodeLocale = 'node_locale',
  PluginNode = 'plugin___NODE',
}

export enum ContentfulAssetConnectionSortByFieldsEnum {
  ContentfulId = 'contentful_id',
  Id = 'id',
  FileUrl = 'file___url',
  FileDetailsSize = 'file___details___size',
  FileDetailsImage = 'file___details___image',
  FileFileName = 'file___fileName',
  FileContentType = 'file___contentType',
  Title = 'title',
  Description = 'description',
  NodeLocale = 'node_locale',
  InternalType = 'internal___type',
  InternalContentDigest = 'internal___contentDigest',
  InternalOwner = 'internal___owner',
  FixedBase64 = 'fixed___base64',
  FixedTracedSvg = 'fixed___tracedSVG',
  FixedAspectRatio = 'fixed___aspectRatio',
  FixedWidth = 'fixed___width',
  FixedHeight = 'fixed___height',
  FixedSrc = 'fixed___src',
  FixedSrcSet = 'fixed___srcSet',
  FixedSrcWebp = 'fixed___srcWebp',
  FixedSrcSetWebp = 'fixed___srcSetWebp',
  ResolutionsBase64 = 'resolutions___base64',
  ResolutionsTracedSvg = 'resolutions___tracedSVG',
  ResolutionsAspectRatio = 'resolutions___aspectRatio',
  ResolutionsWidth = 'resolutions___width',
  ResolutionsHeight = 'resolutions___height',
  ResolutionsSrc = 'resolutions___src',
  ResolutionsSrcSet = 'resolutions___srcSet',
  ResolutionsSrcWebp = 'resolutions___srcWebp',
  ResolutionsSrcSetWebp = 'resolutions___srcSetWebp',
  FluidBase64 = 'fluid___base64',
  FluidTracedSvg = 'fluid___tracedSVG',
  FluidAspectRatio = 'fluid___aspectRatio',
  FluidSrc = 'fluid___src',
  FluidSrcSet = 'fluid___srcSet',
  FluidSrcWebp = 'fluid___srcWebp',
  FluidSrcSetWebp = 'fluid___srcSetWebp',
  FluidSizes = 'fluid___sizes',
  SizesBase64 = 'sizes___base64',
  SizesTracedSvg = 'sizes___tracedSVG',
  SizesAspectRatio = 'sizes___aspectRatio',
  SizesSrc = 'sizes___src',
  SizesSrcSet = 'sizes___srcSet',
  SizesSrcWebp = 'sizes___srcWebp',
  SizesSrcSetWebp = 'sizes___srcSetWebp',
  SizesSizes = 'sizes___sizes',
  ResizeBase64 = 'resize___base64',
  ResizeTracedSvg = 'resize___tracedSVG',
  ResizeSrc = 'resize___src',
  ResizeWidth = 'resize___width',
  ResizeHeight = 'resize___height',
  ResizeAspectRatio = 'resize___aspectRatio',
}

export enum ContentfulAssetConnectionSortOrderValues {
  Asc = 'ASC',
  Desc = 'DESC',
}

export enum ContentfulAssetDistinctEnum {
  ContentfulId = 'contentful_id',
  Id = 'id',
  FileUrl = 'file___url',
  FileDetailsSize = 'file___details___size',
  FileDetailsImage = 'file___details___image',
  FileFileName = 'file___fileName',
  FileContentType = 'file___contentType',
  Title = 'title',
  Description = 'description',
  NodeLocale = 'node_locale',
  InternalType = 'internal___type',
  InternalContentDigest = 'internal___contentDigest',
  InternalOwner = 'internal___owner',
}

export enum ContentfulAssetGroupEnum {
  ContentfulId = 'contentful_id',
  Id = 'id',
  FileUrl = 'file___url',
  FileDetailsSize = 'file___details___size',
  FileDetailsImage = 'file___details___image',
  FileFileName = 'file___fileName',
  FileContentType = 'file___contentType',
  Title = 'title',
  Description = 'description',
  NodeLocale = 'node_locale',
  InternalType = 'internal___type',
  InternalContentDigest = 'internal___contentDigest',
  InternalOwner = 'internal___owner',
}

export enum MarkdownRemarkConnectionSortByFieldsEnum {
  Id = 'id',
  Parent = 'parent',
  InternalContent = 'internal___content',
  InternalType = 'internal___type',
  InternalContentDigest = 'internal___contentDigest',
  InternalOwner = 'internal___owner',
  FrontmatterTitle = 'frontmatter___title',
  RawMarkdownBody = 'rawMarkdownBody',
  Html = 'html',
  Excerpt = 'excerpt',
  Headings = 'headings',
  TimeToRead = 'timeToRead',
  TableOfContents = 'tableOfContents',
  WordCountParagraphs = 'wordCount___paragraphs',
  WordCountSentences = 'wordCount___sentences',
  WordCountWords = 'wordCount___words',
}

export enum MarkdownRemarkConnectionSortOrderValues {
  Asc = 'ASC',
  Desc = 'DESC',
}

export enum MarkdownRemarkDistinctEnum {
  Id = 'id',
  Parent = 'parent',
  InternalContent = 'internal___content',
  InternalType = 'internal___type',
  InternalContentDigest = 'internal___contentDigest',
  InternalOwner = 'internal___owner',
  FrontmatterTitle = 'frontmatter___title',
  RawMarkdownBody = 'rawMarkdownBody',
}

export enum MarkdownRemarkGroupEnum {
  Id = 'id',
  Parent = 'parent',
  InternalContent = 'internal___content',
  InternalType = 'internal___type',
  InternalContentDigest = 'internal___contentDigest',
  InternalOwner = 'internal___owner',
  FrontmatterTitle = 'frontmatter___title',
  RawMarkdownBody = 'rawMarkdownBody',
}

export enum ContentfulPluginConnectionSortByFieldsEnum {
  Title = 'title',
  Type = 'type',
  ItemsNode = 'items___NODE',
  ServiceNode = 'service___NODE',
  Id = 'id',
  ContentfulId = 'contentful_id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  Parent = 'parent',
  InternalType = 'internal___type',
  InternalContentDigest = 'internal___contentDigest',
  InternalOwner = 'internal___owner',
  NodeLocale = 'node_locale',
}

export enum ContentfulPluginConnectionSortOrderValues {
  Asc = 'ASC',
  Desc = 'DESC',
}

export enum ContentfulPluginDistinctEnum {
  Title = 'title',
  Type = 'type',
  ItemsNode = 'items___NODE',
  ServiceNode = 'service___NODE',
  Id = 'id',
  ContentfulId = 'contentful_id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  Parent = 'parent',
  InternalType = 'internal___type',
  InternalContentDigest = 'internal___contentDigest',
  InternalOwner = 'internal___owner',
  NodeLocale = 'node_locale',
}

export enum ContentfulPluginGroupEnum {
  Title = 'title',
  Type = 'type',
  ItemsNode = 'items___NODE',
  ServiceNode = 'service___NODE',
  Id = 'id',
  ContentfulId = 'contentful_id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  Parent = 'parent',
  InternalType = 'internal___type',
  InternalContentDigest = 'internal___contentDigest',
  InternalOwner = 'internal___owner',
  NodeLocale = 'node_locale',
}

export enum SitePageConnectionSortByFieldsEnum {
  JsonName = 'jsonName',
  InternalComponentName = 'internalComponentName',
  Path = 'path',
  Component = 'component',
  ComponentChunkName = 'componentChunkName',
  ContextSlug = 'context___slug',
  ContextLang = 'context___lang',
  PluginCreatorNode = 'pluginCreator___NODE',
  PluginCreatorId = 'pluginCreatorId',
  ComponentPath = 'componentPath',
  Id = 'id',
  InternalType = 'internal___type',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalOwner = 'internal___owner',
}

export enum SitePageConnectionSortOrderValues {
  Asc = 'ASC',
  Desc = 'DESC',
}

export enum SitePageDistinctEnum {
  JsonName = 'jsonName',
  InternalComponentName = 'internalComponentName',
  Path = 'path',
  Component = 'component',
  ComponentChunkName = 'componentChunkName',
  ContextSlug = 'context___slug',
  ContextLang = 'context___lang',
  PluginCreatorNode = 'pluginCreator___NODE',
  PluginCreatorId = 'pluginCreatorId',
  ComponentPath = 'componentPath',
  Id = 'id',
  InternalType = 'internal___type',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalOwner = 'internal___owner',
}

export enum SitePageGroupEnum {
  JsonName = 'jsonName',
  InternalComponentName = 'internalComponentName',
  Path = 'path',
  Component = 'component',
  ComponentChunkName = 'componentChunkName',
  ContextSlug = 'context___slug',
  ContextLang = 'context___lang',
  PluginCreatorNode = 'pluginCreator___NODE',
  PluginCreatorId = 'pluginCreatorId',
  ComponentPath = 'componentPath',
  Id = 'id',
  InternalType = 'internal___type',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalOwner = 'internal___owner',
}

/** A date string, such as 2007-12-03, compliant with the ISO 8601 standard  for representation of dates and times using the Gregorian calendar. */
export type Date = any;

/** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
export type Json = any;

// ====================================================
// Scalars
// ====================================================

// ====================================================
// Interfaces
// ====================================================

/** An object with an id, parent, and children */
export interface Node {
  /** The id of the node. */
  id: string;
  /** The parent of this node. */
  parent?: Maybe<Node>;
  /** The children of this node. */
  children?: Maybe<(Maybe<Node>)[]>;
}

// ====================================================
// Types
// ====================================================

export interface Query {
  /** Connection to all SitePlugin nodes */
  allSitePlugin?: Maybe<SitePluginConnection>;
  /** Connection to all Directory nodes */
  allDirectory?: Maybe<DirectoryConnection>;
  /** Connection to all File nodes */
  allFile?: Maybe<FileConnection>;
  /** Connection to all DataJson nodes */
  allDataJson?: Maybe<DataJsonConnection>;
  /** Connection to all ContentfulContentType nodes */
  allContentfulContentType?: Maybe<ContentfulContentTypeConnection>;
  /** Connection to all ContentfulService nodes */
  allContentfulService?: Maybe<ContentfulServiceConnection>;
  /** Connection to all contentfulServiceDescriptionTextNode nodes */
  allContentfulServiceDescriptionTextNode?: Maybe<
    ContentfulServiceDescriptionTextNodeConnection
  >;
  /** Connection to all ContentfulNavigation nodes */
  allContentfulNavigation?: Maybe<ContentfulNavigationConnection>;
  /** Connection to all ContentfulOffice nodes */
  allContentfulOffice?: Maybe<ContentfulOfficeConnection>;
  /** Connection to all ContentfulCase nodes */
  allContentfulCase?: Maybe<ContentfulCaseConnection>;
  /** Connection to all ContentfulExpert nodes */
  allContentfulExpert?: Maybe<ContentfulExpertConnection>;
  /** Connection to all ContentfulPage nodes */
  allContentfulPage?: Maybe<ContentfulPageConnection>;
  /** Connection to all contentfulPageHeaderDescriptionTextNode nodes */
  allContentfulPageHeaderDescriptionTextNode?: Maybe<
    ContentfulPageHeaderDescriptionTextNodeConnection
  >;
  /** Connection to all ContentfulDictionary nodes */
  allContentfulDictionary?: Maybe<ContentfulDictionaryConnection>;
  /** Connection to all ContentfulServiceSection nodes */
  allContentfulServiceSection?: Maybe<ContentfulServiceSectionConnection>;
  /** Connection to all contentfulServiceSectionDescriptionTextNode nodes */
  allContentfulServiceSectionDescriptionTextNode?: Maybe<
    ContentfulServiceSectionDescriptionTextNodeConnection
  >;
  /** Connection to all ContentfulStatistics nodes */
  allContentfulStatistics?: Maybe<ContentfulStatisticsConnection>;
  /** Connection to all ContentfulList nodes */
  allContentfulList?: Maybe<ContentfulListConnection>;
  /** Connection to all ContentfulAsset nodes */
  allContentfulAsset?: Maybe<ContentfulAssetConnection>;
  /** Connection to all MarkdownRemark nodes */
  allMarkdownRemark?: Maybe<MarkdownRemarkConnection>;
  /** Connection to all ContentfulPlugin nodes */
  allContentfulPlugin?: Maybe<ContentfulPluginConnection>;
  /** Connection to all SitePage nodes */
  allSitePage?: Maybe<SitePageConnection>;

  sitePlugin?: Maybe<SitePlugin>;

  site?: Maybe<Site>;

  directory?: Maybe<Directory>;

  file?: Maybe<File>;

  dataJson?: Maybe<DataJson>;

  contentfulContentType?: Maybe<ContentfulContentType>;

  contentfulService?: Maybe<ContentfulService>;

  contentfulServiceDescriptionTextNode?: Maybe<
    ContentfulServiceDescriptionTextNode
  >;

  contentfulNavigation?: Maybe<ContentfulNavigation>;

  contentfulOffice?: Maybe<ContentfulOffice>;

  contentfulCase?: Maybe<ContentfulCase>;

  contentfulExpert?: Maybe<ContentfulExpert>;

  contentfulPage?: Maybe<ContentfulPage>;

  contentfulPageHeaderDescriptionTextNode?: Maybe<
    ContentfulPageHeaderDescriptionTextNode
  >;

  contentfulDictionary?: Maybe<ContentfulDictionary>;

  contentfulServiceSection?: Maybe<ContentfulServiceSection>;

  contentfulServiceSectionDescriptionTextNode?: Maybe<
    ContentfulServiceSectionDescriptionTextNode
  >;

  contentfulStatistics?: Maybe<ContentfulStatistics>;

  contentfulList?: Maybe<ContentfulList>;

  contentfulAsset?: Maybe<ContentfulAsset>;

  markdownRemark?: Maybe<MarkdownRemark>;

  contentfulPlugin?: Maybe<ContentfulPlugin>;

  sitePage?: Maybe<SitePage>;
}

/** A connection to a list of items. */
export interface SitePluginConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<(Maybe<SitePluginEdge>)[]>;

  totalCount?: Maybe<number>;

  distinct?: Maybe<(Maybe<string>)[]>;

  group?: Maybe<(Maybe<SitePluginGroupConnectionConnection>)[]>;
}

/** Information about pagination in a connection. */
export interface PageInfo {
  /** When paginating, are there more items? */
  hasNextPage: boolean;
}

/** An edge in a connection. */
export interface SitePluginEdge {
  /** The item at the end of the edge */
  node?: Maybe<SitePlugin>;
  /** The next edge in the connection */
  next?: Maybe<SitePlugin>;
  /** The previous edge in the connection */
  previous?: Maybe<SitePlugin>;
}

/** Node of type SitePlugin */
export interface SitePlugin extends Node {
  /** The id of this node. */
  id: string;
  /** The parent of this node. */
  parent?: Maybe<Node>;
  /** The children of this node. */
  children?: Maybe<(Maybe<Node>)[]>;

  resolve?: Maybe<string>;

  name?: Maybe<string>;

  version?: Maybe<string>;

  pluginOptions?: Maybe<PluginOptions_3>;

  nodeAPIs?: Maybe<(Maybe<string>)[]>;

  browserAPIs?: Maybe<(Maybe<string>)[]>;

  ssrAPIs?: Maybe<(Maybe<string>)[]>;

  pluginFilepath?: Maybe<string>;

  packageJson?: Maybe<PackageJson_2>;

  internal?: Maybe<Internal_24>;
}

export interface PluginOptions_3 {
  plugins?: Maybe<(Maybe<Plugins_2>)[]>;

  name?: Maybe<string>;

  path?: Maybe<string>;

  maxWidth?: Maybe<number>;

  backgroundColor?: Maybe<string>;

  pathToConfigModule?: Maybe<string>;

  includePaths?: Maybe<(Maybe<string>)[]>;

  src?: Maybe<string>;

  assets?: Maybe<string>;

  components?: Maybe<string>;

  pages?: Maybe<string>;

  styles?: Maybe<string>;

  templates?: Maybe<string>;

  utils?: Maybe<string>;

  spaceId?: Maybe<string>;

  accessToken?: Maybe<string>;

  host?: Maybe<string>;

  environment?: Maybe<string>;

  short_name?: Maybe<string>;

  start_url?: Maybe<string>;

  background_color?: Maybe<string>;

  theme_color?: Maybe<string>;

  display?: Maybe<string>;

  icon?: Maybe<string>;

  include_favicon?: Maybe<boolean>;

  sitemap?: Maybe<string>;

  policy?: Maybe<(Maybe<Policy_2>)[]>;

  output?: Maybe<string>;

  exclude?: Maybe<(Maybe<string>)[]>;

  query?: Maybe<string>;

  headers?: Maybe<Headers_2>;

  pathCheck?: Maybe<boolean>;
}

export interface Plugins_2 {
  resolve?: Maybe<string>;

  id?: Maybe<string>;

  name?: Maybe<string>;

  version?: Maybe<string>;

  pluginOptions?: Maybe<PluginOptions_4>;

  browserAPIs?: Maybe<(Maybe<string>)[]>;

  ssrAPIs?: Maybe<(Maybe<string>)[]>;

  pluginFilepath?: Maybe<string>;
}

export interface PluginOptions_4 {
  maxWidth?: Maybe<number>;

  backgroundColor?: Maybe<string>;
}

export interface Policy_2 {
  userAgent?: Maybe<string>;

  allow?: Maybe<string>;
}

export interface Headers_2 {
  _sw_js?: Maybe<(Maybe<string>)[]>;
}

export interface PackageJson_2 {
  name?: Maybe<string>;

  description?: Maybe<string>;

  version?: Maybe<string>;

  main?: Maybe<string>;

  author?: Maybe<string>;

  license?: Maybe<string>;

  dependencies?: Maybe<(Maybe<Dependencies_2>)[]>;

  devDependencies?: Maybe<(Maybe<DevDependencies_2>)[]>;

  peerDependencies?: Maybe<(Maybe<PeerDependencies_2>)[]>;

  keywords?: Maybe<(Maybe<string>)[]>;
}

export interface Dependencies_2 {
  name?: Maybe<string>;

  version?: Maybe<string>;
}

export interface DevDependencies_2 {
  name?: Maybe<string>;

  version?: Maybe<string>;
}

export interface PeerDependencies_2 {
  name?: Maybe<string>;

  version?: Maybe<string>;
}

export interface Internal_24 {
  contentDigest?: Maybe<string>;

  type?: Maybe<string>;

  owner?: Maybe<string>;
}

/** A connection to a list of items. */
export interface SitePluginGroupConnectionConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<(Maybe<SitePluginGroupConnectionEdge>)[]>;

  field?: Maybe<string>;

  fieldValue?: Maybe<string>;

  totalCount?: Maybe<number>;
}

/** An edge in a connection. */
export interface SitePluginGroupConnectionEdge {
  /** The item at the end of the edge */
  node?: Maybe<SitePlugin>;
  /** The next edge in the connection */
  next?: Maybe<SitePlugin>;
  /** The previous edge in the connection */
  previous?: Maybe<SitePlugin>;
}

/** A connection to a list of items. */
export interface DirectoryConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<(Maybe<DirectoryEdge>)[]>;

  totalCount?: Maybe<number>;

  distinct?: Maybe<(Maybe<string>)[]>;

  group?: Maybe<(Maybe<DirectoryGroupConnectionConnection>)[]>;
}

/** An edge in a connection. */
export interface DirectoryEdge {
  /** The item at the end of the edge */
  node?: Maybe<Directory>;
  /** The next edge in the connection */
  next?: Maybe<Directory>;
  /** The previous edge in the connection */
  previous?: Maybe<Directory>;
}

/** Node of type Directory */
export interface Directory extends Node {
  /** The id of this node. */
  id: string;
  /** The parent of this node. */
  parent?: Maybe<Node>;
  /** The children of this node. */
  children?: Maybe<(Maybe<Node>)[]>;

  internal?: Maybe<Internal_25>;

  sourceInstanceName?: Maybe<string>;

  absolutePath?: Maybe<string>;

  relativePath?: Maybe<string>;

  extension?: Maybe<string>;

  size?: Maybe<number>;

  prettySize?: Maybe<string>;

  modifiedTime?: Maybe<Date>;

  accessTime?: Maybe<Date>;

  changeTime?: Maybe<Date>;

  birthTime?: Maybe<Date>;

  root?: Maybe<string>;

  dir?: Maybe<string>;

  base?: Maybe<string>;

  ext?: Maybe<string>;

  name?: Maybe<string>;

  relativeDirectory?: Maybe<string>;

  dev?: Maybe<number>;

  mode?: Maybe<number>;

  nlink?: Maybe<number>;

  uid?: Maybe<number>;

  gid?: Maybe<number>;

  rdev?: Maybe<number>;

  blksize?: Maybe<number>;

  ino?: Maybe<number>;

  blocks?: Maybe<number>;

  atimeMs?: Maybe<number>;

  mtimeMs?: Maybe<number>;

  ctimeMs?: Maybe<number>;

  birthtimeMs?: Maybe<number>;

  atime?: Maybe<Date>;

  mtime?: Maybe<Date>;

  ctime?: Maybe<Date>;

  birthtime?: Maybe<Date>;
}

export interface Internal_25 {
  contentDigest?: Maybe<string>;

  type?: Maybe<string>;

  description?: Maybe<string>;

  owner?: Maybe<string>;
}

/** A connection to a list of items. */
export interface DirectoryGroupConnectionConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<(Maybe<DirectoryGroupConnectionEdge>)[]>;

  field?: Maybe<string>;

  fieldValue?: Maybe<string>;

  totalCount?: Maybe<number>;
}

/** An edge in a connection. */
export interface DirectoryGroupConnectionEdge {
  /** The item at the end of the edge */
  node?: Maybe<Directory>;
  /** The next edge in the connection */
  next?: Maybe<Directory>;
  /** The previous edge in the connection */
  previous?: Maybe<Directory>;
}

/** A connection to a list of items. */
export interface FileConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<(Maybe<FileEdge>)[]>;

  totalCount?: Maybe<number>;

  distinct?: Maybe<(Maybe<string>)[]>;

  group?: Maybe<(Maybe<FileGroupConnectionConnection>)[]>;
}

/** An edge in a connection. */
export interface FileEdge {
  /** The item at the end of the edge */
  node?: Maybe<File>;
  /** The next edge in the connection */
  next?: Maybe<File>;
  /** The previous edge in the connection */
  previous?: Maybe<File>;
}

/** Node of type File */
export interface File extends Node {
  /** The id of this node. */
  id: string;
  /** The parent of this node. */
  parent?: Maybe<Node>;
  /** The children of this node. */
  children?: Maybe<(Maybe<Node>)[]>;
  /** The child of this node of type dataJson */
  childDataJson?: Maybe<DataJson>;

  internal?: Maybe<Internal_26>;

  sourceInstanceName?: Maybe<string>;

  absolutePath?: Maybe<string>;

  relativePath?: Maybe<string>;

  extension?: Maybe<string>;

  size?: Maybe<number>;

  prettySize?: Maybe<string>;

  modifiedTime?: Maybe<Date>;

  accessTime?: Maybe<Date>;

  changeTime?: Maybe<Date>;

  birthTime?: Maybe<Date>;

  root?: Maybe<string>;

  dir?: Maybe<string>;

  base?: Maybe<string>;

  ext?: Maybe<string>;

  name?: Maybe<string>;

  relativeDirectory?: Maybe<string>;

  dev?: Maybe<number>;

  mode?: Maybe<number>;

  nlink?: Maybe<number>;

  uid?: Maybe<number>;

  gid?: Maybe<number>;

  rdev?: Maybe<number>;

  blksize?: Maybe<number>;

  ino?: Maybe<number>;

  blocks?: Maybe<number>;

  atimeMs?: Maybe<number>;

  mtimeMs?: Maybe<number>;

  ctimeMs?: Maybe<number>;

  birthtimeMs?: Maybe<number>;

  atime?: Maybe<Date>;

  mtime?: Maybe<Date>;

  ctime?: Maybe<Date>;

  birthtime?: Maybe<Date>;
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<string>;
}

/** Node of type DataJson */
export interface DataJson extends Node {
  /** The id of this node. */
  id: string;
  /** The parent of this node. */
  parent?: Maybe<Node>;
  /** The children of this node. */
  children?: Maybe<(Maybe<Node>)[]>;

  internal?: Maybe<Internal_27>;
}

export interface Internal_27 {
  contentDigest?: Maybe<string>;

  type?: Maybe<string>;

  owner?: Maybe<string>;
}

export interface Internal_26 {
  contentDigest?: Maybe<string>;

  type?: Maybe<string>;

  mediaType?: Maybe<string>;

  description?: Maybe<string>;

  owner?: Maybe<string>;
}

/** A connection to a list of items. */
export interface FileGroupConnectionConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<(Maybe<FileGroupConnectionEdge>)[]>;

  field?: Maybe<string>;

  fieldValue?: Maybe<string>;

  totalCount?: Maybe<number>;
}

/** An edge in a connection. */
export interface FileGroupConnectionEdge {
  /** The item at the end of the edge */
  node?: Maybe<File>;
  /** The next edge in the connection */
  next?: Maybe<File>;
  /** The previous edge in the connection */
  previous?: Maybe<File>;
}

/** A connection to a list of items. */
export interface DataJsonConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<(Maybe<DataJsonEdge>)[]>;

  totalCount?: Maybe<number>;

  distinct?: Maybe<(Maybe<string>)[]>;

  group?: Maybe<(Maybe<DataJsonGroupConnectionConnection>)[]>;
}

/** An edge in a connection. */
export interface DataJsonEdge {
  /** The item at the end of the edge */
  node?: Maybe<DataJson>;
  /** The next edge in the connection */
  next?: Maybe<DataJson>;
  /** The previous edge in the connection */
  previous?: Maybe<DataJson>;
}

/** A connection to a list of items. */
export interface DataJsonGroupConnectionConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<(Maybe<DataJsonGroupConnectionEdge>)[]>;

  field?: Maybe<string>;

  fieldValue?: Maybe<string>;

  totalCount?: Maybe<number>;
}

/** An edge in a connection. */
export interface DataJsonGroupConnectionEdge {
  /** The item at the end of the edge */
  node?: Maybe<DataJson>;
  /** The next edge in the connection */
  next?: Maybe<DataJson>;
  /** The previous edge in the connection */
  previous?: Maybe<DataJson>;
}

/** A connection to a list of items. */
export interface ContentfulContentTypeConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<(Maybe<ContentfulContentTypeEdge>)[]>;

  totalCount?: Maybe<number>;

  distinct?: Maybe<(Maybe<string>)[]>;

  group?: Maybe<(Maybe<ContentfulContentTypeGroupConnectionConnection>)[]>;
}

/** An edge in a connection. */
export interface ContentfulContentTypeEdge {
  /** The item at the end of the edge */
  node?: Maybe<ContentfulContentType>;
  /** The next edge in the connection */
  next?: Maybe<ContentfulContentType>;
  /** The previous edge in the connection */
  previous?: Maybe<ContentfulContentType>;
}

/** Node of type ContentfulContentType */
export interface ContentfulContentType extends Node {
  /** The id of this node. */
  id: string;
  /** The parent of this node. */
  parent?: Maybe<Node>;
  /** The children of this node. */
  children?: Maybe<(Maybe<Node>)[]>;

  name?: Maybe<string>;

  displayField?: Maybe<string>;

  description?: Maybe<string>;

  internal?: Maybe<Internal_28>;
}

export interface Internal_28 {
  type?: Maybe<string>;

  contentDigest?: Maybe<string>;

  owner?: Maybe<string>;
}

/** A connection to a list of items. */
export interface ContentfulContentTypeGroupConnectionConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<(Maybe<ContentfulContentTypeGroupConnectionEdge>)[]>;

  field?: Maybe<string>;

  fieldValue?: Maybe<string>;

  totalCount?: Maybe<number>;
}

/** An edge in a connection. */
export interface ContentfulContentTypeGroupConnectionEdge {
  /** The item at the end of the edge */
  node?: Maybe<ContentfulContentType>;
  /** The next edge in the connection */
  next?: Maybe<ContentfulContentType>;
  /** The previous edge in the connection */
  previous?: Maybe<ContentfulContentType>;
}

/** A connection to a list of items. */
export interface ContentfulServiceConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<(Maybe<ContentfulServiceEdge>)[]>;

  totalCount?: Maybe<number>;

  distinct?: Maybe<(Maybe<string>)[]>;

  group?: Maybe<(Maybe<ContentfulServiceGroupConnectionConnection>)[]>;
}

/** An edge in a connection. */
export interface ContentfulServiceEdge {
  /** The item at the end of the edge */
  node?: Maybe<ContentfulService>;
  /** The next edge in the connection */
  next?: Maybe<ContentfulService>;
  /** The previous edge in the connection */
  previous?: Maybe<ContentfulService>;
}

/** Node of type ContentfulService */
export interface ContentfulService extends Node {
  /** The id of this node. */
  id: string;
  /** The parent of this node. */
  parent?: Maybe<Node>;
  /** The children of this node. */
  children?: Maybe<(Maybe<Node>)[]>;
  /** The child of this node of type contentfulServiceDescriptionTextNode */
  childContentfulServiceDescriptionTextNode?: Maybe<
    ContentfulServiceDescriptionTextNode
  >;

  title?: Maybe<string>;

  slug?: Maybe<string>;

  order?: Maybe<number>;

  image?: Maybe<ContentfulAsset>;

  sections?: Maybe<(Maybe<ContentfulServiceSection>)[]>;

  description?: Maybe<ContentfulServiceDescriptionTextNode>;

  contentful_id?: Maybe<string>;

  createdAt?: Maybe<Date>;

  updatedAt?: Maybe<Date>;

  internal?: Maybe<Internal_29>;

  node_locale?: Maybe<string>;

  plugins?: Maybe<(Maybe<ContentfulPlugin>)[]>;
}

/** Node of type contentfulServiceDescriptionTextNode */
export interface ContentfulServiceDescriptionTextNode extends Node {
  /** The id of this node. */
  id: string;
  /** The parent of this node. */
  parent?: Maybe<Node>;
  /** The children of this node. */
  children?: Maybe<(Maybe<Node>)[]>;
  /** The child of this node of type markdownRemark */
  childMarkdownRemark?: Maybe<MarkdownRemark>;

  description?: Maybe<string>;

  internal?: Maybe<Internal_30>;
}

/** Node of type MarkdownRemark */
export interface MarkdownRemark extends Node {
  /** The id of this node. */
  id: string;
  /** The parent of this node. */
  parent?: Maybe<Node>;
  /** The children of this node. */
  children?: Maybe<(Maybe<Node>)[]>;

  internal?: Maybe<Internal_31>;

  frontmatter?: Maybe<Frontmatter_2>;

  rawMarkdownBody?: Maybe<string>;

  html?: Maybe<string>;

  htmlAst?: Maybe<Json>;

  excerpt?: Maybe<string>;

  headings?: Maybe<(Maybe<MarkdownHeading>)[]>;

  timeToRead?: Maybe<number>;

  tableOfContents?: Maybe<string>;

  wordCount?: Maybe<WordCount>;
}

export interface Internal_31 {
  content?: Maybe<string>;

  type?: Maybe<string>;

  contentDigest?: Maybe<string>;

  owner?: Maybe<string>;
}

export interface Frontmatter_2 {
  title?: Maybe<string>;
}

export interface MarkdownHeading {
  value?: Maybe<string>;

  depth?: Maybe<number>;
}

export interface WordCount {
  paragraphs?: Maybe<number>;

  sentences?: Maybe<number>;

  words?: Maybe<number>;
}

export interface Internal_30 {
  type?: Maybe<string>;

  mediaType?: Maybe<string>;

  content?: Maybe<string>;

  contentDigest?: Maybe<string>;

  owner?: Maybe<string>;
}

/** Node of type ContentfulAsset */
export interface ContentfulAsset extends Node {
  /** The id of this node. */
  id: string;
  /** The parent of this node. */
  parent?: Maybe<Node>;
  /** The children of this node. */
  children?: Maybe<(Maybe<Node>)[]>;

  contentful_id?: Maybe<string>;

  file?: Maybe<File_2>;

  title?: Maybe<string>;

  description?: Maybe<string>;

  node_locale?: Maybe<string>;

  internal?: Maybe<Internal_32>;

  fixed?: Maybe<ContentfulFixed>;

  resolutions?: Maybe<ContentfulResolutions>;

  fluid?: Maybe<ContentfulFluid>;

  sizes?: Maybe<ContentfulSizes>;

  resize?: Maybe<ContentfulResize>;
}

export interface File_2 {
  url?: Maybe<string>;

  details?: Maybe<Details_2>;

  fileName?: Maybe<string>;

  contentType?: Maybe<string>;
}

export interface Details_2 {
  size?: Maybe<number>;

  image?: Maybe<Image_2>;
}

export interface Image_2 {
  width?: Maybe<number>;

  height?: Maybe<number>;
}

export interface Internal_32 {
  type?: Maybe<string>;

  contentDigest?: Maybe<string>;

  owner?: Maybe<string>;
}

export interface ContentfulFixed {
  base64?: Maybe<string>;

  tracedSVG?: Maybe<string>;

  aspectRatio: Maybe<number>;

  width: Maybe<number>;

  height: Maybe<number>;

  src: Maybe<string>;

  srcSet: Maybe<string>;

  srcWebp?: Maybe<string>;

  srcSetWebp?: Maybe<string>;
}

export interface ContentfulResolutions {
  base64?: Maybe<string>;

  tracedSVG?: Maybe<string>;

  aspectRatio?: Maybe<number>;

  width?: Maybe<number>;

  height?: Maybe<number>;

  src?: Maybe<string>;

  srcSet?: Maybe<string>;

  srcWebp?: Maybe<string>;

  srcSetWebp?: Maybe<string>;
}

export interface ContentfulFluid {
  base64?: Maybe<string>;

  tracedSVG?: Maybe<string>;

  aspectRatio: Maybe<number>;

  src: Maybe<string>;

  srcSet: Maybe<string>;

  srcWebp?: Maybe<string>;

  srcSetWebp?: Maybe<string>;

  sizes: Maybe<string>;
}

export interface ContentfulSizes {
  base64?: Maybe<string>;

  tracedSVG?: Maybe<string>;

  aspectRatio?: Maybe<number>;

  src?: Maybe<string>;

  srcSet?: Maybe<string>;

  srcWebp?: Maybe<string>;

  srcSetWebp?: Maybe<string>;

  sizes?: Maybe<string>;
}

export interface ContentfulResize {
  base64?: Maybe<string>;

  tracedSVG?: Maybe<string>;

  src?: Maybe<string>;

  width?: Maybe<number>;

  height?: Maybe<number>;

  aspectRatio?: Maybe<number>;
}

/** Node of type ContentfulServiceSection */
export interface ContentfulServiceSection extends Node {
  /** The id of this node. */
  id: string;
  /** The parent of this node. */
  parent?: Maybe<Node>;
  /** The children of this node. */
  children?: Maybe<(Maybe<Node>)[]>;
  /** The child of this node of type contentfulServiceSectionDescriptionTextNode */
  childContentfulServiceSectionDescriptionTextNode?: Maybe<
    ContentfulServiceSectionDescriptionTextNode
  >;

  title?: Maybe<string>;

  subtitle?: Maybe<string>;

  list?: Maybe<(Maybe<string>)[]>;

  order?: Maybe<number>;

  thumbnail?: Maybe<ContentfulAsset>;

  service?: Maybe<(Maybe<ContentfulService>)[]>;

  description?: Maybe<ContentfulServiceSectionDescriptionTextNode>;

  contentful_id?: Maybe<string>;

  createdAt?: Maybe<Date>;

  updatedAt?: Maybe<Date>;

  internal?: Maybe<Internal_33>;

  node_locale?: Maybe<string>;
}

/** Node of type contentfulServiceSectionDescriptionTextNode */
export interface ContentfulServiceSectionDescriptionTextNode extends Node {
  /** The id of this node. */
  id: string;
  /** The parent of this node. */
  parent?: Maybe<Node>;
  /** The children of this node. */
  children?: Maybe<(Maybe<Node>)[]>;
  /** The child of this node of type markdownRemark */
  childMarkdownRemark?: Maybe<MarkdownRemark>;

  description?: Maybe<string>;

  internal?: Maybe<Internal_34>;
}

export interface Internal_34 {
  type?: Maybe<string>;

  mediaType?: Maybe<string>;

  content?: Maybe<string>;

  contentDigest?: Maybe<string>;

  owner?: Maybe<string>;
}

export interface Internal_33 {
  type?: Maybe<string>;

  contentDigest?: Maybe<string>;

  owner?: Maybe<string>;
}

export interface Internal_29 {
  type?: Maybe<string>;

  contentDigest?: Maybe<string>;

  owner?: Maybe<string>;
}

/** Node of type ContentfulPlugin */
export interface ContentfulPlugin extends Node {
  /** The id of this node. */
  id: string;
  /** The parent of this node. */
  parent?: Maybe<Node>;
  /** The children of this node. */
  children?: Maybe<(Maybe<Node>)[]>;

  title?: Maybe<string>;

  type?: Maybe<(Maybe<string>)[]>;

  items?: Maybe<(Maybe<ContentfulList>)[]>;

  service?: Maybe<(Maybe<ContentfulService>)[]>;

  contentful_id?: Maybe<string>;

  createdAt?: Maybe<Date>;

  updatedAt?: Maybe<Date>;

  internal?: Maybe<Internal_35>;

  node_locale?: Maybe<string>;
}

/** Node of type ContentfulList */
export interface ContentfulList extends Node {
  /** The id of this node. */
  id: string;
  /** The parent of this node. */
  parent?: Maybe<Node>;
  /** The children of this node. */
  children?: Maybe<(Maybe<Node>)[]>;

  title?: Maybe<string>;

  items?: Maybe<(Maybe<string>)[]>;

  order?: Maybe<number>;

  category?: Maybe<(Maybe<string>)[]>;

  contentful_id?: Maybe<string>;

  createdAt?: Maybe<Date>;

  updatedAt?: Maybe<Date>;

  internal?: Maybe<Internal_36>;

  node_locale?: Maybe<string>;

  plugin?: Maybe<(Maybe<ContentfulPlugin>)[]>;
}

export interface Internal_36 {
  type?: Maybe<string>;

  contentDigest?: Maybe<string>;

  owner?: Maybe<string>;
}

export interface Internal_35 {
  type?: Maybe<string>;

  contentDigest?: Maybe<string>;

  owner?: Maybe<string>;
}

/** A connection to a list of items. */
export interface ContentfulServiceGroupConnectionConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<(Maybe<ContentfulServiceGroupConnectionEdge>)[]>;

  field?: Maybe<string>;

  fieldValue?: Maybe<string>;

  totalCount?: Maybe<number>;
}

/** An edge in a connection. */
export interface ContentfulServiceGroupConnectionEdge {
  /** The item at the end of the edge */
  node?: Maybe<ContentfulService>;
  /** The next edge in the connection */
  next?: Maybe<ContentfulService>;
  /** The previous edge in the connection */
  previous?: Maybe<ContentfulService>;
}

/** A connection to a list of items. */
export interface ContentfulServiceDescriptionTextNodeConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<(Maybe<ContentfulServiceDescriptionTextNodeEdge>)[]>;

  totalCount?: Maybe<number>;

  distinct?: Maybe<(Maybe<string>)[]>;

  group?: Maybe<
    (Maybe<ContentfulServiceDescriptionTextNodeGroupConnectionConnection>)[]
  >;
}

/** An edge in a connection. */
export interface ContentfulServiceDescriptionTextNodeEdge {
  /** The item at the end of the edge */
  node?: Maybe<ContentfulServiceDescriptionTextNode>;
  /** The next edge in the connection */
  next?: Maybe<ContentfulServiceDescriptionTextNode>;
  /** The previous edge in the connection */
  previous?: Maybe<ContentfulServiceDescriptionTextNode>;
}

/** A connection to a list of items. */
export interface ContentfulServiceDescriptionTextNodeGroupConnectionConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<
    (Maybe<ContentfulServiceDescriptionTextNodeGroupConnectionEdge>)[]
  >;

  field?: Maybe<string>;

  fieldValue?: Maybe<string>;

  totalCount?: Maybe<number>;
}

/** An edge in a connection. */
export interface ContentfulServiceDescriptionTextNodeGroupConnectionEdge {
  /** The item at the end of the edge */
  node?: Maybe<ContentfulServiceDescriptionTextNode>;
  /** The next edge in the connection */
  next?: Maybe<ContentfulServiceDescriptionTextNode>;
  /** The previous edge in the connection */
  previous?: Maybe<ContentfulServiceDescriptionTextNode>;
}

/** A connection to a list of items. */
export interface ContentfulNavigationConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<(Maybe<ContentfulNavigationEdge>)[]>;

  totalCount?: Maybe<number>;

  distinct?: Maybe<(Maybe<string>)[]>;

  group?: Maybe<(Maybe<ContentfulNavigationGroupConnectionConnection>)[]>;
}

/** An edge in a connection. */
export interface ContentfulNavigationEdge {
  /** The item at the end of the edge */
  node?: Maybe<ContentfulNavigation>;
  /** The next edge in the connection */
  next?: Maybe<ContentfulNavigation>;
  /** The previous edge in the connection */
  previous?: Maybe<ContentfulNavigation>;
}

/** Node of type ContentfulNavigation */
export interface ContentfulNavigation extends Node {
  /** The id of this node. */
  id: string;
  /** The parent of this node. */
  parent?: Maybe<Node>;
  /** The children of this node. */
  children?: Maybe<(Maybe<Node>)[]>;

  title?: Maybe<string>;

  slug?: Maybe<string>;

  order?: Maybe<number>;

  header?: Maybe<boolean>;

  footer?: Maybe<boolean>;

  contentful_id?: Maybe<string>;

  createdAt?: Maybe<Date>;

  updatedAt?: Maybe<Date>;

  internal?: Maybe<Internal_37>;

  node_locale?: Maybe<string>;
}

export interface Internal_37 {
  type?: Maybe<string>;

  contentDigest?: Maybe<string>;

  owner?: Maybe<string>;
}

/** A connection to a list of items. */
export interface ContentfulNavigationGroupConnectionConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<(Maybe<ContentfulNavigationGroupConnectionEdge>)[]>;

  field?: Maybe<string>;

  fieldValue?: Maybe<string>;

  totalCount?: Maybe<number>;
}

/** An edge in a connection. */
export interface ContentfulNavigationGroupConnectionEdge {
  /** The item at the end of the edge */
  node?: Maybe<ContentfulNavigation>;
  /** The next edge in the connection */
  next?: Maybe<ContentfulNavigation>;
  /** The previous edge in the connection */
  previous?: Maybe<ContentfulNavigation>;
}

/** A connection to a list of items. */
export interface ContentfulOfficeConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<(Maybe<ContentfulOfficeEdge>)[]>;

  totalCount?: Maybe<number>;

  distinct?: Maybe<(Maybe<string>)[]>;

  group?: Maybe<(Maybe<ContentfulOfficeGroupConnectionConnection>)[]>;
}

/** An edge in a connection. */
export interface ContentfulOfficeEdge {
  /** The item at the end of the edge */
  node?: Maybe<ContentfulOffice>;
  /** The next edge in the connection */
  next?: Maybe<ContentfulOffice>;
  /** The previous edge in the connection */
  previous?: Maybe<ContentfulOffice>;
}

/** Node of type ContentfulOffice */
export interface ContentfulOffice extends Node {
  /** The id of this node. */
  id: string;
  /** The parent of this node. */
  parent?: Maybe<Node>;
  /** The children of this node. */
  children?: Maybe<(Maybe<Node>)[]>;

  title?: Maybe<string>;

  slug?: Maybe<string>;

  order?: Maybe<number>;

  map?: Maybe<Map_2>;

  contentful_id?: Maybe<string>;

  createdAt?: Maybe<Date>;

  updatedAt?: Maybe<Date>;

  internal?: Maybe<Internal_38>;

  node_locale?: Maybe<string>;
}

export interface Map_2 {
  lon?: Maybe<number>;

  lat?: Maybe<number>;
}

export interface Internal_38 {
  type?: Maybe<string>;

  contentDigest?: Maybe<string>;

  owner?: Maybe<string>;
}

/** A connection to a list of items. */
export interface ContentfulOfficeGroupConnectionConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<(Maybe<ContentfulOfficeGroupConnectionEdge>)[]>;

  field?: Maybe<string>;

  fieldValue?: Maybe<string>;

  totalCount?: Maybe<number>;
}

/** An edge in a connection. */
export interface ContentfulOfficeGroupConnectionEdge {
  /** The item at the end of the edge */
  node?: Maybe<ContentfulOffice>;
  /** The next edge in the connection */
  next?: Maybe<ContentfulOffice>;
  /** The previous edge in the connection */
  previous?: Maybe<ContentfulOffice>;
}

/** A connection to a list of items. */
export interface ContentfulCaseConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<(Maybe<ContentfulCaseEdge>)[]>;

  totalCount?: Maybe<number>;

  distinct?: Maybe<(Maybe<string>)[]>;

  group?: Maybe<(Maybe<ContentfulCaseGroupConnectionConnection>)[]>;
}

/** An edge in a connection. */
export interface ContentfulCaseEdge {
  /** The item at the end of the edge */
  node?: Maybe<ContentfulCase>;
  /** The next edge in the connection */
  next?: Maybe<ContentfulCase>;
  /** The previous edge in the connection */
  previous?: Maybe<ContentfulCase>;
}

/** Node of type ContentfulCase */
export interface ContentfulCase extends Node {
  /** The id of this node. */
  id: string;
  /** The parent of this node. */
  parent?: Maybe<Node>;
  /** The children of this node. */
  children?: Maybe<(Maybe<Node>)[]>;

  title?: Maybe<string>;

  slug?: Maybe<string>;

  order?: Maybe<number>;

  description?: Maybe<string>;

  thumbnail?: Maybe<ContentfulAsset>;

  contentful_id?: Maybe<string>;

  createdAt?: Maybe<Date>;

  updatedAt?: Maybe<Date>;

  internal?: Maybe<Internal_39>;

  node_locale?: Maybe<string>;
}

export interface Internal_39 {
  type?: Maybe<string>;

  contentDigest?: Maybe<string>;

  owner?: Maybe<string>;
}

/** A connection to a list of items. */
export interface ContentfulCaseGroupConnectionConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<(Maybe<ContentfulCaseGroupConnectionEdge>)[]>;

  field?: Maybe<string>;

  fieldValue?: Maybe<string>;

  totalCount?: Maybe<number>;
}

/** An edge in a connection. */
export interface ContentfulCaseGroupConnectionEdge {
  /** The item at the end of the edge */
  node?: Maybe<ContentfulCase>;
  /** The next edge in the connection */
  next?: Maybe<ContentfulCase>;
  /** The previous edge in the connection */
  previous?: Maybe<ContentfulCase>;
}

/** A connection to a list of items. */
export interface ContentfulExpertConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<(Maybe<ContentfulExpertEdge>)[]>;

  totalCount?: Maybe<number>;

  distinct?: Maybe<(Maybe<string>)[]>;

  group?: Maybe<(Maybe<ContentfulExpertGroupConnectionConnection>)[]>;
}

/** An edge in a connection. */
export interface ContentfulExpertEdge {
  /** The item at the end of the edge */
  node?: Maybe<ContentfulExpert>;
  /** The next edge in the connection */
  next?: Maybe<ContentfulExpert>;
  /** The previous edge in the connection */
  previous?: Maybe<ContentfulExpert>;
}

/** Node of type ContentfulExpert */
export interface ContentfulExpert extends Node {
  /** The id of this node. */
  id: string;
  /** The parent of this node. */
  parent?: Maybe<Node>;
  /** The children of this node. */
  children?: Maybe<(Maybe<Node>)[]>;

  title?: Maybe<string>;

  position?: Maybe<string>;

  order?: Maybe<number>;

  photo?: Maybe<ContentfulAsset>;

  contentful_id?: Maybe<string>;

  createdAt?: Maybe<Date>;

  updatedAt?: Maybe<Date>;

  internal?: Maybe<Internal_40>;

  node_locale?: Maybe<string>;
}

export interface Internal_40 {
  type?: Maybe<string>;

  contentDigest?: Maybe<string>;

  owner?: Maybe<string>;
}

/** A connection to a list of items. */
export interface ContentfulExpertGroupConnectionConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<(Maybe<ContentfulExpertGroupConnectionEdge>)[]>;

  field?: Maybe<string>;

  fieldValue?: Maybe<string>;

  totalCount?: Maybe<number>;
}

/** An edge in a connection. */
export interface ContentfulExpertGroupConnectionEdge {
  /** The item at the end of the edge */
  node?: Maybe<ContentfulExpert>;
  /** The next edge in the connection */
  next?: Maybe<ContentfulExpert>;
  /** The previous edge in the connection */
  previous?: Maybe<ContentfulExpert>;
}

/** A connection to a list of items. */
export interface ContentfulPageConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<(Maybe<ContentfulPageEdge>)[]>;

  totalCount?: Maybe<number>;

  distinct?: Maybe<(Maybe<string>)[]>;

  group?: Maybe<(Maybe<ContentfulPageGroupConnectionConnection>)[]>;
}

/** An edge in a connection. */
export interface ContentfulPageEdge {
  /** The item at the end of the edge */
  node?: Maybe<ContentfulPage>;
  /** The next edge in the connection */
  next?: Maybe<ContentfulPage>;
  /** The previous edge in the connection */
  previous?: Maybe<ContentfulPage>;
}

/** Node of type ContentfulPage */
export interface ContentfulPage extends Node {
  /** The id of this node. */
  id: string;
  /** The parent of this node. */
  parent?: Maybe<Node>;
  /** The children of this node. */
  children?: Maybe<(Maybe<Node>)[]>;
  /** The child of this node of type contentfulPageHeaderDescriptionTextNode */
  childContentfulPageHeaderDescriptionTextNode?: Maybe<
    ContentfulPageHeaderDescriptionTextNode
  >;

  slug?: Maybe<string>;

  pageTitle?: Maybe<string>;

  headerTitle?: Maybe<string>;

  headerDescription?: Maybe<ContentfulPageHeaderDescriptionTextNode>;

  contentful_id?: Maybe<string>;

  createdAt?: Maybe<Date>;

  updatedAt?: Maybe<Date>;

  internal?: Maybe<Internal_41>;

  node_locale?: Maybe<string>;

  pageDescription?: Maybe<string>;

  pageKeywords?: Maybe<(Maybe<string>)[]>;
}

/** Node of type contentfulPageHeaderDescriptionTextNode */
export interface ContentfulPageHeaderDescriptionTextNode extends Node {
  /** The id of this node. */
  id: string;
  /** The parent of this node. */
  parent?: Maybe<Node>;
  /** The children of this node. */
  children?: Maybe<(Maybe<Node>)[]>;
  /** The child of this node of type markdownRemark */
  childMarkdownRemark?: Maybe<MarkdownRemark>;

  headerDescription?: Maybe<string>;

  internal?: Maybe<Internal_42>;
}

export interface Internal_42 {
  type?: Maybe<string>;

  mediaType?: Maybe<string>;

  content?: Maybe<string>;

  contentDigest?: Maybe<string>;

  owner?: Maybe<string>;
}

export interface Internal_41 {
  type?: Maybe<string>;

  contentDigest?: Maybe<string>;

  owner?: Maybe<string>;
}

/** A connection to a list of items. */
export interface ContentfulPageGroupConnectionConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<(Maybe<ContentfulPageGroupConnectionEdge>)[]>;

  field?: Maybe<string>;

  fieldValue?: Maybe<string>;

  totalCount?: Maybe<number>;
}

/** An edge in a connection. */
export interface ContentfulPageGroupConnectionEdge {
  /** The item at the end of the edge */
  node?: Maybe<ContentfulPage>;
  /** The next edge in the connection */
  next?: Maybe<ContentfulPage>;
  /** The previous edge in the connection */
  previous?: Maybe<ContentfulPage>;
}

/** A connection to a list of items. */
export interface ContentfulPageHeaderDescriptionTextNodeConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<(Maybe<ContentfulPageHeaderDescriptionTextNodeEdge>)[]>;

  totalCount?: Maybe<number>;

  distinct?: Maybe<(Maybe<string>)[]>;

  group?: Maybe<
    (Maybe<ContentfulPageHeaderDescriptionTextNodeGroupConnectionConnection>)[]
  >;
}

/** An edge in a connection. */
export interface ContentfulPageHeaderDescriptionTextNodeEdge {
  /** The item at the end of the edge */
  node?: Maybe<ContentfulPageHeaderDescriptionTextNode>;
  /** The next edge in the connection */
  next?: Maybe<ContentfulPageHeaderDescriptionTextNode>;
  /** The previous edge in the connection */
  previous?: Maybe<ContentfulPageHeaderDescriptionTextNode>;
}

/** A connection to a list of items. */
export interface ContentfulPageHeaderDescriptionTextNodeGroupConnectionConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<
    (Maybe<ContentfulPageHeaderDescriptionTextNodeGroupConnectionEdge>)[]
  >;

  field?: Maybe<string>;

  fieldValue?: Maybe<string>;

  totalCount?: Maybe<number>;
}

/** An edge in a connection. */
export interface ContentfulPageHeaderDescriptionTextNodeGroupConnectionEdge {
  /** The item at the end of the edge */
  node?: Maybe<ContentfulPageHeaderDescriptionTextNode>;
  /** The next edge in the connection */
  next?: Maybe<ContentfulPageHeaderDescriptionTextNode>;
  /** The previous edge in the connection */
  previous?: Maybe<ContentfulPageHeaderDescriptionTextNode>;
}

/** A connection to a list of items. */
export interface ContentfulDictionaryConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<(Maybe<ContentfulDictionaryEdge>)[]>;

  totalCount?: Maybe<number>;

  distinct?: Maybe<(Maybe<string>)[]>;

  group?: Maybe<(Maybe<ContentfulDictionaryGroupConnectionConnection>)[]>;
}

/** An edge in a connection. */
export interface ContentfulDictionaryEdge {
  /** The item at the end of the edge */
  node?: Maybe<ContentfulDictionary>;
  /** The next edge in the connection */
  next?: Maybe<ContentfulDictionary>;
  /** The previous edge in the connection */
  previous?: Maybe<ContentfulDictionary>;
}

/** Node of type ContentfulDictionary */
export interface ContentfulDictionary extends Node {
  /** The id of this node. */
  id: string;
  /** The parent of this node. */
  parent?: Maybe<Node>;
  /** The children of this node. */
  children?: Maybe<(Maybe<Node>)[]>;

  slug?: Maybe<string>;

  title?: Maybe<string>;

  contentful_id?: Maybe<string>;

  createdAt?: Maybe<Date>;

  updatedAt?: Maybe<Date>;

  internal?: Maybe<Internal_43>;

  node_locale?: Maybe<string>;

  category?: Maybe<string>;
}

export interface Internal_43 {
  type?: Maybe<string>;

  contentDigest?: Maybe<string>;

  owner?: Maybe<string>;
}

/** A connection to a list of items. */
export interface ContentfulDictionaryGroupConnectionConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<(Maybe<ContentfulDictionaryGroupConnectionEdge>)[]>;

  field?: Maybe<string>;

  fieldValue?: Maybe<string>;

  totalCount?: Maybe<number>;
}

/** An edge in a connection. */
export interface ContentfulDictionaryGroupConnectionEdge {
  /** The item at the end of the edge */
  node?: Maybe<ContentfulDictionary>;
  /** The next edge in the connection */
  next?: Maybe<ContentfulDictionary>;
  /** The previous edge in the connection */
  previous?: Maybe<ContentfulDictionary>;
}

/** A connection to a list of items. */
export interface ContentfulServiceSectionConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<(Maybe<ContentfulServiceSectionEdge>)[]>;

  totalCount?: Maybe<number>;

  distinct?: Maybe<(Maybe<string>)[]>;

  group?: Maybe<(Maybe<ContentfulServiceSectionGroupConnectionConnection>)[]>;
}

/** An edge in a connection. */
export interface ContentfulServiceSectionEdge {
  /** The item at the end of the edge */
  node?: Maybe<ContentfulServiceSection>;
  /** The next edge in the connection */
  next?: Maybe<ContentfulServiceSection>;
  /** The previous edge in the connection */
  previous?: Maybe<ContentfulServiceSection>;
}

/** A connection to a list of items. */
export interface ContentfulServiceSectionGroupConnectionConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<(Maybe<ContentfulServiceSectionGroupConnectionEdge>)[]>;

  field?: Maybe<string>;

  fieldValue?: Maybe<string>;

  totalCount?: Maybe<number>;
}

/** An edge in a connection. */
export interface ContentfulServiceSectionGroupConnectionEdge {
  /** The item at the end of the edge */
  node?: Maybe<ContentfulServiceSection>;
  /** The next edge in the connection */
  next?: Maybe<ContentfulServiceSection>;
  /** The previous edge in the connection */
  previous?: Maybe<ContentfulServiceSection>;
}

/** A connection to a list of items. */
export interface ContentfulServiceSectionDescriptionTextNodeConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<(Maybe<ContentfulServiceSectionDescriptionTextNodeEdge>)[]>;

  totalCount?: Maybe<number>;

  distinct?: Maybe<(Maybe<string>)[]>;

  group?: Maybe<
    (Maybe<
      ContentfulServiceSectionDescriptionTextNodeGroupConnectionConnection
    >)[]
  >;
}

/** An edge in a connection. */
export interface ContentfulServiceSectionDescriptionTextNodeEdge {
  /** The item at the end of the edge */
  node?: Maybe<ContentfulServiceSectionDescriptionTextNode>;
  /** The next edge in the connection */
  next?: Maybe<ContentfulServiceSectionDescriptionTextNode>;
  /** The previous edge in the connection */
  previous?: Maybe<ContentfulServiceSectionDescriptionTextNode>;
}

/** A connection to a list of items. */
export interface ContentfulServiceSectionDescriptionTextNodeGroupConnectionConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<
    (Maybe<ContentfulServiceSectionDescriptionTextNodeGroupConnectionEdge>)[]
  >;

  field?: Maybe<string>;

  fieldValue?: Maybe<string>;

  totalCount?: Maybe<number>;
}

/** An edge in a connection. */
export interface ContentfulServiceSectionDescriptionTextNodeGroupConnectionEdge {
  /** The item at the end of the edge */
  node?: Maybe<ContentfulServiceSectionDescriptionTextNode>;
  /** The next edge in the connection */
  next?: Maybe<ContentfulServiceSectionDescriptionTextNode>;
  /** The previous edge in the connection */
  previous?: Maybe<ContentfulServiceSectionDescriptionTextNode>;
}

/** A connection to a list of items. */
export interface ContentfulStatisticsConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<(Maybe<ContentfulStatisticsEdge>)[]>;

  totalCount?: Maybe<number>;

  distinct?: Maybe<(Maybe<string>)[]>;

  group?: Maybe<(Maybe<ContentfulStatisticsGroupConnectionConnection>)[]>;
}

/** An edge in a connection. */
export interface ContentfulStatisticsEdge {
  /** The item at the end of the edge */
  node?: Maybe<ContentfulStatistics>;
  /** The next edge in the connection */
  next?: Maybe<ContentfulStatistics>;
  /** The previous edge in the connection */
  previous?: Maybe<ContentfulStatistics>;
}

/** Node of type ContentfulStatistics */
export interface ContentfulStatistics extends Node {
  /** The id of this node. */
  id: string;
  /** The parent of this node. */
  parent?: Maybe<Node>;
  /** The children of this node. */
  children?: Maybe<(Maybe<Node>)[]>;

  title?: Maybe<string>;

  description?: Maybe<string>;

  order?: Maybe<number>;

  contentful_id?: Maybe<string>;

  createdAt?: Maybe<Date>;

  updatedAt?: Maybe<Date>;

  internal?: Maybe<Internal_44>;

  node_locale?: Maybe<string>;
}

export interface Internal_44 {
  type?: Maybe<string>;

  contentDigest?: Maybe<string>;

  owner?: Maybe<string>;
}

/** A connection to a list of items. */
export interface ContentfulStatisticsGroupConnectionConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<(Maybe<ContentfulStatisticsGroupConnectionEdge>)[]>;

  field?: Maybe<string>;

  fieldValue?: Maybe<string>;

  totalCount?: Maybe<number>;
}

/** An edge in a connection. */
export interface ContentfulStatisticsGroupConnectionEdge {
  /** The item at the end of the edge */
  node?: Maybe<ContentfulStatistics>;
  /** The next edge in the connection */
  next?: Maybe<ContentfulStatistics>;
  /** The previous edge in the connection */
  previous?: Maybe<ContentfulStatistics>;
}

/** A connection to a list of items. */
export interface ContentfulListConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<(Maybe<ContentfulListEdge>)[]>;

  totalCount?: Maybe<number>;

  distinct?: Maybe<(Maybe<string>)[]>;

  group?: Maybe<(Maybe<ContentfulListGroupConnectionConnection>)[]>;
}

/** An edge in a connection. */
export interface ContentfulListEdge {
  /** The item at the end of the edge */
  node?: Maybe<ContentfulList>;
  /** The next edge in the connection */
  next?: Maybe<ContentfulList>;
  /** The previous edge in the connection */
  previous?: Maybe<ContentfulList>;
}

/** A connection to a list of items. */
export interface ContentfulListGroupConnectionConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<(Maybe<ContentfulListGroupConnectionEdge>)[]>;

  field?: Maybe<string>;

  fieldValue?: Maybe<string>;

  totalCount?: Maybe<number>;
}

/** An edge in a connection. */
export interface ContentfulListGroupConnectionEdge {
  /** The item at the end of the edge */
  node?: Maybe<ContentfulList>;
  /** The next edge in the connection */
  next?: Maybe<ContentfulList>;
  /** The previous edge in the connection */
  previous?: Maybe<ContentfulList>;
}

/** A connection to a list of items. */
export interface ContentfulAssetConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<(Maybe<ContentfulAssetEdge>)[]>;

  totalCount?: Maybe<number>;

  distinct?: Maybe<(Maybe<string>)[]>;

  group?: Maybe<(Maybe<ContentfulAssetGroupConnectionConnection>)[]>;
}

/** An edge in a connection. */
export interface ContentfulAssetEdge {
  /** The item at the end of the edge */
  node?: Maybe<ContentfulAsset>;
  /** The next edge in the connection */
  next?: Maybe<ContentfulAsset>;
  /** The previous edge in the connection */
  previous?: Maybe<ContentfulAsset>;
}

/** A connection to a list of items. */
export interface ContentfulAssetGroupConnectionConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<(Maybe<ContentfulAssetGroupConnectionEdge>)[]>;

  field?: Maybe<string>;

  fieldValue?: Maybe<string>;

  totalCount?: Maybe<number>;
}

/** An edge in a connection. */
export interface ContentfulAssetGroupConnectionEdge {
  /** The item at the end of the edge */
  node?: Maybe<ContentfulAsset>;
  /** The next edge in the connection */
  next?: Maybe<ContentfulAsset>;
  /** The previous edge in the connection */
  previous?: Maybe<ContentfulAsset>;
}

/** A connection to a list of items. */
export interface MarkdownRemarkConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<(Maybe<MarkdownRemarkEdge>)[]>;

  totalCount?: Maybe<number>;

  distinct?: Maybe<(Maybe<string>)[]>;

  group?: Maybe<(Maybe<MarkdownRemarkGroupConnectionConnection>)[]>;
}

/** An edge in a connection. */
export interface MarkdownRemarkEdge {
  /** The item at the end of the edge */
  node?: Maybe<MarkdownRemark>;
  /** The next edge in the connection */
  next?: Maybe<MarkdownRemark>;
  /** The previous edge in the connection */
  previous?: Maybe<MarkdownRemark>;
}

/** A connection to a list of items. */
export interface MarkdownRemarkGroupConnectionConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<(Maybe<MarkdownRemarkGroupConnectionEdge>)[]>;

  field?: Maybe<string>;

  fieldValue?: Maybe<string>;

  totalCount?: Maybe<number>;
}

/** An edge in a connection. */
export interface MarkdownRemarkGroupConnectionEdge {
  /** The item at the end of the edge */
  node?: Maybe<MarkdownRemark>;
  /** The next edge in the connection */
  next?: Maybe<MarkdownRemark>;
  /** The previous edge in the connection */
  previous?: Maybe<MarkdownRemark>;
}

/** A connection to a list of items. */
export interface ContentfulPluginConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<(Maybe<ContentfulPluginEdge>)[]>;

  totalCount?: Maybe<number>;

  distinct?: Maybe<(Maybe<string>)[]>;

  group?: Maybe<(Maybe<ContentfulPluginGroupConnectionConnection>)[]>;
}

/** An edge in a connection. */
export interface ContentfulPluginEdge {
  /** The item at the end of the edge */
  node?: Maybe<ContentfulPlugin>;
  /** The next edge in the connection */
  next?: Maybe<ContentfulPlugin>;
  /** The previous edge in the connection */
  previous?: Maybe<ContentfulPlugin>;
}

/** A connection to a list of items. */
export interface ContentfulPluginGroupConnectionConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<(Maybe<ContentfulPluginGroupConnectionEdge>)[]>;

  field?: Maybe<string>;

  fieldValue?: Maybe<string>;

  totalCount?: Maybe<number>;
}

/** An edge in a connection. */
export interface ContentfulPluginGroupConnectionEdge {
  /** The item at the end of the edge */
  node?: Maybe<ContentfulPlugin>;
  /** The next edge in the connection */
  next?: Maybe<ContentfulPlugin>;
  /** The previous edge in the connection */
  previous?: Maybe<ContentfulPlugin>;
}

/** A connection to a list of items. */
export interface SitePageConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<(Maybe<SitePageEdge>)[]>;

  totalCount?: Maybe<number>;

  distinct?: Maybe<(Maybe<string>)[]>;

  group?: Maybe<(Maybe<SitePageGroupConnectionConnection>)[]>;
}

/** An edge in a connection. */
export interface SitePageEdge {
  /** The item at the end of the edge */
  node?: Maybe<SitePage>;
  /** The next edge in the connection */
  next?: Maybe<SitePage>;
  /** The previous edge in the connection */
  previous?: Maybe<SitePage>;
}

/** Node of type SitePage */
export interface SitePage extends Node {
  /** The id of this node. */
  id: string;
  /** The parent of this node. */
  parent?: Maybe<Node>;
  /** The children of this node. */
  children?: Maybe<(Maybe<Node>)[]>;

  jsonName?: Maybe<string>;

  internalComponentName?: Maybe<string>;

  path?: Maybe<string>;

  component?: Maybe<string>;

  componentChunkName?: Maybe<string>;

  context?: Maybe<Context>;

  pluginCreator?: Maybe<SitePlugin>;

  pluginCreatorId?: Maybe<string>;

  componentPath?: Maybe<string>;

  internal?: Maybe<Internal_45>;
}

export interface Context {
  slug?: Maybe<string>;

  lang?: Maybe<string>;
}

export interface Internal_45 {
  type?: Maybe<string>;

  contentDigest?: Maybe<string>;

  description?: Maybe<string>;

  owner?: Maybe<string>;
}

/** A connection to a list of items. */
export interface SitePageGroupConnectionConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<(Maybe<SitePageGroupConnectionEdge>)[]>;

  field?: Maybe<string>;

  fieldValue?: Maybe<string>;

  totalCount?: Maybe<number>;
}

/** An edge in a connection. */
export interface SitePageGroupConnectionEdge {
  /** The item at the end of the edge */
  node?: Maybe<SitePage>;
  /** The next edge in the connection */
  next?: Maybe<SitePage>;
  /** The previous edge in the connection */
  previous?: Maybe<SitePage>;
}

/** Node of type Site */
export interface Site extends Node {
  /** The id of this node. */
  id: string;
  /** The parent of this node. */
  parent?: Maybe<Node>;
  /** The children of this node. */
  children?: Maybe<(Maybe<Node>)[]>;

  siteMetadata?: Maybe<SiteMetadata_2>;

  port?: Maybe<Date>;

  host?: Maybe<string>;

  pathPrefix?: Maybe<string>;

  polyfill?: Maybe<boolean>;

  buildTime?: Maybe<Date>;

  internal?: Maybe<Internal_46>;
}

export interface SiteMetadata_2 {
  title?: Maybe<string>;

  description?: Maybe<string>;

  siteUrl?: Maybe<string>;

  socialLinks?: Maybe<(Maybe<SocialLinks_2>)[]>;

  languages?: Maybe<Languages_2>;
}

export interface SocialLinks_2 {
  url?: Maybe<string>;

  name?: Maybe<string>;
}

export interface Languages_2 {
  defaultLangKey?: Maybe<string>;

  langs?: Maybe<(Maybe<string>)[]>;
}

export interface Internal_46 {
  contentDigest?: Maybe<string>;

  type?: Maybe<string>;

  owner?: Maybe<string>;
}

// ====================================================
// Arguments
// ====================================================

export interface AllSitePluginQueryArgs {
  skip?: Maybe<number>;

  limit?: Maybe<number>;

  sort?: Maybe<SitePluginConnectionSort>;

  filter?: Maybe<FilterSitePlugin>;
}
export interface AllDirectoryQueryArgs {
  skip?: Maybe<number>;

  limit?: Maybe<number>;

  sort?: Maybe<DirectoryConnectionSort>;

  filter?: Maybe<FilterDirectory>;
}
export interface AllFileQueryArgs {
  skip?: Maybe<number>;

  limit?: Maybe<number>;

  sort?: Maybe<FileConnectionSort>;

  filter?: Maybe<FilterFile>;
}
export interface AllDataJsonQueryArgs {
  skip?: Maybe<number>;

  limit?: Maybe<number>;

  sort?: Maybe<DataJsonConnectionSort>;

  filter?: Maybe<FilterDataJson>;
}
export interface AllContentfulContentTypeQueryArgs {
  skip?: Maybe<number>;

  limit?: Maybe<number>;

  sort?: Maybe<ContentfulContentTypeConnectionSort>;

  filter?: Maybe<FilterContentfulContentType>;
}
export interface AllContentfulServiceQueryArgs {
  skip?: Maybe<number>;

  limit?: Maybe<number>;

  sort?: Maybe<ContentfulServiceConnectionSort>;

  filter?: Maybe<FilterContentfulService>;
}
export interface AllContentfulServiceDescriptionTextNodeQueryArgs {
  skip?: Maybe<number>;

  limit?: Maybe<number>;

  sort?: Maybe<ContentfulServiceDescriptionTextNodeConnectionSort>;

  filter?: Maybe<FilterContentfulServiceDescriptionTextNode>;
}
export interface AllContentfulNavigationQueryArgs {
  skip?: Maybe<number>;

  limit?: Maybe<number>;

  sort?: Maybe<ContentfulNavigationConnectionSort>;

  filter?: Maybe<FilterContentfulNavigation>;
}
export interface AllContentfulOfficeQueryArgs {
  skip?: Maybe<number>;

  limit?: Maybe<number>;

  sort?: Maybe<ContentfulOfficeConnectionSort>;

  filter?: Maybe<FilterContentfulOffice>;
}
export interface AllContentfulCaseQueryArgs {
  skip?: Maybe<number>;

  limit?: Maybe<number>;

  sort?: Maybe<ContentfulCaseConnectionSort>;

  filter?: Maybe<FilterContentfulCase>;
}
export interface AllContentfulExpertQueryArgs {
  skip?: Maybe<number>;

  limit?: Maybe<number>;

  sort?: Maybe<ContentfulExpertConnectionSort>;

  filter?: Maybe<FilterContentfulExpert>;
}
export interface AllContentfulPageQueryArgs {
  skip?: Maybe<number>;

  limit?: Maybe<number>;

  sort?: Maybe<ContentfulPageConnectionSort>;

  filter?: Maybe<FilterContentfulPage>;
}
export interface AllContentfulPageHeaderDescriptionTextNodeQueryArgs {
  skip?: Maybe<number>;

  limit?: Maybe<number>;

  sort?: Maybe<ContentfulPageHeaderDescriptionTextNodeConnectionSort>;

  filter?: Maybe<FilterContentfulPageHeaderDescriptionTextNode>;
}
export interface AllContentfulDictionaryQueryArgs {
  skip?: Maybe<number>;

  limit?: Maybe<number>;

  sort?: Maybe<ContentfulDictionaryConnectionSort>;

  filter?: Maybe<FilterContentfulDictionary>;
}
export interface AllContentfulServiceSectionQueryArgs {
  skip?: Maybe<number>;

  limit?: Maybe<number>;

  sort?: Maybe<ContentfulServiceSectionConnectionSort>;

  filter?: Maybe<FilterContentfulServiceSection>;
}
export interface AllContentfulServiceSectionDescriptionTextNodeQueryArgs {
  skip?: Maybe<number>;

  limit?: Maybe<number>;

  sort?: Maybe<ContentfulServiceSectionDescriptionTextNodeConnectionSort>;

  filter?: Maybe<FilterContentfulServiceSectionDescriptionTextNode>;
}
export interface AllContentfulStatisticsQueryArgs {
  skip?: Maybe<number>;

  limit?: Maybe<number>;

  sort?: Maybe<ContentfulStatisticsConnectionSort>;

  filter?: Maybe<FilterContentfulStatistics>;
}
export interface AllContentfulListQueryArgs {
  skip?: Maybe<number>;

  limit?: Maybe<number>;

  sort?: Maybe<ContentfulListConnectionSort>;

  filter?: Maybe<FilterContentfulList>;
}
export interface AllContentfulAssetQueryArgs {
  skip?: Maybe<number>;

  limit?: Maybe<number>;

  sort?: Maybe<ContentfulAssetConnectionSort>;

  filter?: Maybe<FilterContentfulAsset>;
}
export interface AllMarkdownRemarkQueryArgs {
  skip?: Maybe<number>;

  limit?: Maybe<number>;

  sort?: Maybe<MarkdownRemarkConnectionSort>;

  filter?: Maybe<FilterMarkdownRemark>;
}
export interface AllContentfulPluginQueryArgs {
  skip?: Maybe<number>;

  limit?: Maybe<number>;

  sort?: Maybe<ContentfulPluginConnectionSort>;

  filter?: Maybe<FilterContentfulPlugin>;
}
export interface AllSitePageQueryArgs {
  skip?: Maybe<number>;

  limit?: Maybe<number>;

  sort?: Maybe<SitePageConnectionSort>;

  filter?: Maybe<FilterSitePage>;
}
export interface SitePluginQueryArgs {
  resolve?: Maybe<SitePluginResolveQueryString_2>;

  id?: Maybe<SitePluginIdQueryString_2>;

  name?: Maybe<SitePluginNameQueryString_2>;

  version?: Maybe<SitePluginVersionQueryString_2>;

  pluginOptions?: Maybe<SitePluginPluginOptionsInputObject_2>;

  nodeAPIs?: Maybe<SitePluginNodeApIsQueryList_2>;

  browserAPIs?: Maybe<SitePluginBrowserApIsQueryList_2>;

  ssrAPIs?: Maybe<SitePluginSsrApIsQueryList_2>;

  pluginFilepath?: Maybe<SitePluginPluginFilepathQueryString_2>;

  packageJson?: Maybe<SitePluginPackageJsonInputObject_2>;

  internal?: Maybe<SitePluginInternalInputObject_2>;
}
export interface SiteQueryArgs {
  siteMetadata?: Maybe<SiteSiteMetadataInputObject_2>;

  port?: Maybe<SitePortQueryString_2>;

  host?: Maybe<SiteHostQueryString_2>;

  pathPrefix?: Maybe<SitePathPrefixQueryString_2>;

  polyfill?: Maybe<SitePolyfillQueryBoolean_2>;

  buildTime?: Maybe<SiteBuildTimeQueryString_2>;

  id?: Maybe<SiteIdQueryString_2>;

  internal?: Maybe<SiteInternalInputObject_2>;
}
export interface DirectoryQueryArgs {
  id?: Maybe<DirectoryIdQueryString_2>;

  internal?: Maybe<DirectoryInternalInputObject_2>;

  sourceInstanceName?: Maybe<DirectorySourceInstanceNameQueryString_2>;

  absolutePath?: Maybe<DirectoryAbsolutePathQueryString_2>;

  relativePath?: Maybe<DirectoryRelativePathQueryString_2>;

  extension?: Maybe<DirectoryExtensionQueryString_2>;

  size?: Maybe<DirectorySizeQueryInteger_2>;

  prettySize?: Maybe<DirectoryPrettySizeQueryString_2>;

  modifiedTime?: Maybe<DirectoryModifiedTimeQueryString_2>;

  accessTime?: Maybe<DirectoryAccessTimeQueryString_2>;

  changeTime?: Maybe<DirectoryChangeTimeQueryString_2>;

  birthTime?: Maybe<DirectoryBirthTimeQueryString_2>;

  root?: Maybe<DirectoryRootQueryString_2>;

  dir?: Maybe<DirectoryDirQueryString_2>;

  base?: Maybe<DirectoryBaseQueryString_2>;

  ext?: Maybe<DirectoryExtQueryString_2>;

  name?: Maybe<DirectoryNameQueryString_2>;

  relativeDirectory?: Maybe<DirectoryRelativeDirectoryQueryString_2>;

  dev?: Maybe<DirectoryDevQueryInteger_2>;

  mode?: Maybe<DirectoryModeQueryInteger_2>;

  nlink?: Maybe<DirectoryNlinkQueryInteger_2>;

  uid?: Maybe<DirectoryUidQueryInteger_2>;

  gid?: Maybe<DirectoryGidQueryInteger_2>;

  rdev?: Maybe<DirectoryRdevQueryInteger_2>;

  blksize?: Maybe<DirectoryBlksizeQueryInteger_2>;

  ino?: Maybe<DirectoryInoQueryInteger_2>;

  blocks?: Maybe<DirectoryBlocksQueryInteger_2>;

  atimeMs?: Maybe<DirectoryAtimeMsQueryFloat_2>;

  mtimeMs?: Maybe<DirectoryMtimeMsQueryFloat_2>;

  ctimeMs?: Maybe<DirectoryCtimeMsQueryFloat_2>;

  birthtimeMs?: Maybe<DirectoryBirthtimeMsQueryFloat_2>;

  atime?: Maybe<DirectoryAtimeQueryString_2>;

  mtime?: Maybe<DirectoryMtimeQueryString_2>;

  ctime?: Maybe<DirectoryCtimeQueryString_2>;

  birthtime?: Maybe<DirectoryBirthtimeQueryString_2>;
}
export interface FileQueryArgs {
  id?: Maybe<FileIdQueryString_2>;

  internal?: Maybe<FileInternalInputObject_2>;

  sourceInstanceName?: Maybe<FileSourceInstanceNameQueryString_2>;

  absolutePath?: Maybe<FileAbsolutePathQueryString_2>;

  relativePath?: Maybe<FileRelativePathQueryString_2>;

  extension?: Maybe<FileExtensionQueryString_2>;

  size?: Maybe<FileSizeQueryInteger_2>;

  prettySize?: Maybe<FilePrettySizeQueryString_2>;

  modifiedTime?: Maybe<FileModifiedTimeQueryString_2>;

  accessTime?: Maybe<FileAccessTimeQueryString_2>;

  changeTime?: Maybe<FileChangeTimeQueryString_2>;

  birthTime?: Maybe<FileBirthTimeQueryString_2>;

  root?: Maybe<FileRootQueryString_2>;

  dir?: Maybe<FileDirQueryString_2>;

  base?: Maybe<FileBaseQueryString_2>;

  ext?: Maybe<FileExtQueryString_2>;

  name?: Maybe<FileNameQueryString_2>;

  relativeDirectory?: Maybe<FileRelativeDirectoryQueryString_2>;

  dev?: Maybe<FileDevQueryInteger_2>;

  mode?: Maybe<FileModeQueryInteger_2>;

  nlink?: Maybe<FileNlinkQueryInteger_2>;

  uid?: Maybe<FileUidQueryInteger_2>;

  gid?: Maybe<FileGidQueryInteger_2>;

  rdev?: Maybe<FileRdevQueryInteger_2>;

  blksize?: Maybe<FileBlksizeQueryInteger_2>;

  ino?: Maybe<FileInoQueryInteger_2>;

  blocks?: Maybe<FileBlocksQueryInteger_2>;

  atimeMs?: Maybe<FileAtimeMsQueryFloat_2>;

  mtimeMs?: Maybe<FileMtimeMsQueryFloat_2>;

  ctimeMs?: Maybe<FileCtimeMsQueryFloat_2>;

  birthtimeMs?: Maybe<FileBirthtimeMsQueryFloat_2>;

  atime?: Maybe<FileAtimeQueryString_2>;

  mtime?: Maybe<FileMtimeQueryString_2>;

  ctime?: Maybe<FileCtimeQueryString_2>;

  birthtime?: Maybe<FileBirthtimeQueryString_2>;

  publicURL?: Maybe<PublicUrlQueryString_3>;
}
export interface DataJsonQueryArgs {
  id?: Maybe<DataJsonIdQueryString_2>;

  internal?: Maybe<DataJsonInternalInputObject_2>;
}
export interface ContentfulContentTypeQueryArgs {
  id?: Maybe<ContentfulContentTypeIdQueryString_2>;

  name?: Maybe<ContentfulContentTypeNameQueryString_2>;

  displayField?: Maybe<ContentfulContentTypeDisplayFieldQueryString_2>;

  description?: Maybe<ContentfulContentTypeDescriptionQueryString_2>;

  internal?: Maybe<ContentfulContentTypeInternalInputObject_2>;
}
export interface ContentfulServiceQueryArgs {
  title?: Maybe<ContentfulServiceTitleQueryString_2>;

  slug?: Maybe<ContentfulServiceSlugQueryString_2>;

  order?: Maybe<ContentfulServiceOrderQueryInteger_2>;

  image?: Maybe<ContentfulServiceImageInputObject_2>;

  sections?: Maybe<ContentfulServiceSectionsQueryList_2>;

  description?: Maybe<ContentfulServiceDescriptionInputObject_2>;

  id?: Maybe<ContentfulServiceIdQueryString_2>;

  contentful_id?: Maybe<ContentfulServiceContentfulIdQueryString_2>;

  createdAt?: Maybe<ContentfulServiceCreatedAtQueryString_2>;

  updatedAt?: Maybe<ContentfulServiceUpdatedAtQueryString_2>;

  internal?: Maybe<ContentfulServiceInternalInputObject_2>;

  node_locale?: Maybe<ContentfulServiceNodeLocaleQueryString_2>;

  plugins?: Maybe<ContentfulServicePluginsQueryList_2>;
}
export interface ContentfulServiceDescriptionTextNodeQueryArgs {
  id?: Maybe<ContentfulServiceDescriptionTextNodeIdQueryString_2>;

  description?: Maybe<
    ContentfulServiceDescriptionTextNodeDescriptionQueryString_2
  >;

  internal?: Maybe<ContentfulServiceDescriptionTextNodeInternalInputObject_2>;
}
export interface ContentfulNavigationQueryArgs {
  title?: Maybe<ContentfulNavigationTitleQueryString_2>;

  slug?: Maybe<ContentfulNavigationSlugQueryString_2>;

  order?: Maybe<ContentfulNavigationOrderQueryInteger_2>;

  header?: Maybe<ContentfulNavigationHeaderQueryBoolean_2>;

  footer?: Maybe<ContentfulNavigationFooterQueryBoolean_2>;

  id?: Maybe<ContentfulNavigationIdQueryString_2>;

  contentful_id?: Maybe<ContentfulNavigationContentfulIdQueryString_2>;

  createdAt?: Maybe<ContentfulNavigationCreatedAtQueryString_2>;

  updatedAt?: Maybe<ContentfulNavigationUpdatedAtQueryString_2>;

  internal?: Maybe<ContentfulNavigationInternalInputObject_2>;

  node_locale?: Maybe<ContentfulNavigationNodeLocaleQueryString_2>;
}
export interface ContentfulOfficeQueryArgs {
  title?: Maybe<ContentfulOfficeTitleQueryString_2>;

  slug?: Maybe<ContentfulOfficeSlugQueryString_2>;

  order?: Maybe<ContentfulOfficeOrderQueryInteger_2>;

  map?: Maybe<ContentfulOfficeMapInputObject_2>;

  id?: Maybe<ContentfulOfficeIdQueryString_2>;

  contentful_id?: Maybe<ContentfulOfficeContentfulIdQueryString_2>;

  createdAt?: Maybe<ContentfulOfficeCreatedAtQueryString_2>;

  updatedAt?: Maybe<ContentfulOfficeUpdatedAtQueryString_2>;

  internal?: Maybe<ContentfulOfficeInternalInputObject_2>;

  node_locale?: Maybe<ContentfulOfficeNodeLocaleQueryString_2>;
}
export interface ContentfulCaseQueryArgs {
  title?: Maybe<ContentfulCaseTitleQueryString_2>;

  slug?: Maybe<ContentfulCaseSlugQueryString_2>;

  order?: Maybe<ContentfulCaseOrderQueryInteger_2>;

  description?: Maybe<ContentfulCaseDescriptionQueryString_2>;

  thumbnail?: Maybe<ContentfulCaseThumbnailInputObject_2>;

  id?: Maybe<ContentfulCaseIdQueryString_2>;

  contentful_id?: Maybe<ContentfulCaseContentfulIdQueryString_2>;

  createdAt?: Maybe<ContentfulCaseCreatedAtQueryString_2>;

  updatedAt?: Maybe<ContentfulCaseUpdatedAtQueryString_2>;

  internal?: Maybe<ContentfulCaseInternalInputObject_2>;

  node_locale?: Maybe<ContentfulCaseNodeLocaleQueryString_2>;
}
export interface ContentfulExpertQueryArgs {
  title?: Maybe<ContentfulExpertTitleQueryString_2>;

  position?: Maybe<ContentfulExpertPositionQueryString_2>;

  order?: Maybe<ContentfulExpertOrderQueryInteger_2>;

  photo?: Maybe<ContentfulExpertPhotoInputObject_2>;

  id?: Maybe<ContentfulExpertIdQueryString_2>;

  contentful_id?: Maybe<ContentfulExpertContentfulIdQueryString_2>;

  createdAt?: Maybe<ContentfulExpertCreatedAtQueryString_2>;

  updatedAt?: Maybe<ContentfulExpertUpdatedAtQueryString_2>;

  internal?: Maybe<ContentfulExpertInternalInputObject_2>;

  node_locale?: Maybe<ContentfulExpertNodeLocaleQueryString_2>;
}
export interface ContentfulPageQueryArgs {
  slug?: Maybe<ContentfulPageSlugQueryString_2>;

  pageTitle?: Maybe<ContentfulPagePageTitleQueryString_2>;

  headerTitle?: Maybe<ContentfulPageHeaderTitleQueryString_2>;

  headerDescription?: Maybe<ContentfulPageHeaderDescriptionInputObject_2>;

  id?: Maybe<ContentfulPageIdQueryString_2>;

  contentful_id?: Maybe<ContentfulPageContentfulIdQueryString_2>;

  createdAt?: Maybe<ContentfulPageCreatedAtQueryString_2>;

  updatedAt?: Maybe<ContentfulPageUpdatedAtQueryString_2>;

  internal?: Maybe<ContentfulPageInternalInputObject_2>;

  node_locale?: Maybe<ContentfulPageNodeLocaleQueryString_2>;

  pageDescription?: Maybe<ContentfulPagePageDescriptionQueryString_2>;

  pageKeywords?: Maybe<ContentfulPagePageKeywordsQueryList_2>;
}
export interface ContentfulPageHeaderDescriptionTextNodeQueryArgs {
  id?: Maybe<ContentfulPageHeaderDescriptionTextNodeIdQueryString_2>;

  headerDescription?: Maybe<
    ContentfulPageHeaderDescriptionTextNodeHeaderDescriptionQueryString_2
  >;

  internal?: Maybe<
    ContentfulPageHeaderDescriptionTextNodeInternalInputObject_2
  >;
}
export interface ContentfulDictionaryQueryArgs {
  slug?: Maybe<ContentfulDictionarySlugQueryString_2>;

  title?: Maybe<ContentfulDictionaryTitleQueryString_2>;

  id?: Maybe<ContentfulDictionaryIdQueryString_2>;

  contentful_id?: Maybe<ContentfulDictionaryContentfulIdQueryString_2>;

  createdAt?: Maybe<ContentfulDictionaryCreatedAtQueryString_2>;

  updatedAt?: Maybe<ContentfulDictionaryUpdatedAtQueryString_2>;

  internal?: Maybe<ContentfulDictionaryInternalInputObject_2>;

  node_locale?: Maybe<ContentfulDictionaryNodeLocaleQueryString_2>;

  category?: Maybe<ContentfulDictionaryCategoryQueryString_2>;
}
export interface ContentfulServiceSectionQueryArgs {
  title?: Maybe<ContentfulServiceSectionTitleQueryString_2>;

  subtitle?: Maybe<ContentfulServiceSectionSubtitleQueryString_2>;

  list?: Maybe<ContentfulServiceSectionListQueryList_2>;

  order?: Maybe<ContentfulServiceSectionOrderQueryInteger_2>;

  thumbnail?: Maybe<ContentfulServiceSectionThumbnailInputObject_2>;

  service?: Maybe<ContentfulServiceSectionServiceQueryList_2>;

  description?: Maybe<ContentfulServiceSectionDescriptionInputObject_2>;

  id?: Maybe<ContentfulServiceSectionIdQueryString_2>;

  contentful_id?: Maybe<ContentfulServiceSectionContentfulIdQueryString_2>;

  createdAt?: Maybe<ContentfulServiceSectionCreatedAtQueryString_2>;

  updatedAt?: Maybe<ContentfulServiceSectionUpdatedAtQueryString_2>;

  internal?: Maybe<ContentfulServiceSectionInternalInputObject_2>;

  node_locale?: Maybe<ContentfulServiceSectionNodeLocaleQueryString_2>;
}
export interface ContentfulServiceSectionDescriptionTextNodeQueryArgs {
  id?: Maybe<ContentfulServiceSectionDescriptionTextNodeIdQueryString_2>;

  description?: Maybe<
    ContentfulServiceSectionDescriptionTextNodeDescriptionQueryString_2
  >;

  internal?: Maybe<
    ContentfulServiceSectionDescriptionTextNodeInternalInputObject_2
  >;
}
export interface ContentfulStatisticsQueryArgs {
  title?: Maybe<ContentfulStatisticsTitleQueryString_2>;

  description?: Maybe<ContentfulStatisticsDescriptionQueryString_2>;

  order?: Maybe<ContentfulStatisticsOrderQueryInteger_2>;

  id?: Maybe<ContentfulStatisticsIdQueryString_2>;

  contentful_id?: Maybe<ContentfulStatisticsContentfulIdQueryString_2>;

  createdAt?: Maybe<ContentfulStatisticsCreatedAtQueryString_2>;

  updatedAt?: Maybe<ContentfulStatisticsUpdatedAtQueryString_2>;

  internal?: Maybe<ContentfulStatisticsInternalInputObject_2>;

  node_locale?: Maybe<ContentfulStatisticsNodeLocaleQueryString_2>;
}
export interface ContentfulListQueryArgs {
  title?: Maybe<ContentfulListTitleQueryString_2>;

  items?: Maybe<ContentfulListItemsQueryList_2>;

  order?: Maybe<ContentfulListOrderQueryInteger_2>;

  category?: Maybe<ContentfulListCategoryQueryList_2>;

  id?: Maybe<ContentfulListIdQueryString_2>;

  contentful_id?: Maybe<ContentfulListContentfulIdQueryString_2>;

  createdAt?: Maybe<ContentfulListCreatedAtQueryString_2>;

  updatedAt?: Maybe<ContentfulListUpdatedAtQueryString_2>;

  internal?: Maybe<ContentfulListInternalInputObject_2>;

  node_locale?: Maybe<ContentfulListNodeLocaleQueryString_2>;

  plugin?: Maybe<ContentfulListPluginQueryList_2>;
}
export interface ContentfulAssetQueryArgs {
  contentful_id?: Maybe<ContentfulAssetContentfulIdQueryString_2>;

  id?: Maybe<ContentfulAssetIdQueryString_2>;

  file?: Maybe<ContentfulAssetFileInputObject_2>;

  title?: Maybe<ContentfulAssetTitleQueryString_2>;

  description?: Maybe<ContentfulAssetDescriptionQueryString_2>;

  node_locale?: Maybe<ContentfulAssetNodeLocaleQueryString_2>;

  internal?: Maybe<ContentfulAssetInternalInputObject_2>;

  fixed?: Maybe<FixedTypeName_3>;

  resolutions?: Maybe<ResolutionsTypeName_3>;

  fluid?: Maybe<FluidTypeName_3>;

  sizes?: Maybe<SizesTypeName_3>;

  resize?: Maybe<ResizeTypeName_3>;
}
export interface MarkdownRemarkQueryArgs {
  id?: Maybe<MarkdownRemarkIdQueryString_2>;

  internal?: Maybe<MarkdownRemarkInternalInputObject_2>;

  frontmatter?: Maybe<MarkdownRemarkFrontmatterInputObject_2>;

  rawMarkdownBody?: Maybe<MarkdownRemarkRawMarkdownBodyQueryString_2>;

  html?: Maybe<HtmlQueryString_3>;

  excerpt?: Maybe<ExcerptQueryString_3>;

  headings?: Maybe<HeadingsQueryList_3>;

  timeToRead?: Maybe<TimeToReadQueryInt_3>;

  tableOfContents?: Maybe<TableOfContentsQueryString_3>;

  wordCount?: Maybe<WordCountTypeName_3>;
}
export interface ContentfulPluginQueryArgs {
  title?: Maybe<ContentfulPluginTitleQueryString_2>;

  type?: Maybe<ContentfulPluginTypeQueryList_2>;

  items?: Maybe<ContentfulPluginItemsQueryList_2>;

  service?: Maybe<ContentfulPluginServiceQueryList_2>;

  id?: Maybe<ContentfulPluginIdQueryString_2>;

  contentful_id?: Maybe<ContentfulPluginContentfulIdQueryString_2>;

  createdAt?: Maybe<ContentfulPluginCreatedAtQueryString_2>;

  updatedAt?: Maybe<ContentfulPluginUpdatedAtQueryString_2>;

  internal?: Maybe<ContentfulPluginInternalInputObject_2>;

  node_locale?: Maybe<ContentfulPluginNodeLocaleQueryString_2>;
}
export interface SitePageQueryArgs {
  jsonName?: Maybe<SitePageJsonNameQueryString>;

  internalComponentName?: Maybe<SitePageInternalComponentNameQueryString>;

  path?: Maybe<SitePagePathQueryString_2>;

  component?: Maybe<SitePageComponentQueryString>;

  componentChunkName?: Maybe<SitePageComponentChunkNameQueryString>;

  context?: Maybe<SitePageContextInputObject>;

  pluginCreator?: Maybe<SitePagePluginCreatorInputObject>;

  pluginCreatorId?: Maybe<SitePagePluginCreatorIdQueryString_2>;

  componentPath?: Maybe<SitePageComponentPathQueryString>;

  id?: Maybe<SitePageIdQueryString_2>;

  internal?: Maybe<SitePageInternalInputObject_2>;
}
export interface DistinctSitePluginConnectionArgs {
  field?: Maybe<SitePluginDistinctEnum>;
}
export interface GroupSitePluginConnectionArgs {
  skip?: Maybe<number>;

  limit?: Maybe<number>;

  field?: Maybe<SitePluginGroupEnum>;
}
export interface DistinctDirectoryConnectionArgs {
  field?: Maybe<DirectoryDistinctEnum>;
}
export interface GroupDirectoryConnectionArgs {
  skip?: Maybe<number>;

  limit?: Maybe<number>;

  field?: Maybe<DirectoryGroupEnum>;
}
export interface ModifiedTimeDirectoryArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface AccessTimeDirectoryArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface ChangeTimeDirectoryArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface BirthTimeDirectoryArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface AtimeDirectoryArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface MtimeDirectoryArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface CtimeDirectoryArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface BirthtimeDirectoryArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface DistinctFileConnectionArgs {
  field?: Maybe<FileDistinctEnum>;
}
export interface GroupFileConnectionArgs {
  skip?: Maybe<number>;

  limit?: Maybe<number>;

  field?: Maybe<FileGroupEnum>;
}
export interface ModifiedTimeFileArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface AccessTimeFileArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface ChangeTimeFileArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface BirthTimeFileArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface AtimeFileArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface MtimeFileArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface CtimeFileArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface BirthtimeFileArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface DistinctDataJsonConnectionArgs {
  field?: Maybe<DataJsonDistinctEnum>;
}
export interface GroupDataJsonConnectionArgs {
  skip?: Maybe<number>;

  limit?: Maybe<number>;

  field?: Maybe<DataJsonGroupEnum>;
}
export interface DistinctContentfulContentTypeConnectionArgs {
  field?: Maybe<ContentfulContentTypeDistinctEnum>;
}
export interface GroupContentfulContentTypeConnectionArgs {
  skip?: Maybe<number>;

  limit?: Maybe<number>;

  field?: Maybe<ContentfulContentTypeGroupEnum>;
}
export interface DistinctContentfulServiceConnectionArgs {
  field?: Maybe<ContentfulServiceDistinctEnum>;
}
export interface GroupContentfulServiceConnectionArgs {
  skip?: Maybe<number>;

  limit?: Maybe<number>;

  field?: Maybe<ContentfulServiceGroupEnum>;
}
export interface CreatedAtContentfulServiceArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface UpdatedAtContentfulServiceArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface ExcerptMarkdownRemarkArgs {
  pruneLength?: number;

  truncate?: Maybe<boolean>;

  format?: Maybe<ExcerptFormats>;
}
export interface HeadingsMarkdownRemarkArgs {
  depth?: Maybe<HeadingLevels>;
}
export interface TableOfContentsMarkdownRemarkArgs {
  pathToSlugField?: string;

  maxDepth?: Maybe<number>;

  heading?: Maybe<string>;
}
export interface FixedContentfulAssetArgs {
  width?: number;

  height?: Maybe<number>;

  quality?: number;

  toFormat?: Maybe<ContentfulImageFormat>;

  resizingBehavior?: Maybe<ImageResizingBehavior>;

  cropFocus?: Maybe<ContentfulImageCropFocus>;

  background?: Maybe<string>;
}
export interface ResolutionsContentfulAssetArgs {
  width?: number;

  height?: Maybe<number>;

  quality?: number;

  toFormat?: Maybe<ContentfulImageFormat>;

  resizingBehavior?: Maybe<ImageResizingBehavior>;

  cropFocus?: Maybe<ContentfulImageCropFocus>;

  background?: Maybe<string>;
}
export interface FluidContentfulAssetArgs {
  maxWidth?: number;

  maxHeight?: Maybe<number>;

  quality?: number;

  toFormat?: Maybe<ContentfulImageFormat>;

  resizingBehavior?: Maybe<ImageResizingBehavior>;

  cropFocus?: Maybe<ContentfulImageCropFocus>;

  background?: Maybe<string>;

  sizes?: Maybe<string>;
}
export interface SizesContentfulAssetArgs {
  maxWidth?: number;

  maxHeight?: Maybe<number>;

  quality?: number;

  toFormat?: Maybe<ContentfulImageFormat>;

  resizingBehavior?: Maybe<ImageResizingBehavior>;

  cropFocus?: Maybe<ContentfulImageCropFocus>;

  background?: Maybe<string>;

  sizes?: Maybe<string>;
}
export interface ResizeContentfulAssetArgs {
  width?: number;

  height?: Maybe<number>;

  quality?: number;

  jpegProgressive?: boolean;

  resizingBehavior?: Maybe<ImageResizingBehavior>;

  toFormat?: Maybe<ContentfulImageFormat>;

  cropFocus?: Maybe<ContentfulImageCropFocus>;

  background?: Maybe<string>;
}
export interface CreatedAtContentfulServiceSectionArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface UpdatedAtContentfulServiceSectionArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface CreatedAtContentfulPluginArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface UpdatedAtContentfulPluginArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface CreatedAtContentfulListArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface UpdatedAtContentfulListArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface DistinctContentfulServiceDescriptionTextNodeConnectionArgs {
  field?: Maybe<ContentfulServiceDescriptionTextNodeDistinctEnum>;
}
export interface GroupContentfulServiceDescriptionTextNodeConnectionArgs {
  skip?: Maybe<number>;

  limit?: Maybe<number>;

  field?: Maybe<ContentfulServiceDescriptionTextNodeGroupEnum>;
}
export interface DistinctContentfulNavigationConnectionArgs {
  field?: Maybe<ContentfulNavigationDistinctEnum>;
}
export interface GroupContentfulNavigationConnectionArgs {
  skip?: Maybe<number>;

  limit?: Maybe<number>;

  field?: Maybe<ContentfulNavigationGroupEnum>;
}
export interface CreatedAtContentfulNavigationArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface UpdatedAtContentfulNavigationArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface DistinctContentfulOfficeConnectionArgs {
  field?: Maybe<ContentfulOfficeDistinctEnum>;
}
export interface GroupContentfulOfficeConnectionArgs {
  skip?: Maybe<number>;

  limit?: Maybe<number>;

  field?: Maybe<ContentfulOfficeGroupEnum>;
}
export interface CreatedAtContentfulOfficeArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface UpdatedAtContentfulOfficeArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface DistinctContentfulCaseConnectionArgs {
  field?: Maybe<ContentfulCaseDistinctEnum>;
}
export interface GroupContentfulCaseConnectionArgs {
  skip?: Maybe<number>;

  limit?: Maybe<number>;

  field?: Maybe<ContentfulCaseGroupEnum>;
}
export interface CreatedAtContentfulCaseArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface UpdatedAtContentfulCaseArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface DistinctContentfulExpertConnectionArgs {
  field?: Maybe<ContentfulExpertDistinctEnum>;
}
export interface GroupContentfulExpertConnectionArgs {
  skip?: Maybe<number>;

  limit?: Maybe<number>;

  field?: Maybe<ContentfulExpertGroupEnum>;
}
export interface CreatedAtContentfulExpertArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface UpdatedAtContentfulExpertArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface DistinctContentfulPageConnectionArgs {
  field?: Maybe<ContentfulPageDistinctEnum>;
}
export interface GroupContentfulPageConnectionArgs {
  skip?: Maybe<number>;

  limit?: Maybe<number>;

  field?: Maybe<ContentfulPageGroupEnum>;
}
export interface CreatedAtContentfulPageArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface UpdatedAtContentfulPageArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface DistinctContentfulPageHeaderDescriptionTextNodeConnectionArgs {
  field?: Maybe<ContentfulPageHeaderDescriptionTextNodeDistinctEnum>;
}
export interface GroupContentfulPageHeaderDescriptionTextNodeConnectionArgs {
  skip?: Maybe<number>;

  limit?: Maybe<number>;

  field?: Maybe<ContentfulPageHeaderDescriptionTextNodeGroupEnum>;
}
export interface DistinctContentfulDictionaryConnectionArgs {
  field?: Maybe<ContentfulDictionaryDistinctEnum>;
}
export interface GroupContentfulDictionaryConnectionArgs {
  skip?: Maybe<number>;

  limit?: Maybe<number>;

  field?: Maybe<ContentfulDictionaryGroupEnum>;
}
export interface CreatedAtContentfulDictionaryArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface UpdatedAtContentfulDictionaryArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface DistinctContentfulServiceSectionConnectionArgs {
  field?: Maybe<ContentfulServiceSectionDistinctEnum>;
}
export interface GroupContentfulServiceSectionConnectionArgs {
  skip?: Maybe<number>;

  limit?: Maybe<number>;

  field?: Maybe<ContentfulServiceSectionGroupEnum>;
}
export interface DistinctContentfulServiceSectionDescriptionTextNodeConnectionArgs {
  field?: Maybe<ContentfulServiceSectionDescriptionTextNodeDistinctEnum>;
}
export interface GroupContentfulServiceSectionDescriptionTextNodeConnectionArgs {
  skip?: Maybe<number>;

  limit?: Maybe<number>;

  field?: Maybe<ContentfulServiceSectionDescriptionTextNodeGroupEnum>;
}
export interface DistinctContentfulStatisticsConnectionArgs {
  field?: Maybe<ContentfulStatisticsDistinctEnum>;
}
export interface GroupContentfulStatisticsConnectionArgs {
  skip?: Maybe<number>;

  limit?: Maybe<number>;

  field?: Maybe<ContentfulStatisticsGroupEnum>;
}
export interface CreatedAtContentfulStatisticsArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface UpdatedAtContentfulStatisticsArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface DistinctContentfulListConnectionArgs {
  field?: Maybe<ContentfulListDistinctEnum>;
}
export interface GroupContentfulListConnectionArgs {
  skip?: Maybe<number>;

  limit?: Maybe<number>;

  field?: Maybe<ContentfulListGroupEnum>;
}
export interface DistinctContentfulAssetConnectionArgs {
  field?: Maybe<ContentfulAssetDistinctEnum>;
}
export interface GroupContentfulAssetConnectionArgs {
  skip?: Maybe<number>;

  limit?: Maybe<number>;

  field?: Maybe<ContentfulAssetGroupEnum>;
}
export interface DistinctMarkdownRemarkConnectionArgs {
  field?: Maybe<MarkdownRemarkDistinctEnum>;
}
export interface GroupMarkdownRemarkConnectionArgs {
  skip?: Maybe<number>;

  limit?: Maybe<number>;

  field?: Maybe<MarkdownRemarkGroupEnum>;
}
export interface DistinctContentfulPluginConnectionArgs {
  field?: Maybe<ContentfulPluginDistinctEnum>;
}
export interface GroupContentfulPluginConnectionArgs {
  skip?: Maybe<number>;

  limit?: Maybe<number>;

  field?: Maybe<ContentfulPluginGroupEnum>;
}
export interface DistinctSitePageConnectionArgs {
  field?: Maybe<SitePageDistinctEnum>;
}
export interface GroupSitePageConnectionArgs {
  skip?: Maybe<number>;

  limit?: Maybe<number>;

  field?: Maybe<SitePageGroupEnum>;
}
export interface PortSiteArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface BuildTimeSiteArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
