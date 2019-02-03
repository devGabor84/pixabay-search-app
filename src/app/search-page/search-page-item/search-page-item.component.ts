import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-search-page-item",
  templateUrl: "./search-page-item.component.html",
  styleUrls: ["./search-page-item.component.css"]
})
export class SearchPageItemComponent implements OnInit {
  @Input() item: any;
  @Input() id: number;

  constructor(private router: Router) {}

  ngOnInit() {}

  onSelected() {
    this.router.navigate(["/details", this.id]);
  }
}
