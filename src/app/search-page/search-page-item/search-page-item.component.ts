import { Component, OnInit, Input } from "@angular/core";
import { Item } from "../item.model";

@Component({
  selector: "app-search-page-item",
  templateUrl: "./search-page-item.component.html",
  styleUrls: ["./search-page-item.component.css"]
})
export class SearchPageItemComponent implements OnInit {
  @Input() item: Item;
  constructor() {}

  ngOnInit() {}
}
