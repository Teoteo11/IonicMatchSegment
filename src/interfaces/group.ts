import { Team } from "./team";

export interface GroupResult {
  id: number;
  letter: string;
  ordered_teams: OrderedTeam[];
}

export interface OrderedTeam {
  team: Team;
  wins: number;
  draws: number;
  losses: number;
  games_played: number;
  points: number;
  goals_for: number;
  goals_against: number;
  goal_differential: number;
  country: string;
}
