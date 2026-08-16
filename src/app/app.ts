import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Toursim } from "./toursim/toursim";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Toursim],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-practice');
}
