import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class FirstService {
  writeInfirst(message: string) {
    console.log(message);
  }
}
