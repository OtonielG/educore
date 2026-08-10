"use client";

import { useMemo, useState } from "react";

type UsePaginatedSearchOptions<T> = {
  items: T[];
  itemsPerPage: number;
  searchQuery: string;
  matchesQuery: (item: T, normalizedQuery: string) => boolean;
};

export function usePaginatedSearch<T>({
  items,
  itemsPerPage,
  searchQuery,
  matchesQuery,
}: UsePaginatedSearchOptions<T>) {
  const [pagination, setPagination] = useState({
    currentPage: 1,
    searchQuery: "",
  });
  const normalizedQuery = searchQuery.toLowerCase();
  const currentPage =
    pagination.searchQuery === searchQuery ? pagination.currentPage : 1;
  const filteredItems = useMemo(() => {
    if (!normalizedQuery) {
      return items;
    }

    return items.filter((item) => matchesQuery(item, normalizedQuery));
  }, [items, matchesQuery, normalizedQuery]);
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const safeCurrentPage = Math.min(currentPage, totalPages);
  const startIndex = (safeCurrentPage - 1) * itemsPerPage;
  const visibleItems = filteredItems.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  function handlePageChange(page: number) {
    setPagination({
      currentPage: Math.min(Math.max(page, 1), totalPages),
      searchQuery,
    });
  }

  return {
    filteredItems,
    visibleItems,
    currentPage: safeCurrentPage,
    totalPages,
    handlePageChange,
  };
}
