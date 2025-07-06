'use client';

import { getFiles } from '@/lib/actions/file.actions';
import Image from 'next/image';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Thumbnail from './Thumbnail';
import FormattedDateTime from './FormattedDateTime';
import { Models } from 'node-appwrite';
import { useDebounce } from 'use-debounce';

const Search = () => {
  const [query, setQuery] = useState('');
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get('query') || '';
  const [results, setResults] = useState<Models.Document[]>([]);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const path = usePathname();
  const [debouncedQuery] = useDebounce(query, 300);
  useEffect(() => {
    if (!searchQuery) {
      setQuery('');
    }
  }, [searchQuery]);

  useEffect(() => {
    const fetchFiles = async () => {
      if (debouncedQuery.length === 0) {
        setResults([]);
        setOpen(false);
        return router.push(path.replace(searchParams.toString(), ''));
      }
      const files = await getFiles({
        searchText: debouncedQuery,
        types: [],
      });
      setResults(files.documents);
      setOpen(true);
    };
    fetchFiles();
  }, [debouncedQuery]);

  const handleOnClickItem = (file: Models.Document) => {
    setOpen(false);
    setResults([]);
    router.push(
      `/${file.type === 'video' || file.type === 'audio' ? 'media' : file.type + 's'}?query=${query}`,
    );
  };
  return (
    <div className="search">
      <div className="search-input-wrapper">
        <Image
          src="/assets/icons/search.svg"
          alt="search"
          width={24}
          height={24}
        />
        <input
          type="text"
          placeholder="Search ..."
          value={query}
          className="search-input"
          onChange={(e) => setQuery(e.target.value)}
        />
        {open && (
          <div className="search-result">
            {results.length > 0 ? (
              results.map((file) => (
                <li
                  className="flex items-center justify-between"
                  key={file.$id}
                  onClick={() => handleOnClickItem(file)}
                >
                  <div className="flex w-full cursor-pointer items-center gap-4">
                    <Thumbnail
                      type={file.type}
                      extension={file.extension}
                      url={file.url}
                      className="size-9 min-w-9 shrink-0"
                    />
                    <p className="subtitle-2 w-full truncate text-light-100">
                      {file.name}
                    </p>
                    <div className="ml-4 shrink-0">
                      <FormattedDateTime
                        date={file.$createdAt}
                        className="caption whitespace-nowrap text-light-200"
                      />
                    </div>
                  </div>
                </li>
              ))
            ) : (
              <p className="empty-result">No files found</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
