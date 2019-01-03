import { Component, OnInit, Input } from "@angular/core";
import { Item } from "../item.model";
import { ItemService } from "../item.service";

@Component({
  selector: "app-search-page-item-detailes",
  templateUrl: "./search-page-item-detailes.component.html",
  styleUrls: ["./search-page-item-detailes.component.css"]
})
export class SearchPageItemDetailesComponent implements OnInit {
  @Input() selectedItem: Item;

  constructor(private itemService: ItemService) {}

  ngOnInit() {}
}
