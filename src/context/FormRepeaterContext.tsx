import { createContext, useState } from 'react';
// import { Properties } from '../types/common';

export enum Fields {
  item_name = 'Item Name',
  cost_name = 'Cost',
  quantity_name = 'Quantity',
  price_name = 'Price',
}

// let layer: { [key in keyof typeof MyEnum]: any };

type Item = {
  [key in keyof typeof Fields]: string;
};

interface ContextProps {
  formState: Item[];
  addCard: (newItem: Item) => void;
  deleteCard: (index: number) => void;
}

export const formItem: Item = {
  item_name: '',
  cost_name: '',
  quantity_name: '',
  price_name: '',
};

export const FormRepeaterContext = createContext<ContextProps>({
  formState: [
    formItem,

    //   [{​​​​​​​​​ costName: 'value' }​​​​​​​​​,
    // {​​​​​​​​​ price: 'value' }​​​​​​​​​,
    // {​​​​​​​​​ next: 'value' }​​​​​​​​​,
    // ],
    // [{​​​​​​​​​​ costName: 'value' }​​​​​​​​​​,
    // {​​​​​​​​​​ price: 'value' }​​​​​​​​​​,
    // {​​​​​​​​​​ next: 'value' }​​​​​​​​​​,
    // ]
    // ]
  ],
  addCard: () => null,
  deleteCard: () => null,
});

export const FormRepeaterProvider: React.FC = ({ children }) => {
  const [state, setState] = useState<Item[]>([formItem]);

  const addCard = (newItem: Item) => {
    setState(i => [...i, newItem]);
  };

  const deleteCard = (index: number) => {
    setState(state.filter((item, i) => i !== index));
  };

  return (
    <FormRepeaterContext.Provider value={{ formState: state, addCard, deleteCard }}>
      {children}
    </FormRepeaterContext.Provider>
  );
};
