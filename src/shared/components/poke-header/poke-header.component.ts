import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/shared/notification/notification.service';
import { PokeMainService } from 'src/shared/services/poke-main.service';

@Component({
  selector: 'app-poke-header',
  templateUrl: './poke-header.component.html',
  styleUrls: ['./poke-header.component.scss'],
  providers: [PokeMainService]
})
export class PokeHeaderComponent implements OnInit {
  public search: string;
  constructor(
    private $notification: NotificationService
  ) {}

  ngOnInit(): void {
  }

  public searchInsert(search): void {
    if (search === '') {
      this.search = search;
    }
    this.$notification.setSearch(search);
  }

}
