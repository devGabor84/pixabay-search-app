import { Component, OnInit } from "@angular/core";
import { Item } from "./item.model";

@Component({
  selector: "app-search-page",
  templateUrl: "./search-page.component.html",
  styleUrls: ["./search-page.component.css"]
})
export class SearchPageComponent implements OnInit {
  items: Item[] = [
    new Item(
      "http://www.imgworlds.com/wp-content/uploads/2015/12/18-CONTACTUS-HEADER.jpg",
      "New title",
      "Im a new description, hello bello, how are you"
    ),
    new Item(
      "http://www.imgworlds.com/wp-content/uploads/2015/12/18-CONTACTUS-HEADER.jpg",
      "New title",
      "Im a new description, hello bello, how are you"
    )
  ];
  constructor() {}

  ngOnInit() {}
}
