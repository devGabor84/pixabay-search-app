import { Component, OnInit } from "@angular/core";
import { ItemService } from "../item.service";

@Component({
  selector: "app-search-page-results",
  templateUrl: "./search-page-results.component.html",
  styleUrls: ["./search-page-results.component.css"]
})
export class SearchPageResultsComponent implements OnInit {
  items: any;
  constructor(private itemService: ItemService) {}

  ngOnInit() {
    this.items = this.itemService.items;
    this.itemService.itemsChanged.subscribe((items: any) => {
      this.items = items;
    });
  }
}
