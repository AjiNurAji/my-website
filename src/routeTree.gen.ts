/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as guestRouteImport } from './routes/__guest/route'
import { Route as guestIndexImport } from './routes/__guest/index'

// Create Virtual Routes

const errors500LazyImport = createFileRoute('/(errors)/500')()
const guestProjectsIndexLazyImport = createFileRoute('/__guest/projects/')()
const guestContactIndexLazyImport = createFileRoute('/__guest/contact/')()
const guestAboutIndexLazyImport = createFileRoute('/__guest/about/')()

// Create/Update Routes

const guestRouteRoute = guestRouteImport.update({
  id: '/__guest',
  getParentRoute: () => rootRoute,
} as any)

const guestIndexRoute = guestIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => guestRouteRoute,
} as any)

const errors500LazyRoute = errors500LazyImport
  .update({
    id: '/(errors)/500',
    path: '/500',
    getParentRoute: () => rootRoute,
  } as any)
  .lazy(() => import('./routes/(errors)/500.lazy').then((d) => d.Route))

const guestProjectsIndexLazyRoute = guestProjectsIndexLazyImport
  .update({
    id: '/projects/',
    path: '/projects/',
    getParentRoute: () => guestRouteRoute,
  } as any)
  .lazy(() =>
    import('./routes/__guest/projects/index.lazy').then((d) => d.Route),
  )

const guestContactIndexLazyRoute = guestContactIndexLazyImport
  .update({
    id: '/contact/',
    path: '/contact/',
    getParentRoute: () => guestRouteRoute,
  } as any)
  .lazy(() =>
    import('./routes/__guest/contact/index.lazy').then((d) => d.Route),
  )

const guestAboutIndexLazyRoute = guestAboutIndexLazyImport
  .update({
    id: '/about/',
    path: '/about/',
    getParentRoute: () => guestRouteRoute,
  } as any)
  .lazy(() => import('./routes/__guest/about/index.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/__guest': {
      id: '/__guest'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof guestRouteImport
      parentRoute: typeof rootRoute
    }
    '/(errors)/500': {
      id: '/(errors)/500'
      path: '/500'
      fullPath: '/500'
      preLoaderRoute: typeof errors500LazyImport
      parentRoute: typeof rootRoute
    }
    '/__guest/': {
      id: '/__guest/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof guestIndexImport
      parentRoute: typeof guestRouteImport
    }
    '/__guest/about/': {
      id: '/__guest/about/'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof guestAboutIndexLazyImport
      parentRoute: typeof guestRouteImport
    }
    '/__guest/contact/': {
      id: '/__guest/contact/'
      path: '/contact'
      fullPath: '/contact'
      preLoaderRoute: typeof guestContactIndexLazyImport
      parentRoute: typeof guestRouteImport
    }
    '/__guest/projects/': {
      id: '/__guest/projects/'
      path: '/projects'
      fullPath: '/projects'
      preLoaderRoute: typeof guestProjectsIndexLazyImport
      parentRoute: typeof guestRouteImport
    }
  }
}

// Create and export the route tree

interface guestRouteRouteChildren {
  guestIndexRoute: typeof guestIndexRoute
  guestAboutIndexLazyRoute: typeof guestAboutIndexLazyRoute
  guestContactIndexLazyRoute: typeof guestContactIndexLazyRoute
  guestProjectsIndexLazyRoute: typeof guestProjectsIndexLazyRoute
}

const guestRouteRouteChildren: guestRouteRouteChildren = {
  guestIndexRoute: guestIndexRoute,
  guestAboutIndexLazyRoute: guestAboutIndexLazyRoute,
  guestContactIndexLazyRoute: guestContactIndexLazyRoute,
  guestProjectsIndexLazyRoute: guestProjectsIndexLazyRoute,
}

const guestRouteRouteWithChildren = guestRouteRoute._addFileChildren(
  guestRouteRouteChildren,
)

export interface FileRoutesByFullPath {
  '': typeof guestRouteRouteWithChildren
  '/500': typeof errors500LazyRoute
  '/': typeof guestIndexRoute
  '/about': typeof guestAboutIndexLazyRoute
  '/contact': typeof guestContactIndexLazyRoute
  '/projects': typeof guestProjectsIndexLazyRoute
}

export interface FileRoutesByTo {
  '/500': typeof errors500LazyRoute
  '/': typeof guestIndexRoute
  '/about': typeof guestAboutIndexLazyRoute
  '/contact': typeof guestContactIndexLazyRoute
  '/projects': typeof guestProjectsIndexLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/__guest': typeof guestRouteRouteWithChildren
  '/(errors)/500': typeof errors500LazyRoute
  '/__guest/': typeof guestIndexRoute
  '/__guest/about/': typeof guestAboutIndexLazyRoute
  '/__guest/contact/': typeof guestContactIndexLazyRoute
  '/__guest/projects/': typeof guestProjectsIndexLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '' | '/500' | '/' | '/about' | '/contact' | '/projects'
  fileRoutesByTo: FileRoutesByTo
  to: '/500' | '/' | '/about' | '/contact' | '/projects'
  id:
    | '__root__'
    | '/__guest'
    | '/(errors)/500'
    | '/__guest/'
    | '/__guest/about/'
    | '/__guest/contact/'
    | '/__guest/projects/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  guestRouteRoute: typeof guestRouteRouteWithChildren
  errors500LazyRoute: typeof errors500LazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  guestRouteRoute: guestRouteRouteWithChildren,
  errors500LazyRoute: errors500LazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/__guest",
        "/(errors)/500"
      ]
    },
    "/__guest": {
      "filePath": "__guest/route.tsx",
      "children": [
        "/__guest/",
        "/__guest/about/",
        "/__guest/contact/",
        "/__guest/projects/"
      ]
    },
    "/(errors)/500": {
      "filePath": "(errors)/500.lazy.tsx"
    },
    "/__guest/": {
      "filePath": "__guest/index.tsx",
      "parent": "/__guest"
    },
    "/__guest/about/": {
      "filePath": "__guest/about/index.lazy.tsx",
      "parent": "/__guest"
    },
    "/__guest/contact/": {
      "filePath": "__guest/contact/index.lazy.tsx",
      "parent": "/__guest"
    },
    "/__guest/projects/": {
      "filePath": "__guest/projects/index.lazy.tsx",
      "parent": "/__guest"
    }
  }
}
ROUTE_MANIFEST_END */
