// @ts-nocheck
import EntryModel, { EntryModelSearchParams } from '@assets/declarations/models/EntryModel';
import { StyleRules, Theme } from '@material-ui/core/styles';

import { CSSProperties } from '@material-ui/core/styles/withStyles';
import { DialogProps } from '@material-ui/core/Dialog';
import { DrawerProps } from '@material-ui/core/Drawer';
import { EntryInterface } from '@lib/models/EntryModel';
import { HeaderStyles } from '@assets/theme/jss/components/layouts/headerStyles';
import { ReactNode, Component, ComponentClass, ComponentType } from 'react';
import { Router } from 'express';
import { Routes } from '@lib/routes';
import { ScrollerStyles } from '@assets/theme/jss/components/scrollerStyles';
import { SearchBoxStyles } from '@assets/theme/jss/components/filterStyles';
import { RouteConfig } from 'lib/routes';

/**
 * Data interfaces
 */
export interface RenderDataProps {
  data: Array<Object>;
  layout: viewLayout;
}

/**
 * Data fetcher
 */
export interface DataFetcher {
  load: () => void;
  next: () => void;
  refresh: () => void;
  search: () => void;
}

export interface DataFetcherState {
  data: Array<Object>;
  filter: DataFetcherFilter;
  inProgress: boolean;
}

export interface DataFetcherFilter {
  pagination: FilterPagination;
  query?: FilterQuery;
}

/**
 * Scroller component interfaces
 * ---
 * 1. Custom props
 * 2: Custom state
 */
export interface ScrollerProps {
  messages?: ScrollerMessages;
  events: ScrollerEvents;
  views: ScrollerViews;
  direction: axisDirection;
  fetcher: ScrollerFetcher;
  pagination: ScrollerPagination;
}

export interface ScrollerState {
  data: Array<Object>;
  loadedPage: number;
  isFetching: boolean;
  hasMore: boolen;
}

export interface ScrollerMessages {
  finished: string;
  empty: string;
  loading?: string;
  error?: string;
}

export interface ScrollerEvents {
  onInitial: () => void;
  onRefresh?: () => void;
  onNext: () => void;
}

export interface ScrollerViews {
  item: (item: any) => any;
  loading: (msg, page) => any;
  finished: (msg) => any;
  empty: (msg) => any;
}

export interface ScrollerPipelines {
  item: (item: any) => any;
}

export interface ScrollerFetcher<T extends Object> {
  data: Array<T>;
  inProgress: boolean;
}

export interface ScrollerPagination<T extends Object> {
  current: number;
  last: number;
  first: number;
  next: number | false;
  prev: number | false;
}

/**
 * Indicator component
 */
export interface IndicatorProps {
  icon: ComponentType<any>,
  message: string,
  isInline: boolean,
}
/**
 * Filter component interfaces
 * ---
 * 1. Custom props
 * 2. Custom state
 * 3. Custom suggestion
 * 4. Custom presets
 */
export interface FilterProps {
  events: FilterEvents;
  presets?: Array<FilterPreset>;
  placeholder?: string;
}

export interface FilterState {
  currentPreset: FilterPreset.value;
  query: FilterQuery;
}

export interface FilterEvents {
  onSubmit: (query: FilterQuery) => void;
}

export interface FilterQuery {
  keyword: string;
  params?: Object;
}

export interface FilterPagination {
  limit: number;
  offset: number;
}

export interface FilterPreset {
  label: string;
  value: any;
  query: FilterQuery;
}

export interface FilterSuggestion {
  value: string;
  label?: string;
}

/**
 * Page interfaces
 * ---
 * 1. Custom props
 */
export interface PageProps {
  theme?: LayoutProps.theme;
  title: string;
  description?: string;
  section?: string;
  icon?: SvgIcon;
}



/**
 * Filter interfaces
 */
export interface EntryFilter {
  params?: EntryModelSearchParams;
  layout?: viewLayout;
}

/**
 * Entry components interfaces
 * ---
 * 1. Entry Preview props
 */
export interface EntryPreviewProps {
  onOpen: (item: any) =>void;
  item: any;
  layout?: viewLayout;
}

/**
 * Entry components interfaces
 * ---
 * 1. Entry Preview props
 */
export interface EntryDialogProps {
  onClose: () => void,
  item: any;
  isOpen: boolean,
}
