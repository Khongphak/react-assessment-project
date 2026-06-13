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
import { mockTopPerformers, type LeaderboardEntry } from "./leaderboardData";
import JoinNowButton from "../../components/ui/JoinNowButton";

function ordinal(idx: number): string {
  const rules = new Intl.PluralRules("en", { type: "ordinal" });
  const suffixes: Record<string, string> = {
    one: "st",
    two: "nd",
    few: "rd",
    other: "th",
  };
  return suffixes[rules.select(idx)];
}

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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleClick = () => {
    setIsSubmitting(true);
    setTimeout(() => setIsSubmitting(false), 2000);
  };

  const table = useReactTable({
    data,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div className={styles.leaderBoardContainer}>
      <h1 className={styles.title}>Sed fringilla mauris sit</h1>
      <div className={styles.leaderContent}>
        <div className={styles.cardContainer}>
          {mockTopPerformers.map((item, idx) => (
            <div className={styles.cardItemContainer} key={item.name}>
              <img src={item.icon} alt={item.name} />

              <div className={styles.cardItemDetail}>
                <span>
                  {item.titlePrefix} {idx + 1}
                  <sup className={styles.ordinalStyle}>
                    {ordinal(idx + 1)}
                  </sup>{" "}
                  {item.titleSuffix}
                </span>
                <span>{item.name}</span>
                <span>{item.id}</span>
                <span>
                  <span className={styles.totalStyle}>Total Gain Of</span>{" "}
                  {item.totalGainPercent}%
                </span>
                <span className={styles.rewardBadge}>${item.reward}</span>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.tableContentwrapper}>
          <h2>Aliquam lorem ant</h2>
          <table className={styles.table}>
            <thead>
              {table.getHeaderGroups().map((group) => (
                <tr key={group.id}>
                  {group.headers.map((header) => (
                    <th
                      key={header.id}
                      className={styles.th}
                      onClick={header.column.getToggleSortingHandler()}
                      style={{
                        cursor: header.column.getCanSort()
                          ? "pointer"
                          : "default",
                      }}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
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
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <JoinNowButton
        className={styles.joinButton}
        isShowTerm={true}
        isSubmitting={isSubmitting}
        onClick={handleClick}
        type="button"
      />
    </div>
  );
}
