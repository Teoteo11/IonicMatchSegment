import { Component, OnInit } from "@angular/core";
import { MatchService } from "src/match.service";
import { GroupResult } from "src/interfaces/group";

@Component({
  selector: "app-ranking",
  templateUrl: "./ranking.component.html",
  styleUrls: ["./ranking.component.scss"]
})
export class RankingComponent implements OnInit {
  constructor(public matchservice: MatchService) {}
  public groups: GroupResult[] = [];

  async ngOnInit() {
    this.groups = await this.matchservice.getRanking();
  }
}
