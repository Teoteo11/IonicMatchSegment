import { MatchService } from "./../../match.service";
import { Component, OnInit } from "@angular/core";
import { Match } from "src/interfaces/match";

@Component({
  selector: "app-match",
  templateUrl: "./match.component.html",
  styleUrls: ["./match.component.scss"]
})
export class MatchComponent implements OnInit {
  constructor(public matchService: MatchService) {}

  public matches: Match[] = [];

  async ngOnInit() {
    this.matches = await this.matchService.getMatches();
  }
}
