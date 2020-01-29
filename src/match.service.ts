import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Match } from "src/interfaces/match";
import { GroupResult } from "src/interfaces/group";

@Injectable({
  providedIn: "root"
})
export class MatchService {
  public apiMatches = "https://worldcup.sfg.io/matches";
  public apiRanking = "https://worldcup.sfg.io/teams/group_results";

  constructor(private httpClient: HttpClient) {}

  public getMatches(): Promise<Match[]> {
    return this.httpClient.get<Match[]>(`${this.apiMatches}`).toPromise();
  }

  public getRanking(): Promise<GroupResult[]> {
    return this.httpClient.get<GroupResult[]>(`${this.apiRanking}`).toPromise();
  }
}
