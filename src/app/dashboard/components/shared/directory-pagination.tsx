type DirectoryPaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export default function DirectoryPagination({
  currentPage,
  totalPages,
  onPageChange,
}: DirectoryPaginationProps) {
  return (
    <div className="mt-5 flex items-center justify-between gap-3">
      <button
        type="button"
        disabled={currentPage <= 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="rounded-lg bg-gray-100 px-3 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-40 sm:px-4"
      >
        Anterior
      </button>

      <div className="hidden items-center gap-2 sm:flex">
        {Array.from({ length: totalPages }, (_, index) => {
          const page = index + 1;

          return (
            <button
              key={page}
              type="button"
              onClick={() => onPageChange(page)}
              aria-label={`Ir a la página ${page}`}
              aria-current={currentPage === page ? "page" : undefined}
              className={`flex size-8 items-center justify-center rounded-lg text-sm ${
                currentPage === page
                  ? "bg-dashboard-accent text-dashboard-surface"
                  : "bg-gray-100"
              }`}
            >
              {page}
            </button>
          );
        })}
      </div>

      <button
        type="button"
        disabled={currentPage >= totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="rounded-lg bg-gray-100 px-3 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-40 sm:px-4"
      >
        Siguiente
      </button>
    </div>
  );
}
