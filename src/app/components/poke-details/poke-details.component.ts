import { Component, OnInit } from '@angular/core';
import { PokeMainService } from 'src/shared/services/poke-main.service';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-poke-details',
  templateUrl: './poke-details.component.html',
  styleUrls: ['./poke-details.component.scss']
})
export class PokeDetailsComponent implements OnInit {
  public pokemonsLoading: boolean;
  public pokemons: any;
  public route: any;

  constructor(
    private $pokemon: PokeMainService,
    private activeRoute: ActivatedRoute,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.getPokemonId();
    this.pokemonsLoading = false;
  }

  public getRoute(): string {
    this.activeRoute.params.subscribe((data) => {
       this.route = data['id'];
    })
    return this.route;
  }

  public getPokemonId(): void {
    this.$pokemon.getPokemonDetails(this.getRoute()).subscribe((data) => {
      this.pokemons = data.card;
      this.pokemonsLoading = true;
    }, error => {
      this._snackBar.open('Error, try again later', 'close', {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        panelClass: 'warn-panel'
      })
    })
  }

}
