import { Component, OnInit } from "@angular/core";
import { Item } from "../item.model";
import { ActivatedRoute, Params } from "@angular/router";
import { ItemService } from "../item.service";

@Component({
  selector: "app-search-page-item-detailes",
  templateUrl: "./search-page-item-detailes.component.html",
  styleUrls: ["./search-page-item-detailes.component.css"]
})
export class SearchPageItemDetailesComponent implements OnInit {
  selectedItem: Item;
  id: number;

  constructor(
    private itemService: ItemService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"];
      this.selectedItem = this.itemService.getItem(this.id);
    });
  }
}
