import apiClient from "./client";

export interface LeaderboardEntry {
  id: number;
  name: string;
  gain: number;
}

export async function getLeaderboard(): Promise<LeaderboardEntry[]> {
  const response = await apiClient.get<LeaderboardEntry[]>("/leaderboard");
  return response.data;
}
