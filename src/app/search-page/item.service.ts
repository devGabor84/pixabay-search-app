import { Injectable, EventEmitter } from "@angular/core";
import { Item } from "./item.model";

@Injectable({
  providedIn: "root"
})
export class ItemService {
  itemSelected = new EventEmitter<Item>();
  private items: Item[] = [
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

  getItems() {
    return this.items;
  }

  constructor() {}
}
