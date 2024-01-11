import React from "react";

type PaginationTableProps = {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

const PaginationTable = ({
  totalPages,
  currentPage,
  onPageChange,
}: PaginationTableProps) => {
  const generatePaginationItems = () => {
    const items = [];
    for (let i = 1; i <= totalPages; i++) {
      items.push(
        <li key={i} aria-current={i === currentPage ? "page" : undefined}>
          <a
            className={`relative block rounded bg-transparent px-3 py-1.5 text-lg ${
              i === currentPage
                ? "font-medium text-primary-700 bg-primary-100"
                : "text-neutral-600 hover:bg-orange-300 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
            } transition-all duration-300`}
            href={`#!`}
            onClick={() => onPageChange(i)}
          >
            {i}
            {i === currentPage && (
              <span className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]">
                (current)
              </span>
            )}
          </a>
        </li>
      );
    }
    return items;
  };

  return (
    <nav aria-label="Page navigation example">
      <ul className="list-style-none pt-2 justify-end flex">
        <li>
          <button
            className={`relative block rounded bg-transparent px-3 py-1.5 text-lg text-neutral-600 transition-all duration-300 ${
              currentPage === 1 ? "" : "hover:bg-orange-300"
            } dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white`}
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
        </li>
        {generatePaginationItems()}
        <li>
          <button
            className={`relative block rounded bg-transparent px-3 py-1.5 text-lg text-neutral-600 transition-all duration-300 ${
              currentPage === totalPages ? "" : "hover:bg-orange-300"
            } dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white`}
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default PaginationTable;
