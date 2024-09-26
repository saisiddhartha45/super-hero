import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { SuperheroDataService } from '../services/superhero-data.service';
import { CommonModule } from '@angular/common';
import { Root } from '../interfaces/hero.model';
import { RouterOutlet, RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [HeroComponent, CommonModule, RouterOutlet, RouterLink],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css',
})
export class HeroesComponent implements OnInit {
  allHeroes!: Root[];


  constructor(private superHeroData: SuperheroDataService) {}
  ngOnInit(): void {
    this.getAllHerores();
  }

  getAllHerores() {
    this.superHeroData.getAllHeroes().subscribe((data) => {
      if (data) {
        this.allHeroes = data;
        console.log(this.allHeroes);
      }
    });
  }
}
