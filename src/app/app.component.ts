import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SuperheroDataService } from './services/superhero-data.service';
import { Root } from './interfaces/hero.model';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from "./heroes/heroes.component";
import { HeaderComponent } from "./header/header.component";
import { LoaderComponent } from "./shared/loader/loader.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HeroesComponent, HeaderComponent, LoaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  allHeroes!: Root[]; // Array of Root objects

  constructor(private heroService: SuperheroDataService) {}

  ngOnInit(): void {
    this.heroService.getAllHeroes().subscribe((res: Root[]) => {
      this.allHeroes = res; // Assign the array directly
    });
  }

  onclickId(id: number) {
    console.log('Got Id', id);
  }
}
