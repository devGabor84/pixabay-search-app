import { Component, OnInit } from "@angular/core";
import { Item } from "./item.model";
import { ItemService } from "./item.service";

@Component({
  selector: "app-search-page",
  templateUrl: "./search-page.component.html",
  styleUrls: ["./search-page.component.css"],
  providers: [ItemService]
})
export class SearchPageComponent implements OnInit {
  items: Item[];
  constructor(private itemService: ItemService) {}

  ngOnInit() {
    this.items = this.itemService.getItems();
  }
}
