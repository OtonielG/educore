"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { Plus, Search } from "lucide-react";

type SearchFormProps = {
  onSearch: (query: string) => void;
};

function SearchForm({ onSearch }: SearchFormProps) {
  const [query, setQuery] = useState("");
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    debounceRef.current = setTimeout(() => {
      onSearch(query.trim());
    }, 500);

    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, [onSearch, query]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    onSearch(query.trim());
  }

  return (
    <form
      className="flex w-full min-w-0 max-w-md flex-1 items-center rounded-full border-2 border-white bg-gray-50 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.2),inset_0_3px_8px_rgba(0,0,0,0.25)]"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        className="min-w-0 flex-1 bg-transparent px-5 py-2 outline-none"
      />

      <button type="submit" className="shrink-0 px-4" aria-label="Buscar">
        <Search className="size-5" />
      </button>
    </form>
  );
}

type StudentsToolbarProps = {
  onAdd: () => void;
  onSearch: (query: string) => void;
};

export default function StudentsToolbar({
  onAdd,
  onSearch,
}: StudentsToolbarProps) {
  return (
    <div className="bg-dashboard-surface w-full flex flex-col justify-between items-start lg:items-center lg:flex-row gap-2 lg:gap-16">
      <h2 className="shrink-0 font-bespoke font-semibold">
        Todos Los Estudiantes
      </h2>

      <div className="flex w-full min-w-0 flex-col gap-3 lg:w-auto lg:flex-1 lg:flex-row lg:justify-end">
        <SearchForm onSearch={onSearch} />

        <div className="flex shrink-0 items-center gap-3">
          <button
            type="button"
            className="flex size-9 items-center justify-center rounded-full text-dashboard-surface/80 bg-dashboard-accent cursor-pointer hover:bg-dashboard-accent/80"
            aria-label="Agregar estudiante"
            onClick={onAdd}
          >
            <Plus className="size-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
