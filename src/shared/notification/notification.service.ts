import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class NotificationService {
  public searchChange = new BehaviorSubject<string>(null);
  public search = this.searchChange.asObservable();

  constructor() {}

  public setSearch(searchText: string): void {
    this.searchChange.next(searchText);
  }
}
