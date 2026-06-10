import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
  type SortingState,
} from "@tanstack/react-table";
import { useState } from "react";
import styles from "./LeaderboardTable.module.css";

export type LeaderboardEntry = {
  name: string;
  gain: number;
};

export const mockLeaderboardData: LeaderboardEntry[] = [
  { name: "Alice Johnson", gain: 12.45 },
  { name: "Bob Smith", gain: 8.32 },
  { name: "Carlos Rivera", gain: 23.17 },
  { name: "Diana Chen", gain: 5.89 },
  { name: "Ethan Park", gain: 31.04 },
  { name: "Fatima Al-Hassan", gain: 18.76 },
  { name: "George Miller", gain: 9.53 },
  { name: "Hannah Lee", gain: 14.21 },
];

const columnHelper = createColumnHelper<LeaderboardEntry>();

const columns = [
  columnHelper.accessor("name", {
    header: "Name",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("gain", {
    header: "Gain",
    cell: (info) => `${info.getValue().toFixed(2)}%`,
  }),
];

type LeaderboardTableProps = {
  data: LeaderboardEntry[];
};

export default function LeaderboardTable({ data }: LeaderboardTableProps) {
  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable({
    data,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        <thead>
          {table.getHeaderGroups().map((group) => (
            <tr key={group.id}>
              {group.headers.map((header) => (
                <th
                  key={header.id}
                  className={styles.th}
                  onClick={header.column.getToggleSortingHandler()}
                  style={{ cursor: header.column.getCanSort() ? "pointer" : "default" }}
                >
                  {flexRender(header.column.columnDef.header, header.getContext())}
                  {{
                    asc: " ↑",
                    desc: " ↓",
                  }[header.column.getIsSorted() as string] ?? null}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className={styles.tr}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className={styles.td}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
