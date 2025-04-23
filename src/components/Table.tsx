'use client';

import React, { useState, useMemo } from 'react';
import { InventoryItem } from '@/features/inventory/inventorySlice';


export type Column<T> = {
  header: string;
  accessor: keyof T;
  sortable?: boolean;
  filterable?: boolean;
};
interface TableProps<T> {
  data: T[];
  columns: Column<T>[];
  pageSize?: number;
}

const Table = <T extends object>({ data, columns, pageSize = 10 }: TableProps<T>) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState<{ key: keyof T; direction: 'asc' | 'desc' } | null>(null);
  const [filters, setFilters] = useState<{ [key: string]: string }>({});

  const handleSort = (key: keyof T) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const handleFilterChange = (key: keyof T, value: string) => {
    setFilters((prev) => ({ ...prev, [key as string]: value }));
    setCurrentPage(1);
  };

  const filteredData = useMemo(() => {
    return data.filter((row) =>
      Object.entries(filters).every(([key, value]) =>
        row[key as keyof T]
          ?.toString()
          .toLowerCase()
          .includes(value.toLowerCase())
      )
    );
  }, [data, filters]);

  const sortedData = useMemo(() => {
    if (!sortConfig) return filteredData;
    return [...filteredData].sort((a, b) => {
      const aVal = a[sortConfig.key];
      const bVal = b[sortConfig.key];
      if (aVal && bVal) {
        if (typeof aVal === 'string' && typeof bVal === 'string') {
          return sortConfig.direction === 'asc'
            ? aVal.localeCompare(bVal)
            : bVal.localeCompare(aVal);
        }
        if (typeof aVal === 'number' && typeof bVal === 'number') {
          return sortConfig.direction === 'asc' ? aVal - bVal : bVal - aVal;
        }
      }
      return 0;
    });
  }, [filteredData, sortConfig]);

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return sortedData.slice(start, start + pageSize);
  }, [sortedData, currentPage, pageSize]);

  const totalPages = Math.ceil(sortedData.length / pageSize);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-gray-800 border rounded-lg">
        <thead className="bg-gray-800 text-white">
          <tr>
            {columns.map((col) => (
              <th
                key={col.header}
                className="p-3 text-left cursor-pointer"
                onClick={() => handleSort(col.accessor)}
              >
                {col.header}
                {sortConfig?.key === col.accessor && (sortConfig.direction === 'asc' ? ' 🔼' : ' 🔽')}
                <div>
                  <input
                    type="text"
                    placeholder="Filter..."
                    className="mt-1 p-1 w-full border rounded"
                    value={filters[col.accessor as string] || ''}
                    onChange={(e) => handleFilterChange(col.accessor, e.target.value)}
                  />
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((row, idx) => (
            <tr key={idx} className="border-t hover:bg-gray-50">
              {columns.map((col) => (
                <td key={col.header} className="p-3">
                  {String(row[col.accessor])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Table;
