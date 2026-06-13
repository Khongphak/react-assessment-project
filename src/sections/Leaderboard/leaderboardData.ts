import iconTrophy1 from "../../assets/icons/leaderboard/icon-trophy-1.svg";
import iconTrophy2 from "../../assets/icons/leaderboard/icon-trophy-2.svg";
import iconTrophy3 from "../../assets/icons/leaderboard/icon-trophy-3.svg";

export type LeaderboardEntry = {
  name: string;
  gain: number;
};

export interface ITopThree {
  icon: string;
  titlePrefix: string;
  titleSuffix: string;
  name: string;
  id: number;
  totalGainPercent: number;
  reward: number;
}

export const mockLeaderboardData: LeaderboardEntry[] = [
  { name: "Alice Johnson", gain: 12.45 },
  { name: "Bob Smith", gain: 8.32 },
  { name: "Carlos Rivera", gain: 23.17 },
  { name: "Diana Chen", gain: 5.89 },
  { name: "Ethan Park", gain: 31.04 },
  { name: "Fatima Al-Hassan", gain: 18.76 },
  { name: "George Miller", gain: 9.53 },
  { name: "Hannah Lee", gain: 14.21 },
  { name: "Jane Lee", gain: 16.01 },
  { name: "Bill Tray", gain: 23.08 },
  { name: "Alex Fanning", gain: 14.21 },
  { name: "Andrew Porter", gain: 5.21 },

];


const rankMeta = [
  { icon: iconTrophy1, reward: 1000 },
  { icon: iconTrophy2, reward: 500  },
  { icon: iconTrophy3, reward: 250  },
];

export const mockTopPerformers: ITopThree[] = [...mockLeaderboardData]
  .sort((a, b) => b.gain - a.gain)
  .slice(0, 3)
  .map((entry, i) => ({
    ...rankMeta[i],
    titlePrefix: 'January',
    titleSuffix: 'Winner',
    name: entry.name,
    id: 5678987654 + i,
    totalGainPercent: entry.gain,
  }));