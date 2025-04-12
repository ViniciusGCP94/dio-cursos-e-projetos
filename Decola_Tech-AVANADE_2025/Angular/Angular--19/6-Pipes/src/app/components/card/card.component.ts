import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../service/pokemon.service';
import { PokemonData } from '../../models/pokemonData';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {
  pokemon:PokemonData = {
    id : 0,
    name : '',
    sprites : {
      front_default:''
    },
    types : []
  }

  constructor(
    private service: PokemonService
  ){

  }

  ngOnInit(): void {
    this.getPokemon("Pikachu")
  }

  getPokemon(searchName:string){
    this.service.getPokemon(searchName).subscribe(
      {
        next: (res) => {

          this.pokemon = {
            id: res.id,
            name: res.name,
            sprites: res.sprites,
            types: res.types
          }

        },
        error: (err) => console.log('not found')
      }
    )
  }
}
