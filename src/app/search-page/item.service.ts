import { Injectable, EventEmitter } from "@angular/core";
import { Item } from "./item.model";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { environment } from "../../environments/environment";
import "rxjs/add/operator/map";
import "rxjs/Rx";

@Injectable({
  providedIn: "root"
})
export class ItemService {
  itemsChanged = new EventEmitter<any>();
  private apiKey: string = environment.apiKey;

  public items: any;

  getResults(query: string) {
    return this.httpClient
      .get("https://pixabay.com/api/?key=" + this.apiKey + "&q=" + query)
      .subscribe((res: any) => {
        this.items = res.hits;

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
