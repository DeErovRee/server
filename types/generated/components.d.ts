import type { Schema, Attribute } from '@strapi/strapi';

export interface SeoOpenGraph extends Schema.Component {
  collectionName: 'components_seo_open_graphs';
  info: {
    displayName: 'OpenGraph';
  };
  attributes: {
    title: Attribute.String;
    url: Attribute.String;
    description: Attribute.String;
    siteName: Attribute.String;
    locale: Attribute.String;
    type: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'seo.open-graph': SeoOpenGraph;
    }
  }
}
