import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import {
  selectProductsAll,
  selectProductsAllPage,
} from "../../core/core.selectors";
import { getProductsAllPage } from "../../core/core.actions";
import { Products, UserAuth } from "../../core/core.models";

// datas
import { dataTableHeader } from "../../datas/constants";

// ui
import PaginationTable from "./PaginationTable";

const CustomTable = ({ user }: { user: UserAuth }) => {
  const dispach = useAppDispatch();

  const pageSize = 20;
  const dataTable = useAppSelector(selectProductsAllPage);
  const totalPages = useAppSelector(selectProductsAll).length / pageSize;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispach(
      getProductsAllPage({
        page: currentPage,
        pageSize: pageSize,
        userId: user.user.id,
      })
    );
  }, [dispach, currentPage, pageSize]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col overflow-x-auto">
      <div className="sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b bg-white font-medium dark:border-neutral-500 dark:bg-neutral-600">
                <tr>
                  <th scope="col" className="px-6 py-4"></th>
                  {dataTableHeader.map((item, index) => (
                    <th
                      key={`column_header_${index}`}
                      scope="col"
                      className="px-6 py-4"
                    >
                      {item}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {dataTable.map((row: Products, index: number) => (
                  <tr
                    key={`row_table_${index}`}
                    className={`border-b bg-${
                      index % 2 ? "neutral-100" : "white"
                    } dark:border-neutral-500 dark:bg-neutral-700`}
                  >
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      {index}
                    </td>
                    <td className="whitespace-nowrap  text-zinc-900 text-xl  px-6 py-4">
                      {row.name}
                    </td>
                    <td className="whitespace-nowrap  text-zinc-900 text-xl px-6 py-4">
                      {row.category}
                    </td>
                    <td className="whitespace-nowrap  text-zinc-900 text-xl  px-6 py-4">
                      {row.price}
                    </td>
                    <td className="whitespace-nowrap  text-zinc-900 text-xl  px-6 py-4">
                      {row.quantity}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <PaginationTable
              totalPages={totalPages < 1 ? 1 : totalPages}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomTable;
