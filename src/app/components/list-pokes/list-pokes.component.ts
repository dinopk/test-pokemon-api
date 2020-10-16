import { Component, OnInit } from '@angular/core';
import { PokeMainService } from 'src/shared/services/poke-main.service';
import { NotificationService } from 'src/shared/notification/notification.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-list-pokes',
  templateUrl: './list-pokes.component.html',
  styleUrls: ['./list-pokes.component.scss']
})
export class ListPokesComponent implements OnInit {
  public pokemonsLoading: boolean;
  public pokemons: any;
  public query: any;

  constructor(
    private pokemonService: PokeMainService,
    private $notification: NotificationService,
    private router: Router,
    private _snackBar: MatSnackBar
    ) {
    }

  ngOnInit(): void {
    this.getPokemons();
    this.getSearchText();
    this.pokemonsLoading = false;
  }

  public getPokemons(): void {
    this.pokemonService.getPokemon().subscribe((data) => {
      this.pokemons = data.cards.sort((a,b) => a.name.localeCompare(b.name));
      this.pokemonsLoading = true;
    }, error => {
      this._snackBar.open('Error, try again later', 'close', {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        panelClass: 'warn-panel'
      })
    });
  }

  public getSearchText(): void {
    this.$notification.search.subscribe((data) => {
      this.query = data;
    })
  }

  public goToDetails(pokemonId): void {
    this.router.navigate([`/details/${pokemonId}`]);
  }

}
