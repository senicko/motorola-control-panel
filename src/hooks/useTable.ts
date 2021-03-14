import { useState, useMemo } from 'react';
import { IRadio } from '../types/radioTypes';
import { ITableHeader } from '../types/tableTypes';
import { getKeyValue } from '../util/object';

interface UseTableProps {
  rows: IRadio[];
  headers: ITableHeader[];
}

export const useTable = ({ rows, headers }: UseTableProps) => {
  const [asc, setAsc] = useState(false);
  const [key, setKey] = useState<string | undefined>(undefined);

  const sorted = useMemo(() => {
    // If sort key is set
    if (key)
      // Sort
      return [...rows].sort((a, b) => {
        if (getKeyValue(a, key) > getKeyValue(b, key)) {
          return asc ? -1 : 1;
        } else if (getKeyValue(a, key) < getKeyValue(b, key)) {
          return asc ? 1 : -1;
        }

        return 0;
      });
    // Otherwise return unmodified data
    else return rows;
  }, [asc, key, rows, headers]);

  // Handle change of sorting
  const handleKeyChange = (header: any) => {
    if (header.key === key && !asc) setAsc(!asc);
    else if (header.key === key && asc) {
      setKey(undefined);
      setAsc(false);
    } else {
      setKey(header.key);
      setAsc(false);
    }
  };

  return { sorted, asc, key, handleKeyChange };
};
