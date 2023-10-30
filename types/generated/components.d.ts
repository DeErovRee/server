import type { Schema, Attribute } from '@strapi/strapi';

export interface PricePriceList extends Schema.Component {
  collectionName: 'components_price_price_lists';
  info: {
    displayName: 'PriceList';
  };
  attributes: {
    Work: Attribute.String;
    LegalEntityPrice: Attribute.BigInteger;
    IndividualEntityPrice: Attribute.BigInteger;
    DocsReceived: Attribute.Text;
  };
}

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
      'price.price-list': PricePriceList;
      'seo.open-graph': SeoOpenGraph;
    }
  }
}
