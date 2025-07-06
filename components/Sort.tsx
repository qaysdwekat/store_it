'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { sortTypes } from '@/constants';
import { usePathname, useRouter } from 'next/navigation';

const Sort = () => {
  const router = useRouter();

  const path = usePathname();

  const handleOnChange = (value: string) => {
    router.push(`${path}?sort=${value}`);
  };
  return (
    <div>
      <Select onValueChange={handleOnChange} defaultValue={sortTypes[0].value}>
        <SelectTrigger className="sort-select">
          <SelectValue placeholder={sortTypes[0].value} />
        </SelectTrigger>
        <SelectContent className="sort-select-content">
          {sortTypes.map((type) => (
            <SelectItem
              key={type.label}
              className="shad-select-item"
              value={type.value}
            >
              {type.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default Sort;
