import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { buttonComponent } from "./components/button/button.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, buttonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'meu-primeiro-projeto';
}
