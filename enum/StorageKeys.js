import { EnumCollection, EnumItem } from './Enum';

const StorageKeys = new EnumCollection({
  Theme: new EnumItem({
    value: 'current-theme',
    info: 'the currently selected theme'
  }),

  // SearchHistory: new EnumItem({
  //   value: 'search-history',
  //   info: 'locally saved search queries'
  // }),

  // SearchCache: new EnumItem({
  //   value: 'search-cache',
  //   info: 'locally saved searches from a database'
  // }),

  // RavenData: new EnumItem({
  //   value: 'data',
  //   info: 'misc data related to raven'
  // }),

  // SearchCacheDomain: new EnumCollection({
  //   Primary: new EnumItem({ value: 'primary' }),
  // }),

  // SearchHistoryDomain: new EnumCollection({
  //   Primary: new EnumItem({ value: 'primary' }),
  // }),
}, {
  valuePrefix: 'nilhemoth:'
})

export default StorageKeys;