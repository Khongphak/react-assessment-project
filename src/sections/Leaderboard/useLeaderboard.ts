import { useQuery } from "@tanstack/react-query";
import { getLeaderboard } from "../../api/leaderboard";

export function useLeaderboard() {
  return useQuery({
    queryKey: ["leaderboard"],
    queryFn: getLeaderboard,
  });
}
