import { Component } from "@angular/core";
import { FirstService } from "./first.service";

@Component({
  selector: "app-root",
  templateUrl:"./app.component.html",
             // providers: ["FirstService"]

})
export class AppComponent {
  title = "blueprint";
  public date = new Date();
  constructor(private FirstService: FirstService) {}
  onclick(value: string) {
    this.FirstService.writeInfirst(value);
  }
}
