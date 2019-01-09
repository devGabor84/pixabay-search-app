import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { Item } from "./item.model";
import { ItemService } from "./item.service";

@Component({
  selector: "app-search-page",
  templateUrl: "./search-page.component.html",
  styleUrls: ["./search-page.component.css"]
})
export class SearchPageComponent implements OnInit {
  constructor(private router: Router, private itemService: ItemService) {}

  ngOnInit() {}
  searchItems(query: string) {
    this.itemService.getResults(query);
    this.router.navigate(["results"]);
  }
}
