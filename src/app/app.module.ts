import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { MenuComponent } from "./menu/menu.component";
import { SearchPageComponent } from "./search-page/search-page.component";
import { SavedPageComponent } from "./saved-page/saved-page.component";
import { SearchPageItemComponent } from "./search-page/search-page-item/search-page-item.component";
import { SearchPageItemDetailesComponent } from "./search-page/search-page-item-detailes/search-page-item-detailes.component";
import { SavedPageItemComponent } from "./saved-page/saved-page-item/saved-page-item.component";
import { SavedPageItemDetailsComponent } from "./saved-page/saved-page-item-details/saved-page-item-details.component";

const appRoutes: Routes = [
  {
    path: "",
    component: SearchPageComponent
  },
  { path: "saved", component: SavedPageComponent },
  { path: "details/:id", component: SearchPageItemDetailesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SearchPageComponent,
    SavedPageComponent,
    SearchPageItemComponent,
    SearchPageItemDetailesComponent,
    SavedPageItemComponent,
    SavedPageItemDetailsComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
