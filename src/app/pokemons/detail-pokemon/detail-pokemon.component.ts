import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Pokemon } from '../model/pokemon';
// import { POKEMONS } from '../data/mock-pokemons';
import {PokemonsService} from '../pokemons.service';

@Component({
	selector: 'detail-pokemon',
	templateUrl: './detail-pokemon.component.html',
	providers: [PokemonsService],

})
export class DetailPokemonComponent implements OnInit {

	pokemon: Pokemon = null;

	constructor(private route: ActivatedRoute, 
				private router: Router , 
				private pokemonsService: PokemonsService) {}

	ngOnInit(): void {
		
		let id = +this.route.snapshot.paramMap.get('id');
		this.pokemonsService.getPokemon(id)
		.subscribe(pokemon => {this.pokemon = pokemon});

	}
	delete(pokemon: Pokemon){
		this.pokemonsService.deletePokemon(pokemon)
		.subscribe(_ => this.goBack());
	}
	goBack(): void {
		this.router.navigate(['/pokemon']);
	}
	goEdit(pokemon:Pokemon): void {
		let link = [ 'pokemon/edit' , pokemon.id];
		this.router.navigate(link);
	}
}