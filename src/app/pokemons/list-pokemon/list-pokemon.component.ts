import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../model/pokemon';
// import { POKEMONS } from '../data/mock-pokemons';
import { Router } from '@angular/router';
import {PokemonsService} from '../pokemons.service';

@Component({
	selector: 'list-pokemon',
	templateUrl: './list-pokemon.component.html',
})
export class ListPokemonComponent implements OnInit {

	pokemons: Pokemon[] = [];

	constructor(private router: Router, private pokemonsService: PokemonsService) { }

	ngOnInit(): void {
		this.getPokemons();
	}

	getPokemons(): void {
		this.pokemonsService.getPokemons()
		.subscribe(pokemons => this.pokemons = pokemons);
	}
	selectPokemon(pokemon: Pokemon): void {
		console.log('Vous avez selectionné ' + pokemon.name);
		let link = ['/pokemon', pokemon.id];
		this.router.navigate(link);
	}

}