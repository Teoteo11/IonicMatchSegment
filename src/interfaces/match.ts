import { TeamResult } from './teamResult';
import { Weather } from './weather';

export interface Match {
  venue: string;
  location: string;
  status: string;
  time: string;
  fifa_id: string;
  weather: Weather;
  attendance: string;
  officials: string[];
  stage_name: string;
  home_team_country: string;
  away_team_country: string;
  datetime: string;
  winner: string;
  winner_code: string;
  home_team: TeamResult;
  away_team: TeamResult;
}
