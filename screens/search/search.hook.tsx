import {useState} from 'react';
import { ISearchProps } from './Isearch.props';


export const useSearch = (): ISearchProps => {
  const [showFilter, setShowFilter] = useState(false);
  return {
    showFilter,
    setShowFilter,
  };
};