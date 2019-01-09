import { Injectable, EventEmitter } from "@angular/core";
import { Item } from "./item.model";
import { HttpClient, HttpResponse } from "@angular/common/http";
import "rxjs/add/operator/map";
import "rxjs/Rx";

@Injectable({
  providedIn: "root"
})
export class ItemService {
  itemsChanged = new EventEmitter<any>();

  public items: any;
  /* Item[] = [
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
  ];*/

  getResults(query: string) {
    return this.httpClient
      .get(
        "https://pixabay.com/api/?key=11209835-e6f4ab72f0b89a2e1cc57eefd&q=" +
          query
      )
      .subscribe((res: any) => {
        this.items = res.hits;
        console.log(this.items[1]);
        this.itemsChanged.emit(this.items);
      });
  }

  getItems() {
    return this.items;
  }

  getItem(id: number) {
    return this.items[id];
  }

  constructor(private httpClient: HttpClient) {}
}
