import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ItemService } from "./item.service";

@Component({
  selector: "app-search-page",
  templateUrl: "./search-page.component.html",
  styleUrls: ["./search-page.component.css"]
})
export class SearchPageComponent implements OnInit {
  public query: string;
  constructor(private router: Router, private itemService: ItemService) {}

  ngOnInit() {}
  searchItems(query: string) {
    this.itemService.getResults(query);
    this.router.navigate(["results"]);
  }
}
