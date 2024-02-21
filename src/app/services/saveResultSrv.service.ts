import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class SaveResultService {

  public result = new BehaviorSubject<number>(0);

  public setResult(result: number) {
    this.result.next(result);
  }

  public getResult(): Observable<number> {
    return this.result.asObservable();
  }
}
