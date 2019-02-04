declare module '*.scss';
declare module '*.css';
declare module '*.svg';
declare module '*.png';
declare module '*.jpg';

// package.json
declare module '*/package.json' {
  export const version: string;
  export const author: string;
}

declare const graphql: (query: TemplateStringsArray) => void;
