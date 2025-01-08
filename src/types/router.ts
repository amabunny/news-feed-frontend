import { LazyExoticComponent, ReactNode } from 'react';

export interface RouteParams {
  path?: string;
  Component: LazyExoticComponent<() => ReactNode>;
  index?: boolean;
}
