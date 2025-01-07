/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_NEWS_FEED_ENDPOINT_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
