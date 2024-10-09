import { Component,OnInit} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //template: `<h1>welcom to {{pokemonList[0].name}}!</h1>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title='Liste de Pokemons!';
}
