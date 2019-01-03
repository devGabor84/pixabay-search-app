import { Component, OnInit, Input } from "@angular/core";
import { Item } from "../item.model";
import { ItemService } from "../item.service";

@Component({
  selector: "app-search-page-item",
  templateUrl: "./search-page-item.component.html",
  styleUrls: ["./search-page-item.component.css"]
})
export class SearchPageItemComponent implements OnInit {
  @Input() item: Item;
  constructor(private itemService: ItemService) {}

  ngOnInit() {}

  onSelected() {
    this.itemService.itemSelected.emit(this.item);
  }
}
