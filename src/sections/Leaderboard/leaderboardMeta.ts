import iconTrophy1 from "../../assets/icons/leaderboard/icon-trophy-1.svg";
import iconTrophy2 from "../../assets/icons/leaderboard/icon-trophy-2.svg";
import iconTrophy3 from "../../assets/icons/leaderboard/icon-trophy-3.svg";

export interface ITopThree {
  icon: string;
  titlePrefix: string;
  titleSuffix: string;
  name: string;
  id: number;
  totalGainPercent: number;
  reward: number;
}

export const rankMeta = [
  { icon: iconTrophy1, reward: 1000 },
  { icon: iconTrophy2, reward: 500 },
  { icon: iconTrophy3, reward: 250 },
];
