import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { ItemService } from "../item.service";

@Component({
  selector: "app-search-page-item-detailes",
  templateUrl: "./search-page-item-detailes.component.html",
  styleUrls: ["./search-page-item-detailes.component.css"]
})
export class SearchPageItemDetailesComponent implements OnInit {
  selectedItem: any;
  id: number;

  constructor(
    private itemService: ItemService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"];
      if (this.itemService.items) {
        this.selectedItem = this.itemService.getItem(this.id);
      }
    });
  }
}
