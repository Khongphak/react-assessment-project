import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
  type SortingState,
} from "@tanstack/react-table";
import { useState } from "react";
import type { LeaderboardEntry } from "../../api/leaderboard";
import JoinNowButton from "../../components/ui/JoinNowButton";
import { type ITopThree, rankMeta } from "./leaderboardMeta";
import { useLeaderboard } from "./useLeaderboard";
import styles from "./LeaderboardTable.module.css";

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

export default function LeaderboardTable() {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { data = [], isLoading, isError } = useLeaderboard();

  const topPerformers: ITopThree[] = data.slice(0, 3).map((entry, i) => ({
    ...rankMeta[i],
    titlePrefix: "January",
    titleSuffix: "Winner",
    name: entry.name,
    id: entry.id,
    totalGainPercent: entry.gain,
  }));

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
          {isLoading && <p>Loading...</p>}
          {isError && <p>Failed to load leaderboard.</p>}
          {!isLoading && !isError && topPerformers.map((item, idx) => (
            <div className={styles.cardItemContainer} key={item.name}>
              <img src={item.icon} alt={item.name} className={styles.imageTrophy} />
              <div className={styles.cardItemDetail}>
                <span>
                  {item.titlePrefix} {idx + 1}
                  <sup className={styles.ordinalStyle}>{ordinal(idx + 1)}</sup>{" "}
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
          {isLoading && <p>Loading...</p>}
          {isError && <p>Failed to load leaderboard.</p>}
          {!isLoading && !isError && (
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
                        {{ asc: " ↑", desc: " ↓" }[header.column.getIsSorted() as string] ?? null}
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
          )}
          <p className={styles.tableDesc}>Nam quam nunc, blandit vel, luctus pulvinar</p>
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
