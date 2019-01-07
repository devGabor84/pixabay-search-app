import { Component, OnInit, Input } from "@angular/core";
import { Item } from "../item.model";
import { ItemService } from "../item.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-search-page-item",
  templateUrl: "./search-page-item.component.html",
  styleUrls: ["./search-page-item.component.css"]
})
export class SearchPageItemComponent implements OnInit {
  @Input() item: Item;
  @Input() id: number;

  constructor(private itemService: ItemService, private router: Router) {}

  ngOnInit() {}

  onSelected() {
   this.router.navigate(['/details', this.id])
  }
}
