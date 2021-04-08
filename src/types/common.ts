export type Properties = Record<string, any>;

export enum Fields {
  item_name = 'Item Name',
  cost_name = 'Cost',
  quantity_name = 'Quantity',
  price_name = 'Price',
}

// let layer: { [key in keyof typeof MyEnum]: any }; exemple for me!!!!!!!!
export type Item = {
  [key in keyof typeof Fields]: string;
};

export interface RouteProps {
  exact?: boolean;
  path: string;
  text?: string;
  component: any;
}
