import { createContext, useState } from 'react';
import { Item } from '../types/common';

interface ContextProps {
  state: Item[];
  add: (newItem: Item) => void;
  remove: (index: number) => void;
}

export const formItem: Item = {
  item_name: '',
  cost_name: '',
  quantity_name: '',
  price_name: '',
};

export const FormRepeaterContext = createContext<ContextProps>({
  state: [formItem],
  add: () => null,
  remove: () => null,
});

export const FormRepeaterProvider: React.FC = ({ children }) => {
  const [state, setState] = useState<Item[]>([formItem]);

  const add = (newItem: Item) => {
    setState(i => [...i, newItem]);
  };

  const remove = (index: number) => {
    setState(state.filter((item, i) => i !== index));
  };

  return (
    <FormRepeaterContext.Provider value={{ state, add, remove }}>
      {children}
    </FormRepeaterContext.Provider>
  );
};
